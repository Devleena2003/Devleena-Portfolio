// src/sections/About.tsx

const keywords = [
  "Software Developer",
  "Programmer",
  "UI/UX Designer",
  "Dreamer",
  "Explorer",
];

const About = () => {
  return (
    // The py-24 class adds vertical padding to create space between sections.
    <section id="about" className="py-24">
      {/* Section Heading */}
     <div className="text-left mb-10">
        <h2 className="text-5xl mb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
       
      </div>

      {/* Content Container */}
      <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
        <p>
          Hello! I’m Devleena Das, a final-year Computer Science student and passionate developer with a strong foundation in C++, React.js, TypeScript, Tailwind CSS, Nodejs, ExpressJS , databases and hands-on experience with Next.js, React Native, and FastAPI. I love building clean, responsive, and user-focused web and mobile interfaces that not only function well but also feel intuitive and engaging. With a strong eye for detail and a problem-solving mindset, I bring the ability to turn ideas into scalable, maintainable code while collaborating effectively in agile environments. I’ve worked on real-world projects that integrate Generative AI, mobile-first design and I thrive on learning, adapting, and contributing meaningfully from day one. What sets me apart is my curiosity, commitment, and a genuine passion for creating impactful digital experiences. Outside of coding, I enjoy reading books, gardening, listening to music, and cooking, which help me stay creative and balanced.
        </p>
       
      </div>

   <div className="mt-12">
        <div className="flex flex-wrap items-center gap-4">
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className="rounded-full border-1 border-pink-500 bg-purple-950/40 px-5 py-2 text-base font-medium text-purple-200 backdrop-blur-sm transition-all hover:border-pink-600/80 hover:bg-purple-950/60 hover: cursor-pointer"
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;