"use client";
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HighlightedAchievementCard from './HighlightedAchievementCard';
import ProjectCard from './ProjectCard';

const achievements = [
  {
    type: 'project',
    id: 'achievement0',
    title: 'XR Creator Hackathon Winner',
    description: 'Team Emo Developers achieved a remarkable victory at the prestigious national-level XR Creator Hackathon, organized by the Ministry of Information and Broadcasting, Wavelaps, BharatXR, and XDG. Competing against top talent from across the country, our project \'Ambio\' was recognized for its innovative approach to E-Commerce and Retail Transformation using XR technology. This award highlights our team\'s expertise in creating immersive, impactful experiences that push the boundaries of what\'s possible in the XR space.',
    imageSrc: '/Achievements/xr.png',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid0',
    small: true
  },
  {
    type: 'project',
    id: 'achievement1',
    title: 'Best Hash Hack',
    description: 'Team Emo Developers, consisting of Utkarsh Rai, Vikash Saxena, Ashutosh Mishra, Himanshu Kumar Mahto, and Piyush Agarwal, showcased their exceptional skills and creativity at CIC\'s Annual Hackathon, Hash Hacks. We designed and implemented an innovative AR indoor navigation system that impressed the judges and secured us the prestigious first prize. Our dedication and ingenuity make us trailblazers in the world of technology and navigation.',
    imageSrc: '/Achievements/CIC.png',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid1',
    small: true
  },
  {
    type: 'project',
    id: 'achievement2',
    title: 'Top Performer Award',
    description: 'Himanshu Kumar Mahto, a talented individual and a member of Team Emo Developers, achieved remarkable success by clinching the top prize in the prestigious Kodethon event organized by JUET, Guna. His exceptional coding skills and problem-solving abilities were on full display during the competition, earning him well-deserved recognition and the first prize. His dedication to the world of coding makes him a standout talent in the field.',
    imageSrc: '/assets/himanshumahto.jpg',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid2',
    small: true
  },
  {
    type: 'project',
    id: 'achievement3',
    title: 'Runner Ups JUET builds',
    description: 'Team Emo, featuring the dynamic duo Utkarsh Rai and Vikash Saxena, showcased their innovation prowess at Juet Builds, clinching the second runner-up position. Their creation, the Virtual Calisthenics Simulator, is a testament to their commitment to fitness and technology. This immersive VR app revolutionizes physical fitness, enabling users to engage in calisthenics and various physical activities from the comfort of their homes. Their achievement highlights their dedication to pushing the boundaries of technology and fitness, making them true trailblazers in the field.',
    imageSrc: '/Achievements/JUET Builds.png',
    videoLink: 'https://www.youtube.com/watch?v=yourvideoid3',
    small: true
  }
];

export default function AchievementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setDirection('right');
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
          setIsTransitioning(false);
        }, 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('right');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('left');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-16">
      <div 
        className={`relative transition-all duration-500 transform ${
          isTransitioning 
            ? direction === 'right' 
              ? 'translate-x-full opacity-0' 
              : '-translate-x-full opacity-0'
            : 'translate-x-0 opacity-100'
        }`}
      >
        <div className="border-2 border-customBlue/30 rounded-lg shadow-lg shadow-customBlue/20 transition-all duration-300 relative group transform hover:-translate-y-2">
          <div className="absolute inset-0 rounded-lg border-2 border-customBlue/0 group-hover:border-customBlue/60 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-lg shadow-[0_0_20px_rgba(0,191,255,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <ProjectCard
            {...achievements[currentIndex]}
          />
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-customBlue/80 transition-all duration-300 z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-customBlue/80 transition-all duration-300 z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {achievements.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setDirection(index > currentIndex ? 'right' : 'left');
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-customBlue scale-125' 
                : 'bg-gray-400 hover:bg-customBlue/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 