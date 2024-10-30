/* const { GoogleGenerativeAI } = require("@google/generative-ai");
async function AI() {

    const genAI = new GoogleGenerativeAI("AIzaSyB_Gp0HTFsb8rRi7sAd7frXDovK4BnoIuY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = "Hi This AJay";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}
(async () => {
    await AI();
})();

 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as readline from "readline";

async function AI(prompt: string) {
    const genAI = new GoogleGenerativeAI("AIzaSyB_Gp0HTFsb8rRi7sAd7frXDovK4BnoIuY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your query: ", async (input) => {
    await AI(input);
    rl.close();
});


/* async function analysis() {
    const analysisResult = new GoogleGenerativeAI("AIzaSyB_Gp0HTFsb8rRi7sAd7frXDovK4BnoIuY")
    let a = analysisResult.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    console.log(analysisResult);
} */