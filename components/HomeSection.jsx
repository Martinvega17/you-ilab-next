import image from '@/assets/varios/image1.png'
import Image from 'next/image'
import Link from 'next/link'
export default function HomeSection() {
    return (
        <div className="px-16 flex mb-8">
            <div className="w-3/5">
                <h1 className="text-5xl text-[#01BE96] font-latoBold">
                    You I Lab es un espacio para ti
                </h1>
                <p className="text-black mt-8 h-auto text-left mb-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut accusamus animi tempora culpa cupiditate quasi vero tenetur commodi quaerat eos enim sed, adipisci perferendis laboriosam nihil autem excepturi corporis quidem.
                </p>
                <div className="">
                    <Link href="/About">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-[#01BE96] rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Conoce más
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className="w-5/12">
                <Image src={image} alt="" className="w-[600px] h-[583px] shrink-0" />
            </div>

        </div>
    )
}