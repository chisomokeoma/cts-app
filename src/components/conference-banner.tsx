const LogoMark = () => (
  <span className="relative block size-[24px] shrink-0 lg:h-[32.591px] lg:w-[32px]">
    <span className="absolute inset-[-1.72%_-2.59%_-1.72%_-1.75%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src="/figma/logo-mark.svg"
        className="block size-full max-w-none"
      />
    </span>
  </span>
);

const ITEMS = [
  { text: "MILLER LARKIN GLOBAL CONFERENCE 2026", mark: true },
  { text: "\u201CTech for all\u201D", mark: false },
  { text: "MILLER LARKIN GLOBAL CONFERENCE 2026", mark: true },
  { text: "\u201CTech for all\u201D", mark: true },
];

/**
 * Figma: banner 14707:18155 — 1440×64 at y=846, straddling the seam between the
 * hero (0–870) and the ecosystem section (868–…). White fill, 2px black rules.
 *
 * Kept in normal flow and pulled up 24px so it overlaps the hero's last 24px;
 * the ecosystem section then pulls up 42px to land back on y=868. Expressing the
 * overlap as margins rather than a fixed `top` keeps the seam correct however
 * tall the hero grows on a narrow viewport.
 */
export function ConferenceBanner() {
  return (
    <div className="pointer-events-none relative z-10 -mt-[24px] h-[64px] w-full overflow-hidden border-y-2 border-black bg-white">
      {/* Figma bleeds the pattern 19.625px past the left edge of the 1440 frame;
          below that width it is simply centred so both ends stay symmetrical. */}
      <span
        aria-hidden
        className="absolute top-[-8.5px] left-1/2 h-[75px] w-[1473.125px] -translate-x-1/2 min-[1473px]:left-[-19.625px] min-[1473px]:translate-x-0"
      >
        <span className="absolute inset-[-0.7%_0_-0.74%_0]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/banner-patterns.svg"
            className="block size-full max-w-none"
          />
        </span>
      </span>

      {/*
        Two identical tracks sit side by side and each slides left by 100% of
        its own width, so the moment the first clears the viewport the second is
        exactly where the first began — a seamless loop with no jump.
      */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        {[0, 1].map((track) => (
          <div
            key={track}
            aria-hidden={track === 1}
            className="flex shrink-0 animate-marquee items-center gap-12 pr-[48px] sm:gap-[80px] sm:pr-[80px] lg:gap-[140px] lg:pr-[140px]"
          >
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center gap-2 p-2"
              >
                <span className="font-tight text-[16px] leading-5 font-semibold whitespace-nowrap text-black sm:text-[19px] sm:leading-[23px] lg:text-[23px] lg:leading-[27px]">
                  {item.text}
                </span>
                {item.mark ? <LogoMark /> : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
