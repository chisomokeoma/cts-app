import { reveal } from "@/lib/motion";

/** Figma: FOOTER 14736:806 — fill Gray/50, px 96, pt 80, pb 32. */
export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="flex w-full flex-col items-center overflow-hidden bg-gray-50 px-6 pt-[48px] pb-[32px] sm:px-10 lg:px-[96px] lg:pt-[80px]"
    >
      <div className="flex w-full max-w-[1248px] flex-col items-start gap-[32px]">
        {/* CTA card — Figma Section 14701:16480, 1248×400, radius 10 */}
        <section
          id="partner"
          {...reveal("up")}
          className="group relative flex w-full flex-col items-start overflow-hidden rounded-10 lg:aspect-[1248/400] lg:min-h-[400px] lg:pb-[95.41px]"
        >
          {/*
            Figma stacks a 1248×520 image container flush to the card's bottom
            edge (so it starts 120px above the 400px card) and crops the bitmap
            inside it at top 20.68% / height 159.97%. Folded together and
            re-expressed against the card itself that is top -3.125% / height
            207.95% — same result, but it no longer needs a fixed-aspect wrapper
            that would blow out the width on a narrow card. Below `lg` the card
            is taller than the design, so the art simply covers.
          */}
          <div aria-hidden className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/cta-card-bg.png"
              className="absolute inset-0 h-[180%] w-[180%] max-w-none object-cover object-left-top transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04] md:h-full md:object-[0%_18%] lg:inset-auto lg:top-[-3.125%] lg:left-[0.03%] lg:h-[207.95%] lg:w-full lg:object-fill"
            />
          </div>

          <div className="relative flex w-full flex-col items-center gap-[16px] px-6 py-[56px] sm:px-10 lg:px-0 lg:pt-[63.395px] lg:pb-0">
            <div
              {...reveal("up", 120)}
              className="flex w-full max-w-[836px] flex-col items-center"
            >
              <h2 className="text-center font-display text-[32px] leading-[36px] text-white sm:text-[40px] sm:leading-[44px] lg:text-h3 lg:leading-(--text-h3--line-height) lg:whitespace-nowrap">
                Want to work with Miller Larkin?
                <br />
                Let&rsquo;s talk.
              </h2>
            </div>

            <div
              {...reveal("up", 220)}
              className="flex w-full max-w-[575px] flex-col items-center opacity-80"
            >
              <p className="text-center font-ui text-[16.9px] leading-[27px] font-medium text-white lg:whitespace-nowrap">
                Have a problem worth solving or a partnership in mind? Tell us
                about it.
              </p>
            </div>

            <div
              {...reveal("up", 320)}
              className="flex w-full items-start justify-center px-[24px] pt-[12px]"
            >
              <a
                href="/contact"
                className="flex h-[48px] w-full max-w-[279px] items-center justify-center rounded-32 bg-white font-ui text-cta whitespace-nowrap text-black transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)]"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>

        {/* Legal row — Figma Container 14701:16492 */}
        <div
          {...reveal("fade", 150)}
          className="flex w-full flex-col items-center gap-[20px] sm:flex-row sm:justify-center sm:gap-0"
        >
          <div className="flex flex-col items-start opacity-65">
            <span className="font-ui text-meta whitespace-nowrap text-grey-10">
              © 2026 Miller Larkin. Miller Larkin is a brand of CTS Ltd (RC
              1831271).
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
