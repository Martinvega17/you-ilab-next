"use client"
import React, { useState, useEffect } from "react";
import logo_org from '../assets/logos/Logo-Original.png'
import Image from "next/image";
import Link from "next/link";
import { BsList, BsFacebook, BsX, BsTwitter, BsLinkedin } from "react-icons/bs"
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const styles = {
  navLinks: 'cursor-pointer ml-10 text-lg transition-colors duration-300 p-2',
  navLinksHover: 'hover:border-[#91f2fe] hover:bg-black hover:text-[#91f2fe] rounded-full'
};

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <header>
      <nav className="w-full h-24 shadow-xl bg-navbarBlue dark:bg-[#2C2C2C]" style={{ zIndex: 100 }}>
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-full px-4 w-full">
          <Link href="/">
            <Image
              src={logo_org}
              alt="Logo You i Lab"
              width={130}
              height={75}
              className="cursor-pointer"
            />
          </Link>
          <div className="text-[#FFFCFC] hidden sm:flex flex-1 justify-center"> {/* Modificación: Agregamos flex-1 y justify-center */}
            <ul className="hidden sm:flex dark:text-white">
              <li className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href="/About">About</Link>
              </li>
              <li className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href="/Projects">Projects</Link>
              </li>
              <li className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto text-[#FFFCFC]"> {/* Agregamos la clase ml-auto para pegar el elemento al margen derecho */}
            {theme === "dark" ? (
              <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
            ) : (
              <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
            )}
          </div>
          {/* Mobile Menu */}
          <div onClick={toggleMenu}
            className="sm:hidden cursor-pointer pl-24">
            <BsList className="h-8 w-8 text-white fixed -ml-5" />
          </div>
        </div>
        <div className={menuOpen
          ? "fixed top-0 left-0 w-[100%] sm:hidden h-screen bg-navbarBlue dark:bg-[#2C2C2C] p-10 ease-in-out duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
          style={{ zIndex: 200 }}>
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu}
              className="cursor-pointer">
              <BsX className="h-8 w-8 text-white rounded-full border-2 hover:bg-white hover:text-black" />
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex-col py-4">
            <ul className="text-white justify-center text-center">
              <li onClick={() => setMenuOpen(false)}
                className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}
                className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href='/About'>About</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}
                className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href='/Projects'>Projects</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}
                className={`${styles.navLinks} ${styles.navLinksHover}`}>
                <Link href='/Contact'>Contact</Link>
              </li>
            </ul>
          </div>
          {/* Socia Media Links */}

          <div className="flex flex-row justify-around pt-10 items-center">
            <Link href="https://www.facebook.com/youilab/" target="_blanck">
              <BsFacebook size={30} className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300 " />
            </Link>
            <Link href="https://twitter.com/youi_lab?lang=en" target="_blanck">
              <BsTwitter size={30} className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300 " />
            </Link>
            <Link href="https://www.pinterest.com" target="_blanck">
              <BsLinkedin size={30} className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300 " />
            </Link>
          </div>
          <Image
            src={logo_org}
            alt="logo"
            width={205}
            height={75}
            className="cursor-pointer pt-10 mx-auto"
          />
          {/* <p className="mt-10">
            &copy; 2023 You i Lab. All rights reserved.
            Powered by You I Lab <Image src={logo_you_i_lab} alt="You I Lab Logo" className="inline-block w-6 h-6"></Image>
          </p> */}

        </div>
      </nav>
    </header>
  )
}

export default NavBar