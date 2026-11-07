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

// Content's Meta Data: {
//   promptTokenCount: 8,
//   candidatesTokenCount: 69,
//   totalTokenCount: 77,
//   promptTokensDetails: [ { modality: 'TEXT', tokenCount: 8 } ],
//   serviceTier: 'standard'
// }
// Answer: In the context of AI and large language models, tokens are the fundamental units of text—roughly equivalent to syllables or short words—that the model reads and generates. Instead of processing entire sentencesat once, the AI breaks language down into these numerical fragments to analyze patterns, calculate probabilities, and predict the next logical piece of text in a sequence.
// --- Usage ---
// Input tokens   : 8
// Output tokens  : 69
// Thinking tokens: 0
// Total          : 77