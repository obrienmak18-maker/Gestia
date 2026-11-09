import { ClipboardCheck, Download, MessageCircle, Wallet } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Contactez-nous sur WhatsApp',
    description: 'Indiquez le logiciel qui vous intéresse et votre besoin, nous vous répondons rapidement.',
  },
  {
    icon: ClipboardCheck,
    title: 'Confirmez votre commande',
    description: 'Nous validons ensemble le produit, le nombre de postes et le prix final.',
  },
  {
    icon: Wallet,
    title: 'Paiement par virement ou transfert',
    description: 'Réglez par virement bancaire ou transfert, avec les coordonnées communiquées à la confirmation.',
  },
  {
    icon: Download,
    title: 'Réception du logiciel',
    description: 'Votre logiciel et sa licence vous sont envoyés par e-mail ou via Google Drive.',
  },
];

export function OrderSteps() {
  return (
    <section className="bg-brand-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta-100">Simple et rapide</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight md:text-4xl">
            Comment commander en 4 étapes
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            className="pointer-events-none absolute left-7 top-7 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-white/10 via-white/40 to-white/10 md:block"
            aria-hidden
          />
          {STEPS.map((step, index) => (
            <li key={step.title} className="group relative flex flex-col items-start md:items-center md:text-center">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-black/20 transition-transform duration-300 group-hover:-translate-y-1">
                <step.icon className="h-6 w-6" aria-hidden />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cta text-xs font-bold text-cta-ink">
                  {index + 1}
                </span>
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
