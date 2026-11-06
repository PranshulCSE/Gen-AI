import "dotenv/config";
import { createAI, MODEL } from "./config.js";

const ai = createAI();

try {
  const info = await ai.models.get({ model: MODEL });
  console.log("Model       :", info.name);
  console.log("Input limit :", info.inputTokenLimit);
  console.log("Output limit:", info.outputTokenLimit);
} catch (err) {
  console.error("Model info nahi mili:", err.message);
}