"use client"
import  { useState,  } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import backgroundImage from "/assets/Default_tech_startup_black_themed_background_0(1).jpg";

const TypewriterEffect = () => {
  //const [showFirstTypewriter, setShowFirstTypewriter] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(true);
  //setShowSecondTypewriter(true)
 

  return (
    <div className="bg-black flex flex-col min-h-screen items-center text-white mt-80 2xl:mt-0 mb-[-20px]" >
        <h1 className="text-5xl md:mt-72 md:ml-16 font-bold mt">
          EMO DEVELOPERS
        </h1>
   
    
      {showSecondTypewriter && (
        <h3 className="text-2xl font-normal md:ml-14 mt-4 text-customBlue">
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
    </div>
  );
};

export default TypewriterEffect;
