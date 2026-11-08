"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "@/types";
import { Search, Clock, Calendar, ArrowRight, X } from "lucide-react";

interface BlogFilterListProps {
  initialPosts: BlogPost[];
}

export default function BlogFilterList({ initialPosts }: BlogFilterListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Tous",
    "Fiscalité & DGI",
    "ERP & Technologies",
    "Cabinets & Pratique",
  ];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Tous" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-soft">
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

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un article..."
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

      {/* Grid of Articles */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl bg-white p-7 shadow-card border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:border-copo-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="font-bold text-copo-700 bg-copo-50 px-2.5 py-1 rounded-md border border-copo-200">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-copo-800 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {post.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>{post.publishedAt}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Lire l&apos;article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-white p-12 text-center border border-slate-200/90 shadow-card space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Aucun article trouvé pour cette recherche
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Essayez avec d&apos;autres mots-clés ou consultez tous nos articles.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("Tous");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-copo-800 text-white px-4 py-2 text-xs font-semibold hover:bg-copo-900 transition-colors"
          >
            Réinitialiser
          </button>
        </div>
      )}
    </div>
  );
}
