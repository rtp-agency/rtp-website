import { CaseView } from "@/components/views/CaseView";
import { getContent } from "@/lib/content";
import { caseMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getContent("ru").caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return caseMetadata("ru", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseView locale="ru" slug={slug} />;
}
