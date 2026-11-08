import { Product, BlogPost, WPPost } from "@/types";
import { PRODUCTS_DATA } from "@/data/products";
import { BLOG_POSTS } from "@/data/blogPosts";
import { getWhatsAppOrderUrl } from "@/data/siteConfig";

/**
 * Configuration de l'API REST WordPress.
 * Pour basculer vers votre WordPress distant :
 * Définissez la variable d'environnement NEXT_PUBLIC_WORDPRESS_API_URL
 * Exemple : NEXT_PUBLIC_WORDPRESS_API_URL="https://admin.coposolutions.ma"
 */
const WP_API_BASE = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "";
const WP_PRODUCTS_ENDPOINT = `${WP_API_BASE}/wp-json/wp/v2/products`; // Custom Post Type 'products' ou '/wp-json/wp/v2/posts'
const WP_BLOG_ENDPOINT = `${WP_API_BASE}/wp-json/wp/v2/posts`;

/**
 * Mappeur WordPress Post / ACF -> Schéma Produit Copo Solutions
 * Supporte à la fois les champs ACF (Advanced Custom Fields) et les méta-champs natifs WordPress.
 */
function mapWPPostToProduct(wpPost: WPPost): Product {
  const acf = wpPost.acf || {};
  const meta = wpPost.meta || {};

  const name = wpPost.title?.rendered || "Logiciel";
  const slug = wpPost.slug;
  const amount = Number(acf.price || meta.price || 4900);
  const heroImage =
    wpPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    acf.hero_image ||
    "/images/products/default.png";

  return {
    id: String(wpPost.id),
    slug: slug,
    name: name,
    tagline: acf.tagline || meta.tagline || `Logiciel de gestion et comptabilité certifié Maroc`,
    category: acf.category || "Comptabilité & Fiscalité",
    badge: acf.badge || meta.badge || "100% Conforme DGI Maroc",
    price: {
      amount: amount,
      currency: "MAD",
      period: acf.price_period || "paiement unique",
      note: acf.price_note || "Licence permanente",
    },
    shortDescription:
      acf.short_description ||
      wpPost.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").trim() ||
      "",
    fullDescription:
      wpPost.content?.rendered?.replace(/<[^>]*>?/gm, "").trim() ||
      acf.full_description ||
      "",
    moroccanCompliance: {
      dgiCompliant: acf.dgi_compliant !== false,
      simplCompatible: acf.simpl_compatible !== false,
      xmlExport: acf.xml_export !== false,
      details: acf.compliance_details || [
        "Plan comptable général marocain normalisé",
        "Conforme aux schémas XML officiels SIMPL-IS de la DGI",
      ],
    },
    keyBenefits: acf.key_benefits || [
      "Licence multiposte sans redevance mensuelle",
      "Installation accompagnée par nos ingénieurs",
    ],
    features: acf.features || [
      {
        title: "Gestion Complète",
        description: "Solution logicielle complète pour entreprises au Maroc.",
        iconName: "CheckCircle",
        isHighlight: true,
      },
    ],
    specifications: acf.specifications || [
      { label: "Système requis", value: "Windows 11 / 10 / Server" },
      { label: "Type de licence", value: "Permanente" },
    ],
    includedBonuses: acf.included_bonuses || [
      "Assistance à distance pour l'installation",
      "Tutoriel vidéo inclus",
    ],
    faq: acf.faq || [],
    heroImage: heroImage,
    whatsappMessage: getWhatsAppOrderUrl(name),
    isPopular: Boolean(acf.is_popular),
    targetAudience: acf.target_audience || "Entreprises et cabinets comptables au Maroc",
  };
}

/**
 * Mappeur WordPress Post -> Article de Blog Copo Solutions
 */
