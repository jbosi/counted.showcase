import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counted – L'alternative à Tricount",
  description: "Application de gestion de comptes entre amis, open source, gratuite, respectueuse de la vie privée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
