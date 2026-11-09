import { ask } from "./helpers.js";

const prompt = "Explain how the internet works in detail.";

for (const maxOutputTokens of [30, 1000]) {
  const res = await ask(prompt, { maxOutputTokens });
  const reason = res.candidates?.[0]?.finishReason;
  console.log(`\n=== maxOutputTokens: ${maxOutputTokens} ===`);
  console.log("finishReason:", reason);          // STOP ya MAX_TOKENS
  console.log("Output tokens:", res.usageMetadata?.candidatesTokenCount);
  console.log("Text:", res.text ?? "(khaali)");
}