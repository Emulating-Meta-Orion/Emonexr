"use client";
import { useState, useEffect, useRef, useCallback, SetStateAction } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdPause, IoMdPlay } from 'react-icons/io';
import Image from 'next/image';

// Data can be moved to a separate file for better organization
const achievements = [
  {
    type: 'project',
    id: 'achievement0',
    title: 'XR Creator Hackathon Winner',
    description: 'Team Emo Developers achieved a remarkable victory at the prestigious national-level XR Creator Hackathon, organized by the Ministry of Information and Broadcasting, Wavelaps, BharatXR, and XDG. Competing against top talent from across the country, our project \'Ambio\' was recognized for its innovative approach to E-Commerce and Retail Transformation using XR technology.',
    imageSrc: '/Achievements/xr.png',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid0',
    date: 'November 2023',
    small: true
  },
  {
    type: 'project',
    id: 'achievement1',
    title: 'Best Hash Hack',
    description: 'Team Emo Developers, consisting of Utkarsh Rai, Vikash Saxena, Ashutosh Mishra, Himanshu Kumar Mahto, and Piyush Agarwal, showcased their exceptional skills and creativity at CIC\'s Annual Hackathon, Hash Hacks. We designed and implemented an innovative AR indoor navigation system that impressed the judges and secured us the prestigious first prize.',
    imageSrc: '/Achievements/CIC.png',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid1',
    date: 'September 2023',
    small: true
  },
  {
    type: 'project',
    id: 'achievement2',
    title: 'Top Performer Award',
    description: 'Himanshu Kumar Mahto, a talented individual and a member of Team Emo Developers, achieved remarkable success by clinching the top prize in the prestigious Kodethon event organized by JUET, Guna. His exceptional coding skills and problem-solving abilities were on full display during the competition, earning him well-deserved recognition and the first prize.',
    imageSrc: '/assets/himanshumahto.jpg',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid2',
    date: 'July 2023',
    small: true
  },
  {
    type: 'project',
    id: 'achievement3',
    title: 'Runner Ups JUET builds',
    description: 'Team Emo, featuring the dynamic duo Utkarsh Rai and Vikash Saxena, showcased their innovation prowess at Juet Builds, clinching the second runner-up position. Their creation, the Virtual Calisthenics Simulator, is a testament to their commitment to fitness and technology. This immersive VR app revolutionizes physical fitness, enabling users to engage in calisthenics and various physical activities from the comfort of their homes.',
    imageSrc: '/Achievements/JUET Builds.png',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid3',
    date: 'March 2023',
    small: true
  }
];

interface Achievement {
  type: string;
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoLink?: string;
  date: string;
  small: boolean;
}

