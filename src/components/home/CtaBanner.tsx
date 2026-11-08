import React from "react";
import { MessageSquare, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { siteConfig, getWhatsAppContactUrl } from "@/data/siteConfig";

export default function CtaBanner() {
  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite commander un logiciel de gestion dès maintenant."
  );

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-copo-900 via-copo-800 to-copo-950 text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
              <ShieldCheck className="h-4 w-4" />
              <span>Garantie Zéro Rejet DGI & Assistance Incluse</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Prêt à moderniser la comptabilité de votre entreprise au Maroc ?
            </h2>
            <p className="text-sm sm:text-base text-copo-100/90 leading-relaxed">
              Commandez votre progiciel sur WhatsApp en moins de 2 minutes. Fichiers d&apos;installation, licence permanente et tutoriel livrés immédiatement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-sm sm:text-base shadow-orange transition-all duration-200 active:scale-[0.98]"
            >
              <MessageSquare className="h-5 w-5 fill-white" />
              <span>Commander sur WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors"
            >
              <PhoneCall className="h-4 w-4 text-slate-300" />
              <span>{siteConfig.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
