import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenerativeAI(API_KEY);
console.log(ai);
async function generateResponse(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent(prompt);
  const response =  result.response;
  const text = response.text();

  return text;
}

export default generateResponse;
