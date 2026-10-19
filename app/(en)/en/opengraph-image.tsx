import { homeOg, ogSize } from "@/lib/og";

export const alt = "RTP Agency";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return homeOg("en");
}
