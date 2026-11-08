import React from "react";
import Link from "next/link";
import {
  Layers,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
} from "lucide-react";
import { siteConfig, getWhatsAppContactUrl } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = 2025;
  const whatsappUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite commander un logiciel de gestion."
  );

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Assurance Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copo-800/40 text-copo-300">
              <ShieldCheck className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                100% Conforme DGI Maroc
              </h4>
              <p className="text-xs text-slate-400">
                Fichiers XML certifiés pour SIMPL-IS, EDI & TVA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copo-800/40 text-copo-300">
              <Zap className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Livraison Immédiate 15 Min
              </h4>
              <p className="text-xs text-slate-400">
                Lien Google Drive privé + activation permanente
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copo-800/40 text-copo-300">
              <Clock className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Installation Accompagnée
              </h4>
              <p className="text-xs text-slate-400">
                Prise en main à distance AnyDesk + vidéo pas-à-pas
              </p>
            </div>
          </div>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copo-800 text-white shadow-card">
                <Layers className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Copo<span className="text-orange-400"> Solutions</span>
                </span>
                <span className="block text-[11px] text-slate-400">
                  Maroc • Logiciels de Gestion & Comptabilité
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Partenaire privilégié des cabinets d&apos;expertise comptable,
              fiduciaires et PME au Maroc. Nous fournissons des progiciels
              éprouvés conformes à la Loi de Finances marocaine avec assistance
              complète.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 text-xs font-semibold shadow-orange transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 fill-white" />
                <span>Assistance WhatsApp directe</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Logiciels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Nos Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/produits/pack-jbs"
                  className="hover:text-orange-400 transition-colors"
                >
                  Pack JBS (Compta & Paie)
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/sage-etats-comptables-fiscaux-v19"
                  className="hover:text-orange-400 transition-colors"
                >
                  Sage ECF V19.10 (Liasse XML)
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/pack-sage-100-complet"
                  className="hover:text-orange-400 transition-colors"
                >
                  Pack Sage 100 complet
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/sage-x3-v12"
                  className="hover:text-orange-400 transition-colors"
                >
                  Sage X3 V12 (ERP)
                </Link>
              </li>
              <li>
                <Link
                  href="/produits"
                  className="text-orange-400 font-medium inline-flex items-center gap-1 hover:underline pt-1 text-xs"
                >
                  Voir tous les logiciels →
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise & Ressources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Entreprise
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-orange-400 transition-colors"
                >
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-orange-400 transition-colors"
                >
                  Blog & Veille fiscale Maroc
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact & Devis
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-orange-400 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-generales-de-vente"
                  className="hover:text-orange-400 transition-colors"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-orange-400 transition-colors"
                >
                  Protection des données (CNDP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct Maroc */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Coordonnées Maroc
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-orange-400 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-medium hover:underline"
                >
                  WhatsApp : {siteConfig.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-orange-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <p className="pt-2 text-[11px] text-slate-500 border-t border-slate-800">
                {siteConfig.businessHours}
              </p>
            </div>
          </div>
        </div>

        {/* Moroccan Legal & Administrative Registry */}
        <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>{siteConfig.legalName}</span>
            <span>•</span>
            <span>{siteConfig.legal.rc}</span>
            <span>•</span>
            <span>{siteConfig.legal.ice}</span>
            <span>•</span>
            <span>{siteConfig.legal.if}</span>
            <span>•</span>
            <span>{siteConfig.legal.patente}</span>
          </div>

          <div className="text-center md:text-right">
            <p>
              © {currentYear} Copo Solutions. Tous droits réservés. Conforme Loi
              09-08 CNDP.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
