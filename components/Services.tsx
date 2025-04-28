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
      icon:<FaGamepad className="w-9 h-9  text-white"/>,
      aos: "fade-right",
      delay: 0
    },
    {
      id: 2,
      title: "AR/VR Development",
      description:
        "EMO Developers dives into the immersive world of AR and VR,where reality meets the extraordinary.We blend technology and creativity to craft captivating AR-VR experiences.",
      icon:<FaVrCardboard className="w-9 h-9 text-white"/>,
      aos: "fade-up",
      delay: 100
    },
    {
      id: 3,
      title: "Web Development",
      description:"Web mastery is our playground at EMO Developers. From striking designs to seamless functionality, we craft web experiences that not only impress but also deliver exceptional user engagement.",
      icon:<CgWebsite className="w-9 h-9 text-white"/>,
      aos: "fade-left",
      delay: 200
    },
    {
        id:4,
        title:"Android Development"
        ,
        description:"At EMO Developers, we're Android aficionados,turning ideas into innovative apps. We wield the power of Android to create user-friendly, feature-rich mobile applications that redefine convenience.",
        icon:<IoLogoAndroid className="w-9 h-9 text-white"/>,
        aos: "zoom-in",
        delay: 300
    }
  ];

  return (
    <section
      className="mx-auto w-full md:my-32"
      id="service"
    >
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-customBlue font-semibold mb-3" data-aos="fade-down" data-aos-delay="0">
          What We Do.
        </h2>
      </div>

      <div className="mt-14 container mx-auto px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
          {services.map((service) => (
            <div
              className="bg-customBlue px-4 py-8 text-center w-full max-w-[300px] h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-white hover:bg-gray-400 transition-all duration-300 flex items-center justify-center"
              key={service.id}
              data-aos={service.aos}
              data-aos-delay={service.delay}
            >
              <div data-aos="zoom-in" data-aos-delay={service.delay + 100}>
                <div className="bg-black mt-4 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
                  {service.icon}
                </div>

                <h4 className="text-3xl font-bold text-black mb-2 px-2" data-aos="fade-up" data-aos-delay={service.delay + 200}>
                  {service.title}
                </h4>
                <p className="text-black text-base" data-aos="fade-up" data-aos-delay={service.delay + 300}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
