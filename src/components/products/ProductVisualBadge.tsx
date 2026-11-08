import React from "react";
import {
  FileSpreadsheet,
  FileCode2,
  ShieldCheck,
  Server,
  Layers,
  Database,
  Cpu,
  GraduationCap,
} from "lucide-react";

interface ProductVisualBadgeProps {
  slug: string;
  className?: string;
}

export default function ProductVisualBadge({
  slug,
  className = "",
}: ProductVisualBadgeProps) {
  switch (slug) {
    case "pack-jbs":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-copo-900 via-copo-800 to-copo-950 p-5 text-white shadow-soft border border-copo-700/60 ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="rounded-md bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-bold text-orange-400 border border-orange-500/30">
              SUITE MAROCAINE
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              SIMPL XML
            </span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-400 backdrop-blur-sm border border-white/10">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-white">
                Pack JBS
              </div>
              <div className="text-[11px] text-slate-300">
                Comptabilité • Paie EDI • Commercial
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
            <span>Barèmes IR 2025</span>
            <span className="font-mono text-orange-400 font-bold">État 9421</span>
          </div>
        </div>
      );

    case "sage-etats-comptables-fiscaux-v19":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-copo-950 p-5 text-white shadow-soft border border-emerald-800/40 ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="rounded-md bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
              STANDARD DGI
            </span>
            <span className="text-[10px] text-emerald-300 font-semibold">
              V19.10 Officielle
            </span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 backdrop-blur-sm border border-emerald-500/20">
              <FileCode2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-white">
                Sage ECF V19.10
              </div>
              <div className="text-[11px] text-slate-300">
                Bilan • CPC • 18 Tableaux XML
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
            <span>Multi-sociétés illimité</span>
            <span className="font-mono text-emerald-400 font-bold">Zéro Rejet</span>
          </div>
        </div>
      );

    case "pack-sage-100-complet":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-copo-950 via-slate-900 to-copo-900 p-5 text-white shadow-soft border border-copo-700/50 ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="rounded-md bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-bold text-orange-400 border border-orange-500/30">
              PACK 4 EN 1
            </span>
            <span className="text-[10px] text-amber-300 font-semibold flex items-center gap-1">
              <GraduationCap className="h-3 w-3" />
              Formation Inclus
            </span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 backdrop-blur-sm border border-orange-500/20">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-white">
                Sage 100 Complet
              </div>
              <div className="text-[11px] text-slate-300">
                Compta • Gescom • Paie RH • Immos
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
            <span>Réseau Multiposte</span>
            <span className="font-mono text-orange-400 font-bold">Base SQL</span>
          </div>
        </div>
      );

    case "sage-x3-v12":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-copo-950 to-slate-900 p-5 text-white shadow-soft border border-slate-700/80 ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="rounded-md bg-copo-500/20 px-2.5 py-0.5 text-[10px] font-bold text-copo-300 border border-copo-500/30">
              ERP GLOBAL
            </span>
            <span className="text-[10px] text-copo-300 font-semibold flex items-center gap-1">
              <Server className="h-3 w-3" />
              Web HTML5
            </span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copo-500/10 text-copo-300 backdrop-blur-sm border border-copo-500/20">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-white">
                Sage X3 V12
              </div>
              <div className="text-[11px] text-slate-300">
                Production • Stocks • Finance ETI
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
            <span>Multi-devises & Sites</span>
            <span className="font-mono text-copo-300 font-bold">Release 12</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
