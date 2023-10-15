import Image from "next/image";
import React from "react";
import wenet from './logos/wenet.png';
import balvi from './logos/balvi.png';
import idiap from './logos/idiap.png';
import universitie from './logos/universitie.png';
import salud from './logos/salud.png';
import cse from './logos/CSE.png';
import img1 from './logos/bgu_web.png';
import img2 from './logos/csic_web.png';
import img3 from './logos/disi_web.png';
import img4 from './logos/idiap_web.png';
import img5 from './logos/ipicyt_web.png';
import img6 from './logos/lse_web.png'
import img7 from './logos/martel_web.png';
import img8 from './logos/ouc_web.png';
import img9 from './logos/uh_web.png';

export default function Partners() {
    const partnerLogos = [wenet, balvi, idiap, universitie, cse, salud, img1, img2, img3, img4, img5, img6, img7, img8, img9];
    
    return (
        <div className="">
            <h3 className="text-center font-MontserratThin dark:text-black text-black pt-4  ">
                OUR PARTNERS
            </h3>
            <div className="pt-[5vh] pb-[15vh] px-[15vh] py-0 flex flex-wrap">
                {partnerLogos.map((src, index) => (
                    <div key={index} className="2xl:w-1/5  p-4">
                        <Image src={src} alt="" className="hover:opacity-[1] h-[6em] max-h-[650px] max-w-[260px]  opacity-[.3]	"></Image>
                    </div>
                ))}
            </div>
        </div>
    );
}
