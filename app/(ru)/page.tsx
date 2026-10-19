import { HomeView } from "@/components/views/HomeView";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("ru");

export default function Page() {
  return <HomeView locale="ru" />;
}
