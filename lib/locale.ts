export type Locale = "ru" | "en";
export const locales: Locale[] = ["ru", "en"];
// The production host: rtp-agency.com 308-redirects to www, so www is canonical.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rtp-agency.com";

// Russian lives at the root, English under /en.
export function lp(locale: Locale, p: string): string {
  if (locale === "ru") return p;
  if (p === "/") return "/en";
  if (p.startsWith("/#")) return `/en${p.slice(1)}`;
  return `/en${p}`;
}

export function abs(locale: Locale, p: string): string {
  const path = lp(locale, p);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

// canonical + hreflang block for Next metadata. `p` is the locale-less path.
export function alternatesFor(locale: Locale, p: string, hasEn = true) {
  const languages: Record<string, string> = { ru: lp("ru", p) };
  if (hasEn) languages.en = lp("en", p);
  languages["x-default"] = lp("ru", p);
  return { canonical: lp(locale, p), languages: hasEn ? languages : undefined };
}

export const ogLocale: Record<Locale, string> = { ru: "ru_RU", en: "en_US" };
