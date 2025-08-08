import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPanel from "@/components/ContactPanel";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { themes, categoryCounts, categories } from "@/data/categories";

const About = () => {
  const [content, setContent] = useState<string>("");
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/jlpasto/jlpasto/main/README.md")
      .then((res) => res.text())
      .then((data) => setContent(data))
      .catch(() => setContent("# Not Found\nREADME.md not found."));
  }, []);

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      {/* Mobile Topbar */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-white shadow z-50 sticky top-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/about")}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden p-0 border-0 focus:outline-none"
            aria-label="Go to About Me"
          >
            <img
              src="/images/profile-pic.jpg"
              alt="Jhon Loyd Pastorin Profile Picture"
              className="w-full h-full object-cover rounded-full"
              draggable="false"
            />
          </button>
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
                  <button
                    onClick={() => { navigate("/about"); setMobileNavOpen(false); }}
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden p-0 border-0 focus:outline-none transition
                      ${window.location.pathname === "/about" ? "ring-2 ring-offset-2 ring-gray-400 border-2 border-gray-700" : ""}`}
                    aria-label="Go to About Me"
                  >
                    <img
                      src="/images/profile-pic.jpg"
                      alt="Jhon Loyd Pastorin Profile Picture"
                      className="w-full h-full object-cover rounded-full"
                      draggable="false"
                    />
                  </button>
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
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Navigation</h2>
              <nav className="space-y-3">
                {/* Dynamically render navigation like the rest of the app */}
                {categories.map((category) => {
                  let path = "/";
                  if (category === "Website") path = "/website";
                  else if (category === "Make and N8N Automation") path = "/make-n8n";
                  else if (category === "Python Automation") path = "/python";
                  else if (category === "All Works") path = "/all";
                  // If About Me is not in categories, add About Me button below
                  return (
                    <button
                      key={category}
                      onClick={() => { navigate(path); setMobileNavOpen(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-500 ${
                        path === "/about"
                          ? "text-gray-900 font-bold bg-gray-100"
                          : "text-gray-700 hover:shadow-md"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
                {/* If About Me is not in categories, show About Me button */}
                {!categories.includes("About Me") && (
                  <button
                    onClick={() => { navigate("/about"); setMobileNavOpen(false); }}
                    className="w-full text-left px-4 py-3 rounded-xl text-gray-900 font-bold bg-gray-100"
                  >
                    About Me
                  </button>
                )}
              </nav>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileNavOpen(false)} />
        </div>
      )}
      {/* Sidebar for desktop */}
      <Sidebar
        activeCategory={""}
        setActiveCategory={() => {}}
        categoryCounts={categoryCounts}
        themes={themes}
        categories={categories}
        highlightAbout={true}
        onContactClick={() => setIsContactPanelOpen(true)}
      />
      {/* Main Content */}
      <main className="sm:ml-80 flex-1 min-h-screen transition-all duration-700 ease-out bg-white">
        <div className="p-4 sm:p-8 mt-4">
          <div className="prose prose-sm sm:prose mx-auto p-6" style={{ maxWidth: "95ch" }}>
            <ReactMarkdown
              children={content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            />
          </div>
          <div className="bg-secondary/50 rounded-lg p-6 text-center py-12">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss your next project and how I can help bring your ideas to life.
            </p>
            <Button onClick={() => setIsContactPanelOpen(true)}>Get In Touch</Button>
          </div>
        </div>
        <ContactPanel isOpen={isContactPanelOpen} onClose={() => setIsContactPanelOpen(false)} />
      </main>
    </div>
  );
};

export default About; 
//https://raw.githubusercontent.com/jlpasto/jlpasto/main/README.md