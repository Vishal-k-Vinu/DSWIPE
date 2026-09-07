import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on NFC technology, digital networking, business tips, and DSwipe product updates. Stay ahead of the curve.",
};

export default function BlogPage() {
  return <BlogClient />;
}
