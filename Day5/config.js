export const MODEL = "gemini-3.5-flash"; // jo tumhare AI Studio me chal raha ho wo daalo

// Thinking ko chhota rakhte hain taaki experiments tez aur sasta rahe.
// Gemini 3.x  -> thinkingLevel ("low" / "high" ...)
// Gemini 2.5  -> thinkingBudget (jaise 0)  [thinkingLevel yahan error dega]
export const THINKING = { thinkingConfig: { thinkingLevel: "low" } };