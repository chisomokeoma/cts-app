import type { CSSProperties } from "react";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { reveal } from "@/lib/motion";

const DIVISIONS = [
  {
    title: "Cofrastructure Labs",
    body: "Our research division. Cofrastructure Labs develops and tests the Miller Larkin systems framework on real-world problems.",
  },
  {
    title: "InfraMobile",
    body: "Our infrastructure division. InfraMobile designs modular, mobile infrastructure that brings essential services, such as clean water and healthcare, to where they are needed.",
  },
];

/** Each square drifts on its own path and phase so the stack never moves in lockstep. */
const drift = (x: string, y: string, r: string, delayMs: number) =>
  ({
    "--drift-x": x,
    "--drift-y": y,
    "--drift-r": r,
    "--motion-delay": `${delayMs}ms`,
  }) as CSSProperties;

/**
 * Figma: "Left" 14668:367 — three dashed 52.453×52.596 squares, the top two
 * rotated, tucked against the card's right edge at 30% opacity.
 *
 * The group is 86.638 wide inside a 614.005 card, sitting 24.867 from its right
 * edge; anchoring it on the right keeps it there as the card flexes.
 *
 * Figma blends it in COLOR mode, and Figma composites a frame's children as an
 * isolated group — so the squares blend with the card only. The card is marked
 * `isolate` to match. Without it the blend reaches through to the black page,
 * where COLOR takes the page's near-zero luminosity and the squares vanish;
 * they only showed while the scroll reveal happened to isolate the card.
 */
function StackedSquares() {
  return (
    <div
      aria-hidden
      className="absolute top-1/2 right-[24.867px] hidden h-[165.936px] w-[86.638px] -translate-y-[calc(50%+0.21px)] opacity-30 mix-blend-color transition-opacity duration-700 group-hover:opacity-70 sm:block"
    >
      <span
        style={drift("-3px", "-7px", "-6deg", 0)}
        className="absolute top-0 left-0 flex h-[65.144px] w-[65.047px] animate-drift items-center justify-center"
      >
        <span className="h-[52.596px] w-[52.453px] rotate-[-16.2deg] rounded-10 border border-dashed border-[#d0d6dd]" />
      </span>
      <span
        style={drift("4px", "-5px", "5deg", -2300)}
        className="absolute top-[55.01px] left-[22.54px] flex h-[64.202px] w-[64.1px] animate-drift items-center justify-center"
      >
        <span className="h-[52.596px] w-[52.453px] rotate-[14.73deg] rounded-10 border border-dashed border-[#d3d9df]" />
      </span>
      <span
        style={drift("-2px", "-6px", "-3deg", -4600)}
        className="absolute top-[113.34px] left-[5.89px] block h-[52.596px] w-[52.453px] animate-drift rounded-10 border border-dashed border-[#d9dee2]"
      />
    </div>
  );
}

/** Figma: Section 14627:10343 — 1440×870, black, 96px side / 120px top padding. */
export function AboutDivisions() {
  // The Figma frame is a fixed 870 with its content centred, so the height is
  // declared rather than left to the padding to produce.
  return (
    <section className="-mt-[2px] flex w-full flex-col items-center justify-center gap-[40px] bg-black px-6 py-[72px] sm:px-10 lg:min-h-[870px] lg:px-[96px] lg:py-[120px]">
      <div
        {...reveal("up")}
        className="flex w-full max-w-[1248px] flex-col items-start justify-center gap-[16px] lg:h-[192.59px]"
      >
        <SectionEyebrow className="text-white">Divisions</SectionEyebrow>

        <h2 className="w-full max-w-[800px] font-display text-[32px] leading-[38px] tracking-[-1.2px] text-white sm:text-[40px] sm:leading-[46px] lg:text-h3 lg:leading-[52.8px]">
          One company. Two divisions.
        </h2>

        <p className="w-full font-ui text-body-md text-white">
          Miller Larkin is the parent company. Each division does one part of
          the work.
        </p>
      </div>

      <div className="flex w-full max-w-[1248px] flex-col items-stretch gap-[19.99px] md:flex-row">
        {DIVISIONS.map((division, i) => (
          <div
            key={division.title}
            {...reveal("up", 120 + i * 150)}
            className="group relative isolate flex min-h-[240px] flex-1 flex-col justify-center gap-[6.4px] overflow-hidden rounded-10 border-[0.5px] border-white/10 bg-white/5 lg:h-[320px]"
          >
            {/* Hover glow, lit from behind the squares. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_110%_at_88%_50%,rgba(145,190,235,0.16),transparent_62%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            <div className="relative w-full pb-[12px]">
              <div className="w-full px-[32px] pt-[31.25px] pb-[0.15px]">
                <h3 className="font-ui text-h4 text-white">{division.title}</h3>
              </div>
            </div>

            <div className="relative w-full max-w-[540px] px-[32px] pb-[24px]">
              <p className="font-ui text-card text-white/80">{division.body}</p>
            </div>

            <StackedSquares />
          </div>
        ))}
      </div>
    </section>
  );
}
