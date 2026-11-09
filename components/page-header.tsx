type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/80 to-white">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-24">
        {eyebrow && (
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-up mt-3 text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 [animation-delay:100ms] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 [animation-delay:200ms]">
            {description}
          </p>
        )}
        {children && <div className="animate-fade-up mt-8 [animation-delay:300ms]">{children}</div>}
      </div>
    </section>
  );
}
