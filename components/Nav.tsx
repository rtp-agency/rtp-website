"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { Arrow } from "@/components/ee/Arrow";
import { lp, type Locale } from "@/lib/locale";
import { studio } from "@/lib/studio";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";
const SECTIONS = ["work", "services", "approach", "about"];

export function Nav({
  locale,
  variant = "home",
  back,
  altHref,
}: {
  locale: Locale;
  variant?: "home" | "case" | "page";
  back?: { href: string; label: string };
  altHref: string;
  current?: "blog";
}) {
  const t = studio[locale].nav;
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (variant !== "home") return;
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (e): e is HTMLElement => !!e
    );
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let cur = "";
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) cur = el.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { id: "work", href: lp(locale, "/#work"), label: t.work },
    { id: "services", href: lp(locale, "/#services"), label: t.services },
    { id: "approach", href: lp(locale, "/#approach"), label: t.approach },
    { id: "about", href: lp(locale, "/#about"), label: t.about },
  ];
  const other = locale === "ru" ? "en" : "ru";

  return (
    <>
    <header className="xnav">
      <div className="xnav-in">
        <Link href={lp(locale, "/")} className="xnav-brand" aria-label="RTP — Routine to Profit">
          <Wordmark />
          <span className="xnav-tag">Routine to Profit®</span>
        </Link>

        {variant === "case" && back ? (
          <Link href={back.href} className="xnav-back">
            {back.label}
          </Link>
        ) : (
          <ul className="xnav-links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={l.href} aria-current={active === l.id ? "true" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="xnav-right">
          <a href={altHref} hrefLang={other} lang={other} className="xnav-lang">
            {other.toUpperCase()}
          </a>
          <a href={lp(locale, "/#contact")} className="xbtn xbtn-sm">
            {t.cta} <Arrow />
          </a>
          <button
            type="button"
            className="xnav-menu"
            aria-expanded={open}
            aria-controls="xnav-sheet"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? t.close : t.menu} <i aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      <div id="xnav-sheet" className={`xnav-sheet${open ? " is-open" : ""}`} aria-hidden={!open}>
        <ol>
          {links.map((l, i) => (
            <li key={l.id}>
              <a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="xnav-sheet-foot">
          <a
            href={lp(locale, "/#contact")}
            className="xbtn"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t.cta} <Arrow />
          </a>
          <p className="mono">
            <a href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}>{EMAIL}</a>
            <a href={altHref} hrefLang={other} tabIndex={open ? 0 : -1}>{other.toUpperCase()}</a>
          </p>
          <p className="mono">
            <a href={TG_URL} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              Telegram
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
