import OpenAi from "openai";
import "dotenv/config";

const Question = "What is the capital of France?";

const Client = new OpenAi({
    apiKey:process.env.OPENAI_KEY
});

const response = await Client.responses.create({
    input:Question,
    model: "gpt-4.1-mini"
});

console.log(response.output_text);