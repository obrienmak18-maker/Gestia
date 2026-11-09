import https from 'node:https';
import http from 'node:http';

export const WORDPRESS_API_BASE_URL = (
  process.env.NEXT_PUBLIC_WORDPRESS_URL ||
  process.env.WORDPRESS_API_BASE_URL ||
  'https://dev-copo-solutions.pantheonsite.io'
)
  .trim()
  .replace(/\/wp-admin\/?$/, '')
  .replace(/\/+$/, '');

export function isWordPressEnabled() {
  return WORDPRESS_API_BASE_URL.length > 0;
}

export async function fetchWordPress<T>(path: string): Promise<T> {
  const cleanBase = WORDPRESS_API_BASE_URL.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${cleanBase}${cleanPath}`;

  return new Promise<T>((resolve, reject) => {
    try {
      const parsedUrl = new URL(fullUrl);
      const isHttps = parsedUrl.protocol === 'https:';
      const client = isHttps ? https : http;

      const req = client.get(
        parsedUrl,
        {
          family: 4, // Force IPv4 to prevent IPv6 timeout on Windows
          headers: {
            Accept: 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 NextJS/13.5 CopoSolutions',
          },
        },
        (res) => {
          const statusCode = res.statusCode || 0;
          const contentType = res.headers['content-type'] || '';

          if (statusCode >= 300 && statusCode < 400 && res.headers.location) {
            // Suivre les redirections éventuelles
            fetchWordPress<T>(res.headers.location).then(resolve).catch(reject);
            return;
          }

          if (statusCode < 200 || statusCode >= 300) {
            reject(new Error(`WordPress request failed (${statusCode}): ${fullUrl}`));
            return;
          }

          if (!contentType.includes('application/json')) {
            reject(
              new Error(`WordPress did not return JSON (received: ${contentType}): ${fullUrl}`)
            );
            return;
          }

          let rawData = '';
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            rawData += chunk;
          });
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData);
              resolve(parsedData as T);
            } catch (parseErr) {
              reject(new Error(`Failed to parse WordPress JSON response: ${parseErr}`));
            }
          });
        }
      );

      req.on('error', (err) => {
        reject(err);
      });

      req.setTimeout(8000, () => {
        req.destroy();
        reject(new Error(`Timeout (8000ms) fetching WordPress: ${fullUrl}`));
      });
    } catch (err) {
      reject(err);
    }
  });
}
