//mport React from "react";
import { FaGamepad } from "react-icons/fa";
import { FaVrCardboard } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoLogoAndroid } from "react-icons/io";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Game Development",
      description:
        "At EMO Developers, we're not just coders; we're game-changers too! Crafting captivating games is our forte, where every line of code sparks fun and excitement.",
      icon:<FaGamepad className="w-9 h-9  text-white"/>
    },
    {
      id: 2,
      title: "AR/VR Development",
      description:
        "EMO Developers dives into the immersive world of AR and VR,where reality meets the extraordinary.We blend technology and creativity to craft captivating AR-VR experiences.",
      icon:<FaVrCardboard className="w-9 h-9 text-white"/>
    },
    {
      id: 3,
      title: "Web Development",
      description:"Web mastery is our playground at EMO Developers. From striking designs to seamless functionality, we craft web experiences that not only impress but also deliver exceptional user engagement.",
      icon:<CgWebsite className="w-9 h-9 text-white"/>
    },
    {
        id:4,
        title:"Android Development"
        ,
        description:"At EMO Developers, we're Android aficionados,turning ideas into innovative apps. We wield the power of Android to create user-friendly, feature-rich mobile applications that redefine convenience.",
        icon:<IoLogoAndroid className="w-9 h-9 text-white"/>
    }
  ];

  return (
    <section
      className=" mx-auto w:100% md:my-20"
      id="service"
    >


      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-customBlue font-semibold mb-3">
          Discover Our Range of Premier  Services
        </h2>
        <p className="text-white text-2xl"><strong>What services We provides?</strong></p>
      </div>

      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-8">
        {services.map((service) => (
          <div
            className="bg-customBlue px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-white hover:bg-gray-600 transition-all duration-300 flex items-center justify-center h-full"
            key={service.id}
          >
            <div>
            <div className="bg-black mt-4 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
  {service.icon}
</div>

              <h4 className="text-3xl font-bold text-black mb-2 px-2">
                {service.title}
              </h4>
              <p className=" text-black text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services
