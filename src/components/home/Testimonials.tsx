import React from "react";
import { Star, Quote, Building, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/60 px-3 py-1 rounded-full border border-copo-200">
            Témoignages Clients Maroc
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Ils font confiance à Copo Solutions pour leur gestion
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Plus de 500 fiduciaires, experts-comptables et entreprises à
            Casablanca, Rabat, Tanger et Marrakech s&apos;appuient sur nos solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-card border border-slate-200/90 transition-all duration-300 hover:shadow-elevated hover:border-copo-300"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-copo-200" />
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author & Moroccan City info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role} • {item.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-semibold text-copo-700 bg-copo-50 px-2.5 py-1 rounded-md border border-copo-200">
                    {item.city} 🇲🇦
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1">
                    {item.softwareUsed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
