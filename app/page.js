import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    
      <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full text-white">
          <Navbar />
          <Banner />
        </div>
      </div>
      </main>
    
  );
}
