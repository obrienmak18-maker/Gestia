import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { PageHeader } from '@/components/page-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SITE } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Copo Solutions par WhatsApp, e-mail ou via le formulaire. Une question sur un logiciel Sage ou JBS ? Notre équipe vous répond.',
  alternates: { canonical: '/contact' },
};

const CONTACT_DETAILS = [
  { icon: Phone, label: 'Téléphone et WhatsApp', value: SITE.whatsappDisplay, href: buildWhatsAppUrl() },
  { icon: Mail, label: 'E-mail', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: 'Adresse', value: SITE.address, href: undefined },
  { icon: Clock, label: 'Horaires', value: SITE.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question sur un logiciel, un devis pour plusieurs postes ou besoin d'aide pour votre installation ? Nous sommes à votre écoute."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nos coordonnées</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Le moyen le plus rapide de nous joindre reste WhatsApp. Vous pouvez aussi nous écrire par e-mail ou via le formulaire.
              </p>
            </div>

            <ul className="space-y-4">
              {CONTACT_DETAILS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block font-semibold text-slate-900 transition-colors hover:text-brand">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <WhatsAppButton href={buildWhatsAppUrl()} className="w-full sm:w-auto" label="Écrire sur WhatsApp" />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Envoyez-nous un message</h2>
            <p className="mt-2 text-sm text-slate-500">Les champs marqués d'un astérisque sont obligatoires.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
