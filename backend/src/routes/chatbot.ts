import { Router, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { saveLeadToSheets } from '../services/googleScriptService';

// Fallback responses matching AIRIZZ knowledge base topics
const fallbackResponses: Record<string, string> = {
  services: "AIRIZZ specializes in AI Consulting, Marketing Automation, Data Integration, Product Engineering, Workflow Automation, and custom AI Agents to help businesses transform fragmented systems into scalable, revenue-generating operations.",
  pricing: "Pricing at AIRIZZ depends entirely on the project scope, integrations, complexity, and specific business requirements. I suggest checking our Estimator page or letting our team reach out to you using your contact details for a personalized proposal.",
  timeline: "Our project timelines vary based on scope: simple prototypes take 4-6 weeks, medium complexity systems take 6-10 weeks, while advanced AI applications and enterprise integrations span 10-24 weeks.",
  team: "Our core leadership team consists of Praveen Prabhakar (Founder & CEO), Bibin Thomas (Head of AI & Engineering), and Amith Narayanan MS (Lead Solution Architect). Their combined expertise ensures top-tier AI engineering, security, and scalable system architectures.",
  contact: "You can contact the AIRIZZ team directly via email at connect@airizz.co. Our Enterprise HQ is located in India. We can also contact you directly at the email address you provided earlier.",
  "technology stack": "We typically use Next.js, React, TailwindCSS, Node.js, Express, TypeScript, PostgreSQL, private LLMs (via Groq/OpenAI), and secure API integrations to build connected digital ecosystems.",
  process: "Our operational process includes: 1) Discovery and strategy consultation, 2) Process and system analysis, 3) Solution architecture, 4) Implementation, and 5) Optimization and scaling.",
  "mobile apps": "We design and develop custom mobile applications for iOS and Android platforms, built to scale and integrate seamlessly with AI layers and your databases.",
  "web apps": "We build premium custom web applications, SaaS products, and enterprise software solutions using modern frameworks to automate business processes.",
  "ai/ml projects": "Our AI/ML work covers generative AI strategy, private LLM deployments, RAG systems, intelligent chatbots, AI agents, and predictive analytics tailored to business workflows."
};

// Help match keywords to fallback keys
function getFallbackResponse(message: string): string {
  const query = message.toLowerCase();
  
  if (query.includes("pricing") || query.includes("cost") || query.includes("price") || query.includes("calculator") || query.includes("estimate")) {
    return fallbackResponses.pricing;
  }
  if (query.includes("service") || query.includes("offer") || query.includes("what do you do")) {
    return fallbackResponses.services;
  }
  if (query.includes("timeline") || query.includes("how long") || query.includes("duration") || query.includes("schedule")) {
    return fallbackResponses.timeline;
  }
  if (query.includes("team") || query.includes("leader") || query.includes("founder") || query.includes("praveen") || query.includes("bibin") || query.includes("amith")) {
    return fallbackResponses.team;
  }
  if (query.includes("contact") || query.includes("email") || query.includes("reach out") || query.includes("phone")) {
    return fallbackResponses.contact;
  }
  if (query.includes("tech") || query.includes("architecture") || query.includes("database") || query.includes("stack")) {
    return fallbackResponses["technology stack"];
  }
  if (query.includes("process") || query.includes("how it works") || query.includes("step") || query.includes("method")) {
    return fallbackResponses.process;
  }
  if (query.includes("mobile") || query.includes("app") || query.includes("ios") || query.includes("android")) {
    return fallbackResponses["mobile apps"];
  }
  if (query.includes("web") || query.includes("website") || query.includes("saas") || query.includes("platform")) {
    return fallbackResponses["web apps"];
  }
  if (query.includes("ai") || query.includes("ml") || query.includes("llm") || query.includes("agent") || query.includes("bot")) {
    return fallbackResponses["ai/ml projects"];
  }

  // General default fallback
  return fallbackResponses.services;
}

const chatbotRouter = Router();

// Configure Rate Limiting
const CHAT_RATE_LIMIT_WINDOW_MS = Number(process.env.CHAT_RATE_LIMIT_WINDOW_MS) || 60000;
const CHAT_RATE_LIMIT_MAX = Number(process.env.CHAT_RATE_LIMIT_MAX) || 20;

const chatRateLimiter = rateLimit({
  windowMs: CHAT_RATE_LIMIT_WINDOW_MS,
  max: CHAT_RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    res.status(429).json({
      error: "rate_limit",
      message: "Too many messages — please wait a moment."
    });
  }
});

