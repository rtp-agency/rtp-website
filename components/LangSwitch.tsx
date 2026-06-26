"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, ui, defaultLang, isLang, type Lang } from "@/lib/i18n";

// Toggles between locales, keeping the visitor on the same page.
export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() || `/${lang}`;
  const other: Lang = languages.find((l) => l !== lang) ?? defaultLang;

  const segments = pathname.split("/");
  if (isLang(segments[1])) {
    segments[1] = other;
  } else {
    segments.splice(1, 0, other);
  }
  const href = segments.join("/") || `/${other}`;

  return (
    <Link
      href={href}
      className="lang-switch"
      hrefLang={other}
      aria-label={ui[lang].langSwitchAria}
    >
      {ui[lang].langLabel}
    </Link>
  );
}
