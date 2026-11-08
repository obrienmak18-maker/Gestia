import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, MessageSquare } from "lucide-react";
import { getWhatsAppContactUrl } from "@/data/siteConfig";

export default function NotFound() {
  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je recherche une page ou un logiciel spécifique sur votre site."
  );

  return (
    <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full text-center rounded-3xl bg-white p-8 sm:p-12 shadow-card border border-slate-200/90 space-y-6">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-copo-50 text-copo-800 font-extrabold text-3xl">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Page Introuvable
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          La page demandée n&apos;existe pas ou a été déplacée. Retrouvez
          l&apos;ensemble de nos progiciels sur notre catalogue.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-copo-800 hover:bg-copo-900 text-white font-semibold py-3 text-sm shadow-card transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Accueil</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-sm shadow-orange transition-colors"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>Assistance</span>
          </a>
        </div>
      </div>
    </div>
  );
}
