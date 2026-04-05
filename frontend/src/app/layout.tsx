import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "TechPro Solutions — IT Services",
  description:
    "TechPro Solutions — votre partenaire technologique. Web, Mobile, Cloud, Cybersécurité, IA, Traduction, Formation. Paris, France.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
