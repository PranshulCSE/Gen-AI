import "dotenv/config";
import { createAI, MODEL } from "./config.js";

const ai = createAI();

// chat object history khud sambhalta hai aur har turn pe poori history bhejta hai
const chat = ai.chats.create({ model: MODEL });

const questions = [
  "What is Node.js? Answer in 3 lines.",
  "And what is Express? Answer in 3 lines.",
  "Compare both in 3 lines.",
];

for (const q of questions) {
  const res = await chat.sendMessage({ message: q });
  console.log(`Q: ${q}`);
  console.log(`   Input tokens this turn: ${res.usageMetadata?.promptTokenCount}`);
  console.log(`   Output tokens this turn: ${res.usageMetadata?.candidatesTokenCount}`);
}