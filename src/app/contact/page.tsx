import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageTransition } from "@/components/page-transition";
import { SiteHeader } from "@/components/site-header";
import { reveal } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Contact | Miller Larkin",
  description:
    "Tell Miller Larkin about the technology or infrastructure challenge you want to solve.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-grey-99 text-grey-6">
        <SiteHeader variant="light" />

        <section className="grid min-h-[calc(100vh-70px)] grid-cols-1 lg:grid-cols-2">
          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#1594c5] px-8 py-16 sm:px-14 lg:min-h-0 lg:px-[58px] lg:py-[70px]">
            <div aria-hidden className="absolute inset-0 animate-hero-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figma/splash.png"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div
              {...reveal("scale", 200)}
              className="relative flex aspect-[536/461] w-full max-w-[536px] items-center justify-center bg-grey-99 px-8 shadow-[0_0_0_1px_rgba(255,255,255,0.25)] sm:px-16"
            >
              <span
                aria-hidden
                className="absolute top-2 left-0 h-px w-9 bg-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute top-0 left-5 h-3 w-3 border-b border-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute top-2 right-0 h-px w-9 bg-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute top-0 right-5 h-3 w-3 border-b border-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute bottom-2 left-0 h-px w-9 bg-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute bottom-0 left-5 h-3 w-3 border-t border-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute right-0 bottom-2 h-px w-9 bg-[#b6b6ae]"
              />
              <span
                aria-hidden
                className="absolute right-5 bottom-0 h-3 w-3 border-t border-[#b6b6ae]"
              />

              <div className="flex max-w-[390px] flex-col items-center text-center">
                <h1 className="font-body text-[30px] leading-none font-normal sm:text-[32px]">
                  WORK WITH MILLER LARKIN
                </h1>
                <p className="mt-[20px] text-[13px] leading-[15px] sm:text-[14px] sm:leading-[16px] ">
                  Have a system you want to work better, a problem worth
                  solving, or a partnership in mind? Tell us about it.
                </p>
                <p className="mt-[18px] text-[9px] leading-none text-[#4e4e4e]">
                  RESEARCH <span className="mx-1">·</span> DESIGN{" "}
                  <span className="mx-1">·</span> PARTNERSHIP
                </p>
              </div>
            </div>
          </div>

          <div
            {...reveal("up", 150)}
            className="flex items-center px-6 py-16 sm:px-14 lg:px-[87px] lg:py-[72px]"
          >
            <ContactForm />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
