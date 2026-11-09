import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/services/blog';
import { getProducts } from '@/services/products';
import { SITE } from '@/data/site';

const STATIC_PATHS = [
  '',
  '/produits',
  '/a-propos',
  '/blog',
  '/contact',
  '/mentions-legales',
  '/conditions-de-vente',
  '/politique-de-confidentialite',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts] = await Promise.all([getProducts(), getBlogPosts()]);

  return [
    ...STATIC_PATHS.map((path) => ({ url: `${SITE.url}${path}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${SITE.url}/produits/${product.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${SITE.url}/blog/${post.slug}`, lastModified: new Date(post.publishedAt) })),
  ];
}
