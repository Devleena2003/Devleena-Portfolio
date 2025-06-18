// src/constants/index.ts
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// NAVIGATION_LINKS remains the same...
export const NAVIGATION_LINKS = [
    "about",
  "experiences",
  "skills",
  "projects",
  "education",
  "contact",
];

// Add a 'name' property to each social link
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn", // <-- Add this
    icon: Linkedin,
    url: "https://www.linkedin.com/in/devleenadas/",
  },
  {
    name: "GitHub", // <-- Add this
    icon: Github,
    url: "https://github.com/Devleena2003",
  },
  {
    name: "Twitter", // <-- Add this
    icon: Twitter,
    url: "https://twitter.com/Das_Devleena",
  },
  {
    name: "Mail", // <-- Add this
    icon: Mail,
    url: "mailto:devleena2003@gmail.com",
  },
];