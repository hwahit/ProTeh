"use client";

import { useLang } from "@/lib/LanguageContext";

const icons = ["🏆", "⚖️", "🌍", "🔗", "💎", "🛡️"];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            {t.why.title}
          </h2>
          <p className="text-gray-500 text-base">{t.why.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4 text-xl group-hover:bg-gold/20 transition-colors">
                {icons[i]}
              </div>
              <h3 className="font-bold text-navy text-base mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
