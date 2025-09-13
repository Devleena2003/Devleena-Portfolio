// src/components/sections/CodingProfiles.tsx

import { useState, useEffect } from 'react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

// --- Type Definitions for Profile Data ---
interface LeetCodeProfile {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    ranking: number;
    acceptanceRate: number;
}

interface GfgProfile {
    info: {
        profile_name: string;
    };
    stats: {
        school: { count: number };
        basic: { count: number };
        easy: { count: number };
        medium: { count: number };
        hard: { count: number };
    };
    total_problems_solved: number;
}

// --- Reusable Profile Card Component ---
interface ProfileCardProps {
    icon: React.ReactNode;
    title: string;
    url: string;
    stats: { label: string; value: string | number }[];
    children?: React.ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ icon, title, url, stats, children }) => (
    <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 flex-grow">
        <div className="flex items-center mb-4">
            <span className="text-3xl text-teal-400 mr-4">{icon}</span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {stats.map((stat, index) => (
                <div key={index} className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
            ))}
        </div>
        {children}
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full text-center bg-teal-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
        >
            View Profile
        </a>
    </div>
);


const CodingProfiles = () => {
    // --- State for LeetCode ---
    const [leetCodeProfile, setLeetCodeProfile] = useState<LeetCodeProfile | null>(null);
    const [leetCodeError, setLeetCodeError] = useState<string | null>(null);

    // --- State for GeeksforGeeks ---
    const [gfgProfile, setGfgProfile] = useState<GfgProfile | null>(null);
    const [gfgError, setGfgError] = useState<string | null>(null);

    // --- Usernames ---
    const leetcodeUsername = 'dev_leena';
    const gfgUsername = 'devleena2003';

    useEffect(() => {
        // --- Fetch LeetCode Data ---
        const fetchLeetCode = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
                if (!response.ok) throw new Error('LeetCode profile not found or API is down.');
                const data = await response.json();
                if (data.status === 'error') throw new Error(data.message);
                setLeetCodeProfile(data);
            } catch (err) {
                if (err instanceof Error) setLeetCodeError(err.message);
            }
        };

        // --- Fetch GeeksforGeeks Data ---
        const fetchGfg = async () => {
            try {
                // This unofficial API is a bit nested, so we handle that.
                const response = await fetch(`https://gfg-api.vercel.app/api/user/${gfgUsername}`);
                if (!response.ok) throw new Error('GFG profile not found or API is down.');
                const data = await response.json();
                setGfgProfile(data);
            } catch (err) {
                if (err instanceof Error) setGfgError(err.message);
            }
        };

        if (leetcodeUsername !== 'dev_leena') fetchLeetCode();
        if (gfgUsername !== 'devleena2003') fetchGfg();

    }, [leetcodeUsername, gfgUsername]);

    return (
        <section id="coding-profiles" className="my-12 md:my-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
                Coding Profiles
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
                {/* LeetCode Card */}
                {leetCodeProfile ? (
                    <ProfileCard
                        icon={<SiLeetcode />}
                        title="LeetCode"
                        url={`https://leetcode.com/${leetcodeUsername}/`}
                        stats={[
                            { label: 'Ranking', value: leetCodeProfile.ranking },
                            { label: 'Solved', value: leetCodeProfile.totalSolved },
                            { label: 'Easy', value: leetCodeProfile.easySolved },
                            { label: 'Medium', value: leetCodeProfile.mediumSolved },
                            { label: 'Hard', value: leetCodeProfile.hardSolved },
                            { label: 'Acceptance', value: `${leetCodeProfile.acceptanceRate.toFixed(1)}%` },
                        ]}
                    />
                ) : (
                     <div className="text-center text-gray-400 flex-grow">{leetCodeError || 'Loading LeetCode Stats...'}</div>
                )}
                
                {/* GeeksforGeeks Card */}
                {gfgProfile ? (
                     <ProfileCard
                        icon={<SiGeeksforgeeks />}
                        title="GeeksforGeeks"
                        url={`https://auth.geeksforgeeks.org/user/${gfgUsername}/practice`}
                        stats={[
                            { label: 'Total Solved', value: gfgProfile.total_problems_solved },
                            { label: 'School', value: gfgProfile.stats.school.count },
                            { label: 'Basic', value: gfgProfile.stats.basic.count },
                            { label: 'Easy', value: gfgProfile.stats.easy.count },
                            { label: 'Medium', value: gfgProfile.stats.medium.count },
                            { label: 'Hard', value: gfgProfile.stats.hard.count },
                        ]}
                    />
                ) : (
                    <div className="text-center text-gray-400 flex-grow">{gfgError || 'Loading GFG Stats...'}</div>
                )}
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
                Profile data is fetched from unofficial, community-supported APIs.
            </p>
        </section>
    );
};

export default CodingProfiles;