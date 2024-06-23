//import React from "react";
//import aboutImg from "/assets/collagebg-removebg-preview(2).png";
import Image from "next/image";
 const About = () => {
  return (
    <section className="bg-black">
      <div className="px-4 lg:px-14  mx-auto my-8 " style={{width:"100%"}} id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <Image src="/assets/collagebg-removebg-preview(2).png" width={400} height={400} alt="Imagem de sobre" />
          </div>

          <div className="md:w-3/5 mx-auto">
            <h2 className="text-white text-5xl text-customBlue 0 font-semibold mb-4 md:w-4/5">
             Discover Our Vision
            </h2>
            <p className="md:w-3/4 text-xl text-white mb-8">
            Passionate Game and AR/VR Developers, Android App Wizards, and Web Development Enthusiasts. Your go-to freelance squad for AR/VR Android and Web Developme
            </p>
            <button className="btn-primary bg-customBlue w-38 h-19 text-2xl rounded p-2">Contact Us</button>
          </div>
        </div>
      </div>

      
    </section>
  );
};
export default About