"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-dark border-t border-dark-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="font-bold text-lg gradient-text">AgilTechs</span>
            <span className="text-white/30 text-sm ml-1">SAS</span>
          </div>
          <p className="text-muted/50 text-xs text-center">{t.footer.tagline}</p>
          <p className="text-muted/50 text-xs text-center">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
