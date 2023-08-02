"use client"
import React, { useState, useEffect } from "react";
import logo_you_i_lab from "../assets/logos/logo-you-i_lab.png";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsPinterest, BsX, BsYoutube } from "react-icons/bs"
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const styles = {
  navLinks: 'cursor pointer ml-10  border-b-[0.150rem] border-blue-800 hover:border-[#F6B520] text-lg',
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
              src={logo_you_i_lab}
              alt="Logo You i Lab"
              width={110}
              height={75}
              className="cursor-pointer"
            />
          </Link>
          <div className="text-black hidden sm:flex flex-1 justify-center"> {/* Modificación: Agregamos flex-1 y justify-center */}
            <ul className="hidden sm:flex dark:text-white">
              <li className={styles.navLinks}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/About">About</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/Projects">Projects</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto"> {/* Agregamos la clase ml-auto para pegar el elemento al margen derecho */}
    {theme === "dark" ? (
      <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
    ) : (
      <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
    )}
  </div>
          {/* Mobile Menu */}
          <div onClick={toggleMenu}
            className="sm:hidden cursor-pointer pl-24">
            <BsList className="h-8 w-8 text-[#F6B519] fixed -ml-5" />
          </div>
        </div>
        <div className={menuOpen
          ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] dark:bg-[#2C2C2C] p-10 ease-in-out duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
          style={{ zIndex: 200 }}>
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu}
              className="cursor-pointer">
              <BsX className="h-8 w-8 text-[#F6B519]" />
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex-col py-4">
            <ul>
              <li onClick={() => setMenuOpen(false)}
                className="py-4 border-b-[0.2rem]  hover:border-blue-800">
                <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}
                className="py-4 border-b-[0.2rem]  hover:border-blue-800">
                <Link href='/About'>About</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}
                className="py-4 border-b-[0.2rem]  hover:border-blue-800">
                <Link href='/Projects'>Projects</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}
                className="py-4 border-b-[0.2rem]  hover:border-blue-800">
                <Link href='/Contact'>Contact</Link>
              </li>
            </ul>
            {theme === "dark" ? (
        <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
      ) : (
        <FiMoon size={25} cursor="pointer" className="dark:text-black" onClick={() => setTheme("dark")} />
      )}
      
          </div>
          {/* Socia Media Links */}

          <div className="flex flex-row justify-around pt-10 items-center">
            <Link href="https://www.youtube.com/watch?v=0KLz7NMj1hc">
              <BsYoutube size={30} className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300 " />
            </Link>
            <Link href="https://www.pinterest.com">
              <BsPinterest size={30} className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300 " />
            </Link>
          </div>
          <Image
            src={logo_you_i_lab}
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