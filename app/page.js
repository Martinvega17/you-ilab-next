"use client"
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Projects from "@/components/Projects/Carousel/Projects";

import AliadosCarousel from "@/components/Aliados";
//Images
import YIL from './assets/sponsors/YOU_I_ LAB_WHITE_LOGO.png'
import DBM from './assets/sponsors/DBM_WHITE_LOGO.png'
import IPICYT from './assets/sponsors/IPICYT.png'
import GCIC from './assets/sponsors/GCIC.png'
import collaborators from './assets/team/Collage_colab_.jpg'


// Importar LightColor from styled-components
const LightColor = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    position: relative;
`;

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full text-white">
          <LightColor>
            <Projects />
          </LightColor>
          <AliadosCarousel />
          {/* Carousel Sponsors */}

          <div className="bg-gradient-to-r from-purple-500 to-teal-500 py-24 pb-16 h-80 relative -z-10 ">
            <div className="container mx-auto text-center">
              <div className="flex justify-around">
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="">
                      <Image src={YIL} alt="" className="w-36 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="">
                      <Image src={DBM} alt="" className="w-72 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="mr-3 ml-4">
                    <a href="">
                      <Image src={GCIC} alt="" className="w-80 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="ml-4">
                    <a href="">
                      <Image src={IPICYT} alt="" className="w-72 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Carousel Sponsors */}

          {/* Section Collage Collaborators */}
          <section className="relative -z-10">
            <div className="relative max-w-screen h-full w-full -z-1 text-center text-white">
              <Image src={collaborators} alt="" className="w-full h-full bg-contain bg-repeat" />
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