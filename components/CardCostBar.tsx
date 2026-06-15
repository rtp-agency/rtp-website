"use client";

import { motion } from "framer-motion";

// Slim before/after bar for homepage case cards: a bright sliver (the new cost)
// in a dim track (the old cost), animating in on scroll, with the reduction.
export function CardCostBar({
  reduction,
  afterPct,
}: {
  reduction: string;
  afterPct: number;
}) {
  return (
    <div className="ccb">
      <div className="ccb-track">
        <motion.div
          className="ccb-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${afterPct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
      <span className="ccb-label">−{reduction} к расходам</span>
    </div>
  );
}
