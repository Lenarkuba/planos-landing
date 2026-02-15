import {
  Navbar,
  Hero,
  ProblemSection,
  ComparisonSection,
  PanelsSection,
  FeaturesDeepSection,
  WorkflowSection,
  SecuritySection,
  ForWhoSection,
  OriginSection,
  CtaSection,
  Footer,
} from "@/components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ComparisonSection />
        <PanelsSection />
        <FeaturesDeepSection />
        <WorkflowSection />
        <SecuritySection />
        <ForWhoSection />
        <OriginSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
