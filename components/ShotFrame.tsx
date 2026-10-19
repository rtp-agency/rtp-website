import type { Shot } from "@/lib/shots";

// Static frame around a screenshot. Used for the case hero and home-card thumbs.
export function ShotFrame({
  shot,
  priority,
  className = "",
}: {
  shot: Shot;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`shot shot-${shot.frame} ${className}`}>
      {shot.frame === "browser" && (
        <div className="shot-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          {shot.chrome && <span>{shot.chrome}</span>}
        </div>
      )}
      <img
        src={shot.src}
        width={shot.w}
        height={shot.h}
        alt={shot.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}
