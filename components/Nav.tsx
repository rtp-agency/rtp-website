import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";
import { LogoMark } from "./LogoMark";
import { LangSwitch } from "./LangSwitch";
import { ui, type Lang } from "@/lib/i18n";

export function Nav({
  variant = "home",
  lang,
}: {
  variant?: "home" | "case";
  lang: Lang;
}) {
  const t = ui[lang].nav;
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
          <Link href={`/${lang}`} className="nav-logo">
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
            <li>
              <LangSwitch lang={lang} />
            </li>
          </ul>
        ) : (
          <div className="nav-inner-right">
            <Link href={`/${lang}#work`} className="nav-back">
              {t.back}
            </Link>
            <LangSwitch lang={lang} />
          </div>
        )}
        </div>
      </LiquidGlass>
    </nav>
  );
}
