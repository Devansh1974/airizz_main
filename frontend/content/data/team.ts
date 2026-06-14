export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
  email: string;
  skills: string[];
}

export const teamData: TeamMember[] = [
  {
    initials: "PP",
    name: "Praveen Prabhakar",
    role: "Founder & CEO",
    bio: "Leads overall strategy, enterprise consulting, and client growth partnerships. Specializes in auditing business workflows and designing practical, outcome-driven AI integration blueprints.",
    linkedin: "https://www.linkedin.com/in/praveen-prabhakar/",
    image: "/team/praveen.png",
    email: "praveen@airizz.co",
    skills: ["AI Consulting", "Enterprise Strategy", "Business Automation", "Client Partnerships"]
  },
  {
    initials: "AN",
    name: "Amith Narayanan",
    role: "Co-Founder & CTO",
    bio: "Leads product engineering, technical architecture, and cloud scaling. Expert in building modern, high-performance web systems, custom API services, and securing enterprise data platforms.",
    linkedin: "https://www.linkedin.com/in/amithnarayanan/",
    image: "/team/amith.png",
    email: "amith@airizz.co",
    skills: ["Next.js/React", "Node.js/Express", "Cloud Architecture", "Database Scaling"]
  },
  {
    initials: "BT",
    name: "Bibin Thomas",
    role: "Co-Founder & COO",
    bio: "Leads delivery operations, process engineering, and data pipeline integrations. Specializes in mapping secure data pipelines, system sync operations, and automated workflow orchestrations.",
    linkedin: "https://www.linkedin.com/in/bibin-thomas-09439065/",
    image: "/team/bibin.png",
    email: "bibin@airizz.co",
    skills: ["ETL Pipelines", "Workflow Automation", "Tally/CRM Integration", "Operations Management"]
  }
];
