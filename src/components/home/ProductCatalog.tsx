import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "@/components/products/ProductCard";

interface ProductCatalogProps {
  products: Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  return (
    <section id="catalogue" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <Sparkles className="h-3 w-3" />
              <span>Catalogue Officiel Maroc</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Nos 4 Logiciels Phares de Comptabilité & Gestion
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Sélectionnez la solution adaptée à votre activité. Toutes nos
              licences sont permanentes et livrées avec assistance d&apos;installation
              complète.
            </p>
          </div>

          <Link
            href="/produits"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-copo-800 hover:text-orange-600 transition-colors"
          >
            <span>Voir le comparatif complet</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-copo-50/70 p-6 sm:p-8 border border-copo-200/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Vous avez un doute sur la solution la plus adaptée à votre structure ?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Nos conseillers à Casablanca analysent gratuitement vos besoins comptables et informatiques.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-copo-800 border border-copo-300 shadow-sm hover:bg-copo-50 transition-colors"
          >
            <span>Demander un conseil personnalisé</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
