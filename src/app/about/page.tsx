import type { Metadata } from "next";

import { AboutDivisions } from "@/components/about-divisions";
import { AboutHero } from "@/components/about-hero";
import { AboutWhatWeDo } from "@/components/about-what-we-do";
import { AboutWhyWeExist } from "@/components/about-why-we-exist";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Miller Larkin",
  description:
    "Miller Larkin is a systems design company. We find where the systems people depend on break down, and design them to work.",
};

/**
 * Figma: Company 14626:9903 — 1440×4062.59.
 *
 * Every section in the frame is drawn 2px into the one above it, so each band
 * below the hero pulls itself back up by that much. It is invisible at a glance
 * but it is what keeps the running total on the design's 4062.59.
 */
export default function AboutPage() {
  return (
    <PageTransition>
      <main className="relative flex w-full flex-col items-stretch overflow-x-hidden">
        <SiteHeader />
        <AboutHero />
        <AboutWhyWeExist />
        <AboutWhatWeDo />
        <AboutDivisions />
        <div className="-mt-[2px]">
          <SiteFooter />
        </div>
      </main>
    </PageTransition>
  );
}
