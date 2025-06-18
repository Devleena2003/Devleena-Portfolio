// src/sections/Hero.tsx

import { TypeAnimation } from "react-type-animation";
// Don't forget to add your own image to the assets folder!
import profileImage from "../../../src/assets/profile.jpg"; 
import { Button } from "../../components/ui/button";
import { Download } from "lucide-react";
import { cn } from "../../lib/utils";


import React from "react";
// 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen max-w-full flex items-center justify-between relative">
    
      <div className=" flex flex-col md:flex-row items-center justify-between px-10 gap-12">
        
        {/* Left Side: Content */}
        <div className="md:w-full text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            Hey, I am <br/> <span className="md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Devleena</span>
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "A Passionate Frontend Developer",
              1500, // wait 1.5s
              "A Creative Problem Solver",
              1500,
              "An Avid Learner",
              1500,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl lg:text-3xl text-slate-300"
            repeat={Infinity}
          />
          
          <p className="mt-6 text-slate-400 max-w-xl mx-auto md:mx-0">
            A full-stack developer and community builder passionate about crafting scalable tech solutions and empowering others through mentorship and collaboration.
          </p>
    <div className="mt-10">
       <a href="/Devleena_Das_CV_2025.pdf" download>
  <Button
    size="lg"
    className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
  >
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </Button>
</a>
      </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
            {/* Creates a subtle glow effect behind the image */}
            <div className="absolute inset-0 bg-slate-700 rounded-full blur-2xl opacity-50"></div>
            <img
             src={profileImage}
              alt="Devleena's profile picture"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;