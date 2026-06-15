"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CostCard() {
  return (
    <motion.div
      className="cost-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
    >
      <div className="cost-card-inner">
        <div className="cost-head">
          <span className="cost-label">Cost per video</span>
          <span className="cost-live">
            <span className="cost-dot" />
            live
          </span>
        </div>

        <div className="cost-prices">
          <span className="cost-before">$3.50</span>
          <span className="cost-arrow">→</span>
          <span className="cost-after">$0.05</span>
        </div>

        <svg
          className="cost-spark"
          viewBox="0 0 260 90"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M4,12 C46,8 58,38 96,42 C138,46 150,64 196,70 C224,74 240,80 256,84"
            stroke="var(--color-warm)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.4 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>

        <div className="cost-foot">
          <div className="cost-delta">
            −<CountUp value={99} />%
          </div>
          <div className="cost-chips">
            <span className="cost-chip cost-chip-before">Premium API</span>
            <span className="cost-chip cost-chip-after">Custom workflow</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
