"use client";
import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaGithub, FaEnvelope, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiCode, HiCursorClick, HiSparkles } from 'react-icons/hi';
import Image from 'next/image';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleLogoClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0c1d] to-[#090917] z-0"></div>
      
      {/* Animated particle effect */}
      <div className="stars-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      
      {/* Reactive glow around cursor */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      
      {/* Easter egg celebration */}
      {showEasterEgg && (
        <div className="easter-egg">
          <div className="celebration">
            <HiSparkles className="text-yellow-300 text-4xl animate-spin" />
            <span className="text-lg font-bold text-gradient">You found the secret!</span>
          </div>
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6 pt-16 pb-8">
        {/* Decorative top border */}
        <div className="glow-border"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo and brand section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="relative group" onClick={handleLogoClick}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative flex items-center bg-black rounded-lg p-2">
                <Image 
                  src="/assets/EMO_LOGO.png" 
                  alt="Emo Dev Logo" 
                  width={140} 
                  height={50} 
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <p className="text-gray-400 text-sm md:text-left text-center">
              Crafting digital experiences that evoke emotion through elegant code and immersive design.
            </p>
            
            <div className="footer-cube-container">
              <div className="footer-cube">
                <div className="face front"><HiCode className="text-cyan-400" /></div>
                <div className="face back"><HiSparkles className="text-purple-400" /></div>
                <div className="face right"><HiCursorClick className="text-pink-400" /></div>
                <div className="face left"><FaGithub className="text-blue-400" /></div>
                <div className="face top"><FaEnvelope className="text-green-400" /></div>
                <div className="face bottom"><FaTwitter className="text-yellow-400" /></div>
              </div>
            </div>
          </div>
          
          {/* Quick links section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact section with hover effects */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="social-icons-container">
              <a href="https://github.com/Emulating-Meta-Orion" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <FaGithub />
                <span className="social-tooltip">GitHub</span>
              </a>
              <a href="mailto:contact@emodevelopers.com" className="social-icon email">
                <FaEnvelope />
                <span className="social-tooltip">Email Us</span>
              </a>
              <a href="https://twitter.com/emo_developers" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <FaTwitter />
                <span className="social-tooltip">Twitter</span>
              </a>
              <a href="https://linkedin.com/company/emo-developers" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FaLinkedinIn />
                <span className="social-tooltip">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} <span className="text-gradient">Emo Developers</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              <span className="mr-2">Built with</span>
              <span className="animate-heartbeat text-red-500">❤️</span>
              <span className="ml-2">by EMO</span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        /* Base styles */
        footer {
          min-height: 350px;
          font-family: 'Inter', sans-serif;
        }
        
        /* Animated elements */
        .cursor-glow {
          position: fixed;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.8;
          filter: blur(10px);
        }
        
        /* Animation for stars */
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: star-animation 5s infinite;
        }
        
        .star:nth-child(1) { left: 10%; top: 20%; animation-delay: 0.1s; }
        .star:nth-child(2) { left: 20%; top: 40%; animation-delay: 0.3s; }
        .star:nth-child(3) { left: 30%; top: 70%; animation-delay: 0.5s; }
        .star:nth-child(4) { left: 40%; top: 25%; animation-delay: 0.7s; }
        .star:nth-child(5) { left: 50%; top: 50%; animation-delay: 0.9s; }
        .star:nth-child(6) { left: 60%; top: 75%; animation-delay: 1.1s; }
        .star:nth-child(7) { left: 70%; top: 35%; animation-delay: 1.3s; }
        .star:nth-child(8) { left: 80%; top: 60%; animation-delay: 1.5s; }
        .star:nth-child(9) { left: 90%; top: 15%; animation-delay: 1.7s; }
        .star:nth-child(10) { left: 15%; top: 85%; animation-delay: 1.9s; }
        .star:nth-child(11) { left: 25%; top: 10%; animation-delay: 2.1s; }
        .star:nth-child(12) { left: 35%; top: 55%; animation-delay: 2.3s; }
        .star:nth-child(13) { left: 45%; top: 80%; animation-delay: 2.5s; }
        .star:nth-child(14) { left: 55%; top: 5%; animation-delay: 2.7s; }
        .star:nth-child(15) { left: 65%; top: 45%; animation-delay: 2.9s; }
        .star:nth-child(16) { left: 75%; top: 90%; animation-delay: 3.1s; }
        .star:nth-child(17) { left: 85%; top: 30%; animation-delay: 3.3s; }
        .star:nth-child(18) { left: 95%; top: 65%; animation-delay: 3.5s; }
        .star:nth-child(19) { left: 5%; top: 95%; animation-delay: 3.7s; }
        .star:nth-child(20) { left: 55%; top: 25%; animation-delay: 3.9s; }
        
        /* Glow border */
        .glow-border {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(123, 97, 255, 0.3), rgba(236, 72, 153, 0.3), transparent);
          position: absolute;
          top: 0;
          left: 0;
          animation: glow-slide 3s infinite linear;
        }
        
        /* 3D Cube Animation */
        .footer-cube-container {
          width: 40px;
          height: 40px;
          perspective: 400px;
          margin-top: 10px;
        }
        
        .footer-cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: cube-spin 12s infinite linear;
        }
        
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          background: rgba(10, 10, 25, 0.8);
          border: 1px solid rgba(123, 97, 255, 0.3);
          box-shadow: 0 0 10px rgba(123, 97, 255, 0.2) inset;
        }
        
        .front  { transform: translateZ(20px); }
        .back   { transform: rotateY(180deg) translateZ(20px); }
        .right  { transform: rotateY(90deg) translateZ(20px); }
        .left   { transform: rotateY(-90deg) translateZ(20px); }
        .top    { transform: rotateX(90deg) translateZ(20px); }
        .bottom { transform: rotateX(-90deg) translateZ(20px); }
        
        /* Footer headings */
        .footer-heading {
          position: relative;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .footer-heading:hover::after {
          width: 100%;
        }
        
        /* Footer links */
        .footer-links {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .footer-link {
          position: relative;
          color: #a1a1aa;
          transition: all 0.3s ease;
          display: inline-block;
          padding: 3px 0;
        }
        
        .footer-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover {
          color: white;
          transform: translateX(5px);
        }
        
        .footer-link:hover::before {
          width: 100%;
        }
        
        /* Social icons with hover effects */
        .social-icons-container {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        
        .social-icon {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          background: rgba(20, 20, 40, 0.6);
          overflow: hidden;
        }
        
        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .social-icon:hover::before {
          transform: translateX(100%);
        }
        
        .social-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .social-icon:hover .social-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        
        /* Social icon specific colors */
        .github:hover { background: #333; box-shadow: 0 0 15px rgba(51, 51, 51, 0.7); }
        .email:hover { background: #ea4335; box-shadow: 0 0 15px rgba(234, 67, 53, 0.7); }
        .twitter:hover { background: #1da1f2; box-shadow: 0 0 15px rgba(29, 161, 242, 0.7); }
        .linkedin:hover { background: #0077b5; box-shadow: 0 0 15px rgba(0, 119, 181, 0.7); }
        .whatsapp:hover { background: #25d366; box-shadow: 0 0 15px rgba(37, 211, 102, 0.7); }
        
        /* Easter egg styles */
        .easter-egg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(3px);
          animation: fade-in 0.3s ease;
        }
        
        .celebration {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: rgba(15, 15, 30, 0.9);
          border-radius: 1rem;
          border: 1px solid rgba(123, 97, 255, 0.3);
          box-shadow: 0 0 30px rgba(123, 97, 255, 0.4);
          animation: scale-in 0.3s ease;
        }
        
        /* Text gradient effect */
        .text-gradient {
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Animations */
        @keyframes star-animation {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          50% { opacity: 0.8; transform: translateY(-20px) scale(1); }
          100% { opacity: 0; transform: translateY(-40px) scale(0); }
        }
        
        @keyframes glow-slide {
          0% { background-position: -500px 0; }
          100% { background-position: 500px 0; }
        }
        
        @keyframes cube-spin {
          0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes animate-pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-pulse-slow {
          animation: animate-pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-heartbeat {
          display: inline-block;
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .footer-heading {
            margin-top: 1.5rem;
          }
          
          .social-icons-container {
            justify-content: center;
          }
          
          .footer-links, .footer-heading::after {
            margin: 0 auto;
            text-align: center;
          }
          
          .footer-heading {
            text-align: center;
            display: block;
          }
          
          .footer-heading::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-cube-container {
            margin: 1rem auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;