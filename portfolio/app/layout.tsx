import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miryam Yeo — Développeuse Full Stack",
  description: "Portfolio de Miryam Yeo Canidanan, développeuse full stack basée à Abidjan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
