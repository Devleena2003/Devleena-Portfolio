// src/components/sections/Achievements.tsx

import { useState } from 'react';
import { FaGraduationCap, FaTrophy, FaUsers, FaCode } from 'react-icons/fa';

// Define the structure for a single achievement
interface Achievement {
    category: 'Academic' | 'Hackathon' | 'Leadership' | 'Program';
    icon: React.ReactNode;
    title: string;
    issuer: string;
    date: string;
    description: string;
    value?: string; // Optional field for things like prize money or key stats
    highlights?: string[]; // Optional array for key highlight tags
}

// --- All your achievement data is structured here ---
const achievementsData: Achievement[] = [
   
    {
        category: 'Academic',
        icon: <FaGraduationCap />,
        title: 'First Author of a Research Paper',
        issuer: 'ICCV 2025 Workshop (CVAM)',
        date: 'To be published 2025',
        description: 'Authored the paper "ByDeWay: Boost Your Multimodal LLM with DEpth Prompting in a Training-Free Way", originating from my B.Tech Thesis.',
        highlights: ['First Author', 'Innovation', 'Multimodal LLMs'],
    },
    {
        category: 'Hackathon',
        icon: <FaTrophy />,
        title: '1st Runner Up – inCode Hackathon',
        issuer: 'inDrive',
        date: '2023',
        description: 'Secured the second position in a competitive 24-hour hackathon focused on mobility solutions.',
        highlights: ['Podium Finish', 'Teamwork', 'Rapid Prototyping'],
    },
    {
        category: 'Hackathon',
        icon: <FaTrophy />,
        title: '1st Runner Up – HackFest 2022',
        issuer: 'GDSC KGEC',
        date: '2022',
        description: 'Achieved 1st runner-up in a college-level hackathon, developing a solution for a local community problem.',
        highlights: ['Problem Solving', 'Collaboration'],
    },
    {
        category: 'Hackathon',
        icon: <FaTrophy />,
        title: 'Finalist – Smart India Hackathon (SIH)',
        issuer: 'Government of India',
        date: '2023',
        description: 'Reached the national finals of India\'s largest hackathon, presenting a solution to a government problem statement.',
        highlights: ['National Level', 'Innovation', 'Presentation Skills'],
    },
    {
        category: 'Leadership',
        icon: <FaUsers />,
        title: 'College Vice President',
        issuer: 'Kalyani Government Engineering College',
        date: '2024 - 2025',
        description: 'Oversaw student bodies, coordinated fests, and represented the student voice in college-wide decision-making.',
        highlights: ['Executive Leadership', 'Event Management', 'Student Advocacy'],
    },
    {
        category: 'Leadership',
        icon: <FaUsers />,
        title: 'Class Representative',
        issuer: 'Department of Computer Science and Engineering',
        date: '2021 - 2025',
        description: 'Acted as the primary bridge between students and faculty for four consecutive years, resolving issues and organizing academic events.',
        highlights: ['Consistent Leadership', 'Communication', 'Problem Resolution'],
    },
    {
        category: 'Program',
        icon: <FaCode />,
        title: '100 Days of DSA Challenge',
        issuer: 'Scaler Academy',
        date: 'Completed 2023',
        description: 'Successfully completed a rigorous 100-day challenge focused on mastering Data Structures and Algorithms.',
        highlights: ['Consistency', 'DSA Mastery', 'Problem Solving'],
    },
];

const Achievements = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Program', 'Academic', 'Hackathon', 'Leadership'];

    const filteredAchievements = activeFilter === 'All'
        ? achievementsData
        : achievementsData.filter(ach => ach.category === activeFilter);

    return (
        <section id="achievements" className="my-12 md:my-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Achievements & Recognition
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
                    A showcase of academic excellence, leadership, and innovation in technology.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-3 mb-10">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300
                            ${activeFilter === filter 
                                ? 'bg-fuchsia-600 text-white shadow-lg' 
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`
                        }
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Achievement Cards */}
            <div className="space-y-8">
                {filteredAchievements.map((ach, index) => (
                    <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-md transition-transform hover:scale-[1.02] hover:shadow-fuchsia-900/20">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="text-3xl text-fuchsia-400 bg-gray-900 p-3 rounded-lg">
                                {ach.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">{ach.title}</h3>
                                <p className="text-md font-semibold text-fuchsia-400">{ach.issuer}</p>
                                <p className="text-sm text-gray-400">{ach.date}</p>

                                {ach.value && (
                                    <div className="my-3 text-2xl font-bold text-green-400">
                                        {ach.value}
                                    </div>
                                )}
                                
                                <p className="mt-3 text-gray-300">
                                    {ach.description}
                                </p>
                                
                                {ach.highlights && ach.highlights.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-sm font-bold text-gray-400 mb-2">KEY HIGHLIGHTS:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {ach.highlights.map(highlight => (
                                                <span key={highlight} className="bg-fuchsia-900/50 text-fuchsia-300 text-xs font-medium px-3 py-1 rounded-full">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-5">
                                     <span className="inline-block bg-green-900/50 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                                        {ach.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;