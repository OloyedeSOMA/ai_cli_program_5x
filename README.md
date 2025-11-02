# 🤖 AI Chat Program — Safe Text Generation CLI

A simple command-line AI chatbot built with **Node.js** and **OpenAI API**, featuring input/output **moderation** to ensure safe and respectful AI responses.

This project demonstrates:
- How to integrate OpenAI (or another AI API) into a Node.js script
- How to use environment variables for API security
- How to implement simple moderation filters for both user input and AI output

---

## 🧩 Features

✅ Dynamic user input from the terminal  
✅ System prompt that defines the AI’s behavior  
✅ Input moderation (blocks disallowed prompts)  
✅ Output moderation (redacts unsafe words)  
✅ Uses OpenAI’s official SDK (`openai` package)  
✅ Works with `.env` or terminal environment variables  

---

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) v18 or later
- An [OpenAI API key](https://platform.openai.com/account/api-keys)
- Internet connection

---

## ⚙️ Setup Instructions

### 1️ Clone this repository

```bash
git clone https://github.com/YOUR_USERNAME/ai_chat_program.git
cd ai_chat_program
```
### 2 run install
```bash
npm install
```
### 3️ Add your API key

### You can provide your OpenAI API key in either of the following two ways:

### Option A — Using .env file (recommended)

Create a file named .env in the root folder:

OPENAI_API_KEY=sk-your-api-key-here



### Option B — Using Terminal Environment Variable

You can also temporarily export your API key directly before running the script:

### Mac/Linux (bash/zsh):
```bash
export OPENAI_API_KEY=sk-your-api-key-here
node chat.mjs
```

### Windows PowerShell:
```bash
setx OPENAI_API_KEY "sk-your-api-key-here"
node chat.mjs
```
