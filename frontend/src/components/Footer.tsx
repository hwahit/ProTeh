"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-navy-dark py-10 relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gold"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-lg">TECHPRO</span>
            <span className="text-white font-light text-lg">SOLUTIONS</span>
          </div>
          <p className="text-white/40 text-xs text-center">
            {t.footer.tagline}
          </p>
          <p className="text-white/40 text-xs text-center">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
