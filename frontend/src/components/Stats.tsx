"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="bg-navy-dark py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-navy-light/50 border border-white/10 rounded-xl py-8 px-4"
            >
              <span className="text-4xl font-bold text-gold mb-2">
                {stat.value}
              </span>
              <span className="text-white/70 text-sm text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
