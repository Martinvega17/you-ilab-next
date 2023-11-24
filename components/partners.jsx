// Partners.js
import Image from "next/image";
import React from "react";
import PartnerLogos from "./datos/DatosPartners";
export default function Partners() {
    

    return (
        <div className="">
            <h1 className="text-center text-lg font-MontserratThin dark:text-neutral-300 text-black pt-4">
                OUR PARTNERS
            </h1>
            <div className="pt-[5vh] pb-[15vh] 2xl:px-[20vh] xl:px-[20vh] md:px-[6vh] sm:px-[5vh] py-0 flex flex-wrap">
                {PartnerLogos.map((partner, index) => (
                    <div key={index} className="2xl:w-1/4 p-4 m-auto">
                        <a
                            href={partner.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${partner.name}`}
                        >
                            <Image
                                src={partner.src}
                                alt=""
                                className="hover:opacity-[1] max-w-[10em] opacity-[.3] cursor-pointer"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}
