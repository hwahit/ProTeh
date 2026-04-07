"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-gold transition-colors";

  return (
    <section id="contact" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <p data-reveal className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">
            {t.contact.title}
          </p>
          <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white">
            {t.contact.subtitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div data-reveal="left" className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-6 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal/5 rounded-full blur-2xl" />
            <p className="text-gold text-xs font-semibold uppercase tracking-widest">AgilTechs SAS</p>

            {[
              { icon: "✉", value: t.contact.email, href: `mailto:${t.contact.email}` },
              { icon: "📞", value: t.contact.phone, href: `tel:${t.contact.phone.replace(/\s/g, "")}` },
              { icon: "📍", value: t.contact.location, href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-9 h-9 bg-dark border border-dark-border rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  {item.icon}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-white/70 hover:text-gold transition-colors text-sm">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-white/70 text-sm">{item.value}</span>
                )}
              </div>
            ))}

            <div className="border-t border-dark-border pt-6">
              <p className="text-muted/50 text-xs">{t.footer.rights}</p>
            </div>
          </div>

          {/* Form */}
          <form data-reveal="right" onSubmit={handleSubmit} className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  {t.contact.form.name}
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  {t.contact.form.email}
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                {t.contact.form.subject}
              </label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                {t.contact.form.message}
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} />
            </div>

            {status === "sent" && (
              <p className="text-teal text-sm font-medium">✓ Message envoyé avec succès !</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">Une erreur est survenue. Réessayez.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold hover:bg-gold-light disabled:opacity-50 text-white font-semibold py-3.5 rounded-full transition-colors text-sm glow-gold"
            >
              {status === "sending" ? "..." : t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
