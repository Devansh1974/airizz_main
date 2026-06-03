export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

export const teamData: TeamMember[] = [
  {
    initials: "F1",
    name: "[Founder Name]",
    role: "Co-Founder & CEO",
    bio: "Leads strategy and client engagements. Background in enterprise technology and AI.",
    linkedin: "#"
  },
  {
    initials: "F2",
    name: "[Co-Founder Name]",
    role: "Co-Founder & CTO",
    bio: "Leads product engineering and technical architecture. 8+ years building scalable systems.",
    linkedin: "#"
  },
  {
    initials: "T1",
    name: "[Team Member]",
    role: "Head of AI Consulting",
    bio: "Specialises in generative AI implementation and marketing automation for SMBs.",
    linkedin: "#"
  }
];
