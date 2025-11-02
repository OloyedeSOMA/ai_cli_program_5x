import 'dotenv/config';
import OpenAI from "openai";
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output} from 'node:process';

// Initialize OpenAI client with API key 
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

//  banned keywords list
const BANNED = ["kill", "bomb", "hack"];

// Input sanitization
function isSafeInput(text) {
  const lower = text.toLowerCase();
  return !BANNED.some(word => new RegExp("\\b" + word + "\\b", "i").test(lower));
}

// Output sanitization
function moderateOutput(text) {
  return text.replace(new RegExp("\\b(" + BANNED.join("|") + ")\\b", "gi"), "[REDACTED]");
}

//ai api calling loic
const chatWithAI = async (userPrompt)=>{
    if(!isSafeInput)return "❌ Your input violated the moderation policy.";
    const systemPrompt = "You are a friendly, respectful assistant who gives safe and helpful answers.";

    try{
        const response = await client.responses.create({
            model:"gpt-4o-mini",
            input:[
                {role:"system", content:systemPrompt},
                {role:"user", content:userPrompt}
            ]
        });

        const aiText= response.output_text

        return moderateOutput(aiText);
    }
    catch(err){
        return `⚠️ API Error: ${err.message}`;
    }
}


//terminal prompt setup
const rl = createInterface({input, output});
try{
    const userPrompt = await rl.question("Enter your prompt: ");
    const result = await chatWithAI(userPrompt);
    console.log("\n🤖 AI Response:", result);
}finally{
    rl.close();
}