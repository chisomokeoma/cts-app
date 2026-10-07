"use client";

import Link from "next/link";
import { useState } from "react";

import { LabButton } from "@/components/labs-button";

const NAV_LINKS = [
  { label: "Projects", href: "#systems" },
  { label: "Papers", href: "#papers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Figma: Nav 14680:1437 — 1440×88, Black 5% under a 12px backdrop blur,
 * overlaid on the hero. Logo, links and CTA are spread with space-between,
 * which is what lands the link group at x 540.5 in the design.
 */
export function LabsHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 animate-header-in bg-black/5 backdrop-blur-[12px]">
      <nav className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-6 py-[16px] sm:px-10 lg:px-[80px]">
        <Link
          href="/cofrastructure-labs"
          aria-label="Cofrastructure Labs"
          onClick={() => setOpen(false)}
          className="block aspect-[192/36.55] w-[158px] shrink-0 transition-opacity duration-300 hover:opacity-75 sm:w-[192px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/labs-logo.svg"
            className="block size-full max-w-none"
          />
        </Link>

        <ul className="hidden items-center gap-[32px] lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative font-grotesk text-lab-nav text-white/80 uppercase transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-[4px] after:h-px after:origin-left after:scale-x-0 after:bg-lab-orange after:transition-transform after:duration-300 after:ease-out hover:text-white hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[12px]">
          <LabButton
            tone="nav"
            href="#systems"
            icon="/figma/labs-icon-lab.svg"
            className="hidden h-[56px] gap-[8px] px-[24px] sm:flex"
          >
            ENTER THE LAB
          </LabButton>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-[42px] items-center justify-center rounded-4 border border-white/25 lg:hidden"
          >
            <span className="relative block h-[12px] w-[18px]">
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-white transition-transform ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-[5px] left-0 block h-[1.5px] w-full bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-white transition-transform ${
                  open ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="animate-fade-in border-t border-white/10 bg-black/85 px-6 pt-[8px] pb-[20px] backdrop-blur-sm sm:px-10 lg:hidden">
          <ul className="flex flex-col items-stretch">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-[12px] font-grotesk text-lab-nav text-white/80 uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LabButton
            tone="solid"
            href="#systems"
            icon="/figma/labs-icon-lab.svg"
            className="mt-[8px] h-[56px] justify-center gap-[8px] px-[24px] sm:hidden"
          >
            ENTER THE LAB
          </LabButton>
        </div>
      ) : null}
    </header>
  );
}
