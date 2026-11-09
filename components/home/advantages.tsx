import { FileCheck2, MonitorPlay, CloudDownload, Users } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: FileCheck2,
    title: 'Conforme Loi de Finances marocaine',
    description:
      'Des logiciels mis à jour selon la réglementation en vigueur pour produire des déclarations fiables.',
  },
  {
    icon: MonitorPlay,
    title: 'Installation accompagnée avec vidéo',
    description:
      'Un accompagnement pas à pas et des vidéos de formation pour prendre en main votre logiciel rapidement.',
  },
  {
    icon: Users,
    title: 'Licence ouverte multi-postes',
    description:
      'Installez votre logiciel sur plusieurs postes de votre entreprise ou de votre cabinet.',
  },
  {
    icon: CloudDownload,
    title: 'Livraison rapide par e-mail ou Drive',
    description:
      'Recevez votre logiciel et votre licence en ligne, généralement dans la journée.',
  },
];

export function Advantages() {
  return (
    <section id="avantages" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Nos avantages</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
            Tout ce qu'il faut pour travailler sereinement
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {ADVANTAGES.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <item.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
