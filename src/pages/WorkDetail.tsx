import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPanel from "@/components/ContactPanel";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Optional: GitHub-like code block style

function WorkDetail() {
  
  const { slug } = useParams();
  const location = useLocation();
  const fromCategory = location.state?.fromCategory;

  // Map category to path
  const categoryToPath = {
    "Website": "/website",
    "Make.com Automation": "/make",
    "Python Automation": "/python",
    "All Works": "/all",
  };
  const backTo = categoryToPath[fromCategory] || "/";
  const [content, setContent] = useState<string>("");

  // for contact 
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const handleContactClick = () => {
    setIsContactPanelOpen(true);
  };
  const handleContactClose = () => {
    setIsContactPanelOpen(false);
  };

  useEffect(() => {
    import(`../content/${slug}.md?raw`)
      .then((module) => setContent(module.default))
      .catch(() =>
        setContent("# Not Found\nThe project you're looking for doesn't exist.")
      );
  }, [slug]);

  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-6" style={{ maxWidth: "95ch", marginTop: "3rem"}}>
      {/* Back Button */}
      <Link
        to={backTo}
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      </div>

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
          Let's discuss your next project and how I can help bring your
          ideas to life.
        </p>
        <Button onClick={handleContactClick}>Get In Touch</Button>
      </div>

      {/* Contact Panel */}
      <ContactPanel isOpen={isContactPanelOpen} onClose={handleContactClose} />
    </div>
  );
}

export default WorkDetail;