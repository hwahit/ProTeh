"use client";

import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p data-reveal className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">
              {t.about.title}
            </p>
            <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Votre partenaire tech,<br />
              <span className="gradient-text">de A à Z</span>
            </h2>
            <p data-reveal className="text-muted leading-relaxed text-base">
              {t.about.text}
            </p>
          </div>

          {/* Service list card */}
          <div data-reveal="right" className="bg-dark-card border border-dark-border rounded-2xl p-8 glow-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl" />
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-6">
              IT Services Catalog 2026
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud & DevOps",
                "UI/UX Design",
                "Cybersecurity",
                "AI & Automation",
                "Translation",
                "Training",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                  <span className="text-white/70 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
