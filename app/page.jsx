"use client"
import React from "react";
import Projects from "../components/Projects/Carousel/Projects";

import AliadosCarousel from "../components/Aliados";
import Sponsors from '../components/sponsors'

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

            <Sponsors />

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