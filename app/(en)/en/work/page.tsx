import { WorkView } from "@/components/views/WorkView";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("en");

export default function Page() {
  return <WorkView locale="en" />;
}
