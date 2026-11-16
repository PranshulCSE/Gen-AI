import { ai, MODEL, THINKING } from "../Day5/helpers.js";

const prompt = "Explain how the internet works in about 150 words.";

// 1) Normal call
let t0 = performance.now();
const normal = await ai.models.generateContent({
  model: MODEL,
  contents: prompt,
  config: THINKING,
});
console.log(`Normal: poora jawab ${(performance.now() - t0).toFixed(0)} ms baad aaya`);

// 2) Streaming call
t0 = performance.now();
let firstChunkAt = null;
let lastChunk;
const stream = await ai.models.generateContentStream({
  model: MODEL,
  contents: prompt,
  config: THINKING,
});

for await (const chunk of stream) {
  if (firstChunkAt === null) firstChunkAt = performance.now() - t0;
  process.stdout.write(chunk.text ?? "");
  lastChunk = chunk;
}

console.log(`\n\nStream: pehla chunk ${firstChunkAt?.toFixed(0)} ms me aaya`);
console.log(`Stream: total ${(performance.now() - t0).toFixed(0)} ms`);
console.log("Tokens (aakhri chunk):", lastChunk?.usageMetadata);