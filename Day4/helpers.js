import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { MODEL, THINKING } from "./config.js";

const ai = new GoogleGenAI({});

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function ask(prompt, extraConfig = {}) {
  return ai.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: { ...THINKING, ...extraConfig },
  });
}