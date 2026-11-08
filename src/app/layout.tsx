import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/data/siteConfig";
import { OrganizationJsonLd } from "@/components/common/JsonLd";

export const viewport: Viewport = {
  themeColor: "#0B3C8C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Copo Solutions | Logiciels de Comptabilité & Gestion au Maroc",
    template: "%s | Copo Solutions Maroc",
  },
  description:
    "Vente de logiciels de comptabilité et de gestion au Maroc (Pack JBS, Sage ECF V19, Pack Sage 100 complet, Sage X3). Conforme Loi de Finances, SIMPL-IS et télédéclarations XML.",
  keywords: [
    "logiciel comptabilité maroc",
    "pack jbs maroc",
    "sage 100 maroc",
    "sage etats comptables et fiscaux maroc",
    "sage x3 maroc",
    "liasse fiscale xml simpl dgi",
    "paie maroc edi 9421",
    "expert comptable maroc logiciel",
  ],
  authors: [{ name: "Copo Solutions", url: siteConfig.url }],
  creator: "Copo Solutions SARL",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteConfig.url,
    title: "Copo Solutions | Logiciels de Comptabilité & Gestion au Maroc",
    description:
      "Logiciels certifiés DGI Maroc : Pack JBS, Sage ECF V19.10, Sage 100 complet, Sage X3 V12. Licence ouverte multiposte et installation accompagnée.",
    siteName: "Copo Solutions Maroc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copo Solutions | Logiciels de Comptabilité au Maroc",
    description:
      "Vente de logiciels comptables et ERP certifiés DGI au Maroc avec assistance et livraison immédiate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="flex min-h-screen flex-col font-sans text-slate-900 bg-slate-50 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
