"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import { Search, Filter, Sparkles, X } from "lucide-react";

interface ProductsFilterListProps {
  initialProducts: Product[];
}

export default function ProductsFilterList({
  initialProducts,
}: ProductsFilterListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Tous",
    "Comptabilité & Fiscalité",
    "ERP & Gestion Intégrée",
  ];

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "Tous" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.features.some(
          (f) =>
            f.title.toLowerCase().includes(q) ||
            f.description.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-soft">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                selectedCategory === cat
                  ? "bg-copo-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher (ex: XML, Paie, Sage...)"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-9 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Effacer la recherche"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Affichage de <strong>{filteredProducts.length}</strong> logiciel
          {filteredProducts.length > 1 ? "s" : ""} disponible
          {filteredProducts.length > 1 ? "s" : ""}
        </span>
        {(selectedCategory !== "Tous" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("Tous");
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-orange-600 hover:underline"
          >
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* Grid of Filtered Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-white p-12 text-center border border-slate-200/90 shadow-card space-y-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Aucun logiciel ne correspond à votre recherche
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
            Essayez avec un autre terme ou réinitialisez vos filtres pour voir tous nos logiciels disponibles.
          </p>
          <div>
            <button
              onClick={() => {
                setSelectedCategory("Tous");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-copo-800 text-white px-4 py-2.5 text-xs font-semibold hover:bg-copo-900 transition-colors"
            >
              <span>Voir tout le catalogue</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
