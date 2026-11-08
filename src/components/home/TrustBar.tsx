import React from "react";
import { Check, ShieldCheck, FileCheck, Building2, Laptop } from "lucide-react";

export default function TrustBar() {
  const certifications = [
    {
      title: "SIMPL-IS & SIMPL-TVA",
      subtitle: "Exports XML 100% validés DGI",
      icon: ShieldCheck,
    },
    {
      title: "Code Général des Impôts (CGI)",
      subtitle: "Plan comptable marocain (CGNC)",
      icon: FileCheck,
    },
    {
      title: "CNSS, AMO & CIMR",
      subtitle: "État 9421 et bordereaux EDI",
      icon: Building2,
    },
    {
      title: "Windows 11, 10 & Server",
      subtitle: "Réseau local et postes multiples",
      icon: Laptop,
    },
  ];

  return (
    <div className="border-y border-slate-200/80 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Standards de conformité et compatibilité certifiés au Maroc
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100 transition-all hover:bg-white hover:shadow-soft"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copo-50 text-copo-800">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                    {item.title}
                    <Check className="h-3.5 w-3.5 text-emerald-600 inline" />
                  </h4>
                  <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
