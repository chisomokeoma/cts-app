import { reveal } from "@/lib/motion";

const SYSTEMS = [
  {
    title: "Engineers of coordination",
    body: "Building systems that orchestrate complex infrastructure networks and enable seamless coordination between multiple stakeholders.",
  },
  {
    title: "Coders of system logic",
    body: "Developing intelligent protocols and algorithms that power the decision-making processes within infrastructure systems.",
  },
  {
    title: "Architects of post-crisis resilience",
    body: "Designing infrastructure that can adapt, recover, and thrive in the face of disruption and changing environmental conditions.",
  },
];

/**
 * Figma: Section 14680:1312 — 1440×870, Sand fill, content centred.
 *
 * Each card holds two things Figma keeps out of sight: a white "Background"
 * layer parked a card-width to the left, and a dark copy of the mark at 0%
 * opacity. Together they describe a hover state — the card wipes to white and
 * the mark and copy flip dark — so that is what hovering does here.
 */
export function LabsSystems() {
  return (
    <section
      id="systems"
      className="flex w-full flex-col items-center bg-lab-sand px-6 py-[72px] sm:px-10 lg:h-[870px] lg:justify-center lg:px-[80px] lg:py-[96px]"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-[32px]">
        <h2
          {...reveal("up")}
          className="font-lab-mono text-lab-h2-sm text-black uppercase sm:text-lab-h2"
        >
          Reinventing Systems
          <br />
          by Design.
        </h2>

        <p
          {...reveal("up", 100)}
          className="max-w-[688px] font-grotesk text-lab-body-sm text-black opacity-90 sm:text-lab-body"
        >
          Cofrastructure Labs reimagines cities as living systems, redesigning
          <br className="hidden lg:block" /> infrastructure through Matter,
          Energy, and Information.
        </p>

        <ul className="grid gap-[12px] sm:grid-cols-2 lg:grid-cols-3">
          {SYSTEMS.map((system, i) => (
            <li
              key={system.title}
              {...reveal("up", 150 + i * 120)}
              className="group relative isolate flex min-h-[300px] flex-col justify-between gap-[48px] overflow-hidden rounded-8 border border-white bg-black px-[24px] py-[32px] lg:h-[300px]"
            >
              <span
                aria-hidden
                className="absolute inset-px -z-10 -translate-x-[calc(100%+2px)] rounded-[7px] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0 motion-reduce:transition-none"
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/figma/labs-mark-light.svg"
                className="block h-[80px] w-[78.62px] transition-[filter,rotate] duration-500 group-hover:rotate-[-8deg] group-hover:invert motion-reduce:transition-none"
              />

              <div className="flex flex-col gap-[4px] text-white transition-colors duration-500 group-hover:text-black motion-reduce:transition-none">
                <h3 className="font-lab-mono text-lab-h4 uppercase">
                  {system.title}
                </h3>
                <p className="font-grotesk text-lab-card opacity-80">
                  {system.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
