"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
    >
      {/* Diagonal gold accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gold opacity-90"
        style={{ clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-navy-light opacity-60"
        style={{ clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0% 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-40">
        <div className="max-w-3xl">
          <div className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Paris — France
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            TECHPRO{" "}
            <span className="text-gold">SOLUTIONS</span>
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90 mb-4">
            {t.hero.tagline}
          </p>
          <p className="text-base text-white/65 max-w-xl mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-gold hover:bg-gold-light text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Service tags */}
      <div className="absolute bottom-36 left-0 right-0 z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {[
              "Web Development",
              "Mobile Apps",
              "Cloud & DevOps",
              "UI/UX Design",
              "Cybersecurity",
              "AI & Automation",
              "Translation",
              "Training",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
