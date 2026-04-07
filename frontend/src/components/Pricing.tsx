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
    <section id="pricing" className="py-24 bg-dark-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p data-reveal className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">
            {t.pricing.title}
          </p>
          <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white">
            {t.pricing.subtitle}
          </h2>
        </div>

        <div data-reveal className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-dark/60 px-6 py-3 border-b border-dark-border">
            <span className="text-muted text-xs font-semibold uppercase tracking-wider">{t.pricing.service}</span>
            <span className="text-muted text-xs font-semibold uppercase tracking-wider text-center">{t.pricing.startingPrice}</span>
            <span className="text-muted text-xs font-semibold uppercase tracking-wider text-end">{t.pricing.timeline}</span>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 items-center px-6 py-4 hover:bg-white/3 transition-colors ${
                i < rows.length - 1 ? "border-b border-dark-border/60" : ""
              }`}
            >
              <span className="text-white/80 text-sm font-medium">{row.name}</span>
              <span className="text-gold font-bold text-sm text-center">{row.pricing}</span>
              <span className="text-muted text-sm text-end">{row.timeline}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted/50 text-xs mt-5">* {t.footer.note}</p>
      </div>
    </section>
  );
}
