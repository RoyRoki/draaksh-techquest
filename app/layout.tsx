import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5e2eea",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Draaksh TechQuest 2026 — Where Campus Coders Compete",
  description:
    "Sponsor India's next big college tech quiz. 200+ students across 5+ colleges, April 2026. Put your brand in front of the next generation of coders. Bronze ₹2K · Silver ₹5K · Gold ₹10K.",
  keywords: [
    "Draaksh TechQuest 2026",
    "college tech quiz Siliguri",
    "tech event sponsorship India",
    "coding competition North Bengal",
    "student tech event 2026",
    "Draaksh community",
    "sponsor tech quiz",
    "campus coders",
  ],
  authors: [{ name: "Draaksh", url: "mailto:draaksh.official.25@gmail.com" }],
  creator: "Draaksh",
  publisher: "Draaksh",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Draaksh TechQuest 2026 — Where Campus Coders Compete",
    description:
      "200+ college students. 5+ colleges. 3 rounds. Live finale. April 2026. Sponsor the next big tech quiz in North Bengal.",
    type: "website",
    locale: "en_IN",
    siteName: "Draaksh TechQuest 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draaksh TechQuest 2026",
    description: "Where Campus Coders Compete. Sponsor India's next big college tech quiz.",
    creator: "@draaksh",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${grotesk.variable} ${inter.variable} ${mono.variable} bg-black text-white antialiased overflow-x-hidden`}
      >
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
