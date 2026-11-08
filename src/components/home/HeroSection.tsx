import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
  Zap,
  Users,
  Award,
} from "lucide-react";
import { siteConfig, getWhatsAppContactUrl } from "@/data/siteConfig";

export default function HeroSection() {
  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite découvrir vos logiciels de gestion et comptabilité au Maroc."
  );

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-white via-copo-50/30 to-slate-50">
      {/* Background subtle radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-copo-100/40 via-orange-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Trust Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-copo-800 shadow-soft border border-copo-200/80 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-900 font-bold">Loi de Finances 2025</span>
            <span className="text-slate-300">•</span>
            <span className="text-copo-700">100% Conforme SIMPL DGI & Télédéclarations XML</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Logiciels de Comptabilité & Gestion pour les Entreprises au{" "}
            <span className="relative inline-block text-copo-800">
              Maroc
              <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-400/30 -z-10 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Équipez votre cabinet ou PME avec les standards reconnus :{" "}
            <strong className="text-slate-900 font-semibold">Pack JBS</strong>,{" "}
            <strong className="text-slate-900 font-semibold">Sage ECF V19.10</strong>,{" "}
            <strong className="text-slate-900 font-semibold">Pack Sage 100 complet</strong> et{" "}
            <strong className="text-slate-900 font-semibold">Sage X3 V12</strong>.{" "}
            Licences permanentes multipostes, assistance d&apos;installation par nos experts et fichiers XML garantis zéro rejet.
          </p>

          {/* Dual Call to Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#catalogue"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-copo-800 px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-card hover:bg-copo-900 hover:shadow-elevated transition-all duration-200 active:scale-[0.98]"
            >
              <span>Découvrir nos solutions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-orange hover:bg-orange-600 hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <MessageSquare className="h-5 w-5 fill-white" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>

          {/* 4 Micro Trust Badges */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-soft">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">Zéro Rejet SIMPL</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-soft">
              <Zap className="h-4 w-4 text-orange-500 shrink-0" />
              <span className="text-xs font-medium text-slate-700">Livraison en 15 Min</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-soft">
              <Users className="h-4 w-4 text-copo-700 shrink-0" />
              <span className="text-xs font-medium text-slate-700">Licence Multiposte</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-soft">
              <Award className="h-4 w-4 text-copo-800 shrink-0" />
              <span className="text-xs font-medium text-slate-700">Support 7j/7 Maroc</span>
            </div>
          </div>
        </div>

        {/* High-End SaaS Mockup Visual Container */}
        <div className="mt-14 relative max-w-5xl mx-auto rounded-3xl bg-slate-900 p-3 sm:p-4 shadow-2xl border border-slate-800">
          {/* Mockup Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                copo-solutions.ma • Tableau de Bord Comptable Maroc
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SIMPL DGI Connecté
              </span>
            </div>
          </div>

          {/* Mockup Dashboard Content */}
          <div className="bg-slate-950 rounded-2xl p-4 sm:p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Liasse Fiscale XML</span>
                <FileCode2 className="h-4 w-4 text-orange-400" />
              </div>
              <div className="text-2xl font-extrabold text-white">18 Tableaux</div>
              <p className="mt-1 text-xs text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Bilan, CPC, ESG & Passage
              </p>
            </div>

            {/* Metric 2 */}
            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Télédéclarations Paie</span>
                <Users className="h-4 w-4 text-copo-400" />
              </div>
              <div className="text-2xl font-extrabold text-white">État 9421 EDI</div>
              <p className="mt-1 text-xs text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Barèmes IR 2025 intégrés
              </p>
            </div>

            {/* Metric 3 */}
            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Accompagnement</span>
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-white">100% Inclus</div>
              <p className="mt-1 text-xs text-slate-300">
                Installation AnyDesk & Vidéo tutoriel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
