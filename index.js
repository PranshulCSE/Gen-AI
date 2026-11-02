// import OpenAi from "openai";
// import "dotenv/config";

// const Question = "What is the capital of France?";

// const Client = new OpenAi({
//     apiKey:process.env.OPENAI_KEY
// });

// const response = await Client.responses.create({
//     input:Question,
//     model: "gpt-4.1-mini",
//     instructions: "You are a helpful assistant that provides concise answers to questions.",
// });

// console.log(response.output_text);

import dotenv from "dotenv";
dotenv.config();
import {GoogleGenAI} from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

const Question = "What is the capital of France?";

async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents: Question,
  });
  console.log(response.text);
}

main();