/* eslint-disable react/prop-types */
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageSrc, videoLink }) => {
  return (
    <div className="flex pt-120 pb-60 bg-black text-white" id={id}>
      <div className="md:flex">
        <div className='mr-20'>
          <Image src={imageSrc} width={1000} height={500} className='w-[1000px] ml-10 2xl:w-[1500px] 2xl:mr-30 border' alt={title} />
        </div>
        <div className="mt-20">
          <h2 className="text-customBlue text-4xl ml-9">{title}</h2>
          <p className="text-justify p-10 text-xl ml-2 mr-2 2xl:mr-20">{description}</p>
          <br />
          <a href={videoLink} className="link bg-transparent text-xl text-gray-400 ml-32 hover:bg-gray-600 transition-none shadow-none">Watch Online</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
