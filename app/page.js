import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full text-white">
          <Navbar activeRoute="/" />
          <Banner />
        </div>
      </div>
    </main>
  );
}
