import type { Metadata } from "next";
import { LandingNav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Platform } from "@/components/landing/platform";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Founder } from "@/components/landing/founder";
import { Security } from "@/components/landing/security";
import { DemoVideo } from "@/components/landing/demo-video";
import { Pricing } from "@/components/landing/pricing";
import { Faq, FAQ_ITEMS } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { LandingFooter } from "@/components/landing/footer";
import { CONTACT_EMAIL, LEGAL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "PlanOS",
      legalName: LEGAL.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      email: CONTACT_EMAIL,
      taxID: LEGAL.nip,
      vatID: `PL${LEGAL.nip}`,
      identifier: [
        { "@type": "PropertyValue", name: "NIP", value: LEGAL.nip },
        { "@type": "PropertyValue", name: "REGON", value: LEGAL.regon },
        { "@type": "PropertyValue", name: "PKD", value: LEGAL.pkd },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: LEGAL.streetAddress,
        postalCode: LEGAL.postalCode,
        addressLocality: LEGAL.city,
        addressCountry: LEGAL.country,
      },
      description:
        "PlanOS to producent oprogramowania (SaaS) dla agencji castingowych, statystów i hostess: baza talentów, castingi i nabory, potwierdzenia, listy obecności, pliki dla księgowości i eksport ZUS. Dane każdej agencji są przetwarzane w oddzielonej przestrzeni, zgodnie z RODO.",
      knowsAbout: [
        "oprogramowanie dla agencji castingowych",
        "oprogramowanie dla agencji hostess",
        "baza talentów",
        "RODO",
        "eksport ZUS",
      ],
      areaServed: "PL",
    },
    {
      "@type": "SoftwareApplication",
      name: "PlanOS",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "pl",
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      provider: { "@id": ORGANIZATION_ID },
      description:
        "System (oprogramowanie SaaS) dla agencji castingowych, statystów i hostess: baza talentów, castingi i nabory, potwierdzenia, listy obecności, pliki dla księgowości i eksport ZUS. Dane oddzielone dla każdej agencji, RODO w standardzie.",
      offers: {
        "@type": "Offer",
        name: "Cena startowa",
        priceCurrency: "PLN",
        price: "499",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "499",
          priceCurrency: "PLN",
          billingIncrement: 1,
          unitText: "miesiąc",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="lp-root min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingNav />
      <main>
        <Hero />
        <Platform />
        <Features />
        <HowItWorks />
        <Founder />
        <Pricing />
        <Security />
        <DemoVideo />
        <Faq />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
