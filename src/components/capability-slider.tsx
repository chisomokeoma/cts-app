"use client";

import { useState, type CSSProperties } from "react";

import { delay } from "@/lib/motion";

/**
 * Figma freezes the active pill's fill at 88.04% (`inset-[0_11.96%_0_0]`),
 * which only reads as a frame of an in-flight animation — a static design can't
 * express the duration, so the interval below is a judgement call.
 *
 * The bar is also the clock: the slider advances on the bar's `animationend`,
 * so the next slide starts the instant the fill completes and the two can
 * never drift apart.
 */
const SLIDE_DURATION_MS = 4000;

/**
 * Figma: "Art bento" 14658:4379 — 506×327.261, sitting inside the 720×460
 * panel at top 113.55. All four slides hang their illustration here.
 */
function ArtFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none absolute bottom-[6%] left-1/2 aspect-[506/327.261] w-[70.28%] -translate-x-1/2 lg:bottom-auto lg:top-[24.68%]">
      {children}
    </div>
  );
}

/**
 * Slide 01's art was exported from Figma as real vectors before the file's MCP
 * quota ran out, so every offset below is the Figma pixel value re-expressed as
 * a percentage of the 506×327.261 frame — the diagram scales with the panel
 * instead of being pinned to the design width. The rotated connectors are
 * anchored by their centre and then rotated, which is equivalent to Figma's
 * rotated bounding box but survives the container changing size.
 */
function ResearchArt() {
  return (
    <ArtFrame>
      {/* Diamond + AI glyph — Figma 14651:98 */}
      <div className="absolute top-[50.089%] left-0 aspect-square w-[19.366%] -translate-y-1/2">
        <span className="absolute top-[-0.459%] left-[-0.031%] h-full w-[99.606%]">
          <span className="absolute inset-[-0.45%_-0.46%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/slide1-line2.svg"
              className="block size-full max-w-none"
            />
          </span>
        </span>
        <span className="absolute top-[9.093%] left-[10.021%] h-[80%] w-[80.012%]">
          <span className="absolute inset-[-0.57%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/slide1-line1.svg"
              className="block size-full max-w-none"
            />
          </span>
        </span>
        <span className="absolute top-[37.564%] left-[36.85%] aspect-square w-[25.455%] overflow-hidden">
          <span className="absolute inset-[10.94%_10.93%_10.93%_10.94%]">
            <span className="absolute inset-[-2.29%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/figma/slide1-ai.svg"
                className="block size-full max-w-none"
              />
            </span>
          </span>
        </span>
      </div>

      {/*
        Four output cards — Figma 14651:120. Their own heights (4 × 57.014) plus
        the three 33.068 gaps come to exactly 327.26, the frame height, so
        `justify-between` reproduces the spacing without hard-coding the gap.
      */}
      <div className="absolute inset-y-0 left-[88.733%] flex w-[11.268%] flex-col justify-between">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={delay(i * 300)}
            className="block aspect-square w-full animate-tile-pulse rounded-[20%] border-[0.445px] border-blue-600/50 bg-white shadow-[0px_0.891px_2.673px_0px_rgba(10,13,18,0.1),0px_0.891px_1.782px_0px_rgba(10,13,18,0.06)]"
          />
        ))}
      </div>

      {/* Connector from the diamond into the spine — Figma 14651:173 */}
      <span className="absolute top-[48.997%] left-[19.895%] h-[1.497%] w-[28.169%]">
        <span className="absolute inset-[-4.55%_-0.21%_-4.55%_-0.16%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/slide1-arrow-a.svg"
            className="block size-full max-w-none"
          />
        </span>
      </span>

      {/* Spine, up and down — Figma 14651:732 / 14651:808 */}
      <span className="absolute top-[29.466%] left-[48.723%] h-[1.497%] w-[25.792%] -translate-x-1/2 -translate-y-1/2 -rotate-90 -scale-y-100">
        <span className="absolute inset-[-4.55%_-0.23%_-4.55%_-0.17%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/slide1-arrow-up.svg"
            className="block size-full max-w-none"
          />
        </span>
      </span>
      <span className="absolute top-[69.751%] left-[48.723%] h-[1.497%] w-[25.792%] -translate-x-1/2 -translate-y-1/2 rotate-90">
        <span className="absolute inset-[-4.55%_-0.23%_-4.55%_-0.17%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/slide1-arrow-down.svg"
            className="block size-full max-w-none"
          />
        </span>
      </span>

      {/* Spine into each card — Figma 14651:256 / 432 / 532 / 632 */}
      {[
        { top: "9.527%", src: "/figma/slide1-arrow-1.svg" },
        { top: "35.387%", src: "/figma/slide1-arrow-2.svg" },
        { top: "62.335%", src: "/figma/slide1-arrow-3.svg" },
        { top: "88.467%", src: "/figma/slide1-arrow-4.svg" },
      ].map((arrow) => (
        <span
          key={arrow.src}
          style={{ top: arrow.top }}
          className="absolute left-[49.472%] h-[1.497%] w-[38.468%]"
        >
          <span className="absolute inset-[-4.55%_-0.15%_-4.55%_-0.11%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={arrow.src}
              className="block size-full max-w-none"
            />
          </span>
        </span>
      ))}
    </ArtFrame>
  );
}

