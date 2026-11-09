import {
  BarChart3,
  Boxes,
  Building2,
  Calculator,
  Download,
  Factory,
  FileCheck,
  FileText,
  Handshake,
  Landmark,
  Monitor,
  Repeat,
  Send,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';
import { PRODUCTS, type Product, type ProductFeature } from '@/data/products';
import { fetchWordPress, isWordPressEnabled } from '@/services/wordpress';

/* ------------------------------------------------------------------ */
/*  Types WordPress                                                    */
/* ------------------------------------------------------------------ */

/** Custom Post Type "produit" exposé via ACF */
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

/** Article WordPress standard avec catégorie "produits" (fallback simple) */
type WordPressPost = {
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
  acf?: Record<string, unknown>;
};

/* ------------------------------------------------------------------ */
/*  Icônes de fonctionnalités                                          */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Mappers : WordPress → Product local                                */
/* ------------------------------------------------------------------ */

/** Mapper pour un Custom Post Type "produit" avec ACF complet */
function mapWordPressProduct(item: WordPressProduct): Product {
  const acf = item.acf || {};
  return {
    slug: item.slug,
    name: item.title?.rendered?.replace(/<[^>]+>/g, '') || item.slug,
    category: acf.category || 'Comptabilité & gestion',
    summary: acf.summary || '',
    description: acf.description || [],
    price: acf.price || 1500,
    originalPrice: acf.original_price || 2000,
    image: acf.image_url || '/images/two-women-working-with-accounting-data-on-table-6779567.jpeg',
    imageAlt: acf.image_alt || item.slug,
    features: (acf.features || []).map(
      (feature): ProductFeature => ({
        icon: FEATURE_ICONS[feature.icon] ?? FileText,
        title: feature.title,
        description: feature.description,
      })
    ),
  };
}

/**
 * Mapper simple : enrichit les données locales avec les articles WordPress
 * de catégorie "produits". Le client peut modifier le titre, le résumé
 * et la description directement depuis wp-admin sans plugin ACF.
 */
function mergeWordPressPostIntoLocal(post: WordPressPost, localProd: Product): Product {
  return {
    ...localProd,
    name: stripTags(post.title?.rendered || localProd.name),
    summary: post.excerpt ? stripTags(post.excerpt.rendered) || localProd.summary : localProd.summary,
    description: post.content?.rendered
      ? post.content.rendered
          .split('</p>')
          .map(stripTags)
          .filter((p) => p.length > 0)
      : localProd.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Cache mémoire (évite les appels WP multiples par render)           */
/* ------------------------------------------------------------------ */

let _cachedProducts: Product[] | null = null;
let _cacheTimestamp = 0;
const CACHE_TTL_MS = 30_000; // 30 secondes

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

/* ------------------------------------------------------------------ */
/*  Logique de récupération WordPress                                  */
/* ------------------------------------------------------------------ */

async function fetchProductsFromWordPress(): Promise<Product[]> {
  if (!isWordPressEnabled()) return PRODUCTS;

  // ── Stratégie 1 : Custom Post Type "produit" via ACF (si installé) ──
  try {
    const items = await fetchWordPress<WordPressProduct[]>(
      '/wp-json/wp/v2/produit?per_page=100&_fields=slug,title,acf'
    );
    if (Array.isArray(items) && items.length > 0) {
      return items.map(mapWordPressProduct);
    }
  } catch {
    // CPT "produit" non enregistré → on continue
  }

  // ── Stratégie 2 : Articles classiques avec catégorie "produits" ──
  try {
    // D'abord trouver l'ID de la catégorie "produits"
    const categories = await fetchWordPress<{ id: number; slug: string }[]>(
      '/wp-json/wp/v2/categories?slug=produits&_fields=id,slug'
    );
    if (Array.isArray(categories) && categories.length > 0) {
      const catId = categories[0].id;
      const posts = await fetchWordPress<WordPressPost[]>(
        `/wp-json/wp/v2/posts?categories=${catId}&per_page=20&_fields=slug,title,excerpt,content,acf`
      );
      if (Array.isArray(posts) && posts.length > 0) {
        // Fusionner chaque article WordPress avec les fiches locales riches
        const updatedProducts = PRODUCTS.map((localProd) => {
          const matched = posts.find(
            (p) =>
              p.slug === localProd.slug ||
              stripTags(p.title?.rendered || '')
                .toLowerCase()
                .includes(localProd.name.toLowerCase())
          );
          return matched ? mergeWordPressPostIntoLocal(matched, localProd) : localProd;
        });
        return updatedProducts;
      }
    }
  } catch {
    // Pas de catégorie "produits" → données locales
  }

  // ── Fallback : données locales intégrées ──
  return PRODUCTS;
}

/* ------------------------------------------------------------------ */
/*  API publique                                                       */
/* ------------------------------------------------------------------ */

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
