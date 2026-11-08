"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
} from "lucide-react";
import { siteConfig, getWhatsAppContactUrl } from "@/data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    city: "Casablanca",
    software: "Pack JBS",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappUrl = getWhatsAppContactUrl(
    formData.name
      ? `Bonjour Copo Solutions, je suis ${formData.name} (${formData.company || "Entreprise"}). Je souhaite des informations sur le logiciel : ${formData.software}.`
      : undefined
  );

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-copo-800 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-slate-900">Contact</li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/60 px-3 py-1 rounded-full border border-copo-200">
            Assistance & Devis Immédiat
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Contactez l&apos;Équipe Copo Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Besoin d&apos;un conseil technique, d&apos;une facture proforma ou
            d&apos;une assistance pour commander ? Notre équipe basée à Casablanca
            vous répond en quelques minutes.
          </p>
        </div>

        {/* Main Grid: Form + Direct Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-card border border-slate-200/90">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Envoyer un message ou demander un devis
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">
                Remplissez ce formulaire ou privilégiez WhatsApp pour une réponse instantanée.
              </p>

              {isSubmitted ? (
                <div className="rounded-2xl bg-emerald-50 p-8 border border-emerald-200 text-center space-y-4 animate-fade-in">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    Merci {formData.name} !
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Votre demande a bien été enregistrée. Un conseiller Copo Solutions
                    va vous contacter au{" "}
                    <strong>{formData.phone || "numéro indiqué"}</strong> dans les
                    prochains instants.
                  </p>
                  <div className="pt-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#20BD5A] transition-colors"
                    >
                      <MessageSquare className="h-4 w-4 fill-white" />
                      <span>Continuer directement sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nom et Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Yassine Mansouri"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Entreprise / Cabinet
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: SARL ou Cabinet Fiduciaire"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="06 XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Ville au Maroc
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all bg-white"
                      >
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Marrakech">Marrakech</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Fès">Fès</option>
                        <option value="Autre ville">Autre ville</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Logiciel d&apos;intérêt
                    </label>
                    <select
                      value={formData.software}
                      onChange={(e) =>
                        setFormData({ ...formData, software: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all bg-white"
                    >
                      <option value="Pack JBS">Pack JBS (Compta + Paie 9421 EDI + Facturation)</option>
                      <option value="Sage États Comptables et Fiscaux V19.10">Sage ECF V19.10 (Bilan & Liasse XML)</option>
                      <option value="Pack Sage 100 complet">Pack Sage 100 complet (4 logiciels + Formation)</option>
                      <option value="Sage X3 V12">Sage X3 V12 (ERP Global Entreprise)</option>
                      <option value="Autre / Conseil global">Autre / Conseil personnalisé</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message ou précisions éventuelles
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Indiquez vos besoins, le nombre de postes ou vos questions spécifiques..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-copo-800 focus:outline-none focus:ring-2 focus:ring-copo-800/20 transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-copo-800 hover:bg-copo-900 text-white font-semibold py-4 text-sm shadow-card transition-all active:scale-[0.98]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Envoyer ma demande</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct WhatsApp & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Preferred WhatsApp Fast Track Box */}
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-8 shadow-elevated border border-slate-800 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/20 px-3 py-1 text-xs font-semibold text-[#25D366]">
                <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Canal Recommandé</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Besoin d&apos;une réponse immédiate ?
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Notre équipe commerciale et technique est en ligne sur WhatsApp pour vous renseigner, vérifier la compatibilité de vos postes et préparer votre lien de téléchargement.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="h-5 w-5 fill-white" />
                <span>Ouvrir WhatsApp (+212)</span>
              </a>

              <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Devis & facture officielle avec ICE et IF remis sur demande</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span>Délai de réponse moyen : Moins de 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Coordinates Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card border border-slate-200/90 space-y-5">
              <h3 className="text-lg font-bold text-slate-900">
                Nos Coordonnées
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-copo-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Siège Social
                    </span>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-copo-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Téléphone
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="hover:text-copo-800 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-copo-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Courriel
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-copo-800 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-copo-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Horaires d&apos;ouverture
                    </span>
                    <span>{siteConfig.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Legal Registrations Snippet */}
              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 space-y-1">
                <p>
                  <strong>{siteConfig.legalName}</strong> • {siteConfig.legal.rc}
                </p>
                <p>
                  {siteConfig.legal.ice} • {siteConfig.legal.if}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
