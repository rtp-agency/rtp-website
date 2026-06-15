// Geometric monochrome mark: hexagon (site motif) + downward chevron (cost down).
export function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
      <polygon points="16,1.6 29,9 29,23 16,30.4 3,23 3,9" />
      <polyline points="9.5,12.5 16,19 22.5,12.5" />
      <polyline points="9.5,18 16,24.5 22.5,18" />
    </svg>
  );
}
