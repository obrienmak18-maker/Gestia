import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { SITE } from '@/data/site';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Copo Solutions | Logiciels de comptabilité et de gestion au Maroc',
    template: '%s | Copo Solutions',
  },
  description:
    'Logiciels Sage et JBS pour les entreprises et cabinets comptables au Maroc : comptabilité XML, paie IR EDI, liasse fiscale et ERP. Conformes à la loi de finances, livrés rapidement.',
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn('font-sans bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white')}>
        <SiteHeader />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
