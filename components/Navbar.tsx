"use client"
import { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "#home" },
    { link: "Service", path: "#service" },
    { link: "About", path: "#about" },
    { link: "Team", path: "#team" },

  ];

  return (
    <div className="border-black mt-0 mb-0">
      <header
        className={`w-full md:bg-black top-0 left-0 right-0 border-black z-10 transition-all duration-300 ${
          isSticky ? "fixed bg-black shadow-md py-4" : "absolute py-6"
        }`}
      >
        <nav className="lg:px-14 px-4 border-b-0">
          <div className="flex justify-between items-center text-base gap-8">
            <Link
              className="text-2xl font-semibold flex items-center space-x-3 w-"
              href="/"
            >
              <Image src="/assets/EMO_LOGO.png" width={100} height={32} alt="Logo" />
            </Link>

            <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
                <li key={path}>
                <Link href={`/${path}`} className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">{link}</Link>
                </li>
              ))}
              <li>
         <Link href='/project' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Projects</Link>
              </li>
              <li>
                <Link href='/achievement' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Achievements</Link>

              </li>
              <li>
                <Link href='https://heavenestate.netlify.app/' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Heavens-Estate</Link>

              </li>
            </ul>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:text-gray-500"
              >
                {isMenuOpen ? (
                  <FaXmark  />
                ) : (
                  <FaBars  />
                )}
              </button>
            </div>
          </div>

          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
              isMenuOpen ? "bg-black block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
          <ul className="md:flex flex-col items-center justify-center bg-black">
            {navItems.map(({ link, path }) => (
                <li key={path}>
                <Link href={`/${path}`} className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">{link}</Link>
                </li>
              ))}
              <li>
         <Link href='/project' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Projects</Link>
              </li>
              <li>
                <Link href='/achievement' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Achievements</Link>

              </li>
              <li>
                <Link href='https://heavenestate.netlify.app/' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Heavens-Estate</Link>

              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar