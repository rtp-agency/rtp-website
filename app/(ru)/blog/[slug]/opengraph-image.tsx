import { postOg, ogSize } from "@/lib/og";
import { getContent } from "@/lib/content";

export const alt = "RTP Agency";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getContent("ru").postSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return postOg("ru", slug);
}
