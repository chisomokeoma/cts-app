import type { Metadata } from "next";
import { Inter, Inter_Tight, Space_Grotesk } from "next/font/google";
import { RevealObserver } from "@/components/reveal-observer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["600"],
});

// Cofrastructure Labs' body face.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miller Larkin",
  description:
    "Miller Larkin designs the systems people depend on, so they work the way they should.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The Labs CTAs scroll to a section in the Figma prototype (ease-out,
      // 300ms). `data-scroll-behavior` keeps route changes jumping instantly.
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interTight.variable} ${spaceGrotesk.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
