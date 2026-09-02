import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";
import { CookieConsentProvider } from "@/components/landing/cookie-banner";
import { ConsentAnalytics } from "@/components/landing/analytics";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
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
  "System dla agencji castingowych, statystów i hostess: baza talentów, castingi i nabory, potwierdzenia, listy obecności i pliki dla księgowości w jednym miejscu. RODO w standardzie.";

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
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <CookieConsentProvider>
          {children}
          <ConsentAnalytics />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
