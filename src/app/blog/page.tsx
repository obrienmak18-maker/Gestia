import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/services/productsService";
import BlogFilterList from "@/components/blog/BlogFilterList";

export const metadata: Metadata = {
  title: "Blog & Veille Fiscale Maroc | Conseils Comptabilité & ERP",
  description:
    "Guides pratiques, actualités fiscales DGI, comparatifs logiciels et bonnes pratiques pour les comptables et dirigeants au Maroc.",
};

export const revalidate = 300;

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-copo-800 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-slate-900">Blog</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/60 px-3 py-1 rounded-full border border-copo-200">
            Veille Fiscale & Gestion d&apos;Entreprise
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Conseils d&apos;Experts pour les Professionnels au Maroc
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Retrouvez nos analyses détaillées sur la liasse fiscale XML, les
            télédéclarations SIMPL et le choix des progiciels Sage et JBS.
          </p>
        </div>

        {/* Blog Posts Filterable Grid */}
        <BlogFilterList initialPosts={posts} />
      </div>
    </div>
  );
}
