import React from "react";
import {
  MessageSquare,
  ClipboardCheck,
  CreditCard,
  DownloadCloud,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppContactUrl } from "@/data/siteConfig";

export default function HowToOrder() {
  const steps = [
    {
      stepNumber: "01",
      title: "Contactez-nous sur WhatsApp",
      description:
        "Cliquez sur le bouton Commander ou écrivez-nous au +212 600 000 000 en précisant le logiciel de votre choix (Pack JBS, Sage ECF, Sage 100 ou Sage X3).",
      icon: MessageSquare,
      highlight: "Réponse en 5 minutes",
    },
    {
      stepNumber: "02",
      title: "Confirmez votre commande",
      description:
        "Notre conseiller valide avec vous la configuration technique de vos postes (Windows 10/11 ou Server) et vous transmet le devis ou la facture proforma officielle.",
      icon: ClipboardCheck,
      highlight: "Conseil personnalisé",
    },
    {
      stepNumber: "03",
      title: "Paiement sécurisé",
      description:
        "Effectuez votre règlement par virement bancaire (Attijari, BCP, CIH, BMCE...), versement en agence ou transfert rapide (Wafacash, Cash Plus).",
      icon: CreditCard,
      highlight: "Facture ICE/IF immédiate",
    },
    {
      stepNumber: "04",
      title: "Réception & Prise en main",
      description:
        "En moins de 15 minutes, vous recevez votre lien d'accès Google Drive privé avec le logiciel, la clé permanente et la vidéo. Nos techniciens installent tout via AnyDesk si besoin.",
      icon: DownloadCloud,
      highlight: "Installation garantie",
    },
  ];

  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite passer commande d'un logiciel."
  );

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-copo-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
            Processus simple & rapide
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Comment commander votre logiciel en 4 étapes ?
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Un parcours de commande fluide conçu pour les professionnels au Maroc.
            Aucune démarche compliquée, pas d&apos;attente inutile.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-3xl bg-slate-800/70 p-7 border border-slate-700/80 transition-all duration-300 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1 shadow-card"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-slate-600">
                      {item.stepNumber}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copo-800/70 text-orange-400 border border-slate-700">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA underneath steps */}
        <div className="mt-14 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-sm sm:text-base shadow-orange transition-all duration-200 active:scale-[0.98]"
          >
            <MessageSquare className="h-5 w-5 fill-white" />
            <span>Passer ma commande sur WhatsApp (+212)</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-slate-400">
            Assistance directe en Darija et Français • Service commercial ouvert du Lundi au Samedi
          </p>
        </div>
      </div>
    </section>
  );
}
