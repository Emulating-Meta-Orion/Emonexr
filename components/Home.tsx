"use client"
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  const [loaded, setLoaded] = useState(false);
  
  // Ensure instant loading visual effect
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="hero-container">
      {/* Animated gradient orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Content with fade-in effect */}
      <div className={`content-wrapper ${loaded ? 'loaded' : ''}`}>
        <div className="title-container">
          <h1 className="title">EMO DEVELOPERS</h1>
        </div>
        
        <div className="typewriter-container">
          <h3 className="subtitle">
            <Typewriter
              words={['Crafting the Future!', 'One Line of Code at a Time', 'Building Tomorrow Today', 'Turning Ideas into Reality']}
              cursor
              loop={true}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
        </div>
        
        {/* Added CTA button with scroll functionality */}
        <div className="cta-wrapper">
          <button 
            className="cta-button"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Our Work
          </button>
        </div>
      </div>
      
      {/* Enhanced animated wave */}
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      {/* Pure CSS for all styles */}
      <style jsx>{`
        .hero-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          background-color: #0f0f1a;
          color: white;
          overflow: hidden;
        }
        
        /* Gradient orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(4rem);
          opacity: 0.5;
          z-index: 0;
        }
        
        .orb-1 {
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 40rem;
          height: 22rem;
          background: radial-gradient(circle, rgba(56,128,255,0.7) 0%, rgba(111,49,252,0.7) 70%);
          animation: float 15s ease-in-out infinite alternate;
        }
        
        .orb-2 {
          bottom: 25%;
          right: -10%;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(circle, rgba(255,56,139,0.6) 0%, rgba(41,165,255,0.4) 70%);
          animation: float 20s ease-in-out infinite alternate-reverse;
        }
        
        .orb-3 {
          top: 40%;
          left: -10%;
          width: 25rem;
          height: 25rem;
          background: radial-gradient(circle, rgba(255,215,56,0.5) 0%, rgba(41,255,198,0.3) 70%);
          animation: float 18s ease-in-out infinite alternate;
        }
        
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(3%, 2%) scale(1.05);
          }
          100% {
            transform: translate(-3%, -2%) scale(0.95);
          }
        }
        
        /* Content styles */
        .content-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }
        
        .title-container {
          width: 100%;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        
        .content-wrapper.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .title {
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #a6ffcb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
          width: 100%;
          text-align: center;
          overflow-wrap: break-word;
          word-break: keep-all;
          max-width: 100%;
        }
        
        .subtitle {
          font-size: 2rem;
          font-weight: 400;
          color: #8be9fd;
          height: 3rem;
          margin-top: 0.5rem;
        }
        
        .typewriter-container {
          min-height: 3rem;
          margin-bottom: 2rem;
        }
        
        /* CTA Button */
        .cta-wrapper {
          margin-top: 2rem;
        }
        
        .cta-button {
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          border: none;
          color: white;
          padding: 0.8rem 2rem;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 3rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(79, 172, 254, 0.6);
        }
        
        .cta-button:active {
          transform: translateY(-1px);
        }
        
        /* Animated waves */
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }
        
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          transform-origin: center bottom;
        }
        
        .wave1 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='rgba(79, 172, 254, 0.2)' d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.55,118.92,150.3,81.21,321.39,56.44Z'%3E%3C/path%3E%3C/svg%3E");
          animation: wave-animation 10s linear infinite alternate;
          opacity: 0.8;
        }
        
        .wave2 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='rgba(111, 49, 252, 0.15)' d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'%3E%3C/path%3E%3C/svg%3E");
          animation: wave-animation 18s linear infinite;
          opacity: 0.6;
        }
        
        .wave3 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='rgba(166, 255, 203, 0.1)' d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'%3E%3C/path%3E%3C/svg%3E");
          animation: wave-animation 15s linear infinite alternate-reverse;
          opacity: 0.4;
        }
        
        @keyframes wave-animation {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .hero-container {
            padding: 0 20px;
          }
          
          .title {
            font-size: 3.5rem;
            text-align: center;
            width: 100%;
            max-width: 100%;
          }
          
          .subtitle {
            font-size: 1.5rem;
            text-align: center;
          }
          
          .orb-1 {
            width: 30rem;
            height: 18rem;
          }
          
          .orb-2, .orb-3 {
            width: 20rem;
            height: 20rem;
          }
          
          .content-wrapper {
            width: 100%;
            max-width: 90vw;
            padding: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        
        @media (max-width: 480px) {
          .title {
            font-size: 2.5rem;
            padding: 0 5px;
            word-wrap: break-word;
            margin: 0 auto;
            line-height: 1.2;
          }
          
          .subtitle {
            font-size: 1.2rem;
            margin-top: 1rem;
          }
          
          .typewriter-container {
            min-height: 3.5rem;
            width: 100%;
            max-width: 90vw;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          
          .cta-button {
            padding: 0.7rem 1.5rem;
            font-size: 1rem;
          }
          
          .content-wrapper {
            max-width: 95vw;
          }
          
          .orb-1 {
            width: 20rem;
            height: 15rem;
          }
        }
        
        @media (max-width: 360px) {
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TypewriterEffect;