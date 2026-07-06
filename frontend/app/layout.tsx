import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/providers/ScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import CalendlyFloat from "@/components/layout/CalendlyFloat";
import ChatWidget from "@/components/layout/ChatWidget";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIRIZZ",
    "url": "https://airizz.co",
    "logo": "https://airizz.co/logo.png",
    "description": "Indian AI consulting, workflow automation, and custom LLM solutions. Scale your revenue and automate standard operating procedures.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hello@airizz.co"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AIRIZZ",
    "image": "https://airizz.co/logo.png",
    "@id": "https://airizz.co/#localbusiness",
    "url": "https://airizz.co",
    "telephone": "+91 900005 00010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Enterprise HQ",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/airizz",
      "https://twitter.com/airizz"
    ]
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-bg text-text font-sans selection:bg-accent/30 selection:text-text"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ScrollProvider>
          <Navbar />
          <main className="flex-grow pt-[73px] md:pt-[88px] flex flex-col">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <CalendlyFloat />
          <ChatWidget />
        </ScrollProvider>
      </body>
    </html>
  );
}
