// src/sections/Skills.tsx

import { motion } from "framer-motion";
// Import new icons from lucide-react
import {
  Laptop,
  Globe,
  Database,
  Bot,
  Wrench,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

// Import specific tech icons from react-icons
import {
  FaPython,
 
  FaReact,
  FaNodeJs,
  FaDatabase,

  FaGitAlt, // New
  FaGithub, // New
  FaMicrosoft,
  FaBootstrap, // New
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
 
  SiExpress,
  SiTailwindcss,
 
 
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiKeras,
  SiExpo,
  SiFastapi,
  SiTypescript,
  SiVite,
  SiFigma,
  SiAdobexd,
  SiGooglecolab
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

// --- DATA STRUCTURES ---

type Skill = {
  name: string;
  icon: React.ComponentType<any>;
};

type SkillCategory = {
  title: string;
  icon: React.ComponentType<LucideProps>;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: Laptop,
    skills: [
     { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
     { name: "TypeScript", icon: SiTypescript },

      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
       { name: "FastAPI", icon: SiFastapi }
      
      // React Native was moved from here
    ],
  },
  // ================= NEW CATEGORY =================
  {
    title: "App Development",
    icon: Smartphone,
    skills: [{ name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo }
     
    ],
  },
  // ================= NEW CATEGORY =================
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Google Colab", icon: SiGooglecolab },
      { name: "GenAI", icon: Sparkles },
      { name: "MCP", icon: FaMicrosoft },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
      { name: "Figma", icon: SiFigma },
       { name: "AdobeXD", icon: SiAdobexd },
        
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Machine Learning",
    icon: Bot,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Keras", icon: SiKeras },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24">
     <div className="text-left mb-16">
        <h2 className="text-5xl mb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills & Expertise</h2>
        
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* The rendering logic below requires no changes! */}
        {skillsData.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="p-6 rounded-lg border border-slate-700 bg-slate-800/40 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <category.icon className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-slate-100">{category.title}</h3>
              <div className="h-0.5 flex-grow bg-purple-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-purple-600 hover:bg-slate-900 transition-all duration-300"
                >
                  <skill.icon className="w-10 h-10 text-slate-300" />
                  <span className="font-medium text-slate-300 text-center text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;