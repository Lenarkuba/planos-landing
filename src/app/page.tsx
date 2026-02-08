import {
  Navbar,
  Hero,
  PainPoints,
  VideoDemo,
  ValuePillars,
  Features,
  Security,
  CtaSection,
  Footer,
} from "@/components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <VideoDemo />
        <ValuePillars />
        <Features />
        <Security />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
