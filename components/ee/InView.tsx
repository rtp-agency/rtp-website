"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Adds .is-in once the element scrolls into view. CSS does all the motion,
// so with reduced motion (or no JS) the final state is simply shown.
export function InView({
  children,
  className = "",
  as: Tag = "div",
  threshold = 0.2,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "figure" | "section" | "article";
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  const Comp = Tag as "div";
  return (
    <Comp ref={ref as React.RefObject<HTMLDivElement>} className={`xin ${className}`}>
      {children}
    </Comp>
  );
}
