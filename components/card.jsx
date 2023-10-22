import Image from 'next/image';
import card from '../app/assets/varios/image_card.jpg';

export default function Card() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:px-3 lg:px-80 px-4">
            {generateCard("MISION", "El You I Lab busca liderar la innovación en desarrollo web y tecnologías emergentes, incluyendo inteligencia artificial y ciberseguridad. Su visión implica transferir ese conocimiento para impulsar el progreso tecnológico en la región y contribuir al desarrollo económico y social.")}
            {generateCard("VISION", "Establecerse como un centro tecnológico de excelencia a nivel nacional y regional.\nEn un ámbito de trabajo en equipo y colaboración")}
            {generateCard("OBJETIVO", "Somos un Laboratorio de Innovacion Juvenil perteneciente al IPICYT, dedicado a promover la investigación y el desarrollo de tecnologías de la información y contribuir al avance de la ciencia y la tecnología en la región de San Luis Potosí y más allá.")}
        </section>
    );
}

function generateCard(title, description) {
    return (
        <article className="group w-full md:w-96 [perspective:10000px]">
            <div className="group w-full [perspective:1000px]">
                <figure className="relative h-80 md:h-96 w-full md:w-96 rounded-xl transition-all duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div className="w-full h-full">
                            <h3 className="text-2xl md:text-4xl font-MontserratBold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-0">
                                {title}
                            </h3>
                            <Image src={card} className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' alt='' />
                        </div>
                    </div>
                    <div className="absolute inset-0 h-full rounded-xl bg-black/40 px-6 md:px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex h-full flex-col items-center justify-center">
                            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                            <p className="text-base md:text-lg overflow-auto">{description}</p>
                        </div>
                    </div>
                </figure>

            </div>
        </article>
    );
}
