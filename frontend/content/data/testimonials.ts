export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "AIRIZZ reduced our manual invoice processing by 62%. What used to take our team 3 days now runs automatically overnight.",
    author: "Rajesh M.",
    role: "Operations Director, Logistics Firm",
    location: "Mumbai"
  },
  {
    quote: "The AI consulting engagement delivered measurable ROI within 8 weeks. Our sales team now spends time selling, not entering data.",
    author: "Priya S.",
    role: "CEO, Legal Services Firm",
    location: "Bangalore"
  },
  {
    quote: "Their data integration work unified 6 disconnected tools into one dashboard. We finally have a single source of truth.",
    author: "Anil K.",
    role: "CTO, Manufacturing Company",
    location: "Pune"
  }
];
