import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DSwipe — message us on WhatsApp, email, or fill out the form. We respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
