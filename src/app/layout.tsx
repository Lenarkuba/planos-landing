import type { Metadata } from "next";
import { DM_Sans, Fraunces, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const TITLE =
  "PlanOS — system dla agencji castingowych, statystów i hostess | baza talentów, obecności, ZUS";
const DESCRIPTION =
  "PlanOS to niezależny system (oprogramowanie SaaS) dla agencji castingowych, statystów i hostess: baza talentów, castingi i nabory, potwierdzenia, listy obecności i pliki dla księgowości w jednym miejscu. Nie jesteśmy agencją — dane każdej agencji są oddzielone i tylko jej. RODO w standardzie.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "agencja castingowa",
    "agencja statystów",
    "agencja hostess",
    "agencja eventowa",
    "baza talentów",
    "system dla agencji castingowej",
    "system dla agencji hostess",
    "niezależny system dla agencji",
    "oprogramowanie dla agencji",
    "oprogramowanie dla agencji castingowej",
    "SaaS dla agencji castingowych i hostess",
    "RODO",
    "eksport ZUS",
    "lista obecności",
    "casting",
    "statyści",
    "hostessy",
  ],
  authors: [{ name: "PlanOS" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "PlanOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanOS — cała agencja w jednym systemie",
    description:
      "Baza talentów, castingi i nabory, potwierdzenia, obecności i pliki dla księgowości. Dla agencji castingowych, statystów i hostess.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${dmSans.variable} ${fraunces.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
