import { delay } from "@/lib/motion";

/**
 * Figma: Section 14626:9901 — 1440×870, a full-bleed still over white.
 *
 * Figma centres the copy inside a 900-tall container pinned to the top of the
 * 870 section, so it lands 17px above the section's own centre. That box is
 * reproduced literally at the design width; below it the section is shorter
 * than 900 and the copy simply centres on the section instead.
 */
export function AboutHero() {
  return (
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-white sm:min-h-[680px] lg:min-h-[870px]">
      <div aria-hidden className="absolute inset-0 animate-hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/figma/about-hero.png"
          className="absolute inset-0 size-full max-w-none object-cover object-center"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1728px] flex-col items-center px-6 pb-[64px] sm:px-10 lg:absolute lg:inset-x-0 lg:top-0 lg:h-[900px] lg:justify-center lg:px-[80px]">
        <div
          style={delay(150)}
          className="flex w-full max-w-[356px] animate-rise flex-col items-center pt-[32px] pb-[24px]"
        >
          <p className="font-body text-lead text-grey-96 uppercase">About Miller Larkin</p>
        </div>

        <div className="flex w-full max-w-[772px] flex-col items-center gap-[15px]">
          <h1
            style={delay(280)}
            className="w-full animate-rise text-center font-body text-[36px] leading-[40px] text-grey-99 sm:text-[48px] sm:leading-[52px] lg:text-h1 lg:leading-[64px]"
          >
            Technology built around people
          </h1>
          <p
            style={delay(410)}
            className="w-full max-w-[712px] animate-rise text-center font-body text-[18px] leading-[22px] text-white"
          >
            Miller Larkin is a technology company applying AI
            and engineering to build automated micro-infrastructure solutions
            that improve how people live.
          </p>
        </div>
      </div>
    </section>
  );
}
