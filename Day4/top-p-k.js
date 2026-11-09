
import { ask, sleep } from "./helpers.js";

const prompt = "Complete the sentence with one word: The weather today is very";

const settings = [
  { label: "topK=1 (sabse likely hi)", topK: 1 },
  { label: "topK=40", topK: 40 },
  { label: "topP=0.1 (bahut tight)", topP: 0.1 },
  { label: "topP=0.95 (wide)", topP: 0.95 },
];

for (const { label, ...cfg } of settings) {
  console.log(`\n=== ${label} ===`);
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await ask(prompt, { temperature: 1, ...cfg });
      console.log(`Run ${i}: ${res.text?.trim()}`);
    } catch (err) {
      console.log(`Run ${i}: ERROR -> ${err.message}`);
    }
    await sleep(1000);
  }
}