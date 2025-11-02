// src/components/cli/Terminal.tsx
import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';

// --- DATA IS NOW HARDCODED INSIDE THIS FILE ---
// This makes the Terminal component fully self-contained.

const cliExperiences = [
  {
    date: "October 2025 - Present",
    title: "Software Engineer",
    company: "Aarish Technologies",
  },
  {
    date: "September 2023 - Present",
    title: "Co-Founder",
    company: "SHEvolution",
  },
  {
    date: "July 2022 - September 2024",
    title: "Core Team Member",
    company: "Google Developer Students Club",
  }

];

const cliProjects = [
  { title: "ByDeWay", tech: "Python, Gradio, Kosmos-2, Depth Anything V2, GQA" },
  { title: "Accessride", tech: "React Native, Expo, Firebase" },
  { title: "Reloop", tech: "Reactjs, Nodejs, Express, MongoDB, Machine Learning" },
  { title: "MERNgpt", tech: "OpenAI, MongoDB, ReactJS, TailwindCSS" },
];

const cliSkills = [
    { category: "Languages", skills: "Python, JavaScript, TypeScript,C++, SQL" },
    { category: "Web Dev", skills: "React, Node.js, Express, TailwindCSS, Bootstrap, FastAPI" },
    { category: "App Dev", skills: "React Native, Expo" },
    { category: "Tools", skills: "Git, GitHub, GenAI, MCP, Postman,Vite,Figma,AdobeXD" },
    { category: "Databases", skills: "MongoDB, MySQL, Firebase, PostgreSQL" },
    { category: "AI/ML", skills: "TensorFlow, Pandas, NumPy, Keras" },
];

const commands: { [key: string]: string } = {
  help: 'Display all available commands',
  about: 'Display information about me',
  experiences: 'Show my work experiences',
  projects: 'Show all projects',
  skills: 'Display my technical skills',
  'get-github': 'Get my GitHub profile URL',
  'get-linkedin': 'Get my LinkedIn profile URL',
  clear: 'Clear the terminal screen',
};

// --- NO OTHER CHANGES ARE NEEDED BELOW THIS LINE ---

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processCommand = (command: string) => {
    const [cmd] = command.trim().split(' ');
    let output: React.ReactNode = '';

    switch (cmd.toLowerCase()) {
      case 'help':
        output = (
          <div>
            <p className="mb-2">Available Commands:</p>
            <ul className="list-disc list-inside">
              {Object.entries(commands).map(([key, value]) => (
                <li key={key}>
                  <span className="text-purple-400">{key}</span> - {value}
                </li>
              ))}
            </ul>
          </div>
        );
        break;
      case 'about':
        output = (
          <div>
            <p>👋 Hi! I'm Devleena.</p>
            <p className="mt-2">Final Year Undergraduate in Computer Science with a passion for building innovative solutions. I focus on creating high-quality digital experiences through clean code and creative problem-solving.</p>
          </div>
        );
        break;
      case 'experiences':
        output = (
          <div>
            {cliExperiences.map((exp, i) => (
              <div key={i} className="mb-2">
                <p><span className="text-purple-400">{exp.title}</span> @ {exp.company} ({exp.date})</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'projects':
        output = (
          <div>
            {cliProjects.map((proj, i) => (
              <div key={i} className="mb-1">
                <p>- <span className="text-purple-400">{proj.title}</span> [{proj.tech}]</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'skills':
         output = (
           <div>
            {cliSkills.map((cat, i) => (
              <div key={i} className="mb-2">
                <p className="text-purple-400">{cat.category}:</p>
                <p>{cat.skills}</p>
              </div>
            ))}
           </div>
         )
        break;
      case 'get-github':
        output = <p>Navigating to GitHub... <a href="https://github.com/your-username" target="_blank" className="underline">https://github.com/your-username</a></p>;
        window.open('https://github.com/your-username', '_blank');
        break;
      case 'get-linkedin':
        output = <p>Navigating to LinkedIn... <a href="https://linkedin.com/in/your-username" target="_blank" className="underline">https://linkedin.com/in/your-username</a></p>;
        window.open('https://linkedin.com/in/your-username', '_blank');
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = <p>Command not found: {cmd}. Type 'help' to see all available commands.</p>;
    }

    const newHistory = [
      ...history,
      <p><span className="text-purple-400">devleena@portfolio</span>:~$ {command}</p>,
      <div>{output}</div>,
    ];
    setHistory(newHistory);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  useEffect(() => {
    setHistory([
      <p>Welcome to Devleena's Portfolio Terminal! 🖋️</p>,
      <p>Type "help" to see available commands.</p>,
    ]);
    inputRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div
        className="w-full max-w-4xl h-[70vh] bg-[#2E2E2E] rounded-lg shadow-2xl flex flex-col font-mono"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center p-3 bg-slate-700 rounded-t-lg border-b border-slate-600">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="flex-grow text-center text-sm text-slate-300">devleena@portfolio: ~/portfolio</p>
        </div>
        <div ref={terminalRef} className="flex-grow p-4 overflow-y-auto text-slate-200 text-sm leading-relaxed">
          {history.map((line, index) => <div key={index}>{line}</div>)}
          <div className="flex items-center">
            <span className="text-purple-400">devleena@portfolio</span>
            <span className="text-slate-200">:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-200 pl-2"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;