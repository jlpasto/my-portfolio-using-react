import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPanel from "@/components/ContactPanel";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [content, setContent] = useState<string>("");
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    import("../content/About-Me.md?raw")
      .then((module) => setContent(module.default))
      .catch(() => setContent("# Not Found\nREADME.md not found."));
  }, []);

  return (
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
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Navigation</h2>
              <nav className="space-y-3">
                <button
                  onClick={() => { navigate("/website"); setMobileNavOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
                >Website</button>
                <button
                  onClick={() => { navigate("/make"); setMobileNavOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
                >Make.com Automation</button>
                <button
                  onClick={() => { navigate("/python"); setMobileNavOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
                >Python Automation</button>
                <button
                  onClick={() => { navigate("/all"); setMobileNavOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
                >All Works</button>
                <button
                  onClick={() => { navigate("/about"); setMobileNavOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-900 font-bold bg-gray-100"
                >About Me</button>
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
              Navigation
            </h2>
            <nav className="space-y-3">
              <button
                onClick={() => navigate("/website")}
                className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
              >Website</button>
              <button
                onClick={() => navigate("/make")}
                className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
              >Make.com Automation</button>
              <button
                onClick={() => navigate("/python")}
                className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
              >Python Automation</button>
              <button
                onClick={() => navigate("/all")}
                className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:shadow-md transition-all duration-500"
              >All Works</button>
              <button
                onClick={() => navigate("/about")}
                className="w-full text-left px-4 py-3 rounded-xl text-gray-900 font-bold bg-gray-100"
              >About Me</button>
            </nav>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="sm:ml-80 flex-1 min-h-screen transition-all duration-700 ease-out bg-white">
        <div className="p-4 sm:p-8">
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