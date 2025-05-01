"use client";
import { useState, useEffect, useRef, SetStateAction } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'ambio',
    title: 'Ambio',
    description: 'Ambio is our innovative AR/VR platform that revolutionizes the way users interact with digital content. Using cutting-edge technology, Ambio creates immersive experiences that blend the physical and digital worlds seamlessly. Our platform offers intuitive navigation, realistic interactions, and stunning visual effects, making it the perfect solution for businesses looking to enhance their digital presence.',
    imageSrc: '/Projects/Ambio.png',
    videoLink: 'https://ambio.emodev.tech/#waitlist',
    small: true
  },
  {
    id: 'project1',
    title: 'Indoor Navigation',
    description: 'AR Go refers to the use of augmented reality technology to provide direction and guidance to individuals as they navigate through indoor spaces. In this project, we have used AR Foundation to augment models and have used Nav Mesh from Unity\'s AI to traverse from one point to another, we also mapped the local environment to create and import a 3d model of the actual location in Unity.',
    imageSrc: '/Projects/indoorNavigation.jpeg',
    videoLink: 'https://www.youtube.com/watch?v=LAa6ba0n6Uc',
    small: true
  },
  {
    id: 'project2',
    title: 'AR Explorer',
    description: 'AR World Explorer is an innovative educational platform that utilizes the Augmented Reality Portal technique to provide students with immersive and interactive experiences of museums and geographical locations. The platform aims to address the limitations of traditional classroom learning by offering an attractive and safe alternative that enhances students\' learning experience and promotes a deeper understanding of the subject matter.',
    imageSrc: '/Projects/arExplorer.jpeg',
    videoLink: 'https://youtu.be/gscuWh7TYv4',
    small: true
  },
  {
    id: 'project3',
    title: 'Virtual Calisthenics',
    description: 'Team Emo, featuring the dynamic duo Utkarsh Rai and Vikash Saxena, showcased their innovation prowess at Juet Builds, clinching the second runner-up position. Their creation, the Virtual Calisthenics Simulator, is a testament to their commitment to fitness and technology. This immersive VR app revolutionizes physical fitness, enabling users to engage in calisthenics and various physical activities from the comfort of their homes.',
    imageSrc: '/Projects/vrCalestanics.png',
    videoLink: 'https://www.youtube.com/watch?v=LAa6ba0n6Uc',
    small: true
  }
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle auto-rotation with proper cleanup
  useEffect(() => {
    if (!isAutoPlaying || isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      if (!isTransitioning) {
        handleSlideChange('right', undefined);
      }
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isTransitioning, isAutoPlaying, isPaused]);

  // Handle mouse enter/leave for pausing auto-rotation
  useEffect(() => {
    const carousel = carouselRef.current;
    
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    
    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Consolidated slide change logic
  const handleSlideChange = (dir: SetStateAction<string>, targetIndex: SetStateAction<number> | undefined) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(dir);
    
    setTimeout(() => {
      if (targetIndex !== undefined) {
        setCurrentIndex(targetIndex);
      } else {
        setCurrentIndex(prevIndex => {
          if (dir === 'right') {
            return (prevIndex + 1) % projects.length;
          } else {
            return (prevIndex - 1 + projects.length) % projects.length;
          }
        });
      }
      setIsTransitioning(false);
    }, 600);
  };

  const nextSlide = () => handleSlideChange('right', undefined);
  const prevSlide = () => handleSlideChange('left', undefined);

  const jumpToSlide = (index: SetStateAction<number> | undefined) => {
    if (index === currentIndex || isTransitioning) return;
    if (typeof index === 'number') {
      handleSlideChange(index > currentIndex ? 'right' : 'left', index);
    }
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      setTouchStart(e.targetTouches[0].clientX);
      setIsPaused(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsPaused(false);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div 
      className="carousel-container"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background effect */}
      <div className="carousel-background"></div>
      
      {/* Progress bar */}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${(currentIndex / (projects.length - 1)) * 100}%`,
            transitionDuration: isTransitioning ? '0s' : '0.3s'
          }}
        ></div>
      </div>
      
      {/* Carousel track */}
      <div className="carousel-track">
        <div className={`carousel-slide ${isTransitioning ? (direction === 'right' ? 'slide-right' : 'slide-left') : ''}`}>
          {/* Card container with hover effects */}
          <div className="card-container">
            <div className="card-glow"></div>
            <ProjectCard {...projects[currentIndex]} />
            <div className="animate-border"></div>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="nav-button prev-button"
        aria-label="Previous project"
      >
        <div className="button-background"></div>
        <FaChevronLeft className="relative z-10" size={isMobile ? 16 : 20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="nav-button next-button"
        aria-label="Next project"
      >
        <div className="button-background"></div>
        <FaChevronRight className="relative z-10" size={isMobile ? 16 : 20} />
      </button>

      {/* Dots Indicator */}
      <div className="dots-container">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => jumpToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>

      {/* Project counter */}
      <div className="project-counter">
        <span className="current-index">{currentIndex + 1}</span>
        <span className="counter-divider"></span>
        <span className="total-projects">{projects.length}</span>
      </div>

      {/* Auto-play toggle */}
      <button 
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className={`autoplay-toggle ${isAutoPlaying ? 'active' : ''}`}
        aria-label={isAutoPlaying ? "Pause auto-rotation" : "Enable auto-rotation"}
      >
        <span className="sr-only">{isAutoPlaying ? "Pause" : "Play"}</span>
        <div className={`toggle-icon ${isAutoPlaying ? 'paused' : 'playing'}`}></div>
      </button>

      <style jsx>{`
        /* Main Container */
        .carousel-container {
          position: relative;
          width: 100%;
          padding: 1.5rem 1rem;
          overflow: hidden;
          perspective: 2000px;
          transition: padding 0.3s ease;
        }

        @media (min-width: 640px) {
          .carousel-container {
            padding: 2rem;
          }
        }

        @media (min-width: 768px) {
          .carousel-container {
            padding: 3rem 4rem;
          }
        }
        
        /* Background effects */
        .carousel-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0, 191, 255, 0.08), rgba(0, 0, 0, 0.05));
          backdrop-filter: blur(8px);
          border-radius: 16px;
          pointer-events: none;
        }
        
        /* Progress bar */
        .progress-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          overflow: hidden;
          z-index: 5;
        }
        
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, rgba(0, 191, 255, 0.6), rgba(0, 110, 255, 0.8));
          box-shadow: 0 0 8px rgba(0, 191, 255, 0.5);
          transition: width 0.3s ease;
        }
        
        /* Carousel track and slide */
        .carousel-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          cursor: pointer;
          border-radius: 16px;
          margin-top: 10px;
        }
        
        .carousel-slide {
          position: relative;
          width: 100%;
          transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
          transform: translateX(0) scale(1) rotate(0deg);
          opacity: 1;
        }
        
        .carousel-slide.slide-right {
          transform: translateX(100%) scale(0.95) rotate(2deg);
          opacity: 0;
        }
        
        .carousel-slide.slide-left {
          transform: translateX(-100%) scale(0.95) rotate(-2deg);
          opacity: 0;
        }
        
        /* Card container */
        .card-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 191, 255, 0.08),
            0 0 0 4px rgba(0, 0, 0, 0.03);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateY(0);
          background: rgba(10, 10, 30, 0.05);
          backdrop-filter: blur(10px);
          will-change: transform, box-shadow;
        }
        
        .card-container:hover {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(0, 191, 255, 0.15),
            0 0 20px rgba(0, 191, 255, 0.3);
        }
        
        @media (max-width: 767px) {
          .card-container:hover {
            transform: translateY(-5px);
          }
        }
        
        /* Card glow effect */
        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 30%, 
            rgba(0, 191, 255, 0.15), 
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 1;
        }
        
        .card-container:hover .card-glow {
          opacity: 1;
        }
        
        /* Animated border */
        .animate-border {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          background: linear-gradient(
            45deg,
            rgba(0, 191, 255, 0.7) 0%,
            rgba(0, 91, 255, 0.7) 25%,
            rgba(0, 191, 255, 0.4) 50%,
            rgba(0, 91, 255, 0.7) 75%,
            rgba(0, 191, 255, 0.7) 100%
          );
          background-size: 400% 400%;
          animation: borderAnimation 6s linear infinite;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .card-container:hover .animate-border {
          opacity: 1;
        }
        
        @keyframes borderAnimation {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
        
        /* Navigation buttons */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 50%;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 10;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .nav-button {
            width: 44px;
            height: 44px;
          }
        }
        
        .prev-button {
          left: 8px;
        }
        
        .next-button {
          right: 8px;
        }
        
        @media (min-width: 640px) {
          .prev-button {
            left: 16px;
          }
          
          .next-button {
            right: 16px;
          }
        }
        
        @media (min-width: 768px) {
          .prev-button {
            left: 24px;
          }
          
          .next-button {
            right: 24px;
          }
        }
        
        .button-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(225deg, rgba(0, 191, 255, 0.85), rgba(0, 91, 255, 0.85));
          opacity: 0.9;
          transition: all 0.4s ease;
          z-index: 9;
        }
        
        .nav-button:hover {
          transform: translateY(-50%) scale(1.15);
          box-shadow: 
            0 0 15px rgba(0, 191, 255, 0.6),
            0 0 30px rgba(0, 91, 255, 0.3);
        }
        
        .nav-button:hover .button-background {
          opacity: 1;
          transform: scale(1.1) rotate(180deg);
        }
        
        .nav-button:active {
          transform: translateY(-50%) scale(0.95);
        }
        
        /* Dots indicator */
        .dots-container {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.15);
          border-radius: 20px;
          backdrop-filter: blur(5px);
          z-index: 10;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dot {
          width: 10px;
          height: 10px;
          position: relative;
          padding: 0;
          margin: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          outline: none;
        }
        
        @media (min-width: 768px) {
          .dot {
            width: 12px;
            height: 12px;
          }
        }
        
        .dot-inner {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: scale(0.8);
        }
        
        .dot:hover .dot-inner {
          background: rgba(0, 191, 255, 0.5);
          transform: scale(1);
        }
        
        .dot.active .dot-inner {
          background: rgba(0, 191, 255, 1);
          transform: scale(1);
          box-shadow: 0 0 10px rgba(0, 191, 255, 0.7);
        }
        
        /* Project counter */
        .project-counter {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          z-index: 10;
          background: rgba(0, 0, 0, 0.15);
          padding: 6px 12px;
          border-radius: 20px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .current-index {
          color: rgba(0, 191, 255, 1);
          font-size: 16px;
        }
        
        .counter-divider {
          display: inline-block;
          width: 20px;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
          margin: 0 6px;
          transform: rotate(-45deg);
        }
        
        /* Auto-play toggle */
        .autoplay-toggle {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          outline: none;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .autoplay-toggle:hover {
          background: rgba(0, 191, 255, 0.2);
          box-shadow: 0 0 10px rgba(0, 191, 255, 0.4);
        }
        
        .toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
        }
        
        .toggle-icon.playing::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 10px solid rgba(0, 191, 255, 0.9);
          left: 1px;
          top: 0;
        }
        
        .toggle-icon.paused::before,
        .toggle-icon.paused::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 12px;
          background: rgba(0, 191, 255, 0.9);
          top: 0;
        }
        
        .toggle-icon.paused::before {
          left: 3px;
        }
        
        .toggle-icon.paused::after {
          right: 3px;
        }
        
        .autoplay-toggle.active {
          background: rgba(0, 191, 255, 0.25);
          box-shadow: 0 0 5px rgba(0, 191, 255, 0.3);
        }
        
        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
}