// POST /api/leads
chatbotRouter.post('/api/leads', async (req: Request, res: Response) => {
  try {
    const { name, company, email, productBrief, pageSource, sessionStart } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields (name, email)" });
    }

    // Set script URL to GOOGLE_SHEETS_WEBHOOK_URL or fallback to GOOGLE_SCRIPT_URL
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      process.env.GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    }

    const timestamp = sessionStart ? new Date(sessionStart).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) : new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

    // Save lead through Google Sheets Apps Script Service
    await saveLeadToSheets({
      timestamp,
      name,
      email,
      company: company || "",
      phone: "",
      projectType: "Chatbot Lead",
      budgetExpectation: "N/A",
      generatedEstimate: "N/A",
      projectSummary: `[Page Source: ${pageSource || "/"}] ${productBrief || ""}`
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("❌ Error saving chatbot lead:", error);
    return res.status(500).json({ error: "Failed to save lead info", details: error.message });
  }
});

// Helper function to call Groq API with timeout
async function callGroqWithTimeout(messages: any[], systemPrompt: string, apiKey: string): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        temperature: 0.5,
        max_tokens: 500
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq responded with status ${response.status}: ${errorText}`);
    }

    const data = await response.json() as any;
    if (data.choices && data.choices[0]?.message?.content) {
      return data.choices[0].message.content;
    } else {
      throw new Error("Invalid response format from Groq API");
    }
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// POST /api/chat
chatbotRouter.post('/api/chat', chatRateLimiter, async (req: Request, res: Response) => {
  try {
    const { messages, leadContext } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
    }

    const name = leadContext?.name || "Visitor";
    const company = leadContext?.company || "Unknown";
    const productBrief = leadContext?.productBrief || "Not specified";
    const pageSource = leadContext?.pageSource || "/";

    const systemPrompt = `You are the AIRIZZ assistant — a smart, friendly chatbot for AIRIZZ, a software development agency. Your job is to:
1. Answer questions about AIRIZZ's services, process, team, and projects.
2. Understand what the user wants to build and help them see how AIRIZZ can help.
3. Qualify leads naturally — if someone seems ready, suggest they book a discovery call.
4. Be conversational, not salesy. Keep replies concise (2-4 sentences max).
5. If asked something you don't know, say "Great question — let me connect you with our team directly" and prompt for contact info.

Current user context:
Name: ${name}
Company: ${company}  
What they want to build: ${productBrief}
Page they started from: ${pageSource}

Always address the user by their first name occasionally. 
Never make up pricing, timelines, or team member names.
You can refer users to check our pricing calculator also if the user mentions estimates/calculators.

Only answer using the AIRIZZ knowledge base below:
---
ABOUT AIRIZZ
AIRIZZ helps businesses accelerate growth through AI, data, and automation.
AIRIZZ specializes in: AI Consulting, Marketing Automation, Data Integration, Product Engineering, AI-Powered Applications, Workflow Automation, Business Process Automation, CRM & ERP Integrations, Intelligent Chatbots, and AI Agents.
AIRIZZ helps organizations transform fragmented systems, disconnected data, and manual processes into scalable and revenue-generating business operations.

