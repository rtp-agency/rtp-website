import { Geist, Geist_Mono } from "next/font/google";

// One family for headings and interface (Geist), Geist Mono for figures and
// meta. Both cover Cyrillic, so the RU site uses the same system.
export const display = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const sans = display;

export const mono = Geist_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jb",
  weight: ["400", "500"],
  display: "swap",
});
