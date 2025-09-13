// src/App.tsx

import { useMode } from './context/Mode';
import Terminal from './components/sections/Terminal';
import ModeToggle from './components/layout/Toggle';

// GUI Component Imports
import NavSidebar from "./components/layout/Sidebar";
import SocialSidebar from "./components/layout/SocialSidebar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Experiences from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Education from './components/sections/Education';
// import Achievements from './components/sections/Achievements';
import BackgroundAnimation from "./components/layout/Bg";
import Contact from './components/sections/Contact';
import GitHub from './components/sections/GitHub';
import CodingProfiles from './components/sections/codingProfiles';
import Achievements from './components/sections/Achievements';

// We create a dedicated component for the GUI to keep the main App return clean.
const GuiLayout = () => (
  <>
    {/* These sidebars are fixed and will render on top of the main content by default */}
    <NavSidebar />


    {/* 
      THIS IS THE MOST IMPORTANT PART OF THE FIX.
      We apply padding to the main content area to make space for the sidebars.
    */}
    <main className="max-w-full px-4 md:px-8 pt-16 md:pt-10 pb-24 md:pl-56 md:pr-32">

      {/* 
        This inner container centers your content and prevents it from becoming too wide on large screens.
        All your sections go inside this div.
      */}
      <div className="max-w-full mx-auto">
        <Hero />
        <About />
        <Experiences />
        <Projects />
        {/* <GitHub/>
        <CodingProfiles/> */}
        <Skills />
        <Education />
        <Achievements />
        <Contact />
        {/* Add Contact section here when ready */}
      </div>
    </main>
    <SocialSidebar />
  </>
);


function App() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen min-w-screen font-poppins bg-black">
      <BackgroundAnimation />
      <ModeToggle />

      {/* Conditional rendering based on the mode */}
      {mode === 'gui' ? <GuiLayout /> : <Terminal />}
    </div>
  );
}

export default App;