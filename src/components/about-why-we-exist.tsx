import { SectionEyebrow } from "@/components/section-eyebrow";
import { reveal } from "@/lib/motion";

/**
 * Figma: Section 14626:9904 — 1440×892, white, 176px side padding.
 *
 * The stack is 48px of top padding, a 752-wide copy block, a 32px gap, then the
 * 1088×580 image and 32px of bottom padding — which is exactly the 892.
 */
export function AboutWhyWeExist() {
  return (
    <section className="-mt-[2px] flex w-full flex-col items-center gap-[32px] bg-white px-6 pb-[32px] sm:px-10 lg:px-[176px]">
      <div className="flex w-full max-w-[752px] flex-col items-center gap-[8px] pt-[48px]">
        <div {...reveal("up")}>
          <SectionEyebrow className="text-grey-10">Why we exist</SectionEyebrow>
        </div>

        <h2
          {...reveal("up", 100)}
          className="w-full text-center font-body text-[30px] leading-[36px] tracking-[-0.48px] text-grey-14 sm:text-[38px] sm:leading-[46px] lg:text-quote lg:leading-[56px]"
        >
          &ldquo;Technology is only worth building if it improves a real
          life.&rdquo;
        </h2>

        <p
          {...reveal("up", 200)}
          className="w-full max-w-[712px] text-center font-body text-lead text-black"
        >
          We start from the person and the need. Then we build the system that
          serves it — not the other way round. People first; technology in
          service of them.
        </p>
      </div>

      {/* Figma 14671:386 — 1088×580, radius 30.391, with a 20% black wash. */}
      <div
        {...reveal("scale", 150)}
        className="group relative aspect-[1088/580] w-full overflow-hidden rounded-[30.391px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/figma/about-why.png"
          className="absolute inset-0 size-full max-w-none object-cover object-center transition-[scale] duration-[1600ms] ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
