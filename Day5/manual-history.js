import { ai, MODEL, THINKING } from "./helpers.js";

async function ask(contents) {
  const res = await ai.models.generateContent({
    model: MODEL,
    contents,
    config: THINKING,
  });
  return res.text.trim();
}

// 1) Bina history: model ko kuch yaad nahi
console.log("Bina history:", await ask("Mera naam kya hai?"));

// 2) History ke saath
const history = [
  { role: "user", parts: [{ text: "Mera naam Rahul hai aur main MERN developer hoon." }] },
  { role: "model", parts: [{ text: "Nice to meet you, Rahul!" }] },
  { role: "user", parts: [{ text: "Mera naam kya hai aur main kya karta hoon?" }] },
];
console.log("History ke saath:", await ask(history));