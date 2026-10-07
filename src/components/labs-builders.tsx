import { LabButton } from "@/components/labs-button";
import { reveal } from "@/lib/motion";

/**
 * Figma: Section 14680:1423 — 1440×404, a full-bleed photo fill (cover).
 *
 * The fill carries an image filter, exposure −0.86, which is what turns the
 * dusk photo nearly to night. Exposure is a multiply in linear light — it
 * crushes shadows harder than highlights — so a black overlay can't reproduce
 * it. It is baked into labs-builders.jpg instead, fitted against Figma's own
 * render of this frame.
 */
export function LabsBuilders() {
  return (
    <section className="group relative w-full overflow-hidden bg-black">
      <div aria-hidden className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/figma/labs-builders.jpg"
          className="block size-full max-w-none object-cover object-center transition-[scale] duration-[2000ms] ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center py-[80px] lg:h-[404px]">
        <div className="flex w-full max-w-[812px] flex-col gap-[16px] px-6 text-white sm:px-10 lg:px-[80px]">
          <h2
            {...reveal("up")}
            className="font-lab-mono text-lab-h2-sm uppercase sm:text-lab-h2"
          >
            This is a lab
            <br />
            for builders
          </h2>

          <p
            {...reveal("up", 100)}
            className="font-grotesk text-lab-body-sm opacity-90 sm:text-lab-body"
          >
            We&rsquo;re recruiting engineers, theorists, developers, and
            partners who think in
            <br className="hidden lg:block" /> systems and move with courage.
          </p>

          <div {...reveal("up", 200)} className="flex pt-[16px]">
            <LabButton
              tone="glass-faint"
              href="/contact"
              icon="/figma/labs-icon-workflow.svg"
              className="h-[57px] gap-[8px] px-[24px] hover:border-white/20 hover:bg-white/10"
            >
              COLLABORATE WITH US
            </LabButton>
          </div>
        </div>
      </div>
    </section>
  );
}
