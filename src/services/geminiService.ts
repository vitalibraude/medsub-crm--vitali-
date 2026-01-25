import { GoogleGenAI, Type } from "@google/genai";
import { Patient, PlanType, SubscriptionStatus } from '../types';

// Get API key from localStorage or environment variable
const getApiKey = (): string => {
  // Try localStorage first (user can set it in console)
  const localKey = localStorage.getItem('GEMINI_API_KEY');
  if (localKey) {
    console.log('✅ Using Gemini API key from localStorage');
    return localKey;
  }
  
  // Fallback to environment variable (set during build)
  const envKey = process.env.API_KEY || '';
  if (envKey) {
    console.log('✅ Using Gemini API key from environment');
    return envKey;
  }
  
  console.warn('⚠️ No Gemini API key found. Set it with: localStorage.setItem("GEMINI_API_KEY", "your-key-here")');
  return '';
};

let ai: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = getApiKey();
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const modelName = 'gemini-3-flash-preview';

export const analyzePatientRisk = async (patient: Patient): Promise<{ riskLevel: string, recommendation: string }> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.error('❌ Gemini API key missing. Please set it first.');
      return { 
        riskLevel: 'N/A', 
        recommendation: 'Set API key with: localStorage.setItem("GEMINI_API_KEY", "your-key")' 
      };
    }
    
    const prompt = `
      Analyze the churn risk for the following medical subscription patient:
      Name: ${patient.fullName}
      Plan: ${patient.plan}
      Status: ${patient.status}
      Joined: ${patient.joinDate}
      Last Visit: ${patient.lastVisit}
      Notes: ${patient.notes}

      Return a JSON object with:
      1. riskLevel: "Low", "Medium", or "High"
      2. recommendation: A short (one sentence) strategic action to retain the patient.
    `;

    const response = await getAI().models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskLevel: { type: Type.STRING },
            recommendation: { type: Type.STRING }
          }
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return {
      riskLevel: result.riskLevel || 'Unknown',
      recommendation: result.recommendation || 'No insight available.'
    };
  } catch (error) {
    console.error("AI Analysis Failed:", error);
    return { riskLevel: 'Error', recommendation: 'Could not analyze at this time.' };
  }
};

export const generateEngagementMessage = async (patient: Patient, tone: 'professional' | 'friendly' | 'urgent'): Promise<string> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.error('❌ Gemini API key missing.');
      return 'API key not configured. Set it with: localStorage.setItem("GEMINI_API_KEY", "your-key")';
    }
    
    const prompt = `
      Write a short WhatsApp message (in Hebrew) to patient ${patient.fullName}.
      Context: They are on the ${patient.plan} plan. Current status is ${patient.status}.
      Goal: Encourage them to book their next check-up or resolve payment issues if status is Failed Payment.
      Tone: ${tone}.
      Keep it under 30 words. Do not include placeholders like [Date], make it ready to send.
    `;

    const response = await getAI().models.generateContent({
      model: modelName,
      contents: prompt,
    });

    return response.text || "Could not generate message.";
  } catch (error) {
    console.error("AI Message Generation Failed:", error);
    return "Error generating message.";
  }
};