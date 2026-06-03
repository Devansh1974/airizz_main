import { Metadata } from "next";

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function generateSeoMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: SeoOptions): Metadata {
  const baseUrl = "https://airizz.co";
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | AIRIZZ`,
    description,
    keywords: [
      "AI Consulting India",
      "Business Automation",
      "Workflow Automation",
      "Enterprise AI Solution",
      "Indian SMB AI Integration",
      "LLM Agents",
      "CRM Automation",
      ...keywords,
    ],
    authors: [{ name: "AIRIZZ" }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | AIRIZZ - AI Consulting & Automation`,
      description,
      url,
      siteName: "AIRIZZ",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AIRIZZ`,
      description,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
