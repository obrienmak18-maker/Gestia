import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  FileCode2,
  Sparkles,
} from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import ProductOrderButton from "@/components/common/ProductOrderButton";
import ProductVisualBadge from "@/components/products/ProductVisualBadge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-card border border-slate-200/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated hover:border-copo-300"
    >
      {/* Decorative gradient corner on hover */}
      <div className="absolute top-0 right-0 -mr-px -mt-px h-28 w-28 rounded-tr-3xl bg-gradient-to-bl from-copo-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Top Meta & Badges */}
      <div>
        {/* Modern Visual Software Box Banner */}
        <ProductVisualBadge slug={product.slug} className="mb-5" />

        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold text-copo-700 bg-copo-50 px-3 py-1 rounded-full border border-copo-200">
            {product.category}
          </span>
          {product.badge && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
              <Sparkles className="h-3 w-3 text-orange-500" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-copo-800 transition-colors">
          <Link href={`/produits/${product.slug}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium line-clamp-2">
          {product.tagline}
        </p>

        {/* Short description */}
        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Key Compliance & Features Bullets */}
        <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-copo-900">
            <FileCode2 className="h-4 w-4 text-copo-700 shrink-0" />
            <span>Conformité Fiscale Marocaine :</span>
          </div>

          <ul className="space-y-1.5 text-xs text-slate-600">
            {product.moroccanCompliance.details.slice(0, 3).map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Pricing & Dual Actions */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <span className="text-xs text-slate-400 font-medium block">
              Tarif officiel
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {formatPrice(product.price.amount, product.price.currency)}
              </span>
              <span className="text-xs font-medium text-slate-500">
                / {product.price.period || "unique"}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Multiposte
          </span>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <Link
            href={`/produits/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-150 active:scale-[0.98] text-center"
          >
            <span>Voir les détails</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <ProductOrderButton
            productName={product.name}
            variant="primary"
            label="Commander sur WhatsApp"
            className="flex-1 py-2.5 text-xs sm:text-sm"
          />
        </div>
      </div>
    </article>
  );
}
