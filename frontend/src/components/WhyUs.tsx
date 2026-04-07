"use client";

import { useLang } from "@/lib/LanguageContext";

const icons = ["🏆", "⚖️", "🌍", "🔗", "💎", "🛡️"];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <p data-reveal className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">
            {t.why.subtitle}
          </p>
          <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white">
            {t.why.title}
          </h2>
        </div>

        <div data-reveal-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.items.map((item, i) => (
            <div
              key={i}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 hover:glow-gold transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-dark border border-dark-border rounded-lg flex items-center justify-center mb-4 text-lg group-hover:border-gold/30 transition-colors">
                {icons[i]}
              </div>
              <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
