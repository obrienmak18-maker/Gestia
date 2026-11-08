import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Mentions Légales | Copo Solutions Maroc",
  description:
    "Mentions légales et informations juridiques officielles de la société Copo Solutions SARL au Maroc.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-copo-800 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-slate-900">Mentions Légales</li>
          </ol>
        </nav>

        <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-card border border-slate-200/90 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Mentions Légales
          </h1>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              1. Éditeur du Site
            </h2>
            <p>
              Le présent site internet accessible à l&apos;adresse{" "}
              <strong>{siteConfig.url}</strong> est édité par la société :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Raison sociale :</strong> {siteConfig.legalName}</li>
              <li><strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL) de droit marocain</li>
              <li><strong>Siège social :</strong> {siteConfig.address}</li>
              <li><strong>Registre de Commerce :</strong> {siteConfig.legal.rc}</li>
              <li><strong>Identifiant Commun de l&apos;Entreprise (ICE) :</strong> {siteConfig.legal.ice}</li>
              <li><strong>Identifiant Fiscal (IF) :</strong> {siteConfig.legal.if}</li>
              <li><strong>Patente :</strong> {siteConfig.legal.patente}</li>
              <li><strong>Affiliation CNSS :</strong> {siteConfig.legal.cnss}</li>
              <li><strong>Téléphone :</strong> {siteConfig.phone} / {siteConfig.whatsappDisplay}</li>
              <li><strong>Courriel :</strong> {siteConfig.email}</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              2. Activité Commerciale
            </h2>
            <p>
              Copo Solutions est spécialisée dans l&apos;intégration, le conseil,
              la distribution et le support technique de progiciels de gestion,
              de comptabilité, de paie et de fiscalité auprès des entreprises et
              cabinets comptables au Maroc.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              3. Propriété Intellectuelle
            </h2>
            <p>
              Les marques citées (notamment Sage, JBS, Windows, Microsoft) sont
              des marques déposées appartenant à leurs propriétaires respectifs
              et sont mentionnées à titre purement indicatif pour identifier la
              compatibilité des solutions logicielles proposées. L&apos;ensemble
              des textes, graphismes et éléments du site relèvent de la législation
              marocaine et internationale sur le droit d&apos;auteur.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              4. Protection des Données Personnelles
            </h2>
            <p>
              Conformément à la Loi n° 09-08 promulguée par le Dahir n° 1-09-15
              du 18 février 2009 relative à la protection des personnes physiques
              à l&apos;égard du traitement des données à caractère personnel,
              les informations collectées font l&apos;objet d&apos;un traitement
              strictement confidentiel destiné à la gestion de la relation client
              et au support technique.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
