export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export const statsData: StatItem[] = [
  { value: 44, suffix: "%", label: "Reduction in Manual Task Time", sublabel: "Per client engagement" },
  { value: 7, suffix: "+", label: "Enterprise Deployments", sublabel: "And counting" },
  { value: 2, suffix: "X", label: "Faster Decision Cycle Times", sublabel: "Avg across engagements" },
  { value: 12, suffix: "+", label: "Industries Served", sublabel: "Manufacturing to Legal" }
];
