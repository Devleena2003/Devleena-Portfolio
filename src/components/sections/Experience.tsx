// src/sections/Experiences.tsx

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// ... (ExperienceItem type and experiencesData array remain exactly the same)
type ExperienceItem = {
  date: string;
 
  title: string;
  company: string;
  description: string;
  skills: string[];
};

const experiencesData: ExperienceItem[] = [
  {
    date: "September 2023 - Present",
    
    title: "Co-founder",
    company: "SHEvolution",
    description:
      "As the co-founder of SHEvolution, I helped build a community-driven initiative focused on empowering women in tech through mentorship, workshops, and hands-on learning opportunities. I organized events, curated beginner-friendly learning tracks, and mentored students in web development, open-source, and personal branding. My role also involved collaborating with industry professionals, designing outreach strategies, and creating a safe, inclusive environment for aspiring women in STEM.",
    skills: ["Community Building", "Tech Mentorship", "Leadership", "STEM Empowerment"],
  },
  {
    date: "July 2022 - September 2024",
   
    title: "Core Team Member",
    company: "Google Developer Students Club",
    description:
      "As a core team member of GDSC at my college, I led and contributed to technical events, hackathons, and coding workshops that encouraged student participation in real-world tech. I played an active role in managing speaker sessions, hands-on projects, and collaborative learning events. I also mentored juniors in areas like frontend development, Git/GitHub, and open-source contributions, helping foster a stronger developer ecosystem on campus.",
    skills: ["Open Source", "Hackathon ", "Event Management", "Project Collaboration"],
  },
 
];


const cardVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experiences = () => {
  return (
    <section id="experiences" className="py-24">
     <div className="text-left mb-10">
        <h2 className="text-5xl mb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experiences</h2>
       
      </div>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-700"></div>

        {experiencesData.map((item, index) => {
          const isRightSide = index % 2 === 0;
          return (
            <div key={index} className="relativemb-8 md:mb-16 flex justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full ring-4 ring-purple-900/50"></div>

              <motion.div
                variants={cardVariants}
                custom={isRightSide ? 1 : -1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={cn(
                  // THE ONLY CHANGE IS ON THIS LINE:
                  "p-6 my-8 rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg w-full md:max-w-lg", // Was md:w-[calc(50%-2rem)]
                  isRightSide
                    ? "md:ml-[calc(50%+2rem)]"
                    : "md:mr-[calc(50%+2rem)]",
                )}
              >
                {/* ... The rest of the card content remains exactly the same ... */}
                <div
                  className={cn(
                    "flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-3 gap-2",
                    !isRightSide && "md:flex-row-reverse"
                  )}
                >
                  <span className="rounded-full bg-orange-900/60 border border-orange-700/80 px-3 py-1 text-sm font-semibold text-orange-200">
                    {item.date}
                  </span>
                  
                </div>

                <h3 className={cn("text-xl font-bold text-slate-100", !isRightSide && "md:text-right")}>
                  {item.title}
                </h3>
                <p className={cn("text-lg font-semibold text-purple-400 mb-3", !isRightSide && "md:text-right")}>
                  {item.company}
                </p>

                <p className={cn("text-slate-400 leading-relaxed mb-4", !isRightSide && "md:text-right")}>
                  {item.description}
                </p>

                <div className={cn("flex flex-wrap gap-2", !isRightSide && "md:justify-end")}>
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full border border-slate-600 bg-slate-700/50 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;