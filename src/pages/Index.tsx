import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ContactPanel from "@/components/ContactPanel";
import LoadingScreen from "@/components/LoadingScreen";
import { Link } from "react-router-dom";


// Color themes for categories
const themes = {
  Website: { primary: "#6366f1", bg: "#f0f1ff" },
  //"Web Scraping": { primary: "#10b981", bg: "#f0fdfa" },
  "Python Automation": { primary: "#f59e0b", bg: "#fffbeb" },
  "Make.com Automation": { primary: "#ef4444", bg: "#fef2f2" }
  // "Google Apps Script": { primary: "#8b5cf6", bg: "#faf5ff" },
};

// Sample projects data
const projectsByCategory = {
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
      tags: ["Node.js", "API Integration", "Javascript"],
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
    {
      id: 10,
      title: "Social Media Analytics",
      description:
        "Data collection tool for social media platforms with sentiment analysis.",
      image: "/placeholder.svg",
      tags: ["Python", "Selenium", "Pandas"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 11,
      title: "News Aggregator",
      description:
        "Automated news collection system that scrapes multiple sources.",
      image: "/placeholder.svg",
      tags: ["Python", "Requests", "NLP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 12,
      title: "Job Market Analyzer",
      description:
        "Employment data scraper that tracks job postings and salary trends.",
      image: "/placeholder.svg",
      tags: ["Python", "Scrapy", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 13,
      title: "Real Estate Data Collector",
      description:
        "Property listing scraper with price analysis and market trends.",
      image: "/placeholder.svg",
      tags: ["Python", "BeautifulSoup", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 14,
      title: "Academic Research Tool",
      description:
        "Research paper and citation scraper for academic databases.",
      image: "/placeholder.svg",
      tags: ["Python", "Selenium", "PDF Parser"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 15,
      title: "Stock Market Monitor",
      description:
        "Financial data scraper tracking stock prices and market indicators.",
      image: "/placeholder.svg",
      tags: ["Python", "Requests", "Financial APIs"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 16,
      title: "E-commerce Competitor Analysis",
      description:
        "Product and pricing intelligence tool for market positioning.",
      image: "/placeholder.svg",
      tags: ["Python", "Scrapy", "ML"],
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
    {
      id: 34,
      title: "Meeting Scheduler",
      description:
        "Smart meeting scheduling tool with Google Calendar integration.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "Calendar API", "Gmail"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 35,
      title: "Data Sync Tool",
      description:
        "Bidirectional data synchronization between Google Sheets and databases.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "API Integration", "Data Sync"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 36,
      title: "Expense Tracking System",
      description:
        "Automated expense tracking with receipt processing and categorization.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "OCR", "Budget Management"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 37,
      title: "Project Management Dashboard",
      description:
        "Comprehensive project tracking with Gantt charts and reporting.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "Project Management", "Charts"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 38,
      title: "HR Management System",
      description:
        "Employee management with leave tracking and performance reviews.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "HR", "Forms"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 39,
      title: "Inventory Management Tool",
      description:
        "Stock tracking system with barcode scanning and reorder alerts.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "Inventory", "Barcode"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 40,
      title: "Customer Feedback Analyzer",
      description:
        "Automated feedback collection and analysis with sentiment scoring.",
      image: "/placeholder.svg",
      tags: ["Google Apps Script", "Sentiment Analysis", "Forms"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
};

const categoryCounts = Object.fromEntries(
  Object.entries(projectsByCategory).map(([category, projects]) => [
    category,
    projects.length,
  ])
);

const Index = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof themes>("Website");
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading screen the first time
    return sessionStorage.getItem("hasLoaded") !== "true";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false),
      sessionStorage.setItem("hasLoaded", "true");
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const categories = Object.keys(themes) as Array<keyof typeof themes>;
  const currentProjects = projectsByCategory[activeCategory];
  const theme = themes[activeCategory];

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto">
          <div className="p-8">
            <div className="text-center mb-4">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                {/* <User className="w-16 h-16 text-gray-400" /> */}
                <img
                  src={`/images/profile-pic.jpg`} // Update this path
                  alt="Jhon Loyd Pastorin Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                  draggable="false"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Jhon Loyd Pastorin
              </h1>
              <p className="text-gray-600 text-sm">
                Creative Developer & Automation Specialist
              </p>
            </div>

            <div className="mb-4 pb-4 border-b border-gray-200">
              <button
                onClick={() => setIsContactPanelOpen(true)}
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl hover:scale-105 transition-transform duration-300 font-medium text-sm"
              >
                Get In Touch
              </button>
            </div>

            {/* <div className="mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Passionate developer with 5+ years of experience creating
                digital solutions that blend beautiful design with robust
                functionality.
              </p>
            </div> */}

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                My Work
              </h2>
              <nav className="space-y-3">
                {categories.map((category) => {
                  const categoryTheme = themes[category];
                  const isActive = category === activeCategory;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-500 hover:scale-105 ${
                        isActive
                          ? "text-white transform scale-105 shadow-lg"
                          : "text-gray-700 hover:shadow-md"
                      }`}
                      style={{
                        backgroundColor: isActive
                          ? categoryTheme.primary
                          : "transparent",
                        border: isActive
                          ? "none"
                          : `1px solid ${categoryTheme.primary}40`,
                      }}
                    >
                      <div className="text-sm font-medium">{category}</div>
                      <div
                        className={`text-xs mt-1 ${isActive ? "text-white/80" : "text-gray-500"}`}
                      >
                        {categoryCounts[category]} projects
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>


          </div>
        </aside>

        {/* Main Content */}
        <main
          className="ml-80 flex-1 min-h-screen transition-all duration-700 ease-out"
          style={{ backgroundColor: theme.bg }}
        >
          <div className="p-8">
            <div className="mb-8">
              <h1
                className="text-4xl font-bold mb-2 transition-colors duration-500"
                style={{ color: theme.primary }}
              >
                {activeCategory}
              </h1>
              <p className="text-gray-600">
                {currentProjects.length} projects showcasing my expertise in{" "}
                {activeCategory.toLowerCase()}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <a href={`/work/${project.slug}`} target="_blank" rel="noopener noreferrer">
                      <div className="aspect-video relative overflow-hidden bg-gray-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: theme.primary }}
                        />
                      </div>
                    </a>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            className="text-xs border-0 text-white"
                            style={{ backgroundColor: theme.primary + "80" }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2 text-sm">
                        {project.description}
                      </p>
                      <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-xs"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View
                            </a>
                          </Button>
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-xs"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                
              ))}
            </div>
          </div>
        </main>

        <ContactPanel
          isOpen={isContactPanelOpen}
          onClose={() => setIsContactPanelOpen(false)}
        />
      </div>
    </>
  );
};

export default Index;
