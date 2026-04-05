"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 text-base">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="bg-navy rounded-2xl p-8 text-white space-y-6 relative overflow-hidden">
            <div
              className="absolute bottom-0 right-0 w-56 h-56 bg-gold opacity-10 rounded-full"
              style={{ transform: "translate(30%, 30%)" }}
            />
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              AgilTechs SAS
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">✉</span>
                </div>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  {t.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">📞</span>
                </div>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  {t.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">📍</span>
                </div>
                <span className="text-white/80 text-sm">{t.contact.location}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/50 text-xs">
                {t.footer.rights}
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                {t.contact.form.subject}
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                {t.contact.form.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            {status === "sent" && (
              <p className="text-green-600 text-sm font-medium">
                ✓ Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">
                Une erreur est survenue. Réessayez.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-white font-semibold py-3 rounded-full transition-colors duration-200 text-sm"
            >
              {status === "sending" ? "..." : t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
