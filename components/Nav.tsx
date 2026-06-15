import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";
import { LogoMark } from "./LogoMark";

export function Nav({ variant = "home" }: { variant?: "home" | "case" }) {
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
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#work">Кейсы</a>
            </li>
            <li>
              <a href="#testimonials">Клиенты</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        ) : (
          <Link href="/#work" className="nav-back">
            ← Назад к кейсам
          </Link>
        )}
        </div>
      </LiquidGlass>
    </nav>
  );
}
