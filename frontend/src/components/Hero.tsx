"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            data-reveal
            className="inline-flex items-center gap-2 bg-dark-card border border-dark-border text-muted text-xs font-semibold px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Paris — France · IT Services Catalog 2026
          </div>

          {/* Heading */}
          <h1
            data-reveal
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            <span className="gradient-text">AgilTechs</span>
            <br />
            <span className="text-white/90">SAS</span>
          </h1>

          {/* Tagline */}
          <p
            data-reveal
            className="text-xl sm:text-2xl font-light text-white/70 mb-4 max-w-2xl"
          >
            {t.hero.tagline}
          </p>

          <p
            data-reveal
            className="text-base text-muted max-w-xl mb-10 leading-relaxed"
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div data-reveal className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-gold hover:bg-gold-light text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm glow-gold"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="border border-dark-border hover:border-white/40 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          data-reveal-stagger
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 max-w-2xl"
        >
          {t.stats.map((s, i) => (
            <div key={i} className="border-l-2 border-gold/40 pl-4">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
