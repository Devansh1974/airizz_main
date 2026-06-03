export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Devansh Singh",
    role: "Founder & Lead Architect",
    bio: "Ex-Automation Lead. Expert in designing high-scalability LLM agents and database systems for enterprise clients.",
    image: "/team-devansh.jpg"
  },
  {
    name: "Priyanka Nair",
    role: "Lead AI Engineer",
    bio: "Specialist in RAG pipelines, fine-tuning language models, and secure vector database deployments.",
    image: "/team-priyanka.jpg"
  },
  {
    name: "Amit Patel",
    role: "Senior Integrations Specialist",
    bio: "Master of API mappings and ETL pipeline optimization, connecting legacy systems with cloud data silos.",
    image: "/team-amit.jpg"
  }
];
