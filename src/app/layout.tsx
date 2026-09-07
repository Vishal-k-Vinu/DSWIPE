import type { Metadata } from "next";
import { Space_Grotesk, Sora, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DSwipe — Smart NFC Digital Business Cards",
    template: "%s | DSwipe",
  },
  description:
    "Premium NFC-enabled digital business cards from Kerala. Tap once, share everything — contact info, social links, portfolio. Waterproof, eco-friendly, always up to date.",
  keywords: [
    "NFC business card",
    "digital business card",
    "smart card Kerala",
    "DSwipe",
    "contactless networking",
    "NFC card India",
  ],
  openGraph: {
    title: "DSwipe — Smart NFC Digital Business Cards",
    description:
      "Premium NFC-enabled digital business cards. Tap once, share everything.",
    type: "website",
    locale: "en_IN",
    siteName: "DSwipe",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${sora.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScrolling>
          <Navbar />
          <main className="flex-1 pt-18 md:pt-20">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
