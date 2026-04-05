"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Services() {
  const { t } = useLang();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            {t.services.title}
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {t.services.items.map((service) => {
            const isOpen = expanded === service.id;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Header row */}
                <button
                  className="w-full flex items-start gap-4 p-6 text-left"
                  onClick={() => toggle(service.id)}
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-bold text-gold leading-none">
                      {service.id}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-2 py-0.5 rounded mb-1">
                      {service.tag}
                    </span>
                    <h3 className="text-navy font-bold text-lg">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className={`w-5 h-5 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expanded details */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4 grid sm:grid-cols-2 gap-4">
                      {/* Deliverables */}
                      <div>
                        <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                          {t.services.deliverables_label}
                        </p>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((d, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600">
                              <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing & timeline */}
                      <div className="space-y-4 sm:border-l sm:border-gray-100 sm:pl-4">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                            {t.services.pricing_label}
                          </p>
                          <p className="text-gold font-bold text-base">
                            {service.pricing}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                            {t.services.timeline_label}
                          </p>
                          <p className="text-navy font-medium text-sm">
                            {service.timeline}
                          </p>
                        </div>
                        <a
                          href="#contact"
                          className="inline-block bg-navy hover:bg-navy-light text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
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
