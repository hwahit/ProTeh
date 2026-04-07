"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { Lang } from "@/lib/translations";

const langLabels: Record<Lang, string> = { fr: "FR", en: "EN", ar: "AR" };

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#why", label: t.nav.why },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-dark-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <span className="font-bold text-xl tracking-tight gradient-text">
            AgilTechs
          </span>
          <span className="text-white/40 font-light text-sm ml-1">SAS</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Lang switcher + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 bg-dark-card border border-dark-border rounded-full px-2 py-1">
            {(["fr", "en", "ar"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  lang === l
                    ? "bg-gold text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-light text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-surface border-t border-dark-border px-4 py-5">
          <ul className="flex flex-col gap-4 mb-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-sm font-medium block transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {(["fr", "en", "ar"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l ? "bg-gold text-white" : "bg-dark-card text-white/60"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
