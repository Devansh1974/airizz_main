import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { calculateBudgetRange } from './utils/estimatorLogic';
import { generateAIReport } from './services/groqService';
import { saveLeadToSheets } from './services/googleScriptService';
import chatbotRouter from './routes/chatbot';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(chatbotRouter);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Airizz Backend API is running smoothly'
  });
});

// AI Cost Estimator endpoint
app.post('/api/estimate', async (req, res) => {
  try {
    const {
      projectType,
      stage,
      monetization,
      platforms,
      features,
      integrations,
      technicalRequirements,
      description,
      budgetExpectation,
      name,
      email,
      company,
      phone
    } = req.body;

    // Validation
    if (!projectType || !stage || !description || !name || !email) {
      return res.status(400).json({ 
        error: "Missing required fields (projectType, stage, description, name, email)" 
      });
    }

    const estimatorInput = {
      projectType,
      stage,
      monetization: monetization || [],
      platforms: platforms || [],
      features: features || [],
      integrations: integrations || [],
      technicalRequirements: technicalRequirements || [],
      description,
      budgetExpectation
    };

    // 1. Calculate Local Price Range
    const budgetRange = calculateBudgetRange(estimatorInput);

    // 2. Generate Groq AI consulting report
    const aiReport = await generateAIReport(estimatorInput, budgetRange.displayString);

    // 3. Save Lead to Google Sheets
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    await saveLeadToSheets({
      timestamp,
      name,
      email,
      company: company || "",
      phone: phone || "",
      projectType,
      budgetExpectation,
      generatedEstimate: budgetRange.displayString,
      projectSummary: description.substring(0, 500)
    });

    // 4. Return response
    return res.status(200).json({
      success: true,
      budgetRange,
      report: aiReport
    });

  } catch (error: any) {
    console.error("❌ Error generating estimate:", error);
    return res.status(500).json({
      error: "Failed to generate estimate",
      details: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`🏥 Health check available at http://localhost:${PORT}/api/health`);
});
