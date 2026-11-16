import express from "express";
import { ai, MODEL, THINKING } from "./helpers.js";

const app = express();
app.use(express.json());

const sessions = new Map(); // sessionId -> chat object (abhi memory me)

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

app.post("/chat", async (req, res) => {
  const { sessionId, message } = req.body ?? {};
  if (typeof sessionId !== "string" || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "sessionId aur message (string) zaroori hain" });
  }
  try {
    const result = await getChat(sessionId).sendMessage({ message });
    res.json({ reply: result.text.trim() });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "AI call fail hui" });
  }
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));