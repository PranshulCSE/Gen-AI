import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ai, MODEL, THINKING } from "./helpers.js";

const chat = ai.chats.create({
  model: MODEL,
  config: {
    ...THINKING,
    systemInstruction:
      "Tum ek friendly Node.js mentor ho. Hinglish me, short jawab do.",
  },
});

const rl = readline.createInterface({ input, output });
console.log('Chat shuru! "exit" likh ke band karo.\n');

while (true) {
  const msg = (await rl.question("You: ")).trim();
  if (!msg) continue;
  if (msg.toLowerCase() === "exit") break;

  try {
    const res = await chat.sendMessage({ message: msg });
    console.log(`Bot: ${res.text.trim()}`);
    console.log(`     (input tokens: ${res.usageMetadata?.promptTokenCount})\n`);
  } catch (err) {
    console.log("Error:", err.message, "\n");
  }
}

rl.close();
console.log("Total messages in history:", (await chat.getHistory()).length);