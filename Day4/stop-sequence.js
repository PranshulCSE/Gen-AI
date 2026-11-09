import { ask } from "./helpers.js";

const res = await ask("List 5 benefits of learning Node.js as a numbered list.", {
  stopSequences: ["3."], // "3." aate hi ruk jao
});

console.log(res.text);
console.log("finishReason:", res.candidates?.[0]?.finishReason);