/**
 * Slides 02–04 — each exported from Figma as one SVG in the panel's own 720×460
 * space (Design 14656:3616, Consultation 14658:4340, Commercialization
 * 14658:5045), with the panel fill, wash, border and heading copy stripped out
 * because the panel below already draws those. What is left sits exactly where
 * Figma puts it, so the file only has to cover the panel.
 *
 * Below `lg` the panel is taller than 720×460 and its copy stacks on top, so
 * the art keeps its aspect ratio and anchors to the bottom edge instead — at
 * the design size that box is the whole panel. It is pushed out over the
 * panel's 0.5px border because Figma measures the art from the frame's outer
 * edge, not from inside the stroke.
 */
function PanelArt({ src }: { src: string }) {
  return (
    <div className="pointer-events-none absolute -inset-x-[0.5px] -bottom-[0.5px] aspect-[720/460]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src={src} className="block size-full max-w-none" />
    </div>
  );
}

const DesignArt = () => <PanelArt src="/figma/slide2-art.svg" />;
const ConsultationArt = () => <PanelArt src="/figma/slide3-art.svg" />;
const CommercializationArt = () => <PanelArt src="/figma/slide4-art.svg" />;

/**
 * Figma: component set 14629:11621 — `Property 1` = Default / Variant2 /
 * Variant3 / Variant4, each 1248×460.
 */
const SLIDES: {
  n: string;
  division: string | null;
  heading: string;
  body: string;
  Art?: () => React.JSX.Element;
}[] = [
  {
    n: "01",
    division: "Cofrastructure Labs",
    heading: "Research",
    body: "We apply AI to find technology solutions to infrastructure problems, using our own engineering framework.",
    Art: ResearchArt,
    // Art: DesignArt,
  },
  {
    n: "02",
    division: "InfraMobile",
    heading: "Design",
    body: "We design and develop the hardware.",
    Art: DesignArt,
  },
  {
    // Variant3 carries a "Cofrastructure Labs" label, but the layer is hidden.
    n: "03",
    division: null,
    heading: "Consultation",
    body: "We advise on automated micro infrastructure solutions.",
    Art: ConsultationArt,
  },
  {
    // Figma leaves Variant4's division label empty — commercialisation is the
    // one step that isn't owned by a single division.
    n: "04",
    division: null,
    heading: "Product Commercialization",
    body: "We bring the technology to market, including partnering to do so.",
    Art: CommercializationArt,
  },
];

