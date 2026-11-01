import { reveal } from "@/lib/motion";

/**
 * Figma: Footer 14680:1434 — 1440×91. Its Black 20% fill sits on the page's
 * black, so all that reads is the whole block's 60% opacity on white copy.
 */
export function LabsFooter() {
  return (
    <footer className="w-full bg-black">
      <div
        {...reveal("fade")}
        className="flex min-h-[91px] items-center justify-center px-6 py-[32px] opacity-60"
      >
        <p className="text-center font-grotesk text-lab-footer text-white">
          &copy; 2026 Cofrastructure Labs, a division of Miller Larkin. Miller
          Larkin is a brand of CTS Ltd (RC 1831271).
        </p>
      </div>
    </footer>
  );
}
