import { WORDMARK as W } from "@/lib/brand";

// rtp. — letters take currentColor, the period is always signal orange.
export function Wordmark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className ? `wordmark ${className}` : "wordmark"}
      viewBox={W.viewBox}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <g fill="none" stroke="currentColor" strokeWidth={W.stroke}>
        {W.paths.map((d) => (
          <path key={d} d={d} />
        ))}
        <circle cx={W.bowl.cx} cy={W.bowl.cy} r={W.bowl.r} />
      </g>
      <circle className="wordmark-dot" cx={W.dot.cx} cy={W.dot.cy} r={W.dot.r} />
    </svg>
  );
}
