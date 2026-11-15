import { ai, MODEL, THINKING } from "./helpers.js";

const question = "What is a Promise in JavaScript?";

const mentor = `Tum ek friendly senior Node.js mentor ho.
- Jawab Hinglish me do.
- Maximum 3 bullet points.
- End me ek chhota quiz question poochho.
- Sirf programming ke sawal ka jawab do, baaki pe politely mana karo.`;

async function run(label, config = {}) {
  const res = await ai.models.generateContent({
    model: MODEL,
    contents: question,
    config: { ...THINKING, ...config },
  });
  console.log(`\n=== ${label} ===\n${res.text}`);
  console.log("Input tokens:", res.usageMetadata?.promptTokenCount);
}

await run("Bina system instruction");
await run("System instruction ke saath", { systemInstruction: mentor });