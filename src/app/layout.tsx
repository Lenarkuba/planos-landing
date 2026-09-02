import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PlanOS — system dla agencji castingowych | baza talentów, RODO, ZUS",
  description:
    "PlanOS to bezpieczny system dla agencji castingowych i agencji statystów: baza talentów, obsługa castingów, obecności na planie, eksport ZUS i pełna zgodność z RODO. Twoje dane są oddzielone i tylko Twoje.",
  keywords: [
    "agencja castingowa",
    "agencja statystów",
    "baza talentów",
    "system dla agencji castingowej",
    "RODO",
    "eksport ZUS",
    "lista obecności na planie",
    "casting",
    "statyści",
  ],
  authors: [{ name: "PlanOS" }],
  openGraph: {
    title: "PlanOS — system dla agencji castingowych | baza talentów, RODO, ZUS",
    description:
      "PlanOS to bezpieczny system dla agencji castingowych i agencji statystów: baza talentów, obsługa castingów, obecności na planie, eksport ZUS i pełna zgodność z RODO. Twoje dane są oddzielone i tylko Twoje.",
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "PlanOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanOS — system dla agencji castingowych",
    description:
      "Bezpieczny system dla agencji castingowych: baza talentów, castingi, obecności na planie, eksport ZUS, RODO. Twoje dane są oddzielone i tylko Twoje.",
  },
  robots: { index: true, follow: true },
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
