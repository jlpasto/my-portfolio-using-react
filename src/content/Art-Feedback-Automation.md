
# 📌 Case Study: Art Feedback Automation via Tally Form, OpenAI & Email Using Make.com  
**Automatically processes drawing feedback requests submitted via Tally forms, uses GPT-4o to generate personalized feedback, and sends it via email.**

## 🔁 Scenario Overview

![Make.com Scenario Screenshot](/images/make/art-feedback-automation.png)

## 🧠 Problem Statement  
Manual review and feedback for art submissions can be slow, inconsistent, and labor-intensive. The client wanted to:
- Collect submissions through a structured Tally form
- Automate visual feedback generation using uploaded files and context
- Email personalized, friendly, HTML-formatted feedback to each participant

## ⚙️ Solution Overview  
A **fully automated art coaching assistant** was implemented in [Make.com](https://make.com) using a Tally webhook, OpenAI GPT-4o, and SMTP email modules.

### 🔄 Automation Flow:
1. **Trigger:** A Tally form webhook fires upon a new response.
2. **Form Parsing:** Extracts structured fields such as name, drawing goals, materials, images, and struggles.
3. **Prompt Composition:** A dynamic prompt is generated, formatted as a friendly coaching request, with references to both uploaded drawing and reference image.
4. **GPT-4o Response:** Uses OpenAI Chat Completion with GPT-4o to generate HTML feedback.
5. **Email Delivery:** Sends an email with the GPT-generated HTML feedback to the submitter’s email.

## 🔨 Tools & Technologies Used  

| Platform | Purpose |
|----------|---------|
| **Tally Forms** | Form submission collection |
| **Make.com** | Automation and integration engine |
| **OpenAI GPT-4o** | Feedback generation based on drawing and reference |
| **SMTP Email** | Delivering the formatted feedback to users |
| **Routers, Variables** | Manage prompt construction and flow logic |

## 📈 Outcome / Impact  
- 🧠 Delivered customized drawing feedback within minutes  
- ✏️ Provided detailed coaching based on uploaded reference and drawing images  
- 💬 Eliminated the need for manual coaching in early-stage submissions  
- ✅ Empowered young artists with immediate constructive input  

## 📌 Portfolio Highlights  
- **Scenario Name:** Integration Tally, HTTP, Email  
- **Platform:** [Make.com](https://make.com)  
- **Complexity:** Medium (form parsing, AI prompt, HTML output, email)  
- **AI Used:** OpenAI GPT-4o (chat)  
- **Integrations:** Tally, OpenAI, SMTP Email  
- **Real-time Triggering:** Yes (Tally webhook)  
- **Dynamic Content:** Yes (form-dependent prompt and email content)
