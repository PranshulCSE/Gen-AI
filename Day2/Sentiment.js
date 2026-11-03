import {MODEL} from "./config.js";
import {GoogleGenAI} from '@google/genai';
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

if(!API_KEY) {
  console.log("GEMINI API KEY IS MISSING. Please set the GEMINI_API_KEY in your environment variables.");
  process.exit(1);
}

// Key will be automatically picked up from the environment variable GEMINI_API_KEY
const ai = new GoogleGenAI({});

const reviews = [
  "This phone is amazing, I love it",   
  "The food was not good",             
  "Yeh movie ekdum bakwaas thi",        
  "Great, another delayed flight...",   
];

for (const review of reviews){
    const response = await ai.models.generateContent({
        model: MODEL,
        contents: `Classify the sentiment as positive, negative or neutral.
Reply with only one word.
Review: "${review}"`,
    });
    console.log(`"${review}" -> ${response.text.trim()}`);
}