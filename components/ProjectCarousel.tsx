"use client";
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'ambio',
    title: 'Ambio',
    description: 'Ambio is our innovative AR/VR platform that revolutionizes the way users interact with digital content. Using cutting-edge technology, Ambio creates immersive experiences that blend the physical and digital worlds seamlessly. Our platform offers intuitive navigation, realistic interactions, and stunning visual effects, making it the perfect solution for businesses looking to enhance their digital presence.',
    imageSrc: '/Projects/Ambio.png',
    videoLink: 'https://waitlist.ambio.emodev.tech/',
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setDirection('right');
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('left');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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
            {...projects[currentIndex]}
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
        {projects.map((_, index) => (
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