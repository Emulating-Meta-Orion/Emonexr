import Image from 'next/image';
import React from 'react';

interface HighlightedAchievementCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoLink: string;
  descriptionClassName?: string;
}

const HighlightedAchievementCard: React.FC<HighlightedAchievementCardProps> = ({ id, title, description, imageSrc, videoLink, descriptionClassName }) => {
  return (
    <div className="flex pt-120 pb-60 bg-black text-white" id={id}>
      <div className="md:flex">
        <div className='mr-20'>
          <Image 
            src={imageSrc} 
            width={1200} 
            height={600} 
            className='w-[1200px] ml-10 2xl:w-[1800px] 2xl:mr-30 border shadow-lg shadow-customBlue/20' 
            alt={title} 
          />
        </div>
        <div className="mt-20">
          <h2 className="text-customBlue text-5xl ml-9 font-bold">{title}</h2>
          <p className={`text-justify p-10 ml-2 mr-2 2xl:mr-20 ${descriptionClassName ? descriptionClassName : 'text-2xl'}`}>{description}</p>
          <br />
          {/* <a 
            href={videoLink} 
            className="link bg-transparent text-2xl text-gray-400 ml-32 hover:bg-gray-600 transition-none shadow-none hover:text-customBlue"
          >
            Watch Online
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default HighlightedAchievementCard; 