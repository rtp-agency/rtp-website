"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

// Pins its content for `hold` viewports while a 0..1 scroll progress reveals the
// [data-role] children in a staggered choreography (in place, no page-scroll).
const ROLE: Record<string, [number, number, number]> = {
  eyebrow: [0.0, 0.22, 20],
  heading: [0.08, 0.42, 42],
  lead: [0.2, 0.56, 42],
  body: [0.3, 0.76, 50],
};

export function PinnedReveal({
  children,
  hold = 1,
}: {
  children: ReactNode;
  hold?: number;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  const live = mounted && !reduce;

  useEffect(() => {
    if (!live) return;
    const root = ref.current;
    if (!root) return;
    const el = root;
    const stage = el.querySelector<HTMLElement>(".pin-stage");
    if (!stage) return;
    const roles = Array.from(stage.querySelectorAll<HTMLElement>("[data-role]"));
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
    const smooth = (t: number) => {
      t = clamp(t);
      return t * t * (3 - 2 * t);
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-el.getBoundingClientRect().top / total);
      roles.forEach((r) => {
        const cfg = ROLE[r.dataset.role || ""] || ROLE.body;
        const t = smooth((p - cfg[0]) / (cfg[1] - cfg[0]));
        r.style.opacity = String(t);
        r.style.transform = `translateY(${cfg[2] * (1 - t)}px)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [live]);

  if (!live) return <>{children}</>;

  return (
    <div
      ref={ref}
      className="pin-outer pin-live"
      style={{ "--hold": hold } as CSSProperties}
    >
      <div className="pin-stage">{children}</div>
    </div>
  );
}
