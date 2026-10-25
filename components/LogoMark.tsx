import { LOGO_PATH, LOGO_VIEWBOX } from "@/lib/logo";

// Brand mark: two interlocking rounded frames.
export function LogoMark() {
  return (
    <svg className="logo-mark" viewBox={LOGO_VIEWBOX} aria-hidden="true">
      <path d={LOGO_PATH} fillRule="evenodd" />
    </svg>
  );
}