CORE SERVICES
1. Product Engineering: AI-powered applications, SaaS platforms, Custom web applications, Mobile applications, Enterprise software solutions.
2. AI Consulting: Generative AI adoption, AI strategy, AI implementation roadmaps, Predictive analytics, Intelligent chatbots, AI agents, ROI-focused AI initiatives.
3. Data Integration: CRM integrations, ERP integrations, API integrations, Marketing platform integrations, Unified business data systems, Elimination of data silos.
4. Marketing Automation: Lead nurturing automation, Customer journey automation, Sales automation, Marketing workflow automation, Conversion optimization, Growth systems.

INDUSTRIES SERVED
Manufacturing, Healthcare, Finance, Legal Services, Retail, Logistics.

SOLUTIONS BY INDUSTRY
- Traditional Businesses: Legacy system modernization, CRM automation, Generative AI integration, Automated quoting workflows, Automated invoicing workflows, Customer service AI agents.
- Legal & Finance: Document processing, Document summarization, Compliance automation, Secure AI deployments, Private LLM implementations.
- Manufacturing & Logistics: Predictive maintenance, Inventory forecasting, Supply chain forecasting, Computer vision quality assurance, Operational automation.

HOW AIRIZZ WORKS
1. Discovery and strategy consultation
2. Process and system analysis
3. Solution architecture
4. Implementation
5. Optimization and scaling

CONTACT INFORMATION
Email: connect@airizz.co
Location: Enterprise HQ, India

LEADERSHIP TEAM
- Praveen Prabhakar — Founder & CEO: Praveen leads the strategic vision at AIRIZZ, helping organizations leverage AI, automation, and data infrastructure to accelerate growth, improve operational efficiency, and achieve business objectives.
- Bibin Thomas — Head of AI & Engineering: Bibin leads AIRIZZ's AI and engineering initiatives, overseeing backend systems, private LLM deployments, RAG architectures, and scalable enterprise-grade solutions with a strong focus on security and reliability.
- Amith Narayanan MS — Lead Solution Architect: Amith specializes in workflow automation, business process optimization, data integration, CRM systems, and multi-channel architecture, helping organizations build connected and scalable digital ecosystems.

KNOWLEDGE RULES
- Only answer using this AIRIZZ knowledge base.
- If information is unavailable, say: "I don't currently have information about that topic. Please contact the AIRIZZ team for accurate details."
- Never invent: founder info, client names, case studies, pricing, team members, open job positions, revenue figures, or partnerships.
- If a user asks about careers, jobs, internships, or hiring, respond exactly: "You can explore current opportunities on our Careers page: https://airizz.co/careers"
---`;

    const apiKey = process.env.GROQ_API_KEY;

    // TIER 3 static fallback checker
    const triggerFallback = () => {
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      const fallbackReply = getFallbackResponse(lastUserMsg);
      return res.status(200).json({
        content: `I'm having a brief technical moment — here's what I know about that: ${fallbackReply}`
      });
    };

    if (!apiKey || apiKey.includes("PLACEHOLDER") || apiKey === "") {
      console.warn("⚠️ GROQ_API_KEY is not set. Triggering Tier 3 fallback.");
      return triggerFallback();
    }

    // TIER 1 - Primary Groq call
    try {
      const content = await callGroqWithTimeout(messages, systemPrompt, apiKey);
      return res.status(200).json({ content });
    } catch (tier1Error: any) {
      console.warn("⚠️ Groq Tier 1 failed:", tier1Error.message);
      
      // TIER 2 - Retry after 1500ms
      try {
        console.log("🔄 Retrying Groq call (Tier 2) after 1.5s delay...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        const content = await callGroqWithTimeout(messages, systemPrompt, apiKey);
        return res.status(200).json({ content });
      } catch (tier2Error: any) {
        console.error("❌ Groq Tier 2 failed:", tier2Error.message);
        
        // TIER 3 - Fallback responses
        console.log("🔌 Triggering Tier 3 static fallback responses...");
        return triggerFallback();
      }
    }
  } catch (error: any) {
    console.error("❌ Server Error in chatbot /api/chat:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default chatbotRouter;
