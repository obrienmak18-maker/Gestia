import Link from 'next/link';
import { ArrowRight, BadgeCheck, CheckCircle2, Users } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const TRUST_POINTS = [
  'Conforme à la loi de finances marocaine',
  'Installation accompagnée avec vidéo',
  'Livraison rapide par e-mail ou Google Drive',
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(255,122,0,0.22),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(127,169,227,0.28),transparent_45%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div>
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md">
            <BadgeCheck className="h-4 w-4 text-cta" aria-hidden />
            Éditeur de logiciels de gestion au Maroc
          </span>

          <h1 className="animate-fade-up mt-6 text-4xl font-bold leading-[1.1] tracking-tight [animation-delay:100ms] sm:text-5xl lg:text-6xl">
            Des logiciels de comptabilité et de gestion <span className="text-cta">prêts à l'emploi</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-blue-100 [animation-delay:200ms]">
            Sage, JBS et leurs packs complets, livrés rapidement et installés avec accompagnement.
            Commandez en quelques minutes, sans vous déplacer.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-4 [animation-delay:300ms] sm:flex-row">
            <Link
              href="#catalogue"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              Découvrir nos solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <WhatsAppButton href={buildWhatsAppUrl()} className="px-7" />
          </div>

          <ul className="animate-fade-up mt-10 space-y-3 [animation-delay:400ms]">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-blue-50">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cta" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up relative [animation-delay:250ms]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-cta/10 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40">
            <img
              src="https://images.pexels.com/photos/7654131/pexels-photo-7654131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Deux professionnels travaillant ensemble sur un ordinateur portable et une calculatrice"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:-right-6 sm:left-auto">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-cta-ink">
              <Users className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Licence multi-postes</p>
              <p className="text-xs text-blue-100">Pour votre équipe ou votre cabinet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
