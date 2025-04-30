"use client"

import React, { useState, useEffect } from 'react';

const WhyEMO = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Optional: Add intersection observer for scrolling animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('why-emo');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      ),
      title: "Innovation First",
      description: "We push the boundaries of technology to create groundbreaking solutions that set new industry standards."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      ),
      title: "Creative Excellence",
      description: "Our team combines technical expertise with creative thinking to deliver unique and engaging experiences."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: "Client-Centric",
      description: "We prioritize understanding your vision and delivering solutions that exceed your expectations."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      title: "Technical Mastery",
      description: "With expertise in AR/VR, game development, and web technologies, we bring your ideas to life."
    }
  ];

  const gradientBg = {
    background: "linear-gradient(to bottom, #000000, #111827)"
  };

  return (
    <section 
      className="py-24 relative overflow-hidden" 
      id="why-emo"
      style={gradientBg}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            Why Choose EMO Developers?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Passionate Game and AR/VR Developers, Android App Wizards, and Web Development Enthusiasts. 
            Your go-to freelance squad for AR/VR Android and Web Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-blue-900 bg-opacity-30 rounded-lg transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-indigo-600"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        {/* <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Your Project With Us
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default WhyEMO;