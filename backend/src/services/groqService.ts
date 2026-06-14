import { EstimatorInput } from '../utils/estimatorLogic';

export async function generateAIReport(
  input: EstimatorInput,
  calculatedRange: string
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey || apiKey.includes("PLACEHOLDER") || apiKey === "") {
    console.warn("⚠️ GROQ_API_KEY is not set. Generating fallback consulting report.");
    return generateMockReport(input, calculatedRange);
  }

  const systemPrompt = `You are a Senior Software Architect, Senior Product Consultant, and Technical Project Estimator at AIRIZZ, an elite AI & workflow automation consulting firm.
Your task is to analyze a project questionnaire and generate a premium, professional consulting assessment and software architecture recommendation.

You MUST structure your response with the following exact headings:
1. ## Project Overview
2. ## Product Classification & Complexity
3. ## Estimated Timeline & Roadmap
4. ## Recommended Team Structure
5. ## Estimated Investment Range
6. ## Technical Recommendations (Architecture & Tech Stack)
7. ## Potential Risks & Challenges
8. ## The AIRIZZ Advantage & Next Steps

Guidelines:
- For "Product Classification & Complexity", categorize the complexity as either Simple, Medium, Advanced, or Enterprise.
- For "Estimated Investment Range", utilize the range: ${calculatedRange}. Always note that this is negotiable and may vary after a detailed discovery session.
- Keep the tone highly consultative, professional, and technical.
- Emphasize how AIRIZZ's expertise in workflows, AI agent engineering, and data integration will help deliver this project on time and with high quality.`;

  const userPrompt = `Here is the client's project details:
- Project Type: ${input.projectType}
- Current Stage: ${input.stage}
- Monetization Strategy: ${input.monetization.join(', ') || 'Internal / N/A'}
- Target Platforms: ${input.platforms.join(', ') || 'Web Application'}
- Required Key Features: ${input.features.join(', ') || 'Basic interface'}
- Integrations: ${input.integrations.join(', ') || 'None'}
- Advanced Requirements: ${input.technicalRequirements.join(', ') || 'Standard deployment'}
- Project Description: ${input.description}
- Client Budget Expectation: ${input.budgetExpectation}
- Calculated Budget Range: ${calculatedRange}

Please generate the consulting report.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.3,
        max_tokens: 2500
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq API responded with code ${response.status}: ${errorText}`);
    }

    const data = await response.json() as {
      choices: Array<{
        message: {
          content: string;
        };
      }>;
    };

    if (data.choices && data.choices[0]?.message?.content) {
      return data.choices[0].message.content;
    } else {
      throw new Error("Invalid response format from Groq API");
    }
  } catch (err) {
    console.error("❌ Groq API Call failed. Falling back to local report generation.", err);
    return generateMockReport(input, calculatedRange);
  }
}

function generateMockReport(input: EstimatorInput, calculatedRange: string): string {
  // Determine complexity based on features / budget
  let complexity = "Simple";
  let timeline = "4 - 6 Weeks";
  let team = [
    "- 1x Frontend Developer",
    "- 1x UI/UX Designer",
    "- 1x QA Engineer (Part-time)"
  ];

  const featuresCount = input.features.length;
  const platformCount = input.platforms.length;

  if (featuresCount > 8 || platformCount > 2 || input.technicalRequirements.length > 4) {
    complexity = "Enterprise";
    timeline = "16 - 24 Weeks";
    team = [
      "- 1x Product Owner / Consultant",
      "- 1x Lead Software Architect",
      "- 2x Fullstack Developers",
      "- 1x AI/Data Engineer",
      "- 1x QA Engineer",
      "- 1x Project Manager"
    ];
  } else if (featuresCount > 4 || platformCount > 1 || input.technicalRequirements.length > 2) {
    complexity = "Advanced";
    timeline = "10 - 14 Weeks";
    team = [
      "- 1x Senior Fullstack Developer",
      "- 1x UI/UX Designer",
      "- 1x AI/Automation Specialist",
      "- 1x QA Engineer (Part-time)",
      "- 1x Scrum Master / PM (Part-time)"
    ];
  } else if (featuresCount > 2 || platformCount > 0) {
    complexity = "Medium";
    timeline = "6 - 10 Weeks";
    team = [
      "- 1x Frontend Developer",
      "- 1x Backend Developer",
      "- 1x UI/UX Designer (Part-time)",
      "- 1x QA Engineer (Part-time)"
    ];
  }

  return `## Project Overview
The client is looking to develop a **${input.projectType}** operating on **${input.platforms.join(', ') || 'Web'}**. The product is currently at the **${input.stage}** stage, and the client plans to monetize it using a **${input.monetization.join(', ') || 'Standard'}** model. 

Based on the initial scope, the core objectives are to build a robust, user-friendly system delivering key capabilities like: **${input.features.slice(0, 4).join(', ')}${input.features.length > 4 ? ', and more' : ''}**.

## Product Classification & Complexity
- **Complexity Rating**: **${complexity}**
- **Justification**: The inclusion of ${featuresCount} core features, ${platformCount} target platforms, and advanced technical constraints (such as ${input.technicalRequirements.slice(0, 2).join(', ') || 'standard scaling'}) indicates a **${complexity}** tier architectural workload.

## Estimated Timeline & Roadmap
- **Estimated Duration**: **${timeline}**
- **Roadmap Overview**:
  - **Weeks 1-2**: Discovery, Figma UX/UI design system layout, API mapping.
  - **Weeks 3-6**: Core frontend interface scaffolding and database schema mapping.
  - **Weeks 7-10**: Feature integration, LLM/API connectors setup, and authentication flow.
  - **Weeks 11+**: End-to-end integration testing, QA cycles, and production deployment.

## Recommended Team Structure
To deliver this scope with production-grade engineering, we recommend the following dedicated roles:
${team.join('\n')}

## Estimated Investment Range
- **Investment Estimate**: **${calculatedRange}**
- *Note: This budget range represents a highly realistic cost assessment for the specified features. Final pricing is negotiable and may vary after a detailed scoping workshop.*

## Technical Recommendations (Architecture & Tech Stack)
- **Frontend**: Next.js (React) + TailwindCSS for a rapid, responsive, SEO-optimized user interface.
- **Backend**: Node.js + Express with TypeScript, providing a scalable and lightweight API layer.
- **Database**: PostgreSQL for transactional consistency, and Redis for session caching (if required).
- **AI/LLM Layer**: Integration with Groq (Llama-3/Mixtral) or OpenAI API via secure server-side SDKs.
- **Hosting / CI-CD**: Vercel for frontend hosting, AWS/Render for Express API, and GitHub Actions for continuous deployment.

## Potential Risks & Challenges
1. **Third-Party API Rate Limits**: High concurrency on LLM features could hit rate thresholds. *Mitigation: Implement redis caching and queue workers.*
2. **Platform Sync latency**: Managing state across ${input.platforms.join(' & ')} requires a unified state sync. *Mitigation: Construct robust RESTful/Websocket endpoints.*
3. **Data Security**: Storing user credentials and payment logs. *Mitigation: Integrate Stripe securely and use OAuth / SSO protocols.*

## The AIRIZZ Advantage & Next Steps
At **AIRIZZ**, we specialize in transforming requirements into highly efficient, custom AI-powered applications. 
- **Rapid Prototyping**: We leverage modular boilerplate libraries to bypass basic setup, focusing 100% on your custom business logic.
- **AI Expertise**: We engineer customized agents, semantic index search engines, and automated billing pipelines natively.
- **Next Step**: Click **"Book A Discovery Call"** below to review these recommendations and get a tailored proposals package.`;
}
