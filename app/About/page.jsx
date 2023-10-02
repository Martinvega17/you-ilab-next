"use client"
import Card from '../../components/SwiperCarousel';
import team from '@/assets/team.jpg';
import nosotros from '@/assets/footer/nosotros.jpg';
import '../main.css'
import Image from 'next/image';

const About = () => {
    return (
        <div className="about_container">
            <title>You I Lab | About</title>

            <div className="about">

                <div
                    className="h-80 w-auto flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${nosotros.src})`,
                        backgroundSize: "100% ",
                    }}
                >
                    <div className="container text-center sm:px-8 md:px-12 lg:px-20 py-16">
                        <h1 className="text-neutral-300 text-2xl lg:text-5xl font-bold text-right">NOSOTROS</h1>
                    </div>
                </div>
            </div>
            <div className="lg:ml-40 ml-10 ">
                <div className="row">
                    <div className="flex flex-col md:flex-row mt-8 mb-5">
                        <div className="about_content md:mr-20">
                            <h2 className="section_title text-5xl  lg:text-4xl xl:text-5xl mb-8 lg:mb-10 text-dark-blue font-medium">
                                Youth Innovation <br /> Laboratory
                            </h2>
                            <div className="about-left">
                                <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-h-lg xl:max-w-2xl">
                                    El Youth Innovation Laboratory (You-i Lab) es una iniciativa desde el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT) sin precedentes que sienta las bases para una participación de la población joven del país en la resolución de problemas sociales para beneficio de un mejor mañana.
                                </p>
                            </div>
                        </div>

                        <div className="md:ml-40 ">
                            <div className="about-left">
                                <Image src={team} className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mr-4" alt="Team" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="mr-8">
                            <div className="relative">
                                <h2 className="text-6xl borderl absolute text-[7vmin] mb-8 font-semibold">Mision</h2>
                                <h2 className="text-6xl wave absolute text-[7vmin] mb-8 font-semibold">Mision</h2>
                            </div>
                            <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-20 ">
                                Empoderar a la juventud a través del uso de las tecnologías de la información y la comunicación en el contexto de proyectos de impacto social.
                            </p>
                        </div>

                        <div className="ml-10 ">
                            <div className="relative py-1">
                                <h2 className="text-6xl borderl absolute text-[7vmin] mb-8 font-semibold">Vision</h2>
                                <h2 className="text-6xl wave absolute text-[7vmin] mb-8 font-semibold">Vision</h2>
                            </div>
                            <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-20">
                                Contar con los mejores talentos y creativos interesados en gestionar y ejecutar proyectos interdisciplinarios innovadores centrados en el bienestar social.
                            </p>
                        </div>
                    </div>

                    <div className="mr-8">
                        <div className="relative py-1 ">
                            <h2 className="text-6xl borderl absolute text-[7vmin] mb-8 font-semibold">Historia</h2>
                            <h2 className="text-6xl wave absolute text-[7vmin] mb-8 font-semibold">Historia</h2>
                        </div>
                        <div className="about-left ">
                            <p className="mt-24">
                                El laboratorio You+i del IPICYT (Instituto Potosino de Investigaci&oacute;n Cient&iacute;fica y Tecnol&oacute;gica) se fund&oacute; en 2013 con el objetivo de investigar y desarrollar tecnolog&iacute;as relacionadas con la interacci&oacute;n humano-m&aacute;quina. Su nombre proviene de la combinaci&oacute;n de la palabra &quot;you&quot; que hace referencia al usuario y la letra &quot;i&quot; de interfaz, buscando crear una &quot;yuxtaposici&oacute;n&quot; entre los seres humanos y la tecnolog&iacute;a, a trav&eacute;s del dise&ntilde;o de interfaces intuitivas y eficientes que mejoren la experiencia del usuario. Desde entonces, el laboratorio ha colaborado en diversos proyectos de investigaci&oacute;n e innovaci&oacute;n en este campo.
                            </p>
                        </div>
                    </div>

                    <div className="md:mr-20 mt-16">
                        <div className="content">
                            <div className="title_team">
                                <h2 className="inherit vertical-align text-center font-normal text-4xl text-[#038cd4] ">NUESTRO EQUIPO DE TRABAJO</h2>
                            </div>
                        </div>
                        {/* cards */}
                        <Card />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default About