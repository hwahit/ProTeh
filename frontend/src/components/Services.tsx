"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Services() {
  const { t } = useLang();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p data-reveal className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">
            {t.services.title}
          </p>
          <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.services.subtitle}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {t.services.items.map((service, idx) => {
            const isOpen = expanded === service.id;
            return (
              <div
                key={service.id}
                data-reveal
                style={{ transitionDelay: `${idx * 0.05}s` }}
                className={`bg-dark-card border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-gold/40 glow-gold" : "border-dark-border hover:border-white/20"
                }`}
              >
                <button
                  className="w-full flex items-start gap-4 p-6 text-left"
                  onClick={() => toggle(service.id)}
                >
                  <span className="text-2xl font-bold text-gold/50 leading-none flex-shrink-0">
                    {service.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block bg-dark-border text-muted text-xs font-medium px-2 py-0.5 rounded mb-1.5">
                      {service.tag}
                    </span>
                    <h3 className="text-white font-bold text-base">{service.name}</h3>
                    <p className="text-muted text-sm mt-1 line-clamp-2">{service.description}</p>
                  </div>
                  <svg
                    className={`w-4 h-4 text-muted flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-dark-border">
                    <div className="pt-5 grid sm:grid-cols-2 gap-5">
                      <div>
                        <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-3">
                          {t.services.deliverables_label}
                        </p>
                        <ul className="space-y-2">
                          {service.deliverables.map((d, i) => (
                            <li key={i} className="flex gap-2 text-sm text-muted">
                              <span className="text-gold mt-0.5 flex-shrink-0">›</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sm:border-l sm:border-dark-border sm:pl-5 space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                            {t.services.pricing_label}
                          </p>
                          <p className="text-gold font-bold text-sm">{service.pricing}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                            {t.services.timeline_label}
                          </p>
                          <p className="text-white/80 text-sm">{service.timeline}</p>
                        </div>
                        <a
                          href="#contact"
                          className="inline-block bg-gold hover:bg-gold-light text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                        >
                          {t.nav.contact} →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
