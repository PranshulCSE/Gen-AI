import { GoogleGenAI } from "@google/genai";

// Type your model name here so that you can change it easily in future.
export const MODEL = "gemini-3.5-flash-lite";

export function createAI() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is missing. Add a valid key to .env before running this script."
    );
  }

  return new GoogleGenAI({ apiKey });
}