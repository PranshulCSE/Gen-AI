import "dotenv/config";
import { createAI, MODEL } from "./config.js";

const ai = createAI();

const samples = {
  English: "The weather is very nice today, let's go for a walk.",
  Hinglish: "Aaj mausam bahut accha hai, chalo walk pe chalte hain.",
  Hindi: "आज मौसम बहुत अच्छा है, चलो सैर पर चलते हैं।",
  Code: "const sum = (a, b) => a + b;",
  JSON: '{"name":"Rahul","age":25,"skills":["React","Node"]}',
};

for (const [label, text] of Object.entries(samples)) {
  const res = await ai.models.countTokens({ model: MODEL, contents: text });
  const ratio = (text.length / res.totalTokens).toFixed(1);
  console.log(
    `${label.padEnd(9)} | chars: ${String(text.length).padStart(3)} | tokens: ${String(res.totalTokens).padStart(3)} | chars/token: ${ratio}`
  );
}

// Output:
// English   | chars:  52 | tokens:  16 | chars/token: 3.3
// Hinglish  | chars:  54 | tokens:  17 | chars/token: 3.2
// Hindi     | chars:  43 | tokens:  14 | chars/token: 3.1
// Code      | chars:  28 | tokens:  14 | chars/token: 2.0
// JSON      | chars:  51 | tokens:  17 | chars/token: 3.0