export function CapabilitySlider() {
  const [active, setActive] = useState(0);
  // Only a keyboard user parked inside the slider holds it (WCAG 2.2.2), and
  // the bar freezes in place rather than restarting. Hover deliberately does
  // not pause: it stalled the slider under the cursor of anyone watching it.
  // Reduced motion needs no state — the bar has no animation there, so it
  // never ends and the slider never advances on its own.
  const [paused, setPaused] = useState(false);

  const advance = () => setActive((i) => (i + 1) % SLIDES.length);
  const slide = SLIDES[active];

  return (
    <div
      style={{ "--slide-duration": `${SLIDE_DURATION_MS}ms` } as CSSProperties}
      onFocusCapture={(e) => {
        if (e.target instanceof HTMLElement && e.target.matches(":focus-visible"))
          setPaused(true);
      }}
      onBlurCapture={() => setPaused(false)}
      className="relative flex w-full flex-col gap-[32px] lg:h-[460px] lg:flex-row lg:gap-[125px] lg:pl-[44px]"
    >
      {/* Figma 14629:11575 — the rail only exists beside the left column. */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 hidden w-px bg-grey-10/8 lg:block"
      />

      <div className="flex w-full flex-col justify-center gap-[32px] lg:h-[460px] lg:w-[359px] lg:shrink-0 lg:gap-[100.01px] lg:pt-[15.45px] lg:pb-[16px]">
        <div key={active} className="animate-slide-in">
          <p className="font-display text-[48px] leading-[52.8px] tracking-[-1.2px] text-blue-600 sm:text-numeral sm:leading-[79.2px] sm:tracking-[-1.8px]">
            {slide.n}
          </p>
          {slide.division ? (
            <p className="font-ui text-numeral-label text-blue-800 uppercase">
              {slide.division}
            </p>
          ) : null}
        </div>

        <div
          role="tablist"
          aria-label="Capabilities"
          className="flex h-[36px] w-fit items-center gap-[8px] rounded-full border-[0.5px] border-blue-600/10 bg-blue-600/[0.04] px-[16px]"
        >
          {SLIDES.map((item, i) => (
            <button
              key={item.n}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`${item.n} — ${item.heading}`}
              onClick={() => setActive(i)}
              className="flex h-[36px] items-center"
            >
              {i === active ? (
                <span className="block h-[6px] w-[50px] overflow-hidden rounded-full bg-blue-600/20">
                  {/* Keyed on the index so the fill restarts each slide. */}
                  <span
                    key={active}
                    onAnimationEnd={advance}
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                    className="block h-full w-full origin-left animate-slide-progress rounded-full bg-blue-600"
                  />
                </span>
              ) : (
                <span className="block size-[6px] rounded-full bg-blue-600/20" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Figma 14629:11619 — 720×460 panel, Azure 4 fill on an Azure 6 hairline. */}
      <div className="relative min-h-[360px] w-full overflow-hidden rounded-8 border-[0.5px] border-card-logo-border bg-card-logo sm:min-h-[420px] lg:h-[460px] lg:max-h-[460px] lg:min-h-0 lg:w-[720px] lg:shrink-0">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 h-[119.57%] w-[123.61%] -translate-x-1/2 -translate-y-1/2 opacity-10 mix-blend-luminosity"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/slide-bg.png"
            className="block size-full max-w-none"
          />
        </div>

        {/* Absolute so the art keeps the panel as its containing block while
            the entrance transform runs on this wrapper. */}
        {slide.Art ? (
          <div key={active} className="absolute inset-0 animate-art-in">
            <slide.Art />
          </div>
        ) : null}

        <div
          key={`copy-${active}`}
          style={delay(120)}
          className="relative z-10 flex animate-slide-in flex-col gap-[8px] px-[24px] pt-[24px] lg:absolute lg:top-[5.978%] lg:right-[12.014%] lg:left-[5.486%] lg:px-0 lg:pt-0"
        >
          <h3 className="font-ui text-h4 text-grey-10">{slide.heading}</h3>
          <p className="min-h-[72px] font-ui text-[14.9px] leading-[24px] font-medium tracking-[0.16px] text-grey-10/80">
            {slide.body}
          </p>
        </div>
      </div>
    </div>
  );
}
