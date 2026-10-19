"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Scroll-in choreography: children fade/slide up with a stagger (CSS does the
// motion; this only flips .is-in once the block enters the viewport).
export function Rise({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    const t = setTimeout(() => el.classList.add("is-in"), 4000);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp ref={ref as React.RefObject<HTMLDivElement>} className={`rise ${className}`}>
      {children}
    </Comp>
  );
}
