import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Copo Solutions Maroc (CNDP)",
  description:
    "Engagement de Copo Solutions relatif à la protection des données personnelles, conforme à la loi marocaine 09-08 régie par la CNDP.",
};

export default function PrivacyPolicyPage() {
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
            <li className="font-semibold text-slate-900">Politique de Confidentialité</li>
          </ol>
        </nav>

        <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-card border border-slate-200/90 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Politique de Confidentialité & Protection des Données
          </h1>
          <p className="text-xs text-slate-500">
            Conforme à la loi marocaine n° 09-08 relative à la protection des données à caractère personnel (CNDP)
          </p>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              1. Engagement Général
            </h2>
            <p>
              La société <strong>{siteConfig.legalName}</strong> accorde une
              importance primordiale au respect de la vie privée et à la
              confidentialité des données de ses clients, partenaires et
              visiteurs.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              2. Nature des Données Collectées
            </h2>
            <p>
              Dans le cadre de l&apos;exécution des commandes et des échanges de
              support technique, nous pouvons collecter :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identité et coordonnées (Nom, Prénom, Société, Ville, Téléphone WhatsApp, Email) ;</li>
              <li>Données fiscales de facturation (ICE, IF, Registre de Commerce, Adresse de facturation) ;</li>
              <li>Informations techniques nécessaires au déploiement (version de Windows, structure réseau).</li>
            </ul>
            <p className="text-xs text-slate-500 italic mt-2">
              Note essentielle : Copo Solutions n&apos;a jamais accès au contenu
              comptable confidentiel de vos clients ni à vos écritures financières,
              qui demeurent stockées exclusivement sur votre infrastructure locale.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              3. Finalité du Traitement
            </h2>
            <p>
              Les données recueillies sont strictement utilisées pour :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>La gestion administrative des commandes et l&apos;émission des factures légales ;</li>
              <li>L&apos;envoi des liens de téléchargement sécurisés et clés de licence ;</li>
              <li>La planification de la télé-assistance et du support technique après-vente ;</li>
              <li>L&apos;information relative aux évolutions réglementaires majeures de la DGI marocaine.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              4. Vos Droits d&apos;Accès et de Rectification (Loi 09-08)
            </h2>
            <p>
              Conformément à la loi 09-08, vous disposez d&apos;un droit d&apos;accès,
              de rectification et d&apos;opposition concernant les données vous
              concernant. Vous pouvez exercer ce droit à tout moment en nous
              écrivant par courriel à <strong>{siteConfig.email}</strong> ou par
              courrier postal au siège de Copo Solutions à Casablanca.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              5. Sécurité et Hébergement
            </h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles appropriées (chiffrement TLS/SSL, accès
              restreints, protocoles sécurisés) pour protéger vos données contre
              toute altération, perte ou accès non autorisé.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
