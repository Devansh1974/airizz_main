import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/content";

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

  // Dynamically load blogs and case studies from the filesystem
  const blogPosts = getAllBlogPosts();
  const caseStudies = getAllCaseStudies();

  const allUrls = [
    ...staticRoutes.map((route) => `${baseUrl}${route}`),
    ...services.map((s) => `${baseUrl}/services/${s}`),
    ...industries.map((i) => `${baseUrl}/industries/${i}`),
    ...caseStudies.map((cs) => `${baseUrl}/case-studies/${cs.slug}`),
    ...blogPosts.map((b) => `${baseUrl}/blog/${b.slug}`),
  ];

  return allUrls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: url === `${baseUrl}` ? 1.0 : 0.8,
  }));
}
