import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ContactPanel from "@/components/ContactPanel";
import LoadingScreen from "@/components/LoadingScreen";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";


// Color themes for categories
const themes = {
  "All Works": { primary: "#10b981", bg: "#f0fdfa" },
  Website: { primary: "#6366f1", bg: "#f0f1ff" },
  //"Web Scraping": { primary: "#10b981", bg: "#f0fdfa" },
  "Python Automation": { primary: "#f59e0b", bg: "#fffbeb" },
  "Make.com Automation": { primary: "#ef4444", bg: "#fef2f2" }
  // "Google Apps Script": { primary: "#8b5cf6", bg: "#faf5ff" },
};

// Predefined tags for filtering
const predefinedTags = [
  { label: "All", value: "All", color: "#e5e7eb", text: "#374151" },
  { label: "Node.js", value: "Node.js", color: "#d1fae5", text: "#065f46" },
  { label: "Python", value: "Python", color: "#fef3c7", text: "#92400e" },
  { label: "Make.com", value: "Make.com", color: "#fce7f3", text: "#be185d" },
  { label: "API", value: "API", color: "#e0e7ff", text: "#3730a3" },
  { label: "React", value: "React", color: "#e0f2fe", text: "#0369a1" },
  { label: "Google Apps Script", value: "Google Apps Script", color: "#f3e8ff", text: "#6d28d9" },
  { label: "Tailwind", value: "Tailwind", color: "#cffafe", text: "#0e7490" },
  { label: "Javascript", value: "Javascript", color: "#fef9c3", text: "#b45309" },
  { label: "TypeScript", value: "TypeScript", color: "#dbeafe", text: "#1e40af" },
  { label: "Notion", value: "Notion", color: "#f3f4f6", text: "#111827" },
  { label: "OpenAI", value: "OpenAI", color: "#f1f5f9", text: "#0f172a" },
  { label: "Automation", value: "Automation", color: "#f3f4f6", text: "#334155" },
];

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

const categoryCounts = Object.fromEntries(
  Object.entries(projectsByCategory).map(([category, projects]) => [
    category,
    projects.length,
  ])
);

const pathToCategory = {
  "/website": "Website",
  "/make": "Make.com Automation",
  "/python": "Python Automation",
  "/all": "All Works",
  "/": "All Works",
};
const categoryToPath = {
  "Website": "/website",
  "Make.com Automation": "/make",
  "Python Automation": "/python",
  "All Works": "/all",
};

