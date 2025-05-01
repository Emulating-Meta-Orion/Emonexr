/* eslint-disable react/prop-types */
import Image from 'next/image';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoLink: string;
  small?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageSrc, videoLink, small }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={id}
    >
      {/* Mobile view (stacked) */}
      <div className="card-layout">
        {/* Image container with effects */}
        <div className="image-container">
          <div className="image-glow"></div>
          <div className="image-frame">
            <Image 
              src={imageSrc} 
              fill
              className="project-image"
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              priority
            />
            
            {/* Overlay elements - Play button & video link */}
            {/* <div className="image-overlay">
              <a 
                href={videoLink} 
                className="play-button"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Watch ${title} video`}
              >
                <div className="play-icon-container">
                  <FaPlay className="play-icon" />
                </div>
                <span className="watch-text">Watch Demo</span>
              </a>
            </div> */}
            
            {/* Decorative elements */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>
            
            <div className={`pulse-effect ${isHovered ? 'active' : ''}`}></div>
          </div>
        </div>
        
        {/* Content container */}
        <div className="content-container">
          <h2 className="project-title">{title}</h2>
          
          <div className="title-underline">
            <div className="title-underline-glow"></div>
          </div>
          
          <p className="project-description">{description}</p>
          
          {id === 'ambio' && (
            <div className="cta-container">
              <a 
                href="https://ambio.emodev.tech/#waitlist"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-text">Join the Waitlist</span>
                <FaExternalLinkAlt className="cta-icon" />
              </a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-card-container {
          position: relative;
          width: 100%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 10, 30, 0.9));
          color: white;
          border-radius: 16px;
          overflow: hidden;
          padding: ${small ? '1rem 1rem 1.5rem' : '1.5rem 1rem 2rem'};
          transition: all 0.4s ease;
        }
        
        @media (min-width: 768px) {
          .project-card-container {
            padding: ${small ? '1.5rem 2rem 2rem' : '2rem 2rem 3rem'};
          }
        }
        
        /* Layout handling */
        .card-layout {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .card-layout {
            flex-direction: row;
            align-items: center;
            gap: 2.5rem;
          }
        }
        
        /* Image container styling */
        .image-container {
          position: relative;
          width: 100%;
          height: 250px;
          margin: 0 auto;
          max-width: 500px;
        }
        
        @media (min-width: 768px) {
          .image-container {
            width: 400px;
            height: 300px;
            flex-shrink: 0;
          }
        }
        
        .image-glow {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          z-index: 1;
          transition: all 0.5s ease;
          box-shadow: 
            0 0 20px rgba(0, 191, 255, 0.2),
            0 0 60px rgba(0, 91, 255, 0.1);
          opacity: 0.3;
        }
        
        .project-card-container:hover .image-glow {
          opacity: 1;
          box-shadow: 
            0 0 30px rgba(0, 191, 255, 0.4),
            0 0 80px rgba(0, 91, 255, 0.2);
        }
        
        .image-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(0, 10, 30, 0.6);
          box-shadow: 
            inset 0 0 0 1px rgba(0, 191, 255, 0.2),
            0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 3px;
          transition: all 0.4s ease;
        }
        
        .project-card-container:hover .image-frame {
          transform: translateY(-6px);
          box-shadow: 
            inset 0 0 0 1px rgba(0, 191, 255, 0.4),
            0 15px 40px rgba(0, 0, 0, 0.6);
        }
        
        .project-image {
          object-fit: cover;
          border-radius: 14px;
          transition: all 0.5s ease;
          filter: brightness(0.8) saturate(1.2);
        }
        
        .project-card-container:hover .project-image {
          filter: brightness(1) saturate(1.4);
          transform: scale(1.02);
        }
        
        /* Image overlay elements */
        .image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          opacity: 0;
          transition: all 0.5s ease;
          background: rgba(0, 10, 30, 0.3);
          backdrop-filter: blur(2px);
          border-radius: 14px;
        }
        
        .project-card-container:hover .image-overlay {
          opacity: 1;
        }
        
        .play-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 24px;
          background: rgba(0, 191, 255, 0.9);
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateY(10px);
          opacity: 0;
          animation: fadeIn 0.5s ease forwards;
          animation-delay: 0.2s;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.5),
            0 0 15px rgba(0, 191, 255, 0.5);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card-container:hover .play-button {
          animation-play-state: running;
        }
        
        .play-button:hover {
          background: rgba(0, 191, 255, 1);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(0, 191, 255, 0.7);
        }
        
        .play-button:active {
          transform: translateY(0) scale(0.98);
        }
        
        .play-icon-container {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
        }
        
        .play-icon {
          color: rgba(0, 191, 255, 1);
          font-size: 12px;
          margin-left: 2px;
        }
        
        .watch-text {
          color: white;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
        }
        
        /* Decorative corner accents */
        .corner-accent {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: rgba(0, 191, 255, 0.7);
          z-index: 2;
          transition: all 0.4s ease;
        }
        
        .top-left {
          top: 8px;
          left: 8px;
          border-top: 2px solid;
          border-left: 2px solid;
          border-top-left-radius: 6px;
        }
        
        .top-right {
          top: 8px;
          right: 8px;
          border-top: 2px solid;
          border-right: 2px solid;
          border-top-right-radius: 6px;
        }
        
        .bottom-left {
          bottom: 8px;
          left: 8px;
          border-bottom: 2px solid;
          border-left: 2px solid;
          border-bottom-left-radius: 6px;
        }
        
        .bottom-right {
          bottom: 8px;
          right: 8px;
          border-bottom: 2px solid;
          border-right: 2px solid;
          border-bottom-right-radius: 6px;
        }
        
        .project-card-container:hover .corner-accent {
          width: 25px;
          height: 25px;
          border-color: rgba(0, 191, 255, 1);
          box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
        }
        
        /* Pulse effect */
        .pulse-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .pulse-effect.active {
          animation: pulse 2s infinite;
          opacity: 1;
        }
        
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        
        /* Content container styling */
        .content-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 0.5rem;
        }
        
        @media (min-width: 768px) {
          .content-container {
            padding: 0 1rem;
          }
        }
        
        .project-title {
          font-size: ${small ? '1.5rem' : '2rem'};
          font-weight: 700;
          color: rgba(0, 191, 255, 1);
          margin-bottom: 0.75rem;
          letter-spacing: 0.5px;
          text-shadow: 0 0 10px rgba(0, 191, 255, 0.3);
          transform: translateY(0);
          transition: all 0.4s ease;
        }
        
        @media (min-width: 768px) {
          .project-title {
            font-size: ${small ? '1.75rem' : '2.25rem'};
          }
        }
        
        .project-card-container:hover .project-title {
          transform: translateY(-3px);
          text-shadow: 0 6px 20px rgba(0, 191, 255, 0.5);
        }
        
        .title-underline {
          position: relative;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, rgba(0, 191, 255, 0.8), rgba(0, 91, 255, 0.4));
          margin-bottom: 1.25rem;
          border-radius: 2px;
          transition: all 0.4s ease;
          overflow: hidden;
        }
        
        .project-card-container:hover .title-underline {
          width: 100px;
          background: linear-gradient(90deg, rgba(0, 191, 255, 1), rgba(0, 91, 255, 0.7));
        }
        
        .title-underline-glow {
          position: absolute;
          top: 0;
          left: -50px;
          width: 30px;
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          filter: blur(3px);
          transform: skewX(-20deg);
        }
        
        .project-card-container:hover .title-underline-glow {
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% {
            left: -50px;
          }
          100% {
            left: 150px;
          }
        }
        
        .project-description {
          font-size: ${small ? '0.9rem' : '1rem'};
          line-height: 1.7;
          color: rgba(220, 220, 255, 0.85);
          margin-bottom: 1.5rem;
          transition: all 0.4s ease;
          transform: translateY(0);
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        }
        
        @media (min-width: 768px) {
          .project-description {
            font-size: ${small ? '1rem' : '1.1rem'};
          }
        }
        
        .project-card-container:hover .project-description {
          color: rgba(230, 230, 255, 1);
        }
        
        /* CTA button */
        .cta-container {
          display: flex;
          justify-content: center;
          margin-top: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .cta-container {
            justify-content: flex-start;
            margin-top: 1rem;
          }
        }
        
        .cta-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(0, 191, 255, 0.9), rgba(0, 91, 255, 0.9));
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(0, 191, 255, 0.3),
            0 0 0 0 rgba(0, 191, 255, 0.5);
        }
        
        .cta-button:hover {
          transform: translateY(-6px);
          box-shadow: 
            0 10px 25px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(0, 191, 255, 0.5),
            0 0 30px rgba(0, 191, 255, 0.5);
        }
        
        .cta-button:active {
          transform: translateY(-2px);
        }
        
        .cta-text {
          font-size: 16px;
          letter-spacing: 0.5px;
        }
        
        .cta-icon {
          font-size: 14px;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover .cta-icon {
          opacity: 1;
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;