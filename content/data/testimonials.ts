export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "AIRIZZ transformed our sales cycle. Their custom WhatsApp CRM bot now answers inbound catalog questions instantly, cutting response delays and boosting sales.",
    author: "Rakesh Sharma",
    role: "CEO, Sharma Logistics & Distribution",
    location: "Mumbai"
  },
  {
    quote: "The semantic research portal they built on our case archive saved our junior associates hundreds of hours of manual law review. The security setup is top tier.",
    author: "Ananya Sen",
    role: "Managing Partner, Sen & Associates",
    location: "New Delhi"
  },
  {
    quote: "By connecting our machine temperature logs directly to a real-time analytics panel, we spotted and fixed components before they failed, saving major factory hours.",
    author: "Vikram Adiga",
    role: "Head of Operations, Adiga Components",
    location: "Bangalore"
  }
];
