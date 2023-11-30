import Link from 'next/link';

export default function HomeSection() {
    return (
        <div className="pt-8 pb-12 px-4 sm:px-16 mx-auto max-w-screen-md bg-[#F6F6F6] dark:bg-[#141413] rounded-xl">
            <div className="">
                <h1 className="text-3xl sm:text-5xl text-[#01BE96] font-latoBold">
                    You I Lab es un espacio para ti
                </h1>
                <p className="text-black dark:text-neutral-300 mt-4 sm:mt-8 h-auto text-left mb-4 sm:mb-6">
                    Tienes muchas formas de participar: Presenta proyectos para mejorar tu entorno, aprende a conseguir financiación y conoce personas con las que generar sinergias.
                </p>
                <div className="sm:flex sm:justify-start">
                    <Link href="/About">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-[#01BE96] rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Conoce más
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
