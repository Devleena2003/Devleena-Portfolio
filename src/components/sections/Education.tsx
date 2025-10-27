// src/sections/Education.tsx

import { motion } from "framer-motion";
// All necessary icons are imported directly into this file
import {
  CodeXml,
  Database,
  GanttChartSquare,
  MonitorSmartphone,
  Network,
  Calculator,
  Dna,
  FlaskConical,
  Atom,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

// --- DATA STRUCTURES & DATA (Self-contained in this file) ---

// Type definition for a single course/subject
type Course = {
  name: string;
  icon: React.ComponentType<LucideProps>;
};

// Type definition for a single education entry
type EducationItem = {
  date: string;
  degree: string;
  university: string;
  score?: { label: string; value: string };
  courses: Course[];
};

// The data array for all your education history
const educationData: EducationItem[] = [
  {
    date: "2021 - 2025",
    degree: "B.Tech in Computer Science and Engineering",
    university: "Kalyani Government Engineering College",
    score: { label: "CGPA", value: "8.5/10.0" },
    courses: [
      { name: "Data Structures & Algorithms", icon: CodeXml },
      { name: "Database Management Systems", icon: Database },
      { name: "Operating Systems", icon: MonitorSmartphone },
      { name: "Computer Networks", icon: Network },
      { name: "Software Engineering", icon: GanttChartSquare },
    ],
  },
  {
    date: "2012 - 2020",
    degree: "High School Education",
    university: "Ashoknagar Banipith Girl's High School", // <-- Replace with your school name!
    score: { label: "Grades", value: "12th: 92% | 10th: 89%" },
    courses: [
      { name: "Physics", icon: Atom },
      { name: "Chemistry", icon: FlaskConical },
      { name: "Mathematics", icon: Calculator },
      { name: "Biology", icon: Dna },
    ],
  },
];

// --- COMPONENT LOGIC & JSX ---

const Education = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-24">
      <div className="text-left mb-16">
        <h2 className="text-5xl mb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Education</h2>

      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>

        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-12 pb-16">
            <div className="absolute left-4 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full ring-4 ring-purple-900/50"></div>
            <p className="absolute left-10 rounded-full border-1 border-pink-500 bg-purple-950/40 px-3 py-2 text-xs font-medium text-purple-200 backdrop-blur-sm transition-all hover:border-pink-600/80 hover:bg-purple-950/60 hover: cursor-pointer">
              {edu.date}
            </p>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 relative top-10 rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-100">{edu.degree}</h3>
              <p className="text-slate-400 mt-1">{edu.university}</p>

              {edu.score && (
                <p className="mt-2 text-lg font-semibold text-purple-400">
                  <span className="text-slate-300 font-medium">{edu.score.label}:</span> {edu.score.value}
                </p>
              )}

              <h4 className="mt-6 mb-4 font-bold text-slate-200 text-lg">
                Key Courses & Subjects
              </h4>
              <div className="space-y-3">
                {edu.courses.map((course) => (
                  <div
                    key={course.name}
                    className="flex items-center gap-4 p-3 bg-slate-900/50 rounded-md border border-slate-700/50"
                  >
                    <course.icon className="w-6 h-6 text-purple-400" />
                    <span className="font-medium text-slate-300">
                      {course.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;