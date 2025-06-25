import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
//import Footer from "@/components/Footer";
import ContactPanel from "@/components/ContactPanel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const WorkDetail = () => {
  const { id } = useParams();
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactPanelOpen(true);
  };

  const handleContactClose = () => {
    setIsContactPanelOpen(false);
  };

  // Placeholder project data - in a real app, this would come from an API or database
  const project = {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    longDescription: `This project represents a complete overhaul of a traditional e-commerce platform, 
    transforming it into a modern, scalable solution that handles thousands of concurrent users. 
    The platform features advanced inventory management, multiple payment gateway integrations, 
    and a sophisticated admin panel for managing products, orders, and analytics.`,
    tags: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    duration: "3 months",
    role: "Full-Stack Developer",
    technologies: [
      "Frontend: React, Next.js, TypeScript, Tailwind CSS",
      "Backend: Node.js, Express, PostgreSQL",
      "Payment: Stripe API integration",
      "Deployment: Vercel, AWS",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation onContactClick={handleContactClick} />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span>
                <strong>Duration:</strong> {project.duration}
              </span>
              <span>
                <strong>Role:</strong> {project.role}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project Images */}
          <div className="mb-12">
            <div className="grid gap-4 mb-4">
              <img
                src={project.images[0]}
                alt={`${project.title} main image`}
                className="w-full aspect-video object-cover rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} image ${index + 2}`}
                    className="w-full aspect-video object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Project Overview
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              Technologies Used
            </h3>
            <ul className="space-y-2 mb-8">
              {project.technologies.map((tech, index) => (
                <li key={index} className="text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="bg-secondary/50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss your next project and how I can help bring your
                ideas to life.
              </p>
              <Button onClick={handleContactClick}>Get In Touch</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onContactClick={handleContactClick} />

      {/* Contact Panel */}
      <ContactPanel isOpen={isContactPanelOpen} onClose={handleContactClose} />
    </div>
  );
};

export default WorkDetail;
