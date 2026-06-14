export interface EstimatorInput {
  projectType: string;
  stage: string;
  monetization: string[];
  platforms: string[];
  features: string[];
  integrations: string[];
  technicalRequirements: string[];
  description: string;
  budgetExpectation: string;
}

export interface BudgetRange {
  min: number;
  max: number;
  currency: string;
  displayString: string;
}

export function calculateBudgetRange(input: EstimatorInput): BudgetRange {
  let cost = 250; // Base Price = $250

  // 1. Project Type
  const projectTypeCosts: Record<string, number> = {
    "SaaS Platform": 800,
    "AI-Powered SaaS": 1600,
    "AI Agent": 2000,
    "AI Chatbot": 600,
    "Internal Business Tool": 500,
    "Customer Portal": 700,
    "Marketplace": 1000,
    "E-Commerce Platform": 900,
    "Mobile App": 1200,
    "CRM": 1000,
    "Marketing Platform": 800,
    "Other": 500
  };
  cost += projectTypeCosts[input.projectType] || 500;

  // 2. Stage
  const stageCosts: Record<string, number> = {
    "Just an Idea": 1200,
    "Requirements Document Ready": 600,
    "Wireframes Available": 400,
    "Figma Designs Ready": 0,
    "Existing Product Needing Improvements": 600
  };
  cost += stageCosts[input.stage] !== undefined ? stageCosts[input.stage] : 600;

  // 3. Monetization
  if (Array.isArray(input.monetization)) {
    input.monetization.forEach(m => {
      if (m !== "Internal Tool (No Revenue)" && m !== "Not Sure Yet" && m !== "Other") {
        cost += 200;
      }
    });
  }

  // 4. Platforms
  const platformCosts: Record<string, number> = {
    "Web Application": 600,
    "iOS Application": 1200,
    "Android Application": 1200,
    "Admin Dashboard": 500,
    "Browser Extension": 800,
    "Desktop Application": 1000
  };
  if (Array.isArray(input.platforms)) {
    input.platforms.forEach(p => {
      cost += platformCosts[p] || 0;
    });
  }

  // 5. Key Features
  const featureCosts: Record<string, number> = {
    // USER MANAGEMENT
    "Login / Signup": 200,
    "Social Login": 200,
    "Multi Role Access": 300,
    // PAYMENTS
    "Stripe": 300,
    "Razorpay": 300,
    "Subscription Billing": 400,
    // AI FEATURES
    "AI Chatbot": 600,
    "AI Assistant": 800,
    "AI Agent": 1200,
    "Document Analysis": 800,
    "Knowledge Base Search": 500,
    "Voice AI": 1200,
    // BUSINESS FEATURES
    "Analytics Dashboard": 400,
    "Reporting": 300,
    "CRM": 500,
    "Notifications": 250,
    "User Management Panel": 300
  };
  if (Array.isArray(input.features)) {
    input.features.forEach(f => {
      cost += featureCosts[f] || 0;
    });
  }

  // 6. Integrations
  if (Array.isArray(input.integrations)) {
    // Each integration is estimated at $200
    cost += input.integrations.length * 200;
  }

  // 7. Advanced Technical Requirements
  const techCosts: Record<string, number> = {
    "Real-Time Updates": 400,
    "Offline Support": 600,
    "Enterprise Security": 800,
    "Audit Logs": 300,
    "Multi-Language Support": 400,
    "High Scalability": 800,
    "Millions Of Records": 600,
    "On-Premise Hosting": 600,
    "SSO Authentication": 500,
    "Advanced Analytics": 500
  };
  if (Array.isArray(input.technicalRequirements)) {
    input.technicalRequirements.forEach(t => {
      cost += techCosts[t] || 0;
    });
  }

  // Calculate Range: Min is 95% of calculated, Max is 130%
  const rawMin = cost * 0.95;
  const rawMax = cost * 1.30;

  // Round to nearest $100 or $250
  const min = Math.max(250, Math.round(rawMin / 100) * 100);
  const max = Math.max(500, Math.round(rawMax / 100) * 100);

  // Format string e.g. "$2,500 - $4,000"
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const displayString = `${formatter.format(min)} - ${formatter.format(max)}`;

  return {
    min,
    max,
    currency: "USD",
    displayString
  };
}
