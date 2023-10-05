"use client"
import React from "react";
import Image from "next/image";
import Projects from "../components/Projects/Carousel/Projects";

import AliadosCarousel from "../components/Aliados";
//Images
import YIL from './assets/sponsors/YOU_I_LAB_WHITE_LOGO.png'
import DBM from './assets/sponsors/DBM_WHITE_LOGO.png'
import IPICYT from './assets/sponsors/IPICYT.png'
import GCIC from './assets/sponsors/GCIC.png'
import collaborators from './assets/team/Collage_colab_.jpg'



export default function Home() {
  return (
    <main>
      <title>You I Lab | Home</title>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full text-white">
          {/* <LightColor> */}
          <div className="dark:bg-[#363636] bg-gradient-to-r from-[#2d2d3a] to-[#2b2b35]">
            <Projects />
          </div>
          {/* </LightColor> */}
          
          {/* Carousel Sponsors */}

          <div className="bg-gradient-to-r from-purple-500 to-teal-500 py-8 pb-12 relative">
            <div className="container text-center sm:px-8 md:px-12 lg:px-20 mx-auto">
              <div className="flex justify-center sm:justify-around mx-16">
                <div className="mb-4">
                  <div className="mr-3 ml-4">
                    <a href="http://youilab.ipicyt.edu.mx/">
                      <Image src={YIL} alt="" className="sponsors w-14 h-auto filter grayscale transition duration-500 hover:grayscale-0 sm:w-32 md:w-40" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="https://ipicyt.edu.mx/Biologia_Molecular/areas_biologia_molecular.php">
                      <Image src={DBM} alt="" className="sponsors h-auto filter grayscale transition duration-500 hover:grayscale-0 sm:w-56 md:w-64" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="https://cic.ipicyt.edu.mx/">
                      <Image src={GCIC} alt="" className="sponsors h-auto filter grayscale transition duration-500 hover:grayscale-0 sm:w-96 md:w-112" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="ml-4">
                    <a href="https://www.ipicyt.edu.mx/">
                      <Image src={IPICYT} alt="" className="sponsors h-auto grayscale hover:grayscale-0 transition duration-500 sm:w-72 md:w-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Carousel Sponsors */}
          <div
            className="h-96 w-auto flex justify-center items-center md:h-full"
            style={{
              backgroundImage: `url(${collaborators.src})`,
              backgroundSize: "35% ",
              
            }}
          >
            <div className="container text-center sm:px-8 md:px-12 lg:px-20 py-16">
              <h2 className="text-white text-2xl lg:text-5xl font-bold">AND THANKS YOU ALL</h2>
              <br />
              <h1 className="text-white text-2xl lg:text-5xl font-bold">COLLABORATORS!</h1>
            </div>
          </div>

          <AliadosCarousel />

          {/* End Section Collage Collaborators */}
        </div>
      </div>
    </main>
  );
};