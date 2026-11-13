import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CheckCircle2, ChevronRight, Shield, Wallet, Download } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { getProductBySlug, getSimilarProducts, getProducts } from '@/services/products';
import { buildProductOrderUrl } from '@/lib/whatsapp';
import { formatPrice, getDiscountPercent } from '@/lib/utils';

type ProductPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Produit introuvable' };

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/produits/${product.slug}` },
  };
}

const PURCHASE_POINTS = [
  { icon: Wallet, text: 'Paiement par virement ou transfert' },
  { icon: Download, text: 'Livraison par e-mail ou Google Drive' },
  { icon: Shield, text: 'Installation accompagnée et formation' },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const hasPrice = typeof product.price === 'number';
  const hasDiscount =
    hasPrice && typeof product.originalPrice === 'number' && product.originalPrice > product.price!;
  const discount = hasDiscount
    ? getDiscountPercent(product.price!, product.originalPrice!)
    : 0;
  const similar = await getSimilarProducts(product.slug);

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/80 to-white">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14">
          <nav aria-label="Fil d'Ariane" className="animate-fade-up">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">Accueil</Link>
              </li>
              <li aria-hidden><ChevronRight className="h-4 w-4" /></li>
              <li>
                <Link href="/produits" className="transition-colors hover:text-brand">Produits</Link>
              </li>
              <li aria-hidden><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="font-medium text-slate-800">{product.name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="animate-fade-up [animation-delay:100ms]">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">{product.category}</p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.summary}</p>

              <div className="mt-8 flex min-h-[260px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-brand/5 sm:min-h-[360px] sm:p-8">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="eager"
                  className="max-h-[480px] w-full object-contain"
                />
              </div>

              <div className="mt-10 space-y-4 text-base leading-relaxed text-slate-600">
                {product.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="animate-fade-up [animation-delay:200ms] lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/10">
                <p className="text-sm font-medium text-slate-500">Prix de la licence</p>
                {hasPrice ? (
                  <>
                    <div className="mt-2 flex flex-wrap items-baseline gap-3">
                      <span className="text-4xl font-bold tracking-tight text-brand">{formatPrice(product.price!)}</span>
                      {hasDiscount && (
                        <span className="text-base text-slate-400 line-through">{formatPrice(product.originalPrice!)}</span>
                      )}
                    </div>
                    {hasDiscount && (
                      <span className="mt-3 inline-flex rounded-md bg-cta-50 px-2.5 py-1 text-xs font-bold text-cta-text">
                        Économisez {discount}%
                      </span>
                    )}
                  </>
                ) : (
                  <p className="mt-2 text-2xl font-bold tracking-tight text-brand">Nous consulter</p>
                )}

                <WhatsAppButton
                  href={buildProductOrderUrl(product.name)}
                  className="mt-7 h-14 w-full text-base"
                />

                <ul className="mt-7 space-y-4 border-t border-slate-100 pt-7">
                  {PURCHASE_POINTS.map((point) => (
                    <li key={point.text} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                      <span className="flex items-center gap-2">
                        <point.icon className="h-4 w-4 text-slate-400" aria-hidden />
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Fonctionnalités</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
              Tout ce que le logiciel vous apporte
            </h2>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {product.features.map((feature) => (
              <li
                key={feature.title}
                className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Vous aimerez aussi</p>
              <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
                Produits similaires
              </h2>
            </div>
            <Link href="/produits" className="text-sm font-semibold text-brand transition-colors hover:text-brand-700">
              Voir tout le catalogue
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {similar.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