function mapWPPostToBlogPost(wpPost: WPPost): BlogPost {
  const acf = wpPost.acf || {};
  const coverImage =
    wpPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    acf.cover_image ||
    "/images/blog/default.jpg";
  const authorName = wpPost._embedded?.author?.[0]?.name || "Équipe Copo Solutions";

  return {
    id: String(wpPost.id),
    slug: wpPost.slug,
    title: wpPost.title?.rendered || "Article",
    excerpt: wpPost.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").trim() || "",
    content: wpPost.content?.rendered || "",
    category: acf.category || "Fiscalité & Gestion",
    author: {
      name: authorName,
      role: acf.author_role || "Consultant Fiscalité & Logiciels",
    },
    publishedAt: wpPost.date ? wpPost.date.split("T")[0] : new Date().toISOString().split("T")[0],
    readTime: acf.read_time || "5 min de lecture",
    tags: acf.tags || ["Maroc", "Fiscalité", "Logiciels"],
    coverImage: coverImage,
    seoDescription:
      acf.seo_description ||
      wpPost.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").slice(0, 160) ||
      "",
  };
}

// =========================================================================
// SERVICES EXPORTÉS : UTILISÉS DANS L'APPLICATION (ASYNC AVEC FALLBACK LOCAL)
// =========================================================================

/**
 * Récupère tous les produits.
 * Tente d'appeler l'API WordPress si NEXT_PUBLIC_WORDPRESS_API_URL est renseigné,
 * sinon utilise instantanément les données locales de PRODUCTS_DATA.
 */
export async function getProducts(): Promise<Product[]> {
  if (!WP_API_BASE) {
    // Mode local par défaut (ultra-rapide, sans latence)
    return PRODUCTS_DATA;
  }

  try {
    const res = await fetch(`${WP_PRODUCTS_ENDPOINT}?_embed&per_page=100`, {
      next: { revalidate: 300 }, // Revalidation ISR Next.js toutes les 5 minutes
    });

    if (!res.ok) {
      console.warn(`[WordPress Service] HTTP error ${res.status}. Fallback sur les données locales.`);
      return PRODUCTS_DATA;
    }

    const data: WPPost[] = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map(mapWPPostToProduct);
    }

    return PRODUCTS_DATA;
  } catch (error) {
    console.warn("[WordPress Service] Échec de la connexion à WordPress. Fallback local.", error);
    return PRODUCTS_DATA;
  }
}

/**
 * Récupère un produit par son slug.
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!WP_API_BASE) {
    const localProduct = PRODUCTS_DATA.find((p) => p.slug === slug);
    return localProduct || null;
  }

  try {
    const res = await fetch(`${WP_PRODUCTS_ENDPOINT}?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      const localProduct = PRODUCTS_DATA.find((p) => p.slug === slug);
      return localProduct || null;
    }

    const data: WPPost[] = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return mapWPPostToProduct(data[0]);
    }

    const localProduct = PRODUCTS_DATA.find((p) => p.slug === slug);
    return localProduct || null;
  } catch (error) {
    console.warn(`[WordPress Service] Échec getProductBySlug(${slug}). Fallback local.`, error);
    const localProduct = PRODUCTS_DATA.find((p) => p.slug === slug);
    return localProduct || null;
  }
}

/**
 * Récupère tous les articles de blog.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!WP_API_BASE) {
    return BLOG_POSTS;
  }

  try {
    const res = await fetch(`${WP_BLOG_ENDPOINT}?_embed&per_page=20`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return BLOG_POSTS;
    }

    const data: WPPost[] = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map(mapWPPostToBlogPost);
    }

    return BLOG_POSTS;
  } catch (error) {
    console.warn("[WordPress Service] Échec getBlogPosts. Fallback local.", error);
    return BLOG_POSTS;
  }
}

/**
 * Récupère un article de blog par son slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!WP_API_BASE) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return post || null;
  }

  try {
    const res = await fetch(`${WP_BLOG_ENDPOINT}?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      return post || null;
    }

    const data: WPPost[] = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return mapWPPostToBlogPost(data[0]);
    }

    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return post || null;
  } catch (error) {
    console.warn(`[WordPress Service] Échec getBlogPostBySlug(${slug}). Fallback local.`, error);
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return post || null;
  }
}
