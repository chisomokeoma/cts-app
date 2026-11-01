import { LabButton } from "@/components/labs-button";
import { delay } from "@/lib/motion";

/**
 * Figma: Section 14680:1302 — 1440×870 on black. The photo is pinned to the top
 * at 1440×810.11 and a 720-tall black→clear gradient is pinned to the bottom,
 * so the two overlap and the still dissolves into the page. The copy block is
 * centred on the section (constraints CENTER/CENTER).
 */
export function LabsHero() {
  return (
    <section className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden bg-black sm:min-h-[760px] lg:h-[870px] lg:min-h-0">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[93.116%] animate-hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/figma/labs-hero.jpg"
          className="block size-full max-w-none object-cover object-center"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[82.759%] bg-linear-to-t from-black to-transparent"
      />

      <div className="relative flex w-full max-w-[1440px] flex-col items-center gap-[8px] px-6 pt-[88px] pb-[7.5px] sm:px-10 lg:px-[32px] lg:pt-0">
        <div style={delay(200)} className="flex w-full animate-rise flex-col pb-[16px]">
          <h1 className="text-center font-lab-mono text-lab-display-sm text-white sm:text-lab-display-md lg:text-lab-h1">
            BUILDING THE
            <br />
            FUTURE OF INFRASTRUCTURE
          </h1>
        </div>

        <div
          style={delay(350)}
          className="flex w-full max-w-[857px] animate-rise flex-col items-center pb-[32px]"
        >
          <p className="text-center font-grotesk text-lab-lead-sm text-white/80 sm:text-lab-lead">
            Cofrastructure Labs is the research division of Miller Larkin. We
            develop the framework, tools and methods used to diagnose and
            <br className="hidden lg:block" /> design essential systems.
          </p>
        </div>

        <div style={delay(500)} className="animate-rise">
          <LabButton tone="solid" href="#systems" className="h-[56px] px-[32px]">
            ENTER THE LAB
          </LabButton>
        </div>
      </div>
    </section>
  );
}
