import { BlogIndexView } from "@/components/views/BlogViews";
import { blogIndexMetadata } from "@/lib/seo";

export const metadata = blogIndexMetadata("ru");

export default function Page() {
  return <BlogIndexView locale="ru" />;
}
