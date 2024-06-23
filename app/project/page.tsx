"use client"
import  { useState,  } from 'react';
import ProjectCard from '@/components/ProjectCard'
import { Typewriter } from 'react-simple-typewriter';
const Project = () => {
  // eslint-disable-next-line no-unused-vars
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(true);
  return (
    <div>
   <div className="flex flex-col min-h-screen items-center text-white mt-80 2xl:mt-80" >
    
      {showSecondTypewriter && (
        <h1 className="text-5xl font-normal md:ml-14 mt-40 text-customBlue">
          <Typewriter
            words={['Our Projects']}
            cursor
            loop={true}
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
    </div>
    <div className='flex flex-col'>

    <ProjectCard
        id="leftT"
        title="Indoor Navigation"
        description="AR Go refers to the use of augmented reality technology to provide direction and guidance to individuals as they navigate through indoor spaces. In this project, we have used AR Foundation to augment models and have used Nav Mesh from Unity's AI to traverse from one point to another, we also mapped the local environment to create and import a 3d model of the actual location in Unity."
        imageSrc="/Projects/indoorNavigation.jpeg"
        videoLink="https://www.youtube.com/watch?v=LAa6ba0n6Uc"
      />

      <ProjectCard
        id="rightT"
        title="AR Explorer"
        description="AR World Explorer is an innovative educational platform that utilizes the Augmented Reality Portal technique to provide students with immersive and interactive experiences of museums and geographical locations. The platform aims to address the limitations of traditional classroom learning by offering an attractive and safe alternative that enhances students' learning experience and promotes a deeper understanding of the subject matter."
        imageSrc="/Projects/arExplorer.jpeg"
        videoLink="https://youtu.be/gscuWh7TYv4"
      />

      <ProjectCard
        id="leftT"
        title="Virtual Calisthenics"
        description="Team Emo, featuring the dynamic duo Utkarsh Rai and Vikash Saxena, showcased their innovation prowess at Juet Builds, clinching the second runner-up position. Their creation, the Virtual Calisthenics Simulator, is a testament to their commitment to fitness and technology. This immersive VR app revolutionizes physical fitness, enabling users to engage in calisthenics and various physical activities from the comfort of their homes. Their achievement highlights their dedication to pushing the boundaries of technology and fitness, making them true trailblazers in the field."
        imageSrc="/Projects/vrCalestanics.png"
        videoLink="https://www.youtube.com/watch?v=LAa6ba0n6Uc"
      />
    </div>
  
    </div>
  )
}

export default Project
