import { FileText, Calculator, ShoppingCart, Send, BarChart3, Repeat, Landmark, FileCheck, Download, ShieldCheck, Users, Building2, Monitor, Video, Truck, Handshake, Boxes, Factory, type LucideIcon } from 'lucide-react';
import { PRODUCTS, type Product, type ProductFeature } from '@/data/products';
import { fetchWordPress, isWordPressEnabled } from '@/services/wordpress';

type WordPressProduct = {
  slug: string;
  title: { rendered: string };
  acf?: {
    category?: string;
    summary?: string;
    description?: string[];
    price?: number;
    original_price?: number;
    image_url?: string;
    image_alt?: string;
    features?: { icon: string; title: string; description: string }[];
  };
};

type WordPressPost = {
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
};

const FEATURE_ICONS: Record<string, LucideIcon> = {
  'file-text': FileText,
  calculator: Calculator,
  'shopping-cart': ShoppingCart,
  send: Send,
  'bar-chart': BarChart3,
  repeat: Repeat,
  landmark: Landmark,
  'file-check': FileCheck,
  download: Download,
  'shield-check': ShieldCheck,
  users: Users,
  building: Building2,
  monitor: Monitor,
  video: Video,
  truck: Truck,
  handshake: Handshake,
  boxes: Boxes,
  factory: Factory,
};

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();

/**
 * Le catalogue local fixe les six fiches demandées et leurs visuels.
 * WordPress peut enrichir une fiche uniquement lorsqu'un slug correspond
 * exactement : les anciennes publications ne remplacent donc plus le catalogue.
 */
function mergeWordPressProduct(item: WordPressProduct, local: Product): Product {
  const acf = item.acf || {};
  const remoteFeatures: ProductFeature[] = (acf.features || []).map((feature) => ({
    icon: FEATURE_ICONS[feature.icon] ?? FileText,
    title: feature.title,
    description: feature.description,
  }));

  return {
    ...local,
    name: stripTags(item.title?.rendered || local.name),
    category: acf.category || local.category,
    summary: acf.summary || local.summary,
    description: Array.isArray(acf.description) && acf.description.length
      ? acf.description
      : local.description,
    price: typeof acf.price === 'number' ? acf.price : local.price,
    originalPrice: typeof acf.original_price === 'number' ? acf.original_price : local.originalPrice,
    image: acf.image_url || local.image,
    imageAlt: acf.image_alt || local.imageAlt,
    features: remoteFeatures.length ? remoteFeatures : local.features,
  };
}

function mergeWordPressPostIntoLocal(post: WordPressPost, local: Product): Product {
  return {
    ...local,
    name: stripTags(post.title?.rendered || local.name),
    summary: post.excerpt
      ? stripTags(post.excerpt.rendered) || local.summary
      : local.summary,
    description: post.content?.rendered
      ? post.content.rendered
          .split('</p>')
          .map(stripTags)
          .filter((paragraph) => paragraph.length > 0)
      : local.description,
  };
}

let _cachedProducts: Product[] | null = null;
let _cacheTimestamp = 0;
const CACHE_TTL_MS = 30_000;

async function fetchProductsOnce(): Promise<Product[]> {
  const now = Date.now();
  if (_cachedProducts && now - _cacheTimestamp < CACHE_TTL_MS) {
    return _cachedProducts;
  }

  const result = await fetchProductsFromWordPress();
  _cachedProducts = result;
  _cacheTimestamp = now;
  return result;
}

async function fetchProductsFromWordPress(): Promise<Product[]> {
  if (!isWordPressEnabled()) return PRODUCTS;

  try {
    const items = await fetchWordPress<WordPressProduct[]>(
      '/wp-json/wp/v2/produit?per_page=100&_fields=slug,title,acf'
    );
    if (Array.isArray(items) && items.length > 0) {
      return PRODUCTS.map((local) => {
        const matched = items.find((item) => item.slug === local.slug);
        return matched ? mergeWordPressProduct(matched, local) : local;
      });
    }
  } catch {
    // Le CPT n'est pas configuré : essayer les articles WordPress classiques.
  }

  try {
    const categories = await fetchWordPress<{ id: number; slug: string }[]>(
      '/wp-json/wp/v2/categories?slug=produits&_fields=id,slug'
    );
    if (Array.isArray(categories) && categories.length > 0) {
      const posts = await fetchWordPress<WordPressPost[]>(
        \`/wp-json/wp/v2/posts?categories=\${categories[0].id}&per_page=50&_fields=slug,title,excerpt,content\`
      );
      if (Array.isArray(posts) && posts.length > 0) {
        return PRODUCTS.map((local) => {
          const matched = posts.find((post) => post.slug === local.slug);
          return matched ? mergeWordPressPostIntoLocal(matched, local) : local;
        });
      }
    }
  } catch {
    // Si WordPress est indisponible, utiliser le catalogue local.
  }

  return PRODUCTS;
}

export async function getProducts(): Promise<Product[]> {
  return fetchProductsOnce();
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

export async function getSimilarProducts(slug: string, limit = 3): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((product) => product.slug !== slug).slice(0, limit);
}
