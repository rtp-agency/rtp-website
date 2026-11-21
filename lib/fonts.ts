import { Inter_Tight, Inter, IBM_Plex_Mono } from "next/font/google";

// Headings: Inter Tight (tight neo-grotesk). Body: Inter. Metadata: IBM Plex Mono.
// All three cover Cyrillic, so the RU site uses the same system.
export const display = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jb",
  weight: ["400", "500"],
  display: "swap",
});