const AchievementCard = ({ achievement, isActive }: { achievement: Achievement; isActive: boolean }) => {
  return (
    <div 
      className={`flex flex-col md:flex-row w-full h-full bg-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="relative w-full md:w-2/5 h-40  xs:h-52 sm:h-60 md:h-full z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/40 mix-blend-overlay z-20" />
        <div className="relative w-full h-full">  
          <Image
            src={achievement.imageSrc}
            alt={achievement.title}
            fill
            className="object-cover z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
            priority={isActive}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-900 to-transparent z-30 md:hidden" />
      </div>
      
      <div className="flex flex-col justify-between w-full md:w-3/5 p-3 xs:p-4 sm:p-6 md:p-8">
        <div>
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start mb-2 sm:mb-4">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 xs:mb-0 leading-tight">{achievement.title}</h3>
            <span className="text-xs sm:text-sm text-blue-300 bg-blue-900/40 px-2 py-1 rounded-full w-fit whitespace-nowrap ml-0 xs:ml-2">{achievement.date}</span>
          </div>
          
          {/* <p className="text-xs xs:text-sm sm:text-base text-gray-300 mb-2 sm:mb-4 line-clamp-3 xs:line-clamp-4 sm:line-clamp-5 md:line-clamp-none leading-relaxed">{achievement.description}</p> */}
          <div className="text-xs xs:text-sm sm:text-base text-gray-300 mb-2 sm:mb-4 line-clamp-3 xs:line-clamp-4 sm:line-clamp-5 md:line-clamp-none leading-relaxed">
            {achievement.description}
          </div>
        </div>

        {/*{achievement.videoLink && (*/}
        {/*    <a */}
        {/*      href={achievement.videoLink} */}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer" */}
        {/*      className="inline-flex items-center text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"*/}
        {/*    >*/}
        {/*      <span className="mr-1">Watch Video</span>*/}
        {/*      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />*/}
        {/*      </svg>*/}
        {/*    </a>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default function AchievementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAutoplay = useCallback(() => {
    if (isPlaying && !isTransitioning && !isHovered && !isFocused && !isDragging) {
      setIsTransitioning(true);
      setDirection('right');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        setIsTransitioning(false);
      }, 300);
    }
  }, [isPlaying, isTransitioning, isHovered, isFocused, isDragging]);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set up a new interval
    intervalRef.current = setInterval(handleAutoplay, 5000);
    
    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleAutoplay]);

  const navigate = useCallback((newIndex: SetStateAction<number>) => {
    if (isTransitioning) return;
    
    // Calculate direction for animation
    const dir = (newIndex as number) > currentIndex ? 'right' : 'left';
    // Handle wrap-around cases
    if (newIndex === 0 && currentIndex === achievements.length - 1) {
      setDirection('right');
    } else if (newIndex === achievements.length - 1 && currentIndex === 0) {
      setDirection('left');
    } else {
      setDirection(dir);
    }
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
    
    // Reset the interval timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleAutoplay, 5000);
  }, [currentIndex, isTransitioning, handleAutoplay]);

  const nextSlide = useCallback(() => {
    navigate((currentIndex + 1) % achievements.length);
  }, [currentIndex, navigate]);

  const prevSlide = useCallback(() => {
    navigate((currentIndex - 1 + achievements.length) % achievements.length);
  }, [currentIndex, navigate, achievements.length]);

  const handleKeyDown = useCallback((e: { key: any; preventDefault: () => void; }) => {
    switch (e.key) {
      case 'ArrowLeft':
        prevSlide();
        e.preventDefault();
        break;
      case 'ArrowRight':
        nextSlide();
        e.preventDefault();
        break;
      case 'Home':
        navigate(0);
        e.preventDefault();
        break;
      case 'End':
        navigate(achievements.length - 1);
        e.preventDefault();
        break;
      case ' ':
        setIsPlaying(!isPlaying);
        e.preventDefault();
        break;
      default:
        break;
    }
  }, [prevSlide, nextSlide, navigate, isPlaying]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown);
      return () => {
        carousel.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle touch events for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 80) {
      // Swipe left - next slide
      nextSlide();
    } else if (touchEnd - touchStart > 80) {
      // Swipe right - previous slide
      prevSlide();
    }
    setIsPlaying(true);
  };

  // Mouse drag handling for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setIsPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dragDistance = e.clientX - dragStartX;
    
    // Optional: Add visual feedback during drag
    if (Math.abs(dragDistance) > 50) {
      // You can add a transform here if desired
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dragDistance = e.clientX - dragStartX;
    
    if (dragDistance < -100) {
      nextSlide();
    } else if (dragDistance > 100) {
      prevSlide();
    }
    
    setIsDragging(false);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
    setIsPlaying(true);
  };

  return (
    <section 
      className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8"
      aria-label="Achievement Highlights"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div 
          className={`h-full bg-blue-500 transition-all ${isPlaying ? 'animate-progress' : ''}`}
          style={{
            width: isPlaying ? '100%' : `${(currentIndex / (achievements.length - 1)) * 100}%`,
            animation: isPlaying ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>

      <div 
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Achievement carousel"
        className={`relative w-full h-auto xs:h-72 sm:h-80 md:h-96 lg:h-[450px] px-2 sm:px-4 md:px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* Mobile Swipe Indicator - Shown only on first load for mobile */}
        <div className={`absolute inset-0 z-50 pointer-events-none flex items-center justify-center transition-opacity duration-1000 
          ${isMobile && currentIndex === 0 ? 'opacity-80' : 'opacity-0'}`}>
          <div className="bg-black/70 rounded-xl px-4 py-2 flex items-center">
            <span className="text-white text-sm">Swipe to navigate</span>
            <div className="ml-2 animate-swipe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12L10 6M16 12L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Carousel Content */}
        <div 
          className={`relative h-full transition-all duration-500 ease-in-out transform ${
            isTransitioning 
              ? direction === 'right' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
          aria-live="polite"
        >
          <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-slate-900/90 to-blue-900/30 rounded-xl" />
            
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className={`absolute inset-0 ${index === currentIndex ? 'block' : 'hidden'}`}
                aria-hidden={index !== currentIndex}
              >
                <AchievementCard 
                  achievement={achievement} 
                  isActive={index === currentIndex} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls - With enhanced mobile-friendly positioning */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-3 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous achievement"
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 text-white hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          {isPlaying ? <IoMdPause className="w-4 h-4 sm:w-5 sm:h-5" /> : <IoMdPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
        </button>
        
        <button
          onClick={nextSlide}
          aria-label="Next achievement"
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Dots Indicator - Enhanced for Mobile */}
      <div 
        className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"
        role="tablist"
        aria-label="Select achievement"
      >
        {achievements.map((achievement, index) => (
          <button
            key={index}
            onClick={() => navigate(index)}
            aria-label={`View achievement: ${achievement.title}`}
            aria-selected={index === currentIndex}
            role="tab"
            className={`group relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-500 hover:bg-blue-400'
            }`}
          >
            <span className="sr-only">{achievement.title}</span>
            
            {/* Tooltip - Better mobile support */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-max max-w-[150px] sm:max-w-xs bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
              {achievement.title}
            </span>
          </button>
        ))}
      </div>

      {/* Enhanced CSS with animation improvements */}
      <style jsx global>{`
        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear;
        }
        
        @keyframes swipe {
          0% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .animate-swipe {
          animation: swipe 1.5s ease-in-out infinite;
        }
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 450px) {
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:justify-between {
            justify-content: space-between;
          }
          .xs\\:items-start {
            align-items: flex-start;
          }
          .xs\\:mb-0 {
            margin-bottom: 0;
          }
          .xs\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .xs\\:text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          .xs\\:h-52 {
            height: 13rem;
          }
          .xs\\:h-72 {
            height: 18rem;
          }
          .xs\\:p-4 {
            padding: 1rem;
          }
          .xs\\:ml-2 {
            margin-left: 0.5rem;
          }
          .xs\\:line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .xs\\:block {
            display: block;
          }
        }

        /* Additional improvements for touch devices */
        @media (hover: none) {
          .cursor-grab {
            cursor: default;
          }
          .cursor-grabbing {
            cursor: default;
          }
        }
      `}</style>
    </section>
  );
}