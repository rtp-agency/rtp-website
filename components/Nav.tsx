"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { lp, type Locale } from "@/lib/locale";
import { strings } from "@/lib/ui";

const TG_URL = "https://t.me/rtp_agency";
const SECTIONS = ["services", "work", "testimonials", "contact"];

export function Nav({
  locale,
  variant = "home",
  back,
  altHref,
  current,
}: {
  locale: Locale;
  variant?: "home" | "case" | "page";
  back?: { href: string; label: string };
  altHref: string;
  current?: "blog";
}) {
  const t = strings[locale].nav;
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
    { id: "top", href: lp(locale, "/"), label: t.home },
    { id: "services", href: lp(locale, "/#services"), label: t.services },
    { id: "work", href: lp(locale, "/#work"), label: t.work },
    { id: "testimonials", href: lp(locale, "/#testimonials"), label: t.clients },
    { id: "blog", href: lp(locale, "/blog"), label: t.blog },
    { id: "contact", href: lp(locale, "/#contact"), label: t.contact },
  ];
  const activeId = current ?? (variant === "home" ? active : "");

  return (
    <header className="pnav">
      <Link href={lp(locale, "/")} className="brand-link pnav-brand" aria-label="RTP Agency">
        <LogoMark />
        <span>RTP</span>
      </Link>

      {variant !== "case" ? (
        <ul className="pnav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.href} className={activeId === l.id ? "is-active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <Link href={back?.href ?? lp(locale, "/#work")} className="pnav-back">
          {back?.label}
        </Link>
      )}

      <div className="pnav-right">
        <a
          href={altHref}
          hrefLang={locale === "ru" ? "en" : "ru"}
          lang={locale === "ru" ? "en" : "ru"}
          className="pill pill-soft pnav-lang"
          aria-label={t.langLabel}
        >
          {locale === "ru" ? "EN" : "RU"}
        </a>
        <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="pill pill-soft pnav-tg">
          Telegram
        </a>
        <a href={lp(locale, "/#contact")} className="pill pill-ink">
          {t.cta}
        </a>
      </div>
    </header>
  );
}
