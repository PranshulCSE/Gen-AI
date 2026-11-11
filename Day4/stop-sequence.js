import { ask } from "./helpers.js";

const res = await ask("List 5 benefits of learning Node.js as a numbered list.", {
  stopSequences: ["3."], // "3." aate hi ruk jao
});

console.log(res.text);
console.log("finishReason:", res.candidates?.[0]?.finishReason);


// Output:

// Here are 5 key benefits of learning Node.js:

// 1. **Full-Stack JavaScript Development:** Node.js allows you to use JavaScript on both the clientside (frontend) and server side (backend). This reduces the need to learn multiple programming languages and simplifies context-switching for developers.

// 2. **High Performance and Speed:** Powered by Google Chrome’s V8 engine, Node.js compiles JavaScript directly into native machine code. Its non-blocking, event-driven I/O model allows it to process multiple requests concurrently without slowing down.


// finishReason: STOP