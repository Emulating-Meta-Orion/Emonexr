/* eslint-disable react/prop-types */
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoLink: string;
  small?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageSrc, videoLink, small }) => {
  return (
    <div className={`flex ${small ? 'pt-6 pb-2' : 'pt-12 pb-8'} bg-black text-white`} id={id}>
      <div className="md:flex items-start">
        <div className='mr-20 flex items-center'>
          <div className="relative w-[400px] h-[300px] ml-10 bg-gray-900 rounded-lg p-4 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-customBlue/20 via-customBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-customBlue/20 via-customBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(0,191,255,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative w-full h-full">
              <Image 
                src={imageSrc} 
                fill
                className="object-contain"
                alt={title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-4 flex-1">
          <h2 className={`text-customBlue ${small ? 'text-2xl' : 'text-4xl'} ml-9 font-semibold`}>{title}</h2>
          <p className={`text-justify p-6 ${small ? 'text-base' : 'text-xl'} ml-2 mr-2 2xl:mr-20 text-gray-300`}>{description}</p>
          {id === 'ambio' && (
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => window.location.href = 'https://waitlist.ambio.emodev.tech'}
                className="bg-customBlue/80 text-white px-8 py-3 rounded-lg transition-all duration-300 text-lg font-semibold hover:bg-customBlue hover:shadow-lg hover:shadow-customBlue/30 hover:-translate-y-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Join the Waitlist
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
