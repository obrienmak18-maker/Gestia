import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { formatPrice, getDiscountPercent } from '@/lib/utils';
import { buildProductOrderUrl } from '@/lib/whatsapp';
import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  const hasPrice = typeof product.price === 'number';
  const hasDiscount =
    hasPrice && typeof product.originalPrice === 'number' && product.originalPrice > product.price!;
  const discount = hasDiscount
    ? getDiscountPercent(product.price!, product.originalPrice!)
    : 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand/10">
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-white p-4 sm:p-5">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 border-t border-slate-100 p-6">
        <div>
          <h3 className="text-xl font-bold leading-tight text-slate-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.summary}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1">
          {hasPrice ? (
            <>
              <span className="text-2xl font-bold tracking-tight text-brand">{formatPrice(product.price!)}</span>
              {hasDiscount && (
                <>
                  <span className="text-sm text-slate-400 line-through">{formatPrice(product.originalPrice!)}</span>
                  <span className="rounded-md bg-cta-50 px-2 py-0.5 text-xs font-bold text-cta-text">-{discount}%</span>
                </>
              )}
            </>
          ) : (
            <span className="text-base font-semibold text-slate-700">Prix sur demande</span>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href={`/produits/${product.slug}`}
            className="group/link inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Voir les détails
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
          </Link>
          <WhatsAppButton
            href={buildProductOrderUrl(product.name, hasPrice ? 'order' : 'quote')}
            label={hasPrice ? 'Commander sur WhatsApp' : 'Demander un devis'}
            className="w-full px-4"
          />
        </div>
      </div>
    </article>
  );
}
