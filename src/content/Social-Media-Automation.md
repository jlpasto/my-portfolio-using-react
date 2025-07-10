# 📌 Case Study: Social Media Content Automation Using Make.com
**Multi-platform social media posting with content generation using OpenAI GPT-4o, Perplexity AI, and GPT-4 Vision.**

## 🔁 Scenario Overview

![Make.com Scenario Screenshot](/public/images/make/social-media-automation.png)

## 🧠 Problem Statement
Managing and creating daily social media content across platforms is time-consuming and repetitive. Marketing teams often juggle research, content writing, and formatting, leading to bottlenecks and inconsistent posting. The client wanted a solution that:
- Automates post creation for multiple platforms (Facebook, LinkedIn)
- Uses existing data in Google Sheets
- Generates text and visuals using AI
- Requires **zero manual copy-paste**

## ⚙️ Solution Overview
I designed and implemented a **fully automated social media content generation system** using [Make.com](https://make.com). The scenario uses **webhooks, Google Sheets, OpenAI (GPT-4o), Perplexity AI, and GPT-4 Vision** to generate summaries and turn them into branded posts.

### 🔄 Automation Flow:
1. **Trigger:** Google Sheets webhook triggers when a new row is edited or added (e.g., a new article or image is entered).
2. **Routing Logic:** A basic router checks which types of content are present (text, URL, image).
3. **AI Modules:**
   - 🔤 OpenAI GPT-4o summarizes plain text input.
   - 🌐 Perplexity AI analyzes a URL and summarizes web content.
   - 🖼️ GPT-4 Vision analyzes and describes uploaded images.
4. **Aggregation:** All generated summaries are merged into a single "content brief."
5. **Post Generation:**
   - GPT-4o generates platform-specific posts:
     - 📘 **Facebook:** Inspirational, emoji-filled, engaging post
     - 💼 **LinkedIn:** Professional, thought-provoking post
6. **Output:** The final post text is written back into Google Sheets under designated columns.
7. **Status Update:** The Google Sheet is updated to reflect the post has been processed (`Processing 🔃`, then complete).

## 🔨 Tools & Technologies Used

| Platform | Purpose |
|----------|---------|
| **Google Sheets** | Data source and status tracking |
| **Make.com** | Integration and automation engine |
| **OpenAI GPT-4o** | Text and image analysis, post writing |
| **Perplexity AI** | Webpage summarization |
| **GPT-4 Vision** | Image content analysis |
| **Routers & Aggregators** | Handle conditional workflows and merge AI outputs |

## 📈 Outcome / Impact
- ⏱️ Reduced content creation time by **90%**
- ✅ Eliminated manual summarization and formatting
- 📅 Ensured consistency across Facebook and LinkedIn post formats
- 💡 Enabled non-technical staff to input ideas into a Sheet and have finished posts ready within minutes

## 📌 Portfolio Highlights
- **Scenario Name:** Social Media Automation  
- **Platform:** [Make.com](https://make.com)  
- **Complexity:** Advanced routing, AI integration, Google Sheets API  
- **AI Used:** OpenAI GPT-4o (chat + vision), Perplexity AI  
- **Integrations:** 5+ connected services  
- **Real-time Triggering:** Yes (Google Sheets webhook)  
- **Dynamic Content:** Yes (based on cell values and content type)

