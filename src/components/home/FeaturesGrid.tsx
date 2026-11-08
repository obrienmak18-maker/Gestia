import React from "react";
import {
  FileCode2,
  Video,
  Network,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesGrid() {
  const advantages = [
    {
      title: "Conforme Loi de Finances Marocaine",
      badge: "Loi 2025 Validée",
      icon: FileCode2,
      accentColor: "copo",
      description:
        "Toutes nos solutions intègrent les dernières réformes fiscales marocaines : liasse fiscale XML normalisée DGI pour SIMPL-IS, barèmes IR actualisés, états de paie 9421 au format EDI et gestion stricte des mentions légales (ICE, IF, Patente).",
      points: [
        "18 tableaux de la liasse fiscale marocaine",
        "Exports XML certifiés sans rejets sur SIMPL",
        "Barèmes de paie et cotisations CNSS/AMO à jour",
      ],
    },
    {
      title: "Installation Accompagnée & Vidéo",
      badge: "Assistance Incluse",
      icon: Video,
      accentColor: "orange",
      description:
        "Ne perdez plus des heures à configurer vos logiciels. Nos ingénieurs prennent la main à distance via AnyDesk pour installer le logiciel sur vos machines. Une vidéo explicative complète pas-à-pas en Français et Darija vous est également transmise.",
      points: [
        "Prise en main à distance garantie",
        "Tutoriel vidéo détaillé de A à Z",
        "Support technique réactif sur WhatsApp",
      ],
    },
    {
      title: "Licence Ouverte Multi-Postes",
      badge: "Zéro Frais Mensuels",
      icon: Network,
      accentColor: "copo",
      description:
        "Fini les abonnements mensuels captifs qui pèsent sur votre trésorerie. Bénéficiez d'une licence permanente utilisable sur l'ensemble des postes de votre entreprise ou cabinet comptable en réseau local.",
      points: [
        "Paiement unique sans abonnement imposé",
        "Partage de données réseau multi-utilisateurs",
        "Aucune limitation de dossiers clients",
      ],
    },
    {
      title: "Livraison Rapide par E-mail & Drive",
      badge: "En moins de 15 Min",
      icon: Zap,
      accentColor: "orange",
      description:
        "Dès confirmation de votre commande sur WhatsApp, vous recevez un lien de téléchargement privé Google Drive à très haut débit contenant les installateurs complets, les clés d'activation permanentes et les manuels illustrés.",
      points: [
        "Accès immédiat et illimité au cloud",
        "Fichiers d'installation sécurisés et scannés",
        "Sauvegarde permanente disponible à vie",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/60 px-3 py-1 rounded-full border border-copo-200">
            Pourquoi choisir Copo Solutions ?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Une expertise éprouvée pour sécuriser la gestion de votre entreprise
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Nous combinons des logiciels de référence internationale avec une
            maîtrise parfaite de la fiscalité et des pratiques d&apos;affaires au
            Maroc.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            const isOrange = item.accentColor === "orange";

            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white p-8 shadow-card border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:border-copo-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isOrange
                          ? "bg-orange-50 text-orange-600"
                          : "bg-copo-50 text-copo-800"
                      } transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-copo-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    href="#catalogue"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-copo-800 hover:text-orange-600 transition-colors"
                  >
                    <span>Découvrir les solutions compatibles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
