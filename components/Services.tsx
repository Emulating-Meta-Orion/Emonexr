"use client"

import React, { useState, useEffect } from "react";
import { FaGamepad } from "react-icons/fa";
import { FaVrCardboard } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoLogoAndroid } from "react-icons/io";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("service");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Game Development",
      description:
        "At EMO Developers, we're not just coders; we're game-changers too! Crafting captivating games is our forte, where every line of code sparks fun and excitement.",
      icon: <FaGamepad className="w-10 h-10 text-white" />,
      color: "from-blue-500 to-purple-600",
      textColor: "text-blue-200",
      shadowColor: "shadow-blue-500/50",
      borderColor: "border-blue-400"
    },
    {
      id: 2,
      title: "AR/VR Development",
      description:
        "EMO Developers dives into the immersive world of AR and VR, where reality meets the extraordinary. We blend technology and creativity to craft captivating AR-VR experiences.",
      icon: <FaVrCardboard className="w-10 h-10 text-white" />,
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-200",
      shadowColor: "shadow-purple-500/50",
      borderColor: "border-purple-400"
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Web mastery is our playground at EMO Developers. From striking designs to seamless functionality, we craft web experiences that not only impress but also deliver exceptional user engagement.",
      icon: <CgWebsite className="w-10 h-10 text-white" />,
      color: "from-green-500 to-teal-600",
      textColor: "text-green-200",
      shadowColor: "shadow-green-500/50",
      borderColor: "border-green-400"
    },
    {
      id: 4,
      title: "Android Development",
      description:
        "At EMO Developers, we're Android aficionados, turning ideas into innovative apps. We wield the power of Android to create user-friendly, feature-rich mobile applications that redefine convenience.",
      icon: <IoLogoAndroid className="w-10 h-10 text-white" />,
      color: "from-red-500 to-orange-600",
      textColor: "text-red-200",
      shadowColor: "shadow-red-500/50",
      borderColor: "border-red-400"
    }
  ];

  return (
    <section
      className="py-24 relative overflow-hidden bg-gray-900"
      id="service"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`md:w-3/4 lg:w-1/2 mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 text-lg">
            Transforming ideas into digital reality with our specialized services
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card relative overflow-hidden rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              } cursor-pointer`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
              <div 
                className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.color} transform transition-all duration-500 ${
                  hoveredCard === service.id ? 'scale-x-100' : 'scale-x-0'
                }`}>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Card top section with icon */}
                <div 
                  className={`mb-6 transition-all duration-500 ${
                    hoveredCard === service.id ? '-translate-y-2' : 'translate-y-0'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center transform transition-all duration-500 ${
                    hoveredCard === service.id ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  } ${service.shadowColor}`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Card title */}
                <h3 
                  className={`text-2xl font-bold mb-[3rem] text-white transition-all duration-500 ${
                    hoveredCard === service.id ? 'translate-x-2' : 'translate-x-0'
                  }`}
                >
                  {service.title}
                </h3>
                
                {/* Card description */}
                <p 
                  className={`text-gray-300 text-base mb-6 transition-all duration-700 ${
                    hoveredCard === service.id ? 'opacity-100' : 'opacity-80'
                  }`}
                >
                  {service.description}
                </p>
                
                {/* Learn more button */}
                {/* <div className="mt-auto">
                  <div 
                    className={`inline-flex items-center group cursor-pointer transition-all duration-300 transform ${
                      hoveredCard === service.id ? 'translate-x-2' : 'translate-x-0'
                    }`}
                  >
                    <span className={`font-medium ${service.textColor}`}>Learn More</span>
                    <svg 
                      className={`w-5 h-5 ml-2 transform transition-all duration-300 ${service.textColor} ${
                        hoveredCard === service.id ? 'translate-x-1' : 'translate-x-0'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div> */}
              </div>
              
              {/* Animated corner accent */}
              <div 
                className={`absolute top-0 right-0 w-16 h-16 ${service.borderColor} border-t-2 border-r-2 opacity-0 transition-all duration-500 transform translate-x-4 -translate-y-4 ${
                  hoveredCard === service.id ? 'opacity-100 translate-x-0 -translate-y-0' : ''
                }`}
              ></div>
              
              <div 
                className={`absolute bottom-0 left-0 w-16 h-16 ${service.borderColor} border-b-2 border-l-2 opacity-0 transition-all duration-500 transform -translate-x-4 translate-y-4 ${
                  hoveredCard === service.id ? 'opacity-100 -translate-x-0 translate-y-0' : ''
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          min-height: 400px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
        }
        
        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        /* Starry background animation */
        @keyframes move-background {
          from {
            transform: translate3d(0px, 0px, 0px);
          }
          to { 
            transform: translate3d(1000px, 0px, 0px);
          }
        }

        @keyframes twinkle {
          from {opacity: 0;}
          50% {opacity: 1;}
          to {opacity: 0;}
        }

        .stars {
          background: #000 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjVUMTM6NDA6MTArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI1VDEzOjQxOjQxKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTEyLTI1VDEzOjQxOjQxKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YjJmYzA3LTU1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* Continuation of the starry background animation CSS */
          transform: translate3d(1000px, 0px, 0px);
        }
      }

      .stars {
        background: #000 url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgLz4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjI1IiByPSIwLjUiIGZpbGw9IndoaXRlIiAvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iNDUiIHI9IjAuNyIgZmlsbD0id2hpdGUiIC8+CiAgPGNpcmNsZSBjeD0iNDAiIGN5PSIxNSIgcj0iMC42IiBmaWxsPSJ3aGl0ZSIgLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjM1IiByPSIwLjgiIGZpbGw9IndoaXRlIiAvPgogIDxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjAuOSIgZmlsbD0id2hpdGUiIC8+CiAgPGNpcmNsZSBjeD0iNzAiIGN5PSIyNSIgcj0iMC43IiBmaWxsPSJ3aGl0ZSIgLz4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjQ1IiByPSIwLjYiIGZpbGw9IndoaXRlIiAvPgogIDxjaXJjbGUgY3g9IjkwIiBjeT0iMTUiIHI9IjAuOCIgZmlsbD0id2hpdGUiIC8+Cjwvc3ZnPg==');
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .twinkling {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSIgLz4KICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiIC8+CiAgPGNpcmNsZSBjeD0iNTUiIGN5PSIxNSIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIiAvPgogIDxjaXJjbGUgY3g9Ijc1IiBjeT0iMzUiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIiAvPgogIDxjaXJjbGUgY3g9IjI1IiBjeT0iNjUiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSIgLz4KICA8Y2lyY2xlIGN4PSI0NSIgY3k9Ijg1IiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiIC8+CiAgPGNpcmNsZSBjeD0iNjUiIGN5PSI2NSIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiIC8+CiAgPGNpcmNsZSBjeD0iODUiIGN5PSI4NSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIiAvPgo8L3N2Zz4=') repeat;
        z-index: 1;
        animation: move-background 70s linear infinite;
        opacity: 0.8;
      }

      /* Add floating elements animation */
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      /* Add glow pulse animation for service cards */
      @keyframes glow-pulse {
        0% {
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
        }
        50% {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }
        100% {
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
        }
      }
      `}</style>
    </section>
  );
};

export default Services;