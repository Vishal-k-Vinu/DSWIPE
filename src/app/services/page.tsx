import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover DSwipe's NFC-enabled smart business cards — instant sharing, waterproof design, eco-friendly, real-time updates, and cross-device compatibility.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
