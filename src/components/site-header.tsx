"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Cofrastructure Labs", href: "/cofrastructure-labs" },
  { label: "InfraMobile", href: "/#inframobile" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/** Figma: Header 14701:16911 — 1440×70, fill Black 10%, overlaid on the hero. */
export function SiteHeader({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const isLight = variant === "light";

  return (
    <header
      className={`inset-x-0 top-0 z-20 flex animate-header-in flex-col items-stretch ${
        isLight ? "relative bg-grey-99" : "absolute bg-black-a10"
      }`}
    >
      <nav className="relative mx-auto flex min-h-[70px] w-full max-w-[1312px] items-center px-6 py-[14px] sm:px-10 lg:px-16">
        <Link
          href="/"
          className="relative block h-[32px] w-[130px] shrink-0 transition-opacity duration-300 hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          <img
            alt="Miller Larkin"
            src={
              isLight
                ? "/figma/miller-logo-transparent-dark.png"
                : "/figma/miller-logo-transparent.png"
            }
            className="absolute inset-0 size-full object-contain object-left"
          />
        </Link>

        <ul className="absolute top-[18px] left-1/2 hidden h-[34px] -translate-x-1/2 items-start gap-[8px] lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`relative flex items-center rounded-4 px-[12px] py-[8px] font-body text-link whitespace-nowrap after:absolute after:inset-x-[12px] after:bottom-[5px] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-[12px]">
          <a
            href="/contact"
            className={`hidden h-[42px] items-center justify-center rounded-30 px-[16px] py-[12px] font-body text-link whitespace-nowrap transition-[background-color,translate] duration-300 ease-out hover:-translate-y-0.5 sm:flex ${
              isLight
                ? "bg-black text-white hover:bg-grey-14"
                : "bg-grey-99 text-grey-6 hover:bg-white"
            }`}
          >
            Partner With Us
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex size-[42px] items-center justify-center rounded-30 border lg:hidden ${
              isLight ? "border-black/25" : "border-white/25"
            }`}
          >
            <span className="relative block h-[12px] w-[18px]">
              <span
                className={`absolute left-0 block h-[1.5px] w-full transition-transform ${
                  isLight ? "bg-black" : "bg-white"
                } ${open ? "top-[5px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-[5px] left-0 block h-[1.5px] w-full transition-opacity ${
                  isLight ? "bg-black" : "bg-white"
                } ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full transition-transform ${
                  isLight ? "bg-black" : "bg-white"
                } ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`}
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
                  className="block py-[12px] font-body text-link text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-[8px] flex h-[42px] items-center justify-center rounded-30 bg-grey-99 font-body text-link text-grey-6 sm:hidden"
          >
            Partner With Us
          </a>
        </div>
      ) : null}
    </header>
  );
}
