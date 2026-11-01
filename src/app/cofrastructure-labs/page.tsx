import type { Metadata } from "next";

import { LabsBuilders } from "@/components/labs-builders";
import { LabsFooter } from "@/components/labs-footer";
import { LabsHeader } from "@/components/labs-header";
import { LabsHero } from "@/components/labs-hero";
import { LabsLivingSystems } from "@/components/labs-living-systems";
import { LabsSystems } from "@/components/labs-systems";
import { LabsTheory } from "@/components/labs-theory";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Cofrastructure Labs | Building the future of infrastructure",
  description:
    "Cofrastructure Labs is the research division of Miller Larkin, developing the framework used to diagnose and design the systems people depend on.",
};

/**
 * Figma: Cofrastructure Labs 14680:1275 — 1440×3975: four 870 sections, a 404
 * call-out and a 91 footer on black, with its own nav laid over the hero.
 */
export default function CofrastructureLabsPage() {
  return (
    <PageTransition>
      <main className="relative flex w-full flex-col items-stretch overflow-x-hidden bg-black">
        <LabsHeader />
        <LabsHero />
        <LabsSystems />
        <LabsLivingSystems />
        <LabsTheory />
        <LabsBuilders />
        <LabsFooter />
      </main>
    </PageTransition>
  );
}
