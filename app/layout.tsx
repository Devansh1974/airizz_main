import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/providers/ScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import CalendlyFloat from "@/components/layout/CalendlyFloat";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIRIZZ | AI Consulting & Automation Firm India",
  description: "Indian AI consulting, workflow automation, and custom LLM solutions. Scale your revenue and automate standard operating procedures.",
  keywords: [
    "AI Consulting",
    "Workflow Automation India",
    "Custom LLMs",
    "CRM Optimization",
    "Bangalore AI agency",
  ],
  metadataBase: new URL("https://airizz.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AIRIZZ | AI Consulting & Automation Firm India",
    description: "Scale your revenue and automate operations with bespoke LLM tools, CRM mapping, and API pipelines.",
    url: "/",
    siteName: "AIRIZZ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIRIZZ Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIRIZZ | AI Consulting & Automation",
    description: "Scale your revenue and automate operations with custom AI workflows.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-brand-cyan/30 selection:text-white">
        <ScrollProvider>
          <Navbar />
          <main className="flex-grow pt-[73px] md:pt-[88px] flex flex-col">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <CalendlyFloat />
        </ScrollProvider>
      </body>
    </html>
  );
}
