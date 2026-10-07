import { CapabilitySlider } from "@/components/capability-slider";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { reveal } from "@/lib/motion";

/**
 * Figma: Section 14626:10134 — 1440×876.59.
 *
 * 80px top padding, a 1248×192.59 centred copy block, a 64px gap, then the
 * 1248×460 slider and 80px of bottom padding.
 */
export function AboutWhatWeDo() {
  return (
    <section className="-mt-[2px] flex w-full flex-col items-center bg-white px-6 py-[64px] sm:px-10 lg:px-[96px] lg:py-[80px]">
      <div
        {...reveal("up")}
        className="flex w-full max-w-[1248px] flex-col items-center justify-center gap-[16px] lg:h-[192.59px]"
      >
        <SectionEyebrow className="text-grey-10">What we do</SectionEyebrow>

        <h2 className="w-full max-w-[800px] text-center font-display text-[32px] leading-[38px] tracking-[-1.2px] text-grey-10 sm:text-[40px] sm:leading-[46px] lg:text-h3 lg:leading-[52.8px]">
          Four ways in. One outcome.
        </h2>

        <p className="w-full text-center font-ui text-body-md text-grey-10">
          Miller Larkin meets a problem wherever it sits and takes it through to a working
          solution — on our own, or in partnership.
        </p>
      </div>

      <div
        {...reveal("up", 150)}
        className="mt-[40px] w-full max-w-[1248px] lg:mt-[64px]"
      >
        <CapabilitySlider />
      </div>
    </section>
  );
}
