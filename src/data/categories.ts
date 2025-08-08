export const themes = {
  "All Works": { primary: "#10b981", bg: "#f0fdfa" },
  "Website": { primary: "#6366f1", bg: "#f0f1ff" },
  "Python Automation": { primary: "#f59e0b", bg: "#fffbeb" },
  "Make.com Automation": { primary: "#ef4444", bg: "#fef2f2" },
  //"Google Apps Script": { primary: "#8b5cf6", bg: "#f5f3ff" }
};

// Sample projects data
export const projectsByCategory = {
    Website: [
      {
        id: 1,
        title: "Omnichannel Communications App",
        slug: "Omnichannel-Communications-App",
        description:
          "Omnichannel Communications App is a Node.js-based application that seamlessly" +
          " integrates multiple communication APIs into a single backend platform." + 
          " Designed for simplicity and versatility, it enables unified messaging and" +
          " interaction management across various channels (Email, Chat, Voice Call, SMS)." +
          " The project is built primarily with HTML and JavaScript, offering a streamlined" +
          " solution for efficient, centralized communication.",
        image: `/images/website/omnichannel-preview.png`,
        tags: ["Node.js", "API Integration", "Javascript", "Tailwind"],
        liveUrl: "https://omnichannel-communication-app.vercel.app/",
        githubUrl: "https://github.com/jlpasto/omnichannel-communication-app",
      },
      {
        id: 2,
        title: "BreatheFit",
        slug: "BreatheFit",
        description: "BreatheFit is a sport-themed breathing coach with guided breathing exercises designed to reduce stress, improve focus, and enhance your overall well-being.",
        image: `/images/website/breathefit-preview.png`,
        tags: ["Node.js", "React", "TypeScript"],
        liveUrl: "https://breathefit.netlify.app/",
        githubUrl: "https://github.com/jlpasto/BreatheFit",
      },
      {
        id: 3,
        title: "Easybank",
        slug: "Easybank",
        description:
          "Easybank is a modern, responsive landing page for a digital banking solution." + 
          " The site highlights key features such as online banking, simple budgeting," + 
          " fast onboarding, and open API integration. It uses clean layouts, custom styling," + 
          " and engaging sections like a hero banner, feature grid, and latest articles.",
        image: `/images/website/easybank-preview.jpg`,
        tags: ["HTML", "SCSS", "Responsive Design"],
        liveUrl: "https://jlpasto.github.io/easybank/",
        githubUrl: "https://github.com/jlpasto/easybank/tree/gh-pages",
      },
      {
        id: 4,
        title: "Fylo",
        slug: "Fylo",
        description:
          "Fylo is a modern, responsive landing page project for a cloud storage service." +
          " The site features a clean layout with sections showcasing key features like " +
          " secure file storage, real-time collaboration, and universal access.",
        image: `/images/website/fylo-preview.jpg`,
        tags: ["HTML", "SCSS", "Responsive Design"],
        liveUrl: "https://jlpasto.github.io/fylo/",
        githubUrl: "https://github.com/jlpasto/fylo/tree/gh-pages",
      },
      {
        id: 5,
        title: "Manage",
        slug: "Manage",
        description:
          "Manage is a modern landing page for a team productivity platform,"+
          " designed to help software teams efficiently plan daily tasks, track progress, and collaborate seamlessly.",
        image: `/images/website/manage-preview.jpg`,
        tags: ["HTML", "SCSS", "Javascript"],
        liveUrl: "https://jlpasto.github.io/manage/",
        githubUrl: "https://github.com/jlpasto/manage/tree/gh-pages",
      },
      {
        id: 6,
        title: "Sunnyside",
        slug: "Sunnyside",
        description:
          "Sunnyside is a modern, responsive landing page for a creative agency,"+
          " built with an emphasis on clean design and user experience." +
          " The page features a bold hero section, engaging visuals, service highlights, and client testimonials.",
        image: `/images/website/sunnyside-preview.jpg`,
        tags: ["HTML", "SCSS", "Javascript"],
        liveUrl: "https://jlpasto.github.io/sunnyside/",
        githubUrl: "https://github.com/jlpasto/sunnyside/tree/gh-pages",
      },
  
    ],
    "Web Scraping": [
      {
        id: 9,
        title: "Price Monitoring System",
        description:
          "Automated price tracking system that monitors e-commerce sites and sends alerts.",
        image: "/placeholder.svg",
        tags: ["Python", "Scrapy", "BeautifulSoup"],
        liveUrl: "#",
        githubUrl: "#",
      },
     
    ],
    "Python Automation": [
      {
        id: 17,
        title: "Invoice Generator",
        slug: "Invoice-Generator",
        description:
          "Automated invoice generation system with PDF creation.",
        image: `/images/python/pdf-generator-preview.png`,
        tags: ["Python", "Reportlab", "PDF"],
        liveUrl: "work/Invoice-Generator",
        githubUrl: "https://github.com/jlpasto/product-quotation-using-python",
      },
      {
        id: 18,
        title: "PDF to JSON Converter",
        slug: "PDF-to-JSON-and-Notion-Uploader",
        description:
          "Automate the extraction of data from PDF files exported from Notion and convert them into structured JSON format.",
        image: `/images/python/notion-automation-preview.png`,
        tags: ["Python", "Notion API", "JSON"],
        liveUrl: "/work/PDF-to-JSON-and-Notion-Uploader",
        githubUrl: "https://github.com/jlpasto/notion-pdf-to-json",
      },
      {
        id: 19,
        title: "Automated Timesheet Integration",
        slug: "Automated-Timesheet-Integration",
        description:
        "Automates the process of synchronizing employee timesheet data between Compliance Genie and Sage HR.",
        image: `/images/python/timesheet-integration-preview.png`,
        tags: ["Python", "Sage HR API", "Multi-threading"],
        liveUrl: "/work/Automated-Timesheet-Integration",
        githubUrl: "https://github.com/jlpasto/automated-timesheet-integration-using-SAGE-HR",
      },
      {
        id: 20,
        title: "Pattern Design Generator",
        slug: "Pattern-Design-Generator",
        description:
          "Automate the creation of visually compelling pattern designs by layering motifs with customizable colors.",
        image: `/images/python/pattern-design-generator-preview.png`,
        tags: ["Python", "Numpy", "Image Layering"],
        liveUrl: "/work/Pattern-Design-Generator",  
        githubUrl: "https://github.com/jlpasto/pattern-design-generator-using-python",
      },
      {
        id: 21,
        title: "Auction Listings Scraper",
        slug: "Auction-Listings-Scraper",
        description:
        "A robust Python script for scraping B-Stock auction listings using a proxy for secure and anonymous access.",
        image: `/placeholder.svg`,
        tags: ["Python", "Selenium", "BeautifulSoup"],
        liveUrl: "/work/Auction-Listings-Scraper",  
        githubUrl: "https://github.com/jlpasto/Bstock-Scraper.git",
      }
  
    ],
    "Make.com Automation": [

      {
        id: 30,
        title: "HR Hiring Automation",
        slug: "HR-Hiring-Automation",
        description:
          "Automates the entire hiring process by detecting candidate status via Gmail labels, using AI agents to generate communication, and leveraging HTTP API calls to send emails, create Google Calendar events, log data to Google Sheets, and post updates to Discord.",
        image: `/images/make/hr-hiring-automation.png`,
        tags: ["N8N", "HTTP Request", "AI Agent"],
        liveUrl: "/work/HR-Hiring-Automation",
        githubUrl: "null",
      },
      {
        id: 26,
        title: "Social Media Automation",
        slug: "Social-Media-Automation",
        description:
          "Multi-platform social media posting with content generation using OpenAI GPT-4o, Perplexity AI, and GPT-4 Vision.",
        image: `/images/make/social-media-automation.png`,
        tags: ["Make.com", "Social Media APIs", "AI Modules"],
        liveUrl: "/work/Social-Media-Automation",
        githubUrl: null,
      },
      {
        id: 27,
        title: "Notion - PDF To JSON Converter",
        slug: "Notion-PDF-To-JSON-Converter",
        description:
          "Automated extraction of PDF content into structured JSON format and storage into Notion using iLovePDF, ComPDFKit, and Make.com",
        image: `/images/make/notion-pdf-to-json.png`,
        tags: ["Make.com", "Notion", "OCR"],
        liveUrl: "/work/Notion-PDF-To-JSON-Converter",
        githubUrl: null,
      },
      {
        id: 29,
        title: "Art Feedback Automation",
        slug: "Art-Feedback-Automation",
        description:
          "Automatically processes drawing feedback requests submitted via Tally forms, uses GPT-4o to generate personalized feedback, and sends it via email.",
        image: `/images/make/art-feedback-automation.png`,
        tags: ["Make.com", "OpenAI", "Email Module"],
        liveUrl: "/work/Art-Feedback-Automation",
        githubUrl: null,
      }
    ],
    "Google Apps Script": [
      {
        id: 33,
        title: "Automated Invoicing System",
        description:
          "Google Sheets based invoicing with PDF generation and email distribution.",
        image: "/placeholder.svg",
        tags: ["Google Apps Script", "Google Sheets", "PDF"],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
  };
  

// Shuffle function
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate 'All Works' array
const allProjects = Object.entries(projectsByCategory)
  .filter(([category]) => category !== "All Works")
  .flatMap(([, projects]) => projects);
projectsByCategory["All Works"] = allProjects;

export const categoryCounts = Object.fromEntries(
  Object.entries(projectsByCategory).map(([category, projects]) => [
    category,
    projects.length,
  ])
);

export const categories = Object.keys(themes); 