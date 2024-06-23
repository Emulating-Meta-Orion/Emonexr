import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="flex flex-row lg:flex-col items-center justify-center bg-black shadow-lg rounded-lg overflow-hidden p-4">
      <div className="relative w-24 h-24 lg:w-60 lg:h-60 lg:mb-4">
        {/* Rounded shape for the team member photo */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full"></div>
        {/* Actual team member photo */}
        <Image
          src={imageUrl}
          alt={name}
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-white font-semibold">{name}</h3>
        <p className="text-white">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
