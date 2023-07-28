import React from "react";
import Image from "next/image";
import logo_you_i_lab from '../app/assets/logos/logo-you-i_lab.png';
import logo_cns from '../app/assets/logos/logo-cns.png';
import logo_ipicyt from '../app/assets/logos/logo-ipicyt.png';
import Link from 'next/link'; // Importar el componente Link de Next.js

const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 bg-navbarBlue">
      <div className="max-w-screen-3xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="text-white text-lg py-0 font-semibold h-20"
            src={logo_you_i_lab}
            alt="Logo"
            style={{ maxWidth: '120px' }}
          />
          <h1 className="text-2xl uppercase font-bold text-black">Shoppers</h1>
        </div>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold text-black">
          {/* Usar NavLink para los elementos de menú */}
          <li className="navbarLi">
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li className="navbarLi">
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li className="navbarLi">
            <Link href="/projects" passHref>
              Projects
            </Link>
          </li>
          <li className="navbarLi">
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
