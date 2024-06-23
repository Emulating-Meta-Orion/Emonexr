/* eslint-disable no-unused-vars */
"use client"
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ProjectCard from '@/components/ProjectCard';

const AchievementPage = () => {
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(true);

  return (
    <div>
      <div className="flex flex-col min-h-screen items-center text-white mt-80 2xl:mt-80">
        {showSecondTypewriter && (
          <h1 className="text-3xl 2xl:text-5xl font-normal md:ml-14 mt-40 text-customBlue">
            <Typewriter
              words={['Our Achievements']}
              cursor
              loop
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        )}
      </div>
      <ProjectCard
        id="achievement1"
        title="Best Hash Hack "
        description="Team Emo Developers, consisting of Utkarsh Rai, Vikash Saxena, Ashutosh Mishra, Himanshu Kumar Mahto, and Piyush Agarwal, showcased their exceptional skills and creativity at CIC's Annual Hackathon, Hash Hacks. We designed and implemented an innovative AR indoor navigation system that impressed the judges and secured us the prestigious first prize. Our dedication and ingenuity make us trailblazers in the world of technology and navigation. "
        imageSrc="/Achievements/CIC.png"
        videoLink="https://www.youtube.com/watch?v=yourvideoid1"
      />
      <ProjectCard
        id="achievement2"
        title="Top Performer Award"
        description="Himanshu Kumar Mahto, a talented individual and a member of Team Emo Developers, achieved remarkable success by clinching the top prize in the prestigious Kodethon event organized by JUET, Guna. His exceptional coding skills and problem-solving abilities were on full display during the competition, earning him well-deserved recognition and the first prize. His dedication to the world of coding makes him a standout talent in the field."
        imageSrc="/assets/himanshumahto.jpg"
        videoLink="https://www.youtube.com/watch?v=yourvideoid2"
      />
      <ProjectCard
      id="achievement3"
      title="Runner Ups JUET builds"
      description="Team Emo, featuring the dynamic duo Utkarsh Rai and Vikash Saxena, showcased their innovation prowess at Juet Builds, clinching the second runner-up position. Their creation, the Virtual Calisthenics Simulator, is a testament to their commitment to fitness and technology. This immersive VR app revolutionizes physical fitness, enabling users to engage in calisthenics and various physical activities from the comfort of their homes. Their achievement highlights their dedication to pushing the boundaries of technology and fitness, making them true trailblazers in the field. "
      imageSrc="/Achievements/JUET Builds.png"
      videoLink="https://www.youtube.com/watch?v=yourvideoid3"
      />
    </div>
  );
};

export default AchievementPage;
