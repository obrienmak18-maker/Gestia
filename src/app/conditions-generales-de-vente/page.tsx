import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Copo Solutions Maroc",
  description:
    "Conditions Générales de Vente régissant les commandes de progiciels, licences et services de formation par Copo Solutions au Maroc.",
};

export default function CGVPage() {
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
            <li className="font-semibold text-slate-900">Conditions Générales de Vente</li>
          </ol>
        </nav>

        <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-card border border-slate-200/90 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-xs text-slate-500">
            En vigueur au 1er Janvier 2025 • Conforme au droit commercial marocain
          </p>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 1 : Objet & Champ d&apos;Application
            </h2>
            <p>
              Les présentes Conditions Générales de Vente s&apos;appliquent à
              l&apos;ensemble des ventes de progiciels, solutions logicielles
              (notamment Pack JBS, Sage États Comptables et Fiscaux V19.10, Pack
              Sage 100 complet, Sage X3 V12), modules de formation et prestations
              d&apos;installation fournies par <strong>{siteConfig.legalName}</strong>{" "}
              à ses clients professionnels, entreprises et cabinets comptables
              établis au Maroc ou à l&apos;international.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 2 : Commandes & Processus de Validation
            </h2>
            <p>
              Toute commande peut être initiée via le site web, par échange
              WhatsApp officiel ({siteConfig.whatsappDisplay}) ou par email. La
              confirmation de la commande emporte acceptation sans réserve des
              présentes CGV et engagement des parties.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 3 : Tarifs & Modalités de Paiement
            </h2>
            <p>
              Les tarifs sont exprimés en Dirhams Marocains (MAD / DH). Le
              paiement s&apos;effectue en totalité à la commande par virement
              bancaire sur le compte de la société (RIB fourni sur la facture
              proforma), par versement d&apos;espèces dans une agence bancaire ou
              par transfert d&apos;argent certifié (Wafacash, Cash Plus). Une
              facture conforme avec mentions fiscales (ICE, IF, RC, Patente) est
              délivrée dès réception du justificatif de paiement.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 4 : Modalités de Livraison Numérique
            </h2>
            <p>
              S&apos;agissant de produits numériques dématérialisés, la livraison
              s&apos;effectue par voie électronique sous forme de lien de
              téléchargement sécurisé à très haut débit (Google Drive privé ou
              serveur dédié) dans un délai indicatif de 10 à 30 minutes suivant
              la confirmation du règlement. Le client dispose d&apos;un accès
              permanent à ses fichiers de sauvegarde.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 5 : Installation & Assistance Technique
            </h2>
            <p>
              Copo Solutions s&apos;engage à fournir au client un guide
              d&apos;installation détaillé et une vidéo explicative pas-à-pas.
              Sur demande du client, une intervention de télé-assistance est
              assurée à distance via les outils certifiés AnyDesk ou TeamViewer
              pour vérifier la bonne installation et la connexion des postes en
              réseau.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 6 : Garantie de Fonctionnement
            </h2>
            <p>
              Copo Solutions garantit que les logiciels livrés sont opérationnels,
              exempts de tout virus et conformes aux spécifications de la DGI
              marocaine pour la génération des formats d&apos;export XML
              (SIMPL-IS, EDI, etc.). En cas d&apos;incompatibilité matérielle
              avérée, nos équipes s&apos;engagent à apporter une solution de
              contournement ou un support personnalisé.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">
              Article 7 : Juridiction Compétente
            </h2>
            <p>
              Les présentes conditions sont soumises à la législation du Royaume
              du Maroc. Tout différend relatif à l&apos;interprétation ou à
              l&apos;exécution du présent contrat sera soumis, à défaut de
              résolution amiable, à la compétence exclusive du Tribunal de
              Commerce de Casablanca.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
