import { PartnerView } from "@/components/views/PartnerView";
import { getContent } from "@/lib/content";
import { partnerMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getContent("en").partnerSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return partnerMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PartnerView locale="en" slug={slug} />;
}
