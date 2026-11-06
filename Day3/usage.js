import "dotenv/config";
import { createAI, MODEL } from "./config.js";

const ai = createAI();

const response = await ai.models.generateContent({
  model: MODEL,
  contents: "Explain tokens in one short paragraph.",
});

const u = response.usageMetadata;
console.log("Content's Meta Data:",u);
console.log("Answer:", response.text);
console.log("--- Usage ---");
console.log("Input tokens   :", u?.promptTokenCount);
console.log("Output tokens  :", u?.candidatesTokenCount);
console.log("Thinking tokens:", u?.thoughtsTokenCount ?? 0);
console.log("Total          :", u?.totalTokenCount);