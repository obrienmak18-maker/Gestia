import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/services/products';

export async function ProductCatalog() {
  const products = await getProducts();

  return (
    <section id="catalogue" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Notre catalogue</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
              Nos logiciels phares
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Des solutions éprouvées pour la comptabilité, la paie, la fiscalité et la gestion intégrée.
            </p>
          </div>
          <Link
            href="/produits"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-700"
          >
            Voir tous les produits
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
