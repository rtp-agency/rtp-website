"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ui } from "@/lib/i18n";
import { LogoMark } from "@/components/LogoMark";

export function Nav({
  variant = "home",
  back,
}: {
  variant?: "home" | "case";
  back?: { href: string; label: string };
}) {
  const t = ui.nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#services", label: t.services },
    { href: "/#work", label: t.work },
    { href: "/#testimonials", label: t.testimonials },
    { href: "/#contact", label: t.contact },
  ];

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar-inner">
        <Link href="/" className="brand" aria-label="RTP Agency">
          <LogoMark />
          <span>RTP Agency</span>
        </Link>

        {variant === "home" ? (
          <ul className="topbar-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        ) : (
          <Link href={back?.href ?? "/#work"} className="topbar-back">
            {back?.label ?? t.back}
          </Link>
        )}

        <a href="/#contact" className="topbar-cta">
          Обсудить проект
        </a>
      </div>
    </header>
  );
}
