import Link from "next/link";

type Tone = "solid" | "nav" | "glass" | "glass-faint";

const TONES: Record<Tone, string> = {
  solid: "bg-lab-orange text-black",
  nav: "bg-black/10 text-white backdrop-blur-[8.5px] hover:text-black focus-visible:text-black",
  glass: "border-[0.5px] border-white/8 bg-white/5 text-white backdrop-blur-[8.5px]",
  "glass-faint": "border-[0.5px] border-white/5 bg-white/3 text-white backdrop-blur-[8.5px]",
};

/**
 * The Labs page's buttons. The solid and nav buttons each carry a white
 * "Background" layer parked one button-width off to the left, inset 2px, which
 * only makes sense as a hover wipe — so it slides in on hover/focus. The glass
 * links have no such layer and stay static.
 */
export function LabButton({
  href,
  tone,
  icon,
  className = "",
  children,
}: {
  href: string;
  tone: Tone;
  icon?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const wipes = tone === "solid" || tone === "nav";

  return (
    <Link
      href={href}
      className={`group relative isolate flex items-center overflow-hidden rounded-4 py-[16px] font-grotesk text-lab-button whitespace-nowrap transition-colors duration-300 ${TONES[tone]} ${className}`}
    >
      {wipes ? (
        <span
          aria-hidden
          className="absolute inset-[2px] -z-10 -translate-x-[calc(100%+4px)] rounded-[2px] bg-white transition-transform duration-300 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0 motion-reduce:transition-none"
        />
      ) : null}
      {icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="" src={icon} className="block size-[24px] shrink-0" />
      ) : null}
      <span>{children}</span>
    </Link>
  );
}
