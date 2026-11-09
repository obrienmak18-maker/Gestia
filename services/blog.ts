import { BLOG_POSTS, type BlogPost } from '@/data/blog';
import { fetchWordPress, isWordPressEnabled } from '@/services/wordpress';

type WordPressPost = {
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
  date?: string;
  categories?: number[];
  acf?: { category?: string; read_time?: string; image_url?: string; image_alt?: string };
};

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();

function mapWordPressPost(post: WordPressPost, index: number): BlogPost {
  const acf = post.acf || {};
  const defaultImages = [
    '/images/post-images-01-scaled-32.jpg',
    '/images/post-images-02-scaled-30.jpg',
    '/images/post-images-03-scaled-32.jpg',
  ];

  return {
    slug: post.slug,
    title: stripTags(post.title?.rendered || 'Article'),
    excerpt: stripTags(post.excerpt?.rendered || ''),
    category: acf.category || 'Fiscalité & Gestion',
    publishedAt: post.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10),
    readTime: acf.read_time || '5 min de lecture',
    image: acf.image_url || defaultImages[index % defaultImages.length],
    imageAlt: acf.image_alt || stripTags(post.title?.rendered || 'Article'),
    sections: [
      {
        heading: '',
        paragraphs: post.content?.rendered
          ? post.content.rendered.split('</p>').map(stripTags).filter((p) => p.length > 0)
          : [],
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Cache mémoire (évite les appels WP multiples par render)           */
/* ------------------------------------------------------------------ */

let _cachedPosts: BlogPost[] | null = null;
let _cacheTimestamp = 0;
const CACHE_TTL_MS = 30_000; // 30 secondes

/**
 * Récupère les articles du blog depuis WordPress.
 * Exclut automatiquement les articles de catégorie "produits"
 * (ceux-ci sont gérés par le service products.ts).
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isWordPressEnabled()) return BLOG_POSTS;

  // Retourner le cache s'il est frais
  const now = Date.now();
  if (_cachedPosts && now - _cacheTimestamp < CACHE_TTL_MS) {
    return _cachedPosts;
  }

  try {
    // Vérifier si la catégorie "produits" existe pour l'exclure du blog
    let excludeCat = '';
    try {
      const cats = await fetchWordPress<{ id: number; slug: string }[]>(
        '/wp-json/wp/v2/categories?slug=produits&_fields=id,slug'
      );
      if (Array.isArray(cats) && cats.length > 0) {
        excludeCat = `&categories_exclude=${cats[0].id}`;
      }
    } catch {
      // Pas de catégorie "produits", on continue sans filtre
    }

    const posts = await fetchWordPress<WordPressPost[]>(
      `/wp-json/wp/v2/posts?per_page=20&_fields=slug,title,excerpt,content,date,categories,acf${excludeCat}`
    );
    if (!posts || posts.length === 0) {
      return BLOG_POSTS;
    }
    const mapped = posts.map(mapWordPressPost);
    _cachedPosts = mapped;
    _cacheTimestamp = Date.now();
    return mapped;
  } catch (error) {
    console.error('Erreur de connexion à WordPress (blog), repli sur les données locales :', error);
    return BLOG_POSTS;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
