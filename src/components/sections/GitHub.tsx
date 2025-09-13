// src/components/sections/GitHub.tsx

import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

// Type for the GitHub profile data
interface GitHubProfile {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

const GitHubSection = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // IMPORTANT: Replace with your GitHub username
  const username = 'Devleena2003';

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('GitHub profile not found');
        }
        const data: GitHubProfile = await response.json();
        setProfile(data);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  // Main section combines profile and contribution graph
  return (
    <section id="github" className="my-12 md:my-16">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
        GitHub Activity
      </h2>

      {loading && <div className="text-center text-white">Loading GitHub Profile...</div>}
      {error && <div className="text-center text-red-500">Error: {error}</div>}
      
      {profile && (
        <div className="space-y-10">
          {/* GitHub Profile Card */}
          <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6">
            <img 
                src={profile.avatar_url} 
                alt={`${profile.name}'s Avatar`}
                className="w-32 h-32 rounded-full border-2 border-teal-400"
            />
            <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                <p className="text-teal-400">@{profile.login}</p>
                <p className="text-gray-300 mt-2">{profile.bio}</p>
                <div className="flex justify-center sm:justify-start gap-4 mt-4 text-white">
                    <div><span className="font-bold">{profile.followers}</span> Followers</div>
                    <div><span className="font-bold">{profile.following}</span> Following</div>
                    <div><span className="font-bold">{profile.public_repos}</span> Repos</div>
                </div>
                <a 
                    href={profile.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-teal-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
                >
                    View Profile
                </a>
            </div>
          </div>

          {/* GitHub Contribution Calendar */}
          <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6">
            <GitHubCalendar
              username={username}
              blockSize={15}
              blockMargin={5}
              colorScheme="dark"
              theme={{
                dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GitHubSection;