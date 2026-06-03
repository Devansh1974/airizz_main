import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://airizz.co";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/pricing",
    "/careers",
    "/products",
    "/privacy-policy",
    "/terms-of-service",
    "/services",
    "/case-studies",
    "/blog",
  ];

  const services = [
    "product-engineering",
    "ai-consulting",
    "data-integration",
    "marketing-automation",
  ];

  const industries = [
    "traditional-sme",
    "legal-finance",
    "manufacturing",
  ];

  const caseStudies = [
    "logistics-billing-automation",
    "legal-onboarding-automation",
    "manufacturer-data-unification",
  ];

  const blogPosts = [
    "ai-automation-indian-smbs",
    "marketing-automation-legal-firms",
  ];

  const allUrls = [
    ...staticRoutes.map((route) => `${baseUrl}${route}`),
    ...services.map((s) => `${baseUrl}/services/${s}`),
    ...industries.map((i) => `${baseUrl}/industries/${i}`),
    ...caseStudies.map((cs) => `${baseUrl}/case-studies/${cs}`),
    ...blogPosts.map((b) => `${baseUrl}/blog/${b}`),
  ];

  return allUrls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: url === `${baseUrl}` ? 1.0 : 0.8,
  }));
}
