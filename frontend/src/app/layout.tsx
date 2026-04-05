import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProTech Solutions",
  description: "Your Technology Partner in the Digital Era",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
