import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/services/productsService";
import ProductsFilterList from "@/components/products/ProductsFilterList";
import { ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppContactUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Catalogue des Logiciels de Gestion & Comptabilité Maroc",
  description:
    "Découvrez notre gamme complète de logiciels certifiés au Maroc : Pack JBS, Sage ECF V19.10, Pack Sage 100 complet et Sage X3 V12. Licences multipostes avec assistance.",
};

export const revalidate = 300;

export default async function ProductsCatalogPage() {
  const products = await getProducts();
  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite recevoir des conseils pour choisir le meilleur logiciel pour mon entreprise."
  );

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-copo-800 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-slate-800">Nos Logiciels</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/70 px-3 py-1 rounded-full border border-copo-200">
            Catalogue Pro 2025
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Solutions Logicielles pour Entreprises & Cabinets au Maroc
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tous nos logiciels sont validés selon les critères stricts de la DGI
            marocaine, livrés avec installation accompagnée et configurables en
            environnement réseau multiposte.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center gap-3 p-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Conformité SIMPL DGI & Télédéclaration XML
            </span>
          </div>
          <div className="flex items-center gap-3 p-2">
            <CheckCircle2 className="h-5 w-5 text-copo-700 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Licences permanentes sans abonnement mensuel
            </span>
          </div>
          <div className="flex items-center gap-3 p-2">
            <MessageSquare className="h-5 w-5 text-orange-500 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Commande directe & support en direct sur WhatsApp
            </span>
          </div>
        </div>

        {/* Products Filterable List */}
        <ProductsFilterList initialProducts={products} />

        {/* Comparison Overview Table */}
        <div className="mt-20 rounded-3xl bg-white p-6 sm:p-10 shadow-card border border-slate-200/90 overflow-hidden">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Guide comparatif rapide de nos progiciels
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Visualisez en un coup d&apos;œil les fonctionnalités clés de chaque logiciel selon votre activité.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4">Solution</th>
                  <th className="py-4 px-4">Public Cible</th>
                  <th className="py-4 px-4">Module Phare</th>
                  <th className="py-4 px-4">Export XML DGI</th>
                  <th className="py-4 px-4">Licence</th>
                  <th className="py-4 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-copo-800">Pack JBS</td>
                  <td className="py-4 px-4 text-xs text-slate-500">PME & Fiduciaires</td>
                  <td className="py-4 px-4">Compta + Paie 9421 EDI + Facturation</td>
                  <td className="py-4 px-4 text-emerald-600 font-semibold">100% Inclus</td>
                  <td className="py-4 px-4">Multiposte à vie</td>
                  <td className="py-4 px-4 text-right">
                    <Link
                      href="/produits/pack-jbs"
                      className="text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      Détails →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-copo-800">Sage ECF V19.10</td>
                  <td className="py-4 px-4 text-xs text-slate-500">Experts-Comptables & DAF</td>
                  <td className="py-4 px-4">18 Tableaux Liasse Fiscale & Bilan</td>
                  <td className="py-4 px-4 text-emerald-600 font-semibold">100% Inclus</td>
                  <td className="py-4 px-4">Multi-dossiers illimité</td>
                  <td className="py-4 px-4 text-right">
                    <Link
                      href="/produits/sage-etats-comptables-fiscaux-v19"
                      className="text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      Détails →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-copo-800">Pack Sage 100 complet</td>
                  <td className="py-4 px-4 text-xs text-slate-500">PME & Distributeurs</td>
                  <td className="py-4 px-4">4 Logiciels + Formation Vidéo</td>
                  <td className="py-4 px-4 text-emerald-600 font-semibold">Compatible</td>
                  <td className="py-4 px-4">Réseau multiposte</td>
                  <td className="py-4 px-4 text-right">
                    <Link
                      href="/produits/pack-sage-100-complet"
                      className="text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      Détails →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-copo-800">Sage X3 V12</td>
                  <td className="py-4 px-4 text-xs text-slate-500">ETI & Groupes Industriels</td>
                  <td className="py-4 px-4">ERP Global Web, GPAO & Supply Chain</td>
                  <td className="py-4 px-4 text-emerald-600 font-semibold">Multi-sociétés</td>
                  <td className="py-4 px-4">Architecture 3-tiers</td>
                  <td className="py-4 px-4 text-right">
                    <Link
                      href="/produits/sage-x3-v12"
                      className="text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      Détails →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Help CTA Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-copo-900 to-copo-800 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">Besoin d&apos;une démonstration ou d&apos;une offre sur mesure ?</h3>
            <p className="mt-2 text-sm text-copo-100">
              Nos consultants logiciels vous conseillent en direct sur WhatsApp pour adapter l&apos;installation à votre parc informatique.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 text-sm shadow-orange transition-colors"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>Contacter un spécialiste</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
