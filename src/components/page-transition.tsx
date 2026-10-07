import { ViewTransition } from "react";

/**
 * Route-change transition. Every page wraps its content in this — layouts
 * persist across navigations, so enter/exit would never fire there. The `page`
 * class maps to the keyframes in globals.css: the old page lifts away quickly,
 * the new one rises in a beat later.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      {children}
    </ViewTransition>
  );
}
