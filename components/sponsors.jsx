import Image from "next/image";

export default function Sponsors() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 py-8 pb-4 relative mb-8">
    <div className="container text-center sm:px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around mx-4 sm:mx-8 md:mx-12 lg:mx-20">
            <div className="mb-4 sm:mb-0">
                <div className="mr-3 ml-4">
                    <a href="http://youilab.ipicyt.edu.mx/" target="_blank" aria-label="Enlace a Youilab">
                        <Image src='/assets/sponsors/YOU-I-LAB-LOGO-IPICYT.png' width={508} height={491} alt="Youilab" className="w-20 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                </div>
            </div>
            <div className="mb-4 sm:mb-0">
                <div className="mr-3 ml-4">
                    <a href="https://ipicyt.edu.mx/Biologia_Molecular/areas_biologia_molecular.php" target="_blank" aria-label="Enlace a Biología Molecular en IPICYT">
                        <Image src='/assets/sponsors/DBM.png' alt="Biología Molecular" width={2427} height={908} className="sponsors w-44 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                </div>
            </div>
            <div className="mb-4 sm:mb-0">
                <div className="mr-3 ml-4">
                    <a href="https://cic.ipicyt.edu.mx/" target="_blank" aria-label="Enlace a CIC IPICYT">
                        <Image src='/assets/sponsors/GCIC.png' alt="CIC IPICYT" width={2032} height={538} className="sponsors w-64 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                </div>
            </div>
            <div className="mb-4 sm:mb-0">
                <div className="mr-3 ml-4 ">
                    <a href="https://www.ipicyt.edu.mx/" target="_blank" aria-label="Enlace a IPICYT">
                        <Image src='/assets/sponsors/IPICYT.png' alt="IPICYT" width={1564} height={529} className=" w-52 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}