"use client"
import  { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(true);

  return (
    <div className="relative bg-black flex flex-col min-h-screen items-center text-white mt-40 2xl:mt-0 mb-[-20px] overflow-hidden" >
      {/* Enlarged Animated Glow Behind Heading */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full blur-3xl opacity-40 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 animate-pulse z-0" />
      <h1 className="relative z-10 text-5xl md:mt-60 md:ml-16 font-bold mt">
        EMO DEVELOPERS
      </h1>
      {showSecondTypewriter && (
        <h3 className="relative z-10 text-2xl font-normal md:ml-14 mt-4 text-customBlue">
          <Typewriter
            words={['Crafting the Future!\n', 'One Line of Code at a Time']}
            cursor
            loop={true}
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
      )}
      
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
          <path fill="url(#waveGradient)" fillOpacity="0.5">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,80 Q360,120 720,80 T1440,80 V120 H0 Z;
                      M0,100 Q360,60 720,100 T1440,100 V120 H0 Z;
                      M0,80 Q360,120 720,80 T1440,80 V120 H0 Z" />
          </path>
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00bfff" />
              <stop offset="1" stopColor="#7f00ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TypewriterEffect; 