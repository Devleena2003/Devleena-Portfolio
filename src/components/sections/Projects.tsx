// src/sections/Projects.tsx

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Globe,
  Smartphone,
  Bot,
  Settings,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

// --- DATA STRUCTURES ---

// "All" is now our primary filter category
type ProjectCategory = "All" | "Web App" | "Mobile App" | "AI/ML" | "Other";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: Omit<ProjectCategory, "All">; // A project must belong to a specific category
  link?: string;
};

// Map icons to categories, with "All" getting the Rocket
const categoryIcons: { [key in ProjectCategory]: React.ComponentType<LucideProps> } = {
  "All": Rocket, // <-- CHANGED
  "Web App": Globe,
  "Mobile App": Smartphone,
  "AI/ML": Bot,
  "Other": Settings,
};

// Your project data - no more `isFeatured` flag
const projectsData: Project[] = [
  {
    title: "Depth-Aware Image Captioning – Multimodal AI Caption Generator",
    description: "Generates detailed image captions using depth estimation and vision-language models.",
    tech: ["Python", "Gradio", "Depth Anything V2","GQA", "Kosmos-2", "Hugging Face Transformers"],
    image: "/depth.png",
    category: "Web App", // It's now just a Web App
  },
  {
    title: "AccessRide – An Accessibility-Focused Ride Booking App",
    description: "A React Native app designed to provide inclusive and user-friendly transportation for people with disabilities.",
    tech: ["React Native", "Expo", "Firebase", "Google Maps API"],
    image: "/location.png",
    category: "Mobile App",
  },
     {
    title: "Splitr",
    description: "A full-stack collaborative expense splitting app.",
    tech: ["NextJS", "Convex", "Inngest","TailwindCSS","Shadcn UI"],
    image: "/splitr.png",
    category: "Web App",
  },
        {
    title: "AI Resume Analyzer",
    description: "An AI-powered Resume Analyzer.Upload candidate resumes, and use AI to automatically evaluate that match job requirements. ",
    tech: ["ReactJS", "TypeScript", "PuterJS", "React Router","TailwindCSS","Zustand","Claude AI"],
    image: "/resumind.png",
    category: "AI/ML",
  },
  {
    title: "Reloop – A Reverse Logistics Optimization Platform",
    description: "An intelligent system to manage, track, and analyze product return/exchange patterns.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Machine Learning", "Chart.js"],
    image: "/reloop.png",
    category: "AI/ML"
  },
  {
    title: "MERNgpt-AI Chatbot",
    description: "A customer service chatbot using NLP to understand and respond to user queries.",
    tech: ["Open AI", "MongoDB", "ReactJS","TailwindCSS"],
    image: "/merngpt.png",
    category: "AI/ML",
  },
 
];

const Projects = () => {
  // Set the initial active filter to "All"
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All"); // <-- CHANGED

  // Calculate project counts
  const filterCounts = useMemo(() => {
    const counts: { [key in ProjectCategory]?: number } = { All: projectsData.length };
    projectsData.forEach(p => {
    counts[p.category as ProjectCategory] = (counts[p.category as ProjectCategory] || 0) + 1;
    });
    return counts;
  }, []);
  
  const filters: ProjectCategory[] = ["All", "Web App", "Mobile App", "AI/ML", "Other"];

  // SIMPLIFIED filtering logic
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData; // Return all projects
    }
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24">
     <div className="text-center mb-16">
        <h2 className="text-5xl mb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</h2>
        
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {filters.map((filter) => {
          const Icon = categoryIcons[filter];
          const count = filterCounts[filter] || 0;
          if (count === 0) return null;
          
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Icon size={18} />
              {/* Show the name for the "All" filter for clarity */}
              {filter === "All" } 
             
            </button>
          )
        })}
      </div>

      {/* --- Project Grid (No changes needed here) --- */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="group relative bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-purple-600 transition-all duration-300"
            >
              {/* The "Featured" badge is removed as it's no longer needed */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;