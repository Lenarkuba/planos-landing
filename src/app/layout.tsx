import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlanOS - Profesjonalna platforma do zarządzania castingami i artystami",
  description:
    "Automatyzuj obecność, dokumentację ZUS i zgodność z RODO. Platforma dla agencji castingowych i domów produkcyjnych.",
  keywords: [
    "casting",
    "zarządzanie artystami",
    "agencja castingowa",
    "dom produkcyjny",
    "ZUS",
    "RODO",
    "obecność",
    "statyści",
    "epizodyści",
    "aktorzy",
  ],
  authors: [{ name: "PlanOS" }],
  openGraph: {
    title: "PlanOS - Profesjonalne zarządzanie castingami",
    description:
      "Automatyzuj zgłosznia, dokumentację ZUS i zgodność z RODO. Platforma dla agencji castingowych i domów produkcyjnych.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
