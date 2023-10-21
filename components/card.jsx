import Image from 'next/image'
import woman from '../app/assets/varios/woman.webp'

export default function Card() {
    return (
        <div className="flex h-[40vh] flex-row justify-center items-center gap-8">
            <div className="group h-96 w-96 [perspective:10000px]">
                <div className="relative h-80 min-w-80 rounded-xl transition-all duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div className="bg-[#FCA500] h-full w-96 rounded-xl object-cover shadow-xl shadow-black/40">
                            {/* Título centrado en la tarjeta */}
                            <h3 className="text-4xl font-MontserratBold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-0">
                                MISION
                            </h3>
                        </div>
                    </div>
                    <div className="absolute inset-0 h-full w-96 rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex h-full flex-col items-center justify-center">
                            <p className="text-base overflow-auto">El You I Lab busca liderar la innovación en desarrollo web y tecnologías emergentes, incluyendo inteligencia artificial y ciberseguridad. Su visión implica transferir ese conocimiento para impulsar el progreso tecnológico en la región y contribuir al desarrollo económico y social.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Repite este bloque dos veces más para tres tarjetas */}
            <div className="group h-96 w-96 [perspective:10000px]">
                <div className="relative h-80 w-96 rounded-xl transition-all duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div className="bg-[#FD7211] h-full w-96 rounded-xl object-cover shadow-xl shadow-black/40">
                            {/* Título centrado en la tarjeta */}
                            <h3 className="text-4xl font-MontserratBold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-0">
                                VISION
                            </h3>
                        </div>
                    </div>
                    <div className="absolute inset-0 h-full w-96 rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex h-full flex-col items-center justify-center">
                            <p className="text-base overflow-auto">Establecerse como un centro tecnológico de excelencia a nivel nacional y regional.
                            <br />
                            En un ámbito de trabajo en equipo y colaboración</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ... (Repite el mismo patrón para las otras tarjetas) */}
            <div className="group h-96 w-96 [perspective:10000px]">
                <div className="relative h-80 w-96 rounded-xl transition-all duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div className="bg-[#C9222B] h-full w-96 rounded-xl object-cover shadow-xl shadow-black/40">
                            {/* Título centrado en la tarjeta */}
                            <h3 className="text-4xl font-MontserratBold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-0">
                                OBJETIVO
                            </h3>
                        </div>
                    </div>
                    <div className="absolute inset-0 h-full w-96 rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex h-full flex-col items-center justify-center">
                            <p className="text-base overflow-auto">Somos un Laboratorio de Innovacion Juvenil perteneciente al IPICYT, dedicado a promover la investigación y el desarrollo de tecnologías de la información y contribuir al avance de la ciencia y la tecnología en la región de San Luis Potosí y más allá</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
