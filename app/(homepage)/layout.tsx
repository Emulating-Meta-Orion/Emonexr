import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MyFooter from "@/components/MyFooter";
import Services from "@/components/Services";
import WhyEMO from "@/components/WhyEMO";
import ProjectCard from "@/components/ProjectCard";
import HighlightedAchievementCard from "@/components/HighlightedAchievementCard";
import AOSInit from "@/components/AOSInit";
import SectionWithAOS from "@/components/SectionWithAOS";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import AchievementCarousel from "@/components/AchievementCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emo developers",
  description: "",
  icons:"/public/assets/EMO_LOGO.png"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <BackgroundAnimation />
        <AOSInit />
        <Navbar />
        <div className="space-y-24">
          <SectionWithAOS animation="fade-up">{children}</SectionWithAOS>
          <SectionWithAOS animation="fade-up"><WhyEMO /></SectionWithAOS>
          {/* <SectionWithAOS animation="fade-right"><About /></SectionWithAOS> */}
          <SectionWithAOS animation="fade-left"><Services /></SectionWithAOS>
          <SectionWithAOS animation="zoom-in">
            <section id="achievements" className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl text-customBlue font-semibold text-center mb-12">
                  Our Achievements!
                </h2>
                <AchievementCarousel />
              </div>
            </section>
          </SectionWithAOS>
          <SectionWithAOS animation="fade-up">
            <section id="projects" className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl text-customBlue font-semibold text-center mb-12">
                  Our Projects {'/>'}
                </h2>
                <ProjectCarousel />
              </div>
            </section>
          </SectionWithAOS>
          <SectionWithAOS animation="fade-up">
            <section id="contact" className="py-16">
              <div className="container mx-auto px-4">
                <Contact />
              </div>
            </section>
          </SectionWithAOS>
          {/* <SectionWithAOS animation="fade-up">
            <section id="ambio" className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl text-customBlue font-semibold text-center mb-12">
                  Ambio
                </h2>
                <div className="text-center">
                  <p className="text-white text-xl mb-8">
                    Experience the future of AR/VR with Ambio
                  </p>
                  <a 
                    href="https://waitlist.ambio.emodev.tech/" 
                    className="bg-customBlue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>
            </section>
          </SectionWithAOS> */}
        </div>
        
        <MyFooter />
      </body>
    </html>
  );
}
