import { PostView } from "@/components/views/BlogViews";
import { getContent } from "@/lib/content";
import { postMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getContent("en").postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return postMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostView locale="en" slug={slug} />;
}
