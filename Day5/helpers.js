import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { MODEL, THINKING } from "./config.js";

export const ai = new GoogleGenAI({});
export { MODEL, THINKING };