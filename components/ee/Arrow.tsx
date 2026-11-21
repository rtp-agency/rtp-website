// The ↗ used on links and buttons: a hairline arrow that inherits color.
export function Arrow({ dir = "ne" }: { dir?: "ne" | "e" }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3">
      {dir === "ne" ? <path d="M2 10 10 2M3.5 2H10v6.5" /> : <path d="M1 6h10M6.5 1.5 11 6l-4.5 4.5" />}
    </svg>
  );
}
