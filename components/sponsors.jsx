import Image from "next/image";
// Images
import YIL from '@/assets/sponsors/YOU_I_LAB_WHITE_LOGO.png';
import DBM from '@/assets/sponsors/DBM_WHITE_LOGO.png';
import IPICYT from '@/assets/sponsors/IPICYT.png';
import GCIC from '@/assets/sponsors/GCIC.png';

export default function Sponsors() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 py-8 pb-4 relative mb-8">
            <div className="container text-center sm:px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-around mx-4 sm:mx-8 md:mx-12 lg:mx-20">
                    <div className="mb-4 sm:mb-0">
                        <div className="mr-3 ml-4">
                            <a href="http://youilab.ipicyt.edu.mx/">
                                <Image src={YIL} alt="" className="w-20 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <div className="mr-3 ml-4">
                            <a href="https://ipicyt.edu.mx/Biologia_Molecular/areas_biologia_molecular.php">
                                <Image src={DBM} alt="" className="sponsors w-44 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <div className="mr-3 ml-4">
                            <a href="https://cic.ipicyt.edu.mx/">
                                <Image src={GCIC} alt="" className="sponsors w-64 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <div className="mr-3 ml-4 ">
                            <a href="https://www.ipicyt.edu.mx/">
                                <Image src={IPICYT} alt="" className=" w-52 h-auto filter grayscale transition duration-500 hover:grayscale-0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}