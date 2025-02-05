import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDsWbehRtQVblot6f3iYDlPpz4X3yvVprg";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-pro", // Changed from gemini-1.5-pro to gemini-pro
});

const generationConfig = {
  temperature: 0.7, // Reduced for more consistent output
  topP: 0.8,
  topK: 40,
  maxOutputTokens: 2048, // Reduced to avoid token limit issues
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { jobTitle, department, seniority, employmentType, responsibilities, qualifications } = data;

    // Validate input
    if (!jobTitle || !department || !seniority || !employmentType) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Create JD prompt
    const jdPrompt = `You are an HR professional writing a job description. Create a concise job description for:
    Job Title: ${jobTitle}
    Department: ${department}
    Level: ${seniority}
    Type: ${employmentType}
    Responsibilities: ${responsibilities.join(", ")}
    Qualifications: ${qualifications.join(", ")}

    Format with sections:
    - About the Role
    - Key Responsibilities
    - Required Qualifications
    - Benefits & Perks

    Keep it professional and engaging.`;

    // Generate JD
    const jdResult = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: jdPrompt }]}],
      generationConfig,
    });

    const jobDescription = jdResult.response.text();

    // Generate interview questions
    const questionPrompt = `Create 5 technical and 5 behavioral interview questions for a ${jobTitle} position. 
    Format as JSON exactly like this:
    {
      "technical": [
        "Technical question 1?",
        "Technical question 2?",
        "Technical question 3?",
        "Technical question 4?",
        "Technical question 5?"
      ],
      "behavioral": [
        "Behavioral question 1?",
        "Behavioral question 2?",
        "Behavioral question 3?",
        "Behavioral question 4?",
        "Behavioral question 5?"
      ]
    }`;

    const questionsResult = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: questionPrompt }]}],
      generationConfig: { ...generationConfig, temperature: 0.5 },
    });

    const questionsText = questionsResult.response.text();

    // Parse questions with fallback
    let parsedQuestions;
    try {
      // Extract JSON if it's wrapped in other text
      const jsonMatch = questionsText.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : questionsText;
      parsedQuestions = JSON.parse(jsonString);
    } catch (e) {
      console.error('Failed to parse questions:', e);
      parsedQuestions = {
        technical: [
          "What technical skills are most important for this role?",
          "Describe a technical challenge you've overcome.",
          "How do you stay updated with industry trends?",
          "What development tools are you familiar with?",
          "How do you ensure code quality?"
        ],
        behavioral: [
          "Tell me about a challenging project you managed.",
          "How do you handle tight deadlines?",
          "Describe your teamwork style.",
          "How do you deal with conflicts?",
          "What's your biggest professional achievement?"
        ]
      };
    }

    return NextResponse.json({
      success: true,
      jobDescription,
      interviewQuestions: parsedQuestions
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      error: error.message || 'Failed to generate content',
      details: 'Please try again or contact support if the issue persists'
    }, { status: 500 });
  }
}
