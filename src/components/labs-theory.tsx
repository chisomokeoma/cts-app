import { LabButton } from "@/components/labs-button";
import { reveal } from "@/lib/motion";

/**
 * Figma: Section 14680:1409 — 1440×870 on black. The copy column is in flow and
 * vertically centred; the image is pinned right (80.2 in from the content edge)
 * and centred on its own, so it is positioned absolutely at the design width.
 *
 * Both links are wired in the Figma prototype to scroll back to the systems
 * section; they follow that until real paper URLs exist.
 */
export function LabsTheory() {
  return (
    <section
      id="papers"
      className="flex w-full justify-center bg-black px-6 py-[80px] sm:px-10 lg:h-[870px] lg:items-center lg:px-[32px] lg:py-[120px]"
    >
      <div className="relative flex w-full max-w-[1376px] flex-col gap-[48px] lg:flex-row lg:items-center">
        <div className="flex w-full max-w-[688px] flex-col gap-[24px] text-white">
          <h2
            {...reveal("left")}
            className="font-lab-mono text-lab-h2-sm uppercase sm:text-lab-h2"
          >
            Theory is
            <br />
            our weapon.
          </h2>

          <p
            {...reveal("left", 100)}
            className="font-grotesk text-lab-body-sm opacity-90 sm:text-lab-body"
          >
            Before we build, we write. Our concept papers and frameworks guide
            <br className="hidden lg:block" /> everything we launch.
          </p>

          <div
            {...reveal("left", 200)}
            className="flex flex-wrap gap-x-[32px] gap-y-[12px]"
          >
            <LabButton
              tone="glass"
              href="#systems"
              icon="/figma/labs-icon-read.svg"
              className="h-[57px] gap-[12px] px-[24px] hover:border-white/25 hover:bg-white/10"
            >
              READ THE CONCEPT PAPER
            </LabButton>
            <LabButton
              tone="glass"
              href="#systems"
              icon="/figma/labs-icon-download.svg"
              className="h-[57px] gap-[12px] px-[24px] hover:border-white/25 hover:bg-white/10"
            >
              DOWNLOAD WHITEPAPER
            </LabButton>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/figma/labs-theory.jpg"
          {...reveal("scale", 250)}
          className="block aspect-[325.8/244.5] w-full max-w-[325.8px] object-cover lg:absolute lg:top-1/2 lg:right-[80.2px] lg:-translate-y-1/2"
        />
      </div>
    </section>
  );
}
