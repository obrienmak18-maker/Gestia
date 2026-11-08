"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig, getWhatsAppContactUrl } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show a welcome tooltip after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setHasInteracted(true);
  };

  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite avoir des informations sur vos logiciels de gestion et comptabilité au Maroc."
  );

  return (
    <aside
      aria-label="Assistance WhatsApp en direct"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Floating Speech Bubble Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-white p-4 shadow-elevated border border-slate-200/90 animate-slide-up transition-all duration-300">
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageSquare className="h-5 w-5 fill-[#25D366]" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Support Copo Solutions
                </h3>
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  En ligne • Réponse en 5 min
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              aria-label="Fermer la bulle WhatsApp"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="my-3 space-y-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <p className="font-medium text-slate-800">
              👋 Salam ! Besoin d&apos;un logiciel ou d&apos;un devis ?
            </p>
            <p>
              Nos conseillers à Casablanca sont disponibles pour vous guider sur
              le Pack JBS, Sage 100, Sage ECF ou Sage X3.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-copo-800 font-medium pt-1">
              <ShieldCheck className="h-3.5 w-3.5 text-copo-700" />
              <span>Conforme Loi de Finances & SIMPL DGI</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setHasInteracted(true)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#20BD5A] transition-all duration-200 active:scale-[0.98]"
          >
            <span>Démarrer la discussion sur WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Copo Solutions sur WhatsApp"
        onClick={() => setHasInteracted(true)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-sm group-hover:opacity-60 transition-opacity animate-pulse-slow" />

        {/* WhatsApp Icon */}
        <svg
          className="relative h-7 w-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Small live badge */}
        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow">
          1
        </span>
      </a>
    </aside>
  );
}
