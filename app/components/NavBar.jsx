"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import logo_cns from '../assets/logos/logo-cns.png';
import logo_ipicyt from '../assets/logos/logo-ipicyt.png';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 bg-navbarBlue">
      <div className="max-w-screen-3xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="text-white text-lg py-0 font-regular h-20"
            src={logo_you_i_lab}
            alt="Logo"
            style={{ maxWidth: '120px' }}
          />
          <h1 className="text-2xl uppercase font-regular text-blue-800">You i-Lab</h1>
        </div>
        {/* Mobile Hamburger Button */}
        <div className="-mr-2 flex md:hidden ml-auto">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open Main Menu</span>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-navbarBlue text-black">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li className={activeRoute === "/" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li className={activeRoute === "/About" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/About" passHref>
                  About
                </Link>
              </li>
              <li className={activeRoute === "/Projects" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/Projects" passHref>
                  Projects
                </Link>
              </li>
              <li className={activeRoute === "/Contact" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/Contact" passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 flex-1 justify-center text-black">
        <li className={activeRoute === "/" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li className={activeRoute === "/About" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
              <li className={activeRoute === "/Projects" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/projects" passHref>
                  Projects
                </Link>
              </li>
              <li className={activeRoute === "/Contact" ? "text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" : "text-blue-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"}>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
        </ul>

        <div className="flex items-center">
          <Image
            src={logo_ipicyt}
            alt="logo ipicyt"
            className="h-20 w-48 mr-[-50px] md:block hidden hover:brightness-150 hover:saturate-80 hover:hue-rotate-0"
            id="logo-ipicyt"
            style={{ marginLeft: '-90px' }}
          />

          <Image
            src={logo_cns}
            alt="logo cns"
            className="h-20 w-48 mr-[-15px] md:block hidden hover:brightness-150 hover:saturate-80 hover:hue-rotate-0"
            id="cns"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
