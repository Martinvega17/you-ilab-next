"use client"
import React from "react";
import styled from "styled-components";
import Projects from "@/components/Projects/Carousel/Projects";
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';


// Importar LightColor from styled-components
const LightColor = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full text-white">
          <Navbar activeRoute="/" />
          <LightColor>
            <Projects />
          </LightColor>
          <Footer />
        </div>
      </div>
    </main>
  );
}
