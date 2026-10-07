import { ConferenceBanner } from "@/components/conference-banner";
import { EcosystemSection } from "@/components/ecosystem-section";
import { Hero } from "@/components/hero";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/**
 * Figma: Landing page 14701:16359.
 * The design is authored on a 1440 frame, but every band is full-bleed — the
 * frame width caps the *content*, not the section backgrounds. So each section
 * spans 100% and centres its own container.
 *
 * The banner sits in normal flow between the hero and the ecosystem section and
 * pulls itself up so it straddles the seam; that keeps the overlap correct no
 * matter how tall the hero grows on a given viewport.
 *
 * The Figma frame runs 60px past the footer, but that is empty canvas, not
 * page — the page ends where the footer does.
 */
export default function LandingPage() {
  return (
    <PageTransition>
      <main className="relative flex w-full flex-col items-stretch overflow-x-hidden">
        <SiteHeader />
        <Hero />
        <ConferenceBanner />
        <EcosystemSection />
        <SiteFooter />
      </main>
    </PageTransition>
  );
}
