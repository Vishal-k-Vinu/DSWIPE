import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about DSwipe NFC digital business cards — how they work, compatibility, pricing, availability in Kerala, and more.",
};

export default function FaqPage() {
  return <FaqClient />;
}
