import { PageHeader } from '@/components/page-header';
import type { LegalDocument } from '@/data/legal';
import { formatDate } from '@/lib/utils';

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <PageHeader title={document.title} description={document.description} />
      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-sm text-slate-500">Dernière mise à jour : {formatDate(document.updatedAt)}</p>
          <div className="mt-10 space-y-12">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
