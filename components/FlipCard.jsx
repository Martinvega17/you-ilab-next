

export default function Card() {
    return (
        <section className="flex flex-col xl:flex-row lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 px-4 py-10 sm:py-20 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
            {generateCard("MISION", "El You I Lab busca liderar la innovación en desarrollo web y tecnologías emergentes, incluyendo inteligencia artificial y ciberseguridad. Su visión implica transferir ese conocimiento para impulsar el progreso tecnológico en la región y contribuir al desarrollo económico y social.", "gray-metalico")}
            {generateCard("VISION", "Establecerse como un centro tecnológico de excelencia a nivel nacional y regional.\nEn un ámbito de trabajo en equipo y colaboración", "gray")}
            {generateCard("OBJETIVO", "Somos un Laboratorio de Innovacion Juvenil perteneciente al IPICYT, dedicado a promover la investigación y el desarrollo de tecnologías de la información y contribuir al avance de la ciencia y la tecnología en la región de San Luis Potosí y más allá", "rosa")}
        </section>
    );
}

function generateCard(title, description, backgroundColor) {
    let cardStyle = {};

    switch (backgroundColor) {
        case "gray-metalico":
            cardStyle.backgroundColor = "#FFA100"; // Color amarillo
            break;
        case "gray":
            cardStyle.backgroundColor = "#FF720E"; // Color anaranjado
            break;
        case "rosa":
            cardStyle.backgroundColor = "#CD2323"; // Color rojo
            break;
        default:
            cardStyle.backgroundColor = "#FFA100"; // Color predeterminado (amarillo)
            break;
    }

    return (
        <article className="group w-full lg:w-[18.7rem] xl:w-[21.6rem] [perspective:1000px] pb-14">
            <div className="group w-full [perspective:1000px]">
                <figure className="relative h-80 md:h-96 lg:h-80 xl:h-96 w-full md:w-80 lg:w-80 xl:w-96 rounded-xl transition-all duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div className="w-full h-full" style={cardStyle}>
                            <h3 className="text-2xl md:text-4xl font-MontserratBold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-0">
                                {title}
                            </h3>
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
