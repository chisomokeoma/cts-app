import { reveal } from "@/lib/motion";

const FLOWS = [
  { label: "ENERGY FLOWS", icon: "/figma/labs-icon-energy.svg" },
  { label: "INFORMATION SIGNALS", icon: "/figma/labs-icon-signal.svg" },
  { label: "MATTER TRANSFERS", icon: "/figma/labs-icon-matter.svg" },
];

/** Figma: Section 14680:1391 — 1440×870, Lab Orange, everything centred. */
export function LabsLivingSystems() {
  return (
    <section className="flex w-full flex-col items-center bg-lab-orange px-6 py-[80px] sm:px-10 lg:h-[870px] lg:justify-center lg:px-[32px] lg:py-[120px]">
      <div className="flex w-full max-w-[1376px] flex-col items-center gap-[32px] text-center text-black">
        <h2
          {...reveal("up")}
          className="font-lab-mono text-lab-h2-sm uppercase sm:text-lab-h2"
        >
          We think in systems.
          <br />
          We build with intelligence.
        </h2>

        <div
          {...reveal("up", 100)}
          className="flex flex-col gap-[12px] font-grotesk text-lab-body-lg-sm opacity-90 sm:text-lab-body-lg"
        >
          <p>
            Every environment is a system. Every system has inputs, flows, and
            coordination points.
          </p>
          <p>
            At Cofrastructure Labs, we apply{" "}
            <strong className="font-bold">Living Systems Theory</strong> to
            infrastructure. We break it down like a body:
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-[40px] gap-y-[12px] lg:gap-x-[103px]">
          {FLOWS.map((flow, i) => (
            <li
              key={flow.label}
              {...reveal("up", 200 + i * 120)}
              className="flex items-center gap-[8px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={flow.icon} className="block size-[24px]" />
              <span className="font-lab-mono text-lab-tag text-black/90">
                {flow.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
