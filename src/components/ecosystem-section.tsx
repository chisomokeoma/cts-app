import { reveal } from "@/lib/motion";

type CompanyLink = { label: string; href: string };

function LinkRow({ links }: { links: CompanyLink[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[16px]">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="group flex flex-col items-start overflow-hidden py-[4px]"
        >
          <span className="flex items-center justify-center gap-[2px]">
            <span className="font-ui text-[12px] leading-[12px] tracking-[-0.5px] whitespace-nowrap text-black/90 transition-colors duration-300 group-hover:text-blue-600">
              {link.label}
            </span>
            <span className="relative size-[12px] shrink-0 overflow-hidden transition-[translate] duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/figma/icon-arrow.svg"
                className="absolute inset-0 block size-full max-w-none"
              />
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

/** The logo tile's hover: the hairline warms to azure and the card lifts. */
const TILE_HOVER =
  "transition-[border-color,box-shadow] duration-500 ease-out hover:border-blue-600/40 hover:shadow-[0_24px_48px_-28px_rgba(0,81,236,0.45)]";

/**
 * Figma: Section - companies-section 14732:629 — 1440×800.59, fill #FBFDFF.
 * The -42px pull sets the section box back onto y=868 underneath the banner
 * (see conference-banner for the seam maths). The banner only reaches 42px into
 * the section, so the section's own 64px top padding keeps content clear of it.
 */
export function EcosystemSection() {
  return (
    <section
      id="about"
      className="-mt-[42px] flex w-full flex-col items-center justify-center bg-canvas-ecosystem px-6 py-[64px] sm:px-10 lg:px-[80px]"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-[24px]">
        <div
          {...reveal("up")}
          className="flex w-full max-w-[1248px] flex-col items-center justify-center gap-[16px] lg:h-[192.59px]"
        >
          <div className="flex w-full items-center justify-center gap-[9px] pb-[4px]">
            <span className="size-[6px] shrink-0 rounded-full bg-accent" />
            <h2 className="font-ui text-[15.5px] leading-[24px] font-medium whitespace-nowrap text-grey-10 uppercase">
              The Miller Larkin Ecosystem
            </h2>
          </div>
          <div className="flex w-full flex-col items-center">
            <p className="max-w-[900px] text-center font-ui text-[16.7px] leading-[27px] font-medium text-grey-10 lg:max-w-none lg:whitespace-nowrap">
              A growing ecosystem of companies and initiatives turning research,
              engineering, and technology into solutions that improve how people
              live.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[48px] md:flex-row md:gap-[24px]">
          {/* Cofrastructure Labs — Figma 14732:639 */}
          <div
            id="cofrastructure-labs"
            {...reveal("up", 100)}
            className="flex w-full min-w-px flex-col items-start gap-[20px] md:flex-1"
          >
            <div
              className={`group relative h-[220px] w-full overflow-hidden rounded-4 border-[0.5px] border-card-logo-border bg-card-logo sm:h-[304px] ${TILE_HOVER}`}
            >
              <div className="absolute top-[calc(50%+0.41px)] left-[calc(50%+0.1px)] flex w-[336.197px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden transition-[scale] duration-700 ease-out group-hover:scale-[1.05]">
                <span className="relative block aspect-[336.214/64] w-full shrink-0 overflow-hidden">
                  <span className="absolute inset-[1.66%_0.12%_1.66%_0.32%]">
                    <span className="absolute inset-[-1.72%_0_-1.72%_-0.32%]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt="Cofrastructure Labs"
                        src="/figma/cofrastructure-logo.svg"
                        className="block size-full max-w-none"
                      />
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-[374.4px] flex-col items-start gap-[16px]">
              <div className="flex w-full flex-col items-center justify-center gap-[8px]">
                <div className="flex w-full items-center gap-[8px]">
                  <h3 className="font-ui text-[15.3px] leading-[16px] font-medium tracking-[-0.5px] text-black/90">
                    Cofrastructure Labs
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start opacity-80">
                  <p className="w-full font-ui text-[15.1px] leading-[18px] font-medium tracking-[-0.25px] text-black/90">
                    A research division applying AI and engineering to identify
                    practical solutions to infrastructure challenges, using
                    Miller Larkin&rsquo;s own engineering framework.
                  </p>
                </div>
              </div>
              <LinkRow
                links={[
                  { label: "Website", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "Careers", href: "#" },
                ]}
              />
            </div>
          </div>

          {/* InfraMobile — Figma 14732:731 */}
          <div
            id="inframobile"
            {...reveal("up", 220)}
            className="flex w-full min-w-px flex-col items-start gap-[20px] md:flex-1"
          >
            <div
              className={`group relative h-[220px] w-full overflow-hidden rounded-4 border-[0.5px] border-card-logo-border bg-card-logo sm:h-[304px] ${TILE_HOVER}`}
            >
              {/*
                Figma masks a solid black rectangle with the logo bitmap
                (14732:733), so the mark renders as a black silhouette.
              */}
              <span
                aria-label="InfraMobile"
                role="img"
                className="absolute top-1/2 left-1/2 block aspect-[253.741/64.068] w-[253.741px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 bg-black transition-[scale] duration-700 ease-out group-hover:scale-[1.05]"
                style={{
                  maskImage: "url(/figma/inframobile-mask.png)",
                  maskSize: "contain",
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                  WebkitMaskImage: "url(/figma/inframobile-mask.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />
              <span className="pointer-events-none absolute inset-[-0.5px] rounded-4 border border-white/20" />
            </div>

            <div className="flex w-full max-w-[374.4px] flex-col items-start gap-[16px]">
              <div className="flex w-full flex-col items-center justify-center gap-[8px]">
                <div className="flex w-full items-center gap-[8px]">
                  <h3 className="font-ui text-[15.5px] leading-[16px] font-medium tracking-[-0.5px] text-black/90">
                    InfraMobile
                  </h3>
                </div>
                <div className="flex w-full flex-col items-start opacity-80">
                  <p className="w-full font-ui text-[15.3px] leading-[18px] font-medium tracking-[-0.25px] text-black/90">
                    InfraMobile combines data analytics, rapid diagnostics, and
                    modular deployment to strengthen essential systems across
                    areas such as clean water and resilient healthcare.
                  </p>
                </div>
              </div>
              <LinkRow
                links={[
                  { label: "Website", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
