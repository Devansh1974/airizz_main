import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/providers/ScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import CalendlyFloat from "@/components/layout/CalendlyFloat";
import TypebotBubble from "@/components/layout/TypebotBubble";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-bg text-text font-sans selection:bg-accent/30 selection:text-text"
        suppressHydrationWarning
      >
        <ScrollProvider>
          <Navbar />
          <main className="flex-grow pt-[73px] md:pt-[88px] flex flex-col">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <CalendlyFloat />
          <TypebotBubble />
        </ScrollProvider>
      </body>
    </html>
  );
}
