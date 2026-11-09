import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ_ITEMS } from '@/data/faq';

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Questions fréquentes</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
            Vous avez une question ?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Les réponses aux demandes les plus courantes de nos clients. Pour un besoin précis, écrivez-nous.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-shadow duration-300 hover:shadow-md data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-900 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
