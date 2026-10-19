import { BlogIndexView } from "@/components/views/BlogViews";
import { blogIndexMetadata } from "@/lib/seo";

export const metadata = blogIndexMetadata("en");

export default function Page() {
  return <BlogIndexView locale="en" />;
}
