import type { Metadata } from "next";
import { LandingNav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Outcomes } from "@/components/landing/outcomes";
import { Problem } from "@/components/landing/problem";
import { Features } from "@/components/landing/features";
import { Workflow } from "@/components/landing/workflow";
import { Panels } from "@/components/landing/panels";
import { DemoVideo } from "@/components/landing/demo-video";
import { Security } from "@/components/landing/security";
import { Founder } from "@/components/landing/founder";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Faq, FAQ_ITEMS } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { LandingFooter } from "@/components/landing/footer";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "PlanOS",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "pl",
      description:
        "Bezpieczny system dla agencji castingowych i agencji statystów: baza talentów, obsługa castingów, obecności na planie, eksport ZUS i pełna zgodność z RODO.",
      offers: {
        "@type": "Offer",
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
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingNav />
      <main>
        <Hero />
        <Outcomes />
        <Problem />
        <Features />
        <Workflow />
        <Panels />
        <DemoVideo />
        <Security />
        <Founder />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
