"use client"
import React from "react";
import Projects from "../components/Projects/Carousel/Projects";

import Sponsors from '../components/sponsors'
import ContactoForm from "../components/contactHome";
import Info from "../components/info";
import HomeSection from "../components/HomeSection";
import collaborators from './assets/team/Collage_colab_.jpg'
import image from './assets/varios/image1.png'
import Image from "next/image";
import Collaborator from '../components/Collaborators'
import Partners from "../components/partners";


export default function Home() {
  return (
    <main>
      <title>You I Lab | Home</title>
      <div className="h-full bg-banner-bg bg-center">
        <div className="w-full text-white">
          {/* <LightColor> */}
          <div className="dark:bg-[#363636] bg-gradient-to-r from-[#2d2d3a] to-[#2b2b35]">
            <Projects />
          </div>
          {/* </LightColor> */}

          {/* Carousel Sponsors */}
          <Sponsors />
          <div className="flex flex-col sm:flex-row px-4 sm:px-16 py-0 pb-20">
            <div className="w-full sm:w-1/2 p-4">
              <HomeSection />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <div className="w-full lg:w-[540px] h-96 lg:h-[450px] flex items-center justify-center overflow-hidden mx-auto ">
                <Image src={image} alt='Imagen trabajo en equipo' className="" />
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row w-full px-4 sm:px-16 py-0">
            <div className="w-full sm:w-1/2 p-4">
              <ContactoForm />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <Info />
            </div>
          </div>



          {/* End Carousel Sponsors */}
          <div
            className="h-96 w-auto flex justify-center items-center md:h-full mb-10"
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

          {/* <Collaborator /> */}
          <Partners />

          {/* End Section Collage Collaborators */}
        </div>
      </div>
    </main>
  );
};