import { ask, sleep } from "./helpers.js";

const prompt = "Suggest one catchy name for a chai cafe. Reply with only the name.";
const temps = [0, 1, 2];

for (const temperature of temps) {
  console.log(`\n=== temperature: ${temperature} ===`);
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await ask(prompt, { temperature });
      console.log(`Run ${i}: ${res.text?.trim()}`);
    } catch (err) {
      console.log(`Run ${i}: ERROR -> ${err.message}`);
    }
    await sleep(1000); // free tier ke liye thoda gap
  }
}