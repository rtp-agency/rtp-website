"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ui } from "@/lib/i18n";
import { LogoMark } from "@/components/LogoMark";

const TG_URL = "https://t.me/rtp_agency";
const SECTIONS = ["services", "work", "testimonials", "contact"];

export function Nav({
  variant = "home",
  back,
}: {
  variant?: "home" | "case";
  back?: { href: string; label: string };
}) {
  const t = ui.nav;
  const [active, setActive] = useState("top");

  useEffect(() => {
    if (variant !== "home") return;
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (e): e is HTMLElement => !!e
    );
    const onScroll = () => {
      const mid = window.innerHeight * 0.35;
      let cur = "top";
      for (const el of els) {
        if (el.getBoundingClientRect().top <= mid) cur = el.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const links = [
    { id: "top", href: "/", label: "Главная" },
    { id: "services", href: "/#services", label: t.services },
    { id: "work", href: "/#work", label: t.work },
    { id: "testimonials", href: "/#testimonials", label: t.testimonials },
    { id: "contact", href: "/#contact", label: t.contact },
  ];

  return (
    <header className="pnav">
      <Link href="/" className="pnav-brand" aria-label="RTP Agency">
        <LogoMark />
        <span>RTP</span>
      </Link>

      {variant === "home" ? (
        <ul className="pnav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.href} className={active === l.id ? "is-active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <Link href={back?.href ?? "/#work"} className="pnav-back">
          {back?.label ?? t.back}
        </Link>
      )}

      <div className="pnav-right">
        <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="pill pill-soft">
          Telegram
        </a>
        <a href="/#contact" className="pill pill-ink">
          Бесплатный разбор
        </a>
      </div>
    </header>
  );
}
