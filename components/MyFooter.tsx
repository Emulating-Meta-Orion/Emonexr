import React from 'react';
import { FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 animate-fadeIn">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/assets/EMO_LOGO.png" alt="Emo Dev Logo" width={120} height={40} className="hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="text-center text-gray-500 text-xs">
            <p className="pb-8 text-sm">Built with ❤️ by EMO</p>
            <p>© 2025 Emo Developers. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6 text-xl">
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition duration-300 hover:scale-110">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/Emulating-Meta-Orion" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition duration-300 hover:scale-110">
              <FaGithub />
            </a>
            <a href="mailto:emodevelopers@gmail.com" aria-label="Email" className="hover:text-red-400 transition duration-300 hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
