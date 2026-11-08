import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Building2,
  MessageSquare,
  ArrowRight,
  HeartHandshake,
  Layers,
} from "lucide-react";
import { getWhatsAppContactUrl, siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "À Propos de Copo Solutions | Spécialiste Logiciels de Gestion au Maroc",
  description:
    "Découvrez l'histoire, la mission et l'expertise de Copo Solutions auprès des experts-comptables, directeurs financiers et PME au Maroc.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite en savoir plus sur vos services et garanties au Maroc."
  );

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
            <li className="font-semibold text-slate-900">À propos</li>
          </ol>
        </nav>

        {/* Hero About Block */}
        <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-card border border-slate-200/90 mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/60 px-3 py-1 rounded-full border border-copo-200">
              Notre Mission au Maroc
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Faciliter et sécuriser la gestion des entreprises marocaines
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Basée à Casablanca, <strong>Copo Solutions</strong> est née d&apos;un constat
              évident : la dématérialisation fiscale au Maroc (SIMPL-IS, EDI,
              facturation ICE) exige des progiciels robustes, parfaitement
              configurés et accessibles sans abonnements mensuels disproportionnés.
            </p>
          </div>

          {/* Key Statistics Bar */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-copo-800">
                +500
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Cabinets & PME équipés au Maroc
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-orange-500">
                100%
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Conformité DGI & XML validé
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-copo-800">
                &lt; 15 min
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Délai moyen de livraison Drive
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">
                7j/7
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Support réactif WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-3xl bg-white p-8 shadow-card border border-slate-200/90 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copo-50 text-copo-800">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              1. Rigueur Fiscale Marocaine
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nous maîtrisons parfaitement les arrêtés de la DGI, le Plan
              Comptable Général Marocain (CGNC) et les structures XSD du portail
              SIMPL. Zéro improvisation : nos fichiers XML sont garantis sans rejet.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-card border border-slate-200/90 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              2. Accompagnement Humain
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nous ne vous laissons jamais seul avec un simple fichier zip. Chaque
              client bénéficie d&apos;une assistance à distance via AnyDesk et
              d&apos;un tutoriel vidéo pas-à-pas en Français et Darija.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-card border border-slate-200/90 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copo-50 text-copo-800">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              3. Liberté & Transparence
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pas de frais cachés ni de prélèvements automatiques mensuels. Nos
              licences sont permanentes en paiement unique, utilisables en
              multiposte dans votre entreprise.
            </p>
          </div>
        </div>

        {/* Why Copo Solutions vs Traditional */}
        <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-card border border-slate-200/90 mb-12">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pourquoi choisir Copo Solutions ?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Le comparatif entre notre modèle et les écueils habituels rencontrés sur le marché marocain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-emerald-50/50 p-6 border border-emerald-200 space-y-3">
              <h4 className="text-base font-bold text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Avec Copo Solutions
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Paiement unique sans abonnement récurrent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Installation garantie par un ingénieur à distance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tutoriel vidéo pas-à-pas offert pour chaque module</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Facture professionnelle avec ICE, IF et RC</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6 border border-slate-200 space-y-3">
              <h4 className="text-base font-bold text-slate-700">
                Éditeurs en ligne traditionnels / Téléchargements non vérifiés
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>• Abonnements mensuels très lourds pour chaque utilisateur</li>
                <li>• Assistance téléphonique souvent injoignable ou payante</li>
                <li>• Risque de virus, de perte irrémédiable de données comptables</li>
                <li>• Fichiers XML rejetés lors du dépôt sur SIMPL DGI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-bold">Envie d&apos;équiper votre entreprise ?</h3>
            <p className="text-sm text-slate-300">
              Discutez directement avec nos conseillers à Casablanca pour obtenir un devis immédiat ou des précisions techniques.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 text-sm shadow-orange transition-colors"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>Discuter sur WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
