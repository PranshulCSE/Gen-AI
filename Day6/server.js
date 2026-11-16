import express from "express";
import { ai, MODEL, THINKING } from "../Day5/helpers.js";

const app = express();
app.use(express.json());
// NOTE: yahan compression() middleware mat lagana, wo SSE ko buffer kar deta hai

const sessions = new Map();

function getChat(sessionId) {
  if (!sessions.has(sessionId)) {
    sessions.set(
      sessionId,
      ai.chats.create({
        model: MODEL,
        config: {
          ...THINKING,
          systemInstruction: "Tum ek friendly Node.js mentor ho. Hinglish me jawab do.",
        },
      })
    );
  }
  return sessions.get(sessionId);
}

app.post("/chat/stream", async (req, res) => {
  const { sessionId, message } = req.body ?? {};
  if (typeof sessionId !== "string" || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "sessionId aur message (string) zaroori hain" });
  }

  // SSE headers
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no", // nginx buffering band
  });
  res.flushHeaders();

  // Client disconnect detect karo (req nahi, res.on("close") use karo)
  let closed = false;
  res.on("close", () => {
    closed = true;
  });

  const send = (payload) => res.write(`data: ${JSON.stringify(payload)}\n\n`);

  try {
    const stream = await getChat(sessionId).sendMessageStream({ message });
    for await (const chunk of stream) {
      if (closed) break; // user chala gaya, generation rok do
      if (chunk.text) send({ type: "token", text: chunk.text });
    }
    if (!closed) send({ type: "done" });
  } catch (err) {
    console.error("Stream error:", err.message);
    if (!closed) send({ type: "error", message: "AI call fail hui" });
  } finally {
    res.end();
  }
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));