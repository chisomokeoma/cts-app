/**
 * Figma: the dot + label pair that opens each section, e.g. 14627:10250 —
 * a 6px Azure 75 dot, a 9px gap, then Heading 6 with 4px of bottom padding.
 * The label colour changes per section, so it comes in from the caller.
 */
export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className="flex items-center gap-[9px] pb-[4px]">
      <span aria-hidden className="size-[6px] shrink-0 rounded-full bg-accent" />
      <span className={`font-ui text-eyebrow uppercase ${className}`}>
        {children}
      </span>
    </div>
  );
}
