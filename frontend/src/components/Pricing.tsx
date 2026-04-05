"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Pricing() {
  const { t } = useLang();

  const rows = t.services.items.map((s) => ({
    name: s.name,
    pricing: s.pricing,
    timeline: s.timeline,
  }));

  return (
    <section id="pricing" className="py-20 bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.pricing.title}
          </h2>
          <p className="text-white/60 text-base">{t.pricing.subtitle}</p>
        </div>

        {/* Table */}
        <div className="bg-navy-light/40 border border-white/10 rounded-2xl overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-navy-dark/60 px-6 py-3">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">
              {t.pricing.service}
            </span>
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider text-center">
              {t.pricing.startingPrice}
            </span>
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider text-end">
              {t.pricing.timeline}
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 items-center px-6 py-4 ${
                i < rows.length - 1 ? "border-b border-white/8" : ""
              } hover:bg-white/5 transition-colors duration-150`}
            >
              <span className="text-white/90 text-sm font-medium">
                {row.name}
              </span>
              <span className="text-gold font-bold text-sm text-center">
                {row.pricing}
              </span>
              <span className="text-white/60 text-sm text-end">
                {row.timeline}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-white/35 text-xs mt-6">
          * {t.footer.note}
        </p>
      </div>
    </section>
  );
}
