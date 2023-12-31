"use client"
import React from "react";
import Image from "next/image";
import Projects from "../components/Projects/Carousel/Projects";
import Sponsors from '../components/sponsors'
import ContactoForm from "../components/contactHome";
import Info from "../components/info";
import HomeSection from "../components/HomeSection";
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
          <div className="flex flex-col md:flex-row w-full px-4 sm:px-16 py-0 pb-20">
            <div className="w-full md:w-1/2 p-4">
              <HomeSection />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="w-full h-96 lg:h-[450px] flex items-center justify-center overflow-hidden mx-auto ">
                <Image src='/assets/varios/image1.webp' width={1080} height={720} alt='Imagen trabajo en equipo' className="" />
              </div>
            </div>

          </div>

          <div className="flex flex-col lg:flex-row w-full px-4 sm:px-16 py-10">

            <div className="w-full lg:w-1/2">
              <ContactoForm />
            </div>

            <div className="w-full lg:w-1/2 px-4 sm:px-16 py-10">
              <Info />
            </div>

          </div>

          {/* Our Projects */}
          <div className=" mx-4 flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover font-MontserratBold" style={{ backgroundSize: '100% 100%' }}>
          <h1 className="text-3xl lg:text-6xl xl:text-7xl md:text-4xl text-center text-white uppercase">
                Nuestro Compromiso
            </h1>
        </div>

          {/* End Carousel Sponsors */}
          <div
            className="mx-4 flex justify-center items-center h-96 xl:h-[32rem] md:h-full mb-10 mt-10"
            style={{
              backgroundImage: `url('/assets/team/Collage_colab_.webp')`,
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


