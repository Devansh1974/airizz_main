export interface LeadData {
  timestamp: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budgetExpectation: string;
  generatedEstimate: string;
  projectSummary: string;
}

export async function saveLeadToSheets(data: LeadData): Promise<boolean> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl || scriptUrl.includes("PLACEHOLDER") || scriptUrl === "") {
    console.warn("⚠️ GOOGLE_SCRIPT_URL not configured in environment. Lead logged locally:");
    console.log("----------------------------------------");
    console.log("NEW LEAD SUBMISSION:", JSON.stringify(data, null, 2));
    console.log("----------------------------------------");
    return false;
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Web App script responded with status ${response.status}: ${errorText}`);
    }

    const resJson = await response.json() as { status: string; message?: string };
    if (resJson.status === "success") {
      console.log("✅ Lead successfully forwarded to Google Sheets via Apps Script Web App!");
      return true;
    } else {
      throw new Error(resJson.message || "Unknown error reported by Apps Script Web App");
    }
  } catch (error) {
    console.error("❌ Failed to log lead to Google Sheets via Apps Script:", error);
    return false;
  }
}
export default saveLeadToSheets;
