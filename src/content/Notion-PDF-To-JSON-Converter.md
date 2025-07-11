
# 📌 Case Study: Notion (PDF ➡ JSON) Automation Using Make.com  
**Automated extraction of PDF content into structured JSON format and storage into Notion using iLovePDF, ComPDFKit, and Make.com**

## 🔁 Scenario Overview

![Make.com Scenario Screenshot](/public/images/make/notion-pdf-to-json.png)

## 🧠 Problem Statement  
Manually extracting and copying content from PDF reports into Notion databases is inefficient, especially when dealing with recurring monthly reports. The client wanted a system that could:
- Automatically process uploaded PDFs
- Split and convert them to readable text
- Upload the extracted content into the corresponding Notion database
- Handle errors and file structures dynamically

## ⚙️ Solution Overview  
I built a **robust PDF-to-Notion content automation** using [Make.com](https://make.com). It combines **Notion, HTTP, iLovePDF, ComPDFKit, and utility modules** to automate the entire workflow from document retrieval to content injection.

### 🔄 Automation Flow:
1. **Trigger:** Search Notion for a specific page titled `2023 Battery Report` inside a designated database.
2. **Retrieve Page ID:** Feed the page ID using an array feeder module.
3. **Get Database Item:** Extracts metadata and attached files from the Notion page.
4. **Download File:** Uses the file URL to download the PDF file using HTTP GET.
5. **Split PDF:** iLovePDF module splits the PDF using a fixed range (1-page splits).
6. **Unzip Archive:** The zipped output from iLovePDF is unpacked.
7. **Aggregate Pages:** Aggregates the resulting PDF pages.
8. **Feed Pages for OCR:** Feeds each page into ComPDFKit for OCR processing.
9. **Create OCR Task:** Initializes a new OCR (PDF to text) task via ComPDFKit.
10. **Upload Each Page:** Uploads each split page into the OCR task.
11. **Start OCR Task:** Starts the OCR conversion process.
12. **Wait Loop (if needed):** Uses repeater and condition-based routing to wait for the OCR result.
13. **Download OCR Result:** Downloads the converted TXT content once ready.
14. **Aggregate Text:** Joins all the page contents into a single formatted text blob.
15. **Update Notion:** Updates the Notion database item with the full OCR text content.

## 🔨 Tools & Technologies Used  

| Platform | Purpose |
|----------|---------|
| **Notion** | Database and content storage |
| **Make.com** | Integration and automation engine |
| **iLovePDF** | PDF splitting |
| **ComPDFKit** | OCR (PDF ➡ TXT) |
| **HTTP Module** | File downloading |
| **Routers, Aggregators, Repeaters** | Flow control, text merging, retries |

## 📈 Outcome / Impact  
- 📄 Automated full-text PDF conversion to structured Notion content  
- ⏱️ Reduced processing time from **30 minutes manual** to **under 3 minutes automated**  
- 🚫 Eliminated manual data copying from PDFs  
- 🔁 Scalable for recurring monthly reports  
- ✅ Seamless integration between file handling, OCR, and Notion  

## 📌 Portfolio Highlights  
- **Scenario Name:** Notion (PDF ➡ JSON)  
- **Platform:** [Make.com](https://make.com)  
- **Complexity:** High (file parsing, OCR, Notion update, retries)  
- **AI Used:** ComPDFKit OCR  
- **Integrations:** Notion, HTTP, iLovePDF, ComPDFKit  
- **Real-time Triggering:** No (manually triggered or scheduled)  
- **Dynamic Content:** Yes (based on PDF file content)
