"use client";

import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="w-12 h-1 bg-gold mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              {t.about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {t.about.text}
            </p>
          </div>

          {/* Visual card */}
          <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
            <div
              className="absolute bottom-0 right-0 w-48 h-48 bg-gold opacity-20 rounded-full"
              style={{ transform: "translate(30%, 30%)" }}
            />
            <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              IT Services Catalog 2026
            </h3>
            <div className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud & DevOps",
                "UI/UX Design",
                "Cybersecurity",
                "AI & Automation",
                "Translation Services",
                "Training & Education",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-white/80 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
