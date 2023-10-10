import Image from "next/image"
//Images
import YIL from '@/assets/sponsors/YOU_I_LAB_WHITE_LOGO.png'
import DBM from '@/assets/sponsors/DBM_WHITE_LOGO.png'
import IPICYT from '@/assets/sponsors/IPICYT.png'
import GCIC from '@/assets/sponsors/GCIC.png'

export default function Sponsors() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 py-8 pb-12 relative">
            <div className="container text-center sm:px-8 md:px-12 lg:px-20 mx-auto">
                <div className="flex justify-center sm:justify-around mx-16">
                    <div className="mb-4">
                        <div className="mr-3 ml-4">
                            <a href="http://youilab.ipicyt.edu.mx/">
                                <Image src={YIL} alt="" className="sponsors w-14 h-auto filter grayscale transition duration-500 hover:grayscale-0 sm:w-32 md:w-40" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div className="mr-3 ml-4">
                            <a href="https://ipicyt.edu.mx/Biologia_Molecular/areas_biologia_molecular.php">
                                <Image src={DBM} alt="" className="sponsors h-auto filter grayscale transition duration-500 hover:grayscale-0 sm:w-56 md:w-64" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div className="mr-3 ml-4">
                            <a href="https://cic.ipicyt.edu.mx/">
                                <Image src={GCIC} alt="" className="sponsors h-auto filter grayscale transition duration-500 hover:grayscale-0 sm:w-96 md:w-112" />
                            </a>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div className="ml-4">
                            <a href="https://www.ipicyt.edu.mx/">
                                <Image src={IPICYT} alt="" className="sponsors h-auto grayscale hover:grayscale-0 transition duration-500 sm:w-72 md:w-80" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}