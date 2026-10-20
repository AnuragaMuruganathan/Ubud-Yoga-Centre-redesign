import type { Metadata, Viewport } from "next";
import { Marcellus } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { site } from "@/content/site";
import "./globals.css";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"], variable: "--font-marcellus", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ubud Yoga Centre · Hot Yoga & Other Classes in Nyuh Kuning, Bali",
    template: "%s · Ubud Yoga Centre",
  },
  description:
    "Hot Yoga in Ubud, Bali. Daily Bikram, Hot Pilates, Hot TRX and Hot Power Vinyasa plus Hatha, Ashtanga, Yin, Aerial and more. Walk-ins welcome.",
  icons: { icon: "/images/gate-mark.png", apple: "/images/gate-mark.png" },
  openGraph: { images: [{ url: "/images/og.jpg", width: 1200, height: 630 }], siteName: site.name, type: "website" },
};

export const viewport: Viewport = { themeColor: "#193b30" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={marcellus.variable}>
      <body>
        {/* Without JavaScript, reveal animations never run — show everything. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only z-[70] rounded bg-forest px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
      </body>
    </html>
  );
}
