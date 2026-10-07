import { delay } from "@/lib/motion";

const CAPABILITIES = [
  {
    label: "Research",
    src: "/figma/icon-research.svg",
    // Figma: healthicons:integrated-data-and-research-outline 14706:17709
    leaf: "absolute inset-[12.5%_14.88%_12.5%_14.58%]",
  },
  {
    label: "Design",
    src: "/figma/icon-design.svg",
    // Figma: clarity:design-line 14706:17715
    leaf: "absolute inset-0",
  },
  {
    label: "Consultation",
    src: "/figma/icon-consultation.svg",
    // Figma: codicon:ask-compact 14706:17722
    leaf: "absolute inset-0",
  },
  {
    label: "Commercialisation",
    src: "/figma/icon-commercialisation.svg",
    // Figma: hugeicons:exchange-03 14706:17726 — group inset, then a stroke bleed
    leaf: "absolute inset-[8.33%_12.5%]",
    bleed: "absolute inset-[-3.75%_-4.17%]",
  },
];

/**
 * The hero's visible Figma fill is a VIDEO (hash afed64ed…, TILE, 1.4×), not an
 * image, and Figma offers no way to read one back out: the plugin API has no
 * video getter, and the REST API reports the fill as an IMAGE and serves only
 * this still. The clip was supplied separately (H.264, 1280×720, 30s,
 * faststart), and the still stays underneath as its poster and fallback, laid
 * out with identical geometry. Set this to null to fall back to the still.
 */
const HERO_VIDEO_SRC: string | null = "/figma/hero-globe.mp4";

/**
 * Figma: Section 14706:17690 — 1440×870, clipped. The background fill is tiled
 * at 1.4× and anchored top-left, under a 40% black solid.
 *
 * At 1440 the tile is 1792×1008 — larger than the frame in both axes, so only
 * one tile is ever visible. Expressed as a percentage (1792/1440 = 124.444%)
 * that framing scales with the viewport instead of being pinned to 1440, which
 * keeps the globe in the same relative spot on wider screens. Below the design
 * width there isn't enough room for that crop, so it falls back to `cover`.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[620px] w-full items-stretch overflow-hidden bg-black sm:min-h-[720px] lg:min-h-[870px]">
      <div aria-hidden className="absolute inset-0 animate-hero-bg">
        <div className="absolute inset-0 bg-[url('/figma/hero-globe.png')] bg-cover bg-center bg-no-repeat min-[1440px]:bg-[length:124.444%_auto] min-[1440px]:bg-[position:0_0]" />

        {HERO_VIDEO_SRC ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/figma/hero-globe.png"
            className="absolute top-0 left-0 size-full max-w-none object-cover object-center min-[1440px]:h-auto min-[1440px]:w-[124.444%] min-[1440px]:object-fill"
            src={HERO_VIDEO_SRC}
          />
        ) : null}
      </div>

      <div aria-hidden className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-start justify-center px-6 pt-[120px] pb-[48px] sm:px-10 lg:justify-start lg:px-0 lg:pt-[376px] lg:pb-[62px]">
        <p
          style={delay(150)}
          className="animate-rise font-body text-lead text-grey-96 uppercase"
        >
          Miller Larkin
        </p>

        <h1
          style={delay(280)}
          className="mt-[14px] w-full max-w-[772px] animate-rise font-body text-[36px] leading-[38px] text-grey-99 sm:text-[48px] sm:leading-[50px] lg:mt-[11px] lg:text-h1 lg:leading-[64px]"
        >
          Technology that improves how people live.
        </h1>

        <p
          style={delay(410)}
          className="mt-[24px] w-full max-w-[712px] animate-rise font-body text-lead text-grey-96 lg:mt-[32px]"
        >
          We apply AI and engineering to build automated micro infrastructure
          solutions — the systems people depend on, working the way they should.
        </p>

        <a
          href="#partner"
          style={delay(540)}
          className="mt-[28px] flex min-h-[50px] animate-rise items-center justify-center rounded-30 bg-grey-99 px-[24px] py-[19px] font-body text-link whitespace-nowrap text-grey-6 transition-[background-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_32px_-12px_rgba(255,255,255,0.55)] lg:mt-[32px]"
        >
          Partner With Us
        </a>

        <ul
          style={delay(670)}
          className="mt-[32px] flex w-full animate-rise flex-wrap items-center gap-x-[40px] gap-y-[16px] border-t border-t-white-a10 pt-[33px] lg:w-auto lg:flex-nowrap"
        >
          {CAPABILITIES.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-[6px]"
            >
              <span className="relative size-[16px] shrink-0 overflow-hidden">
                <span className={item.leaf}>
                  <span className={item.bleed ?? "absolute inset-0"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src={item.src}
                      className="block size-full max-w-none"
                    />
                  </span>
                </span>
              </span>
              <span className="font-body text-link whitespace-nowrap text-grey-96">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
