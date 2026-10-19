import type { Metadata } from "next";
import "../globals.css";
import "../redesign.css";
import { RootShell } from "@/components/RootShell";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
