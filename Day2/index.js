import {MODEL} from "./config.js";
import {GoogleGenAI} from '@google/genai';
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if(!GEMINI_API_KEY) {
  console.log("GEMINI API KEY IS MISSING. Please set the GEMINI_API_KEY in your environment variables.");
  process.exit(1);
}

// Key will be automatically picked up from the environment variable GEMINI_API_KEY
const ai = new GoogleGenAI({});

const Question = "What is the capital of France?";

async function main() {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: Question,
  });
  console.log(`Response: ${response.text}`);
  console.log(`Model Used: ${MODEL}`);
  console.log(`Tokens Used: ${response.tokenUsage}`);
}

main().catch((error)=>{
  console.error("Error occurred while generating content:", error);
  process.exit(1);
});