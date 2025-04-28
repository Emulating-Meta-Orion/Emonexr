import React from 'react';
import { FaRocket, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';

const WhyEMO = () => {
  const features = [
    {
      icon: <FaRocket className="w-12 h-12 text-customBlue" />,
      title: "Innovation First",
      description: "We push the boundaries of technology to create groundbreaking solutions that set new industry standards.",
      aos: "flip-left",
      delay: 0
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-customBlue" />,
      title: "Creative Excellence",
      description: "Our team combines technical expertise with creative thinking to deliver unique and engaging experiences.",
      aos: "flip-up",
      delay: 100
    },
    {
      icon: <FaUsers className="w-12 h-12 text-customBlue" />,
      title: "Client-Centric",
      description: "We prioritize understanding your vision and delivering solutions that exceed your expectations.",
      aos: "flip-right",
      delay: 200
    },
    {
      icon: <FaCode className="w-12 h-12 text-customBlue" />,
      title: "Technical Mastery",
      description: "With expertise in AR/VR, game development, and web technologies, we bring your ideas to life with precision.",
      aos: "flip-down",
      delay: 300
    }
  ];

  return (
    <section className="bg-black py-20" id="why-emo">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-customBlue font-semibold text-center mb-6" data-aos="fade-down" data-aos-delay="0">
          Why Choose EMO Developers?
        </h2>
        <p className="text-white text-xl text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          Passionate Game and AR/VR Developers, Android App Wizards, and Web Development Enthusiasts. Your go-to freelance squad for AR/VR Android and Web Development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg transition-all duration-300 relative group"
              data-aos={feature.aos}
              data-aos-delay={feature.delay}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-customBlue/0 group-hover:border-customBlue/60 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg shadow-[0_0_20px_rgba(0,191,255,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4" data-aos="zoom-in" data-aos-delay={feature.delay + 100}>
                  {feature.icon}
                </div>
                <h3 className="text-xl text-white font-semibold text-center mb-3" data-aos="fade-up" data-aos-delay={feature.delay + 200}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center" data-aos="fade-up" data-aos-delay={feature.delay + 300}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEMO; 