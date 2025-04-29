"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isSticky ? "fixed bg-black shadow-md py-4" : "absolute py-6"
      }`}
    >
      <nav className="lg:px-14 px-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/">
            <Image
              src="/assets/EMO_LOGO.png"
              width={100}
              height={32}
              alt="EMO Logo"
              className="object-contain"
            />
          </Link>

          {/* Ambio link on the right */}
          <a
            href="https://ambio.emodev.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="ambio-button01"
          >
            <span className="text-container01">
              <span className="letter01" data-letter="A">A</span>
              <span className="letter01" data-letter="m">m</span>
              <span className="letter01" data-letter="b">b</span>
              <span className="letter01" data-letter="i">i</span>
              <span className="letter01" data-letter="o">o</span>
            </span>
            <span className="glow-effect01"></span>
            <span className="shine-effect01"></span>
          </a>
        </div>
      </nav>

      <style jsx>{`
        .ambio-button01 {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 12px 32px;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.5px;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 9999px;
          background-color: rgba(20, 20, 20, 0.5);
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .ambio-button01:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
          border-color: transparent;
        }

        .text-container01 {
          position: relative;
          z-index: 2;
          display: flex;
        }

        .letter01 {
          position: relative;
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ambio-button01:hover .letter01 {
          transform: translateY(-2px);
          animation: float01 2s ease infinite;
        }

        .ambio-button01:hover .letter01:nth-child(1) {
          animation-delay: 0s;
          background: linear-gradient(135deg, #FF1493, #FF69B4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ambio-button01:hover .letter01:nth-child(2) {
          animation-delay: 0.05s;
          background: linear-gradient(135deg, #FF69B4, #FF8C00);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ambio-button01:hover .letter01:nth-child(3) {
          animation-delay: 0.1s;
          background: linear-gradient(135deg, #FF8C00, #FFD700);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ambio-button01:hover .letter01:nth-child(4) {
          animation-delay: 0.15s;
          background: linear-gradient(135deg, #FFD700, #FF4500);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ambio-button01:hover .letter01:nth-child(5) {
          animation-delay: 0.2s;
          background: linear-gradient(135deg, #FF4500, #FF1493);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .glow-effect01 {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            #FF1493,
            #FF69B4,
            #FF8C00,
            #FFD700,
            #FF4500
          );
          opacity: 0;
          z-index: 0;
          transition: opacity 0.5s ease;
          border-radius: 9999px;
        }

        .ambio-button01:hover .glow-effect01 {
          opacity: 0.3;
        }

        .shine-effect01 {
          position: absolute;
          top: -50%;
          left: -100%;
          width: 50%;
          height: 200%;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(30deg);
          transition: 0.5s;
          opacity: 0;
        }

        .ambio-button01:hover .shine-effect01 {
          left: 130%;
          opacity: 0.6;
          transition: 0.7s ease-in-out;
        }

        @keyframes float01 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse01 {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .ambio-button01 {
          animation: pulse01 2s ease infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
