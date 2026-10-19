import { Geologica, Golos_Text, JetBrains_Mono } from "next/font/google";

export const display = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const sans = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jb",
  weight: ["400", "500"],
  display: "swap",
});
