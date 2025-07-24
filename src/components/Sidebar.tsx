import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  categoryCounts: Record<string, number>;
  themes: Record<string, { primary: string; bg: string }>;
  categories: string[];
  highlightAbout?: boolean;
  onContactClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeCategory,
  setActiveCategory,
  categoryCounts,
  themes,
  categories,
  highlightAbout,
  onContactClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="hidden sm:block fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto overflow-x-hidden">
      <div className="p-8">
        <div className="text-center mb-4">
          <button
            onClick={() => navigate("/about")}
            className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden p-0 border-0 focus:outline-none transition
              ${(location.pathname === "/about" || location.pathname === "/") ? "ring-2 ring-offset-2 ring-gray-400 border-2 border-gray-700" : ""}`}
            aria-label="Go to About Me" 
          >
            <img
              src={`/images/profile-pic.jpg`}
              alt="Jhon Loyd Pastorin Profile Picture"
              className="w-full h-full object-cover rounded-full"
              draggable="false"
            />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Jhon Loyd Pastorin
          </h1>
          <p className="text-gray-600 text-sm">
            Creative Developer & Automation Specialist
          </p>
        </div>
        <div className="mb-4 pb-4 border-b border-gray-200">
          <button
            onClick={onContactClick}
            className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl hover:scale-105 transition-transform duration-300 font-medium text-sm"
          >
            Get In Touch
          </button>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
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
                    navigate(
                      category === "Website"
                        ? "/website"
                        : category === "Make.com Automation"
                        ? "/make"
                        : category === "Python Automation"
                        ? "/python"
                        : category === "All Works"
                        ? "/all"
                        : "/"
                    );
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
  );
};

export default Sidebar; 