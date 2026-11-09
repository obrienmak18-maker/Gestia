import type { Metadata } from 'next';
import { Award, BookOpen, Handshake, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Copo Solutions accompagne les entreprises et cabinets comptables au Maroc dans le choix, l\'installation et la prise en main de leurs logiciels de comptabilité et de gestion.',
  alternates: { canonical: '/a-propos' },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Conformité',
    description: 'Nous suivons la loi de finances marocaine pour que vos états et vos déclarations restent fiables.',
  },
  {
    icon: Handshake,
    title: 'Accompagnement',
    description: 'De la commande à la première clôture, nous restons disponibles pour vos équipes.',
  },
  {
    icon: BookOpen,
    title: 'Pédagogie',
    description: 'Des vidéos de formation et des explications claires pour une prise en main rapide.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Une sélection de solutions reconnues : Sage, JBS et leurs packs complets.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="L'expertise logicielle au service des professionnels marocains"
        description="Copo Solutions aide les entreprises et les cabinets comptables à équiper leur activité avec des logiciels de gestion fiables, conformes et faciles à utiliser."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
              Une mission simple : vous faire gagner du temps
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              Entre la tenue de la comptabilité, la paie, les déclarations fiscales et le pilotage de l'activité, les professionnels marocains manipulent chaque jour une quantité d'informations considérable. Un logiciel adapté fait toute la différence.
            </p>
            <p>
              Copo Solutions sélectionne et distribue des solutions reconnues du marché, comme le Pack JBS, Sage États Comptables et Fiscaux, le Pack Sage 100 complet et Sage X3. Nous vous conseillons sur le produit le plus adapté à votre taille et à votre activité.
            </p>
            <p>
              Nos clients sont des PME, des entreprises en croissance et des cabinets comptables qui gèrent plusieurs dossiers. Pour eux, nous assurons la livraison rapide, l'installation accompagnée et un suivi humain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Nos valeurs</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
              Ce qui guide notre travail au quotidien
            </h2>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {VALUES.map((value) => (
              <li
                key={value.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <value.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Prêt à équiper votre entreprise ou votre cabinet ?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Écrivez-nous sur WhatsApp, nous répondons à vos questions et vous guidons dans votre choix.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={buildWhatsAppUrl()} className="px-8" />
          </div>
        </div>
      </section>
    </>
  );
}