const Index = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof themes>("Website");
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading screen the first time
    return sessionStorage.getItem("hasLoaded") !== "true";
  });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isFastLoading, setIsFastLoading] = useState(false);

  // State for shuffled 'All Works'
  const [shuffledAllWorks, setShuffledAllWorks] = useState(() => shuffleArray(projectsByCategory["All Works"]));
  // Multi-select tag filter state
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false),
      sessionStorage.setItem("hasLoaded", "true");
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    // On mount or path change, set category from path
    const category = pathToCategory[location.pathname] || "Website";
    setActiveCategory(category);
  }, [location.pathname]);

  useEffect(() => {
    if (activeCategory === "All Works") {
      setShuffledAllWorks(shuffleArray(projectsByCategory["All Works"]));
    }
  }, [activeCategory]);

  // Reset tag filter on category change
  useEffect(() => {
    setSelectedTags([]);
  }, [activeCategory]);

  const categories = Object.keys(themes) as Array<keyof typeof themes>;
  const theme = themes[activeCategory];
  const currentProjects = activeCategory === "All Works"
    ? shuffledAllWorks
    : projectsByCategory[activeCategory];

  // Filter projects by selected tags (OR logic)
  const filteredProjects =
    activeCategory === "All Works" && selectedTags.length > 0
      ? currentProjects.filter(project =>
          (project.tags || []).some(tag => selectedTags.includes(tag))
        )
      : currentProjects;

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {isFastLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary border-solid"></div>
        </div>
      )}
      <div className="flex min-h-screen flex-col sm:flex-row">
        {/* Mobile Topbar */}
        <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-white shadow z-50 sticky top-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src="/images/profile-pic.jpg"
                alt="Jhon Loyd Pastorin Profile Picture"
                className="w-full h-full object-cover rounded-full"
                draggable="false"
              />
            </div>
            <span className="font-bold text-lg text-gray-900">Jhon Loyd Pastorin</span>
          </div>
          <button
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        {/* Mobile Drawer Navigation */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex">
            <div className="w-72 max-w-full bg-white h-full shadow-2xl p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/profile-pic.jpg"
                      alt="Jhon Loyd Pastorin Profile Picture"
                      className="w-full h-full object-cover rounded-full"
                      draggable="false"
                    />
                  </div>
                  <span className="font-bold text-lg text-gray-900">Jhon Loyd Pastorin</span>
                </div>
                <button
                  className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              <button
                onClick={() => {
                  setIsContactPanelOpen(true);
                  setMobileNavOpen(false);
                }}
                className="w-full px-4 py-3 mb-6 bg-gray-900 text-white rounded-xl hover:scale-105 transition-transform duration-300 font-medium text-sm"
              >
                Get In Touch
              </button>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">My Portfolio</h2>
                <nav className="space-y-3">
                  {categories.map((category) => {
                    const categoryTheme = themes[category];
                    const isActive = category === activeCategory;
                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          navigate(categoryToPath[category] || "/");
                          setMobileNavOpen(false);
                        }}
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
            <div className="flex-1" onClick={() => setMobileNavOpen(false)} />
          </div>
        )}
        {/* Sidebar for desktop */}
        <aside className="hidden sm:block fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto">
          <div className="p-8">
            <div className="text-center mb-4">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <img
                  src={`/images/profile-pic.jpg`}
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
                      onClick={() => {
                        setActiveCategory(category);
                        navigate(categoryToPath[category] || "/");
                      }}
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
          className="sm:ml-80 flex-1 min-h-screen transition-all duration-700 ease-out bg-white"
        >
          <div className="p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h1
                className="text-2xl sm:text-4xl font-bold mb-2 transition-colors duration-500"
                style={{ color: theme.primary }}
              >
                {activeCategory}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {currentProjects.length} projects showcasing my expertise in{" "}
                {activeCategory.toLowerCase()}
              </p>
            </div>
            {/* Tag Filter Bar - only show for All Works */}
            {activeCategory === "All Works" && (
              <div className="flex gap-2 mb-6 flex-nowrap overflow-x-auto pb-2">
                {predefinedTags.map(tag => {
                  const isSelected = selectedTags.includes(tag.value);
                  return (
                    <button
                      key={tag.value}
                      onClick={() => {
                        setSelectedTags(prev =>
                          tag.value === "All"
                            ? [] // Clear all selections if "All" is clicked
                            : prev.includes(tag.value)
                              ? prev.filter(t => t !== tag.value) // Remove tag
                              : [...prev.filter(t => t !== "All"), tag.value] // Add tag, remove "All"
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition 
                        ${isSelected ? "ring-2 ring-offset-2 ring-gray-400 scale-105" : ""}
                      `}
                      style={{
                        backgroundColor: tag.color,
                        color: tag.text,
                        border: isSelected ? `2px solid ${tag.text}` : "none"
                      }}
                    >
                      {tag.label}
                    </button>
                  );
                })}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      type="button"
                      className="w-full text-left p-0 m-0 bg-transparent border-none outline-none"
                      onClick={() => {
                        setIsFastLoading(true);
                        setTimeout(() => {
                          navigate(`/work/${project.slug}`);
                        }, 100);
                      }}
                      style={{ all: "unset", cursor: "pointer", display: "block" }}
                    >
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
                    </button>
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
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2 text-xs sm:text-sm">
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
