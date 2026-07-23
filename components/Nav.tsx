import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";
import { LogoMark } from "./LogoMark";
import { ui } from "@/lib/i18n";

export function Nav({ variant = "home" }: { variant?: "home" | "case" }) {
  const t = ui.nav;
  return (
    <nav>
      <LiquidGlass
        className="nav-glass"
        radius={26}
        bezel={22}
        thickness={32}
        ior={2.1}
        scaleRatio={1.2}
      >
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <LogoMark />
            <span className="nav-logo-text">RTP Agency</span>
          </Link>
          {variant === "home" ? (
            <ul className="nav-links">
              <li>
                <a href="#services">{t.services}</a>
              </li>
              <li>
                <a href="#work">{t.work}</a>
              </li>
              <li>
                <a href="#testimonials">{t.testimonials}</a>
              </li>
              <li>
                <a href="#contact">{t.contact}</a>
              </li>
            </ul>
          ) : (
            <Link href="/#work" className="nav-back">
              {t.back}
            </Link>
          )}
        </div>
      </LiquidGlass>
    </nav>
  );
}
