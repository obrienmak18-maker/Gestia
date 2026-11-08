"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { HOME_FAQ } from "@/data/faq";
import { getWhatsAppContactUrl } from "@/data/siteConfig";

export default function FaqSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, j'ai une question sur l'installation ou la licence de vos logiciels."
  );

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-50 px-3 py-1 rounded-full border border-copo-200">
            <HelpCircle className="h-3.5 w-3.5 text-copo-700" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Questions Fréquentes sur nos Logiciels & Licences
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Tout ce que vous devez savoir sur la conformité DGI, l&apos;installation
            à distance et nos modalités de paiement au Maroc.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {HOME_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-copo-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-slate-900 transition-colors hover:text-copo-800 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-copo-50 text-copo-800" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA banner under FAQ */}
        <div className="mt-12 rounded-2xl bg-slate-50 p-6 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Vous avez une autre question spécifique ?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Posez-la directement à notre équipe technique sur WhatsApp.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-orange transition-colors"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>Discuter avec un conseiller</span>
          </a>
        </div>
      </div>
    </section>
  );
}
