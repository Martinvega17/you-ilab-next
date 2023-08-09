"use client"
import React from "react";
import Image from "next/image";
import Projects from "@/components/Projects/Carousel/Projects";

import AliadosCarousel from "@/components/Aliados";
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
          <AliadosCarousel />
          {/* Carousel Sponsors */}

          <div className="bg-gradient-to-r from-purple-500 to-teal-500 py-24 pb-16 h-80 relative -z-10">
            <div className="container text-center">
              <div className="flex justify-around mx-24 ">
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="http://youilab.ipicyt.edu.mx/">
                      <Image src={YIL} alt="" className=" w-24 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="https://ipicyt.edu.mx/Biologia_Molecular/areas_biologia_molecular.php">
                      <Image src={DBM} alt="" className=" w-48 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="https://cic.ipicyt.edu.mx/">
                      <Image src={GCIC} alt="" className="w-80 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="ml-4">
                    <a href="https://www.ipicyt.edu.mx/">
                      <Image src={IPICYT} alt="" className="w-64 h-auto grayscale hover:grayscale-0 transition duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Carousel Sponsors */}

          {/* Section Collage Collaborators */}
          <section className="relative -z-10">
            <div className="relative -z-1 text-center text-white">
              <Image src={collaborators} alt="" className="bg-repeat bg-1/2 w-full bg-cover bg-1/2" />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                style={{
                  width: "80%",
                  maxWidth: "1280px",
                  margin: "0 auto",
                  textAlign: "center",
                  "@media(max-width: 840px)": { width: "90%" }, // Este estilo debe ser convertido a un objeto
                }}
              >
                <h2 className="text-white text-2xl lg:text-5xl font-bold">AND THANKS YOU ALL</h2>
                <br />
                <h1 className="text-white text-2xl lg:text-5xl font-bold ">COLLABORATORS!</h1>

              </div>
            </div>
          </section>

          {/* End Section Collage Collaborators */}
        </div>
      </div>
    </main>
  );
};