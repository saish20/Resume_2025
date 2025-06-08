import axios from "axios";
import { saishProfile } from "../data/saishProfile";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

function buildContextualPrompt(userQuestion) {
  const exp = saishProfile.experience.map(
    (e) => `• ${e.company} (${e.role}, ${e.duration}): ${e.details}`
  ).join("\n");

  return `
You are a helpful and honest assistant representing Saish Mayekar.

Only use the following information to answer questions. If a question asks for something outside of this data, respond with: "I don’t have that information."

Summary:
${saishProfile.summary}

Experience:
${exp}

Skills:
${saishProfile.skills.join(", ")}

User Question:
${userQuestion}
`.trim();
}

export async function askLLM(question) {
  const prompt = buildContextualPrompt(question);

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: prompt }
      ],
      temperature: 0.3,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}
