"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  Layers,
} from "lucide-react";
import { siteConfig, getWhatsAppContactUrl } from "@/data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const whatsappNavUrl = getWhatsAppContactUrl(
    "Bonjour Copo Solutions, je souhaite commander un logiciel de gestion."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-soft"
          : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Copo Solutions - Accueil"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-copo-800 text-white shadow-card transition-all duration-200 group-hover:bg-copo-900 group-hover:scale-105">
              <Layers className="h-5 w-5 text-orange-400" />
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-orange-500 ring-2 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-copo-800 transition-colors">
                  Copo<span className="text-copo-800"> Solutions</span>
                </span>
                <span className="rounded-md bg-copo-50 px-1.5 py-0.5 text-[10px] font-bold text-copo-700 border border-copo-200">
                  MAROC
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Logiciels Comptabilité & Gestion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-copo-800 bg-copo-50/80 font-semibold"
                      : "text-slate-600 hover:text-copo-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-copo-800 transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-slate-400" />
              <span>{siteConfig.whatsappDisplay}</span>
            </a>
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-orange hover:bg-orange-600 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white shadow-sm"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl p-6 animate-slide-up transition-all">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-copo-800 bg-copo-50 px-3 py-2 rounded-lg border border-copo-100">
              <ShieldCheck className="h-4 w-4 text-copo-700" />
              <span>100% Conforme DGI Maroc & SIMPL-IS</span>
            </div>

            <nav className="flex flex-col space-y-1 pt-2">
              {siteConfig.navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-copo-50 text-copo-800 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-center text-sm font-semibold text-white shadow-orange hover:bg-orange-600 transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-white" />
                <span>Commander sur WhatsApp (+212)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 px-2 pt-1">
                <span>Casablanca, Maroc</span>
                <span className="font-semibold text-slate-700">
                  {siteConfig.whatsappDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
