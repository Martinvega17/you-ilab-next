import Card from '../../components/SwiperCarousel';
import logo from '@/assets/logos/logo.png'
import nosotros from '@/assets/footer/nosotros.jpg';
import about from '@/assets/footer/about.jpg';
import Image from 'next/image';
import team from '@/assets/team/team.jpg';

const About = () => {
    return (
        <div className="about_container">
            <title>You I Lab | About</title>

            <div className="about">

                <div
                    className="h-[23rem] sm:h-[20rem] md:h-[18rem] lg:h-[20rem] xl:h-[25rem] w-full flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${about.src})`,
                        backgroundSize: "100% ",
                    }}
                >
                    <div className="container text-center sm:px-2 md:px-4 lg:px-8 py-4">
                        <h1 className="text-white text-3xl lg:text-6xl font-MontserratBold text-center">Nuestra Historia</h1>
                    </div>
                </div>
            </div>
            <div className="px-4 py-8 sm:py-16 lg:px-24 xl:px-80">
                <div className="text-[15px] leading-[27px]  flex flex-wrap">

                    <div className="w-full sm:w-1/2 lg:w-3/4 border-b-[#e9404e] border-b-2 border-solid">
                        <h2 className='mb-6 text-[#4DB9CA] text-4xl font-MontserratBold text-center'>
                            You I Lab
                        </h2>
                    </div>



                    <div className="w-full sm:w-1/2 lg:w-1/2 mt-10">
                        <p className="font-MontserratRegular mb-4 mt-4">
                            El YouI Lab del IPICYT (Instituto Potosino de Investigación Científica y Tecnológica) es un laboratorio de investigación que tiene una rica historia de contribuciones al campo de la informática y las tecnologías de la información en San Luis Potosí y más allá. Fundado en [insertar año de fundación], este laboratorio se ha destacado por su enfoque interdisciplinario y su compromiso con la promoción de la ciencia y la tecnología en la región.
                        </p>
                        <p className="font-MontserratRegular mb-4">
                            A lo largo de los años, el YouI Lab ha estado involucrado en una amplia variedad de proyectos innovadores que han abarcado tanto el desarrollo web como el backend y frontend, lo que refleja su enfoque integral en el campo de la informática. Desde sus primeros días, el laboratorio ha estado a la vanguardia de la investigación en inteligencia artificial y tecnologías emergentes, lo que le ha permitido mantener una posición líder en el ámbito de la investigación científica y tecnológica.
                        </p>
                    </div>
                    <div className="w-auto sm:w-1/2 lg:w-2/5 ml-8 mt-14 h-96">
                        <Image src={team} alt='' className='h-auto w-auto' />
                    </div>

                </div>
            </div>


            <div className="px-4 py-8 sm:py-4 lg:px-24 xl:px-96">
                <div className="text-left">
                    <h2 className="font-MontserratBold text-[#8A26CC] text-4xl sm:text-5xl">
                        Objetivo
                    </h2>
                </div>
                <div className="text-[15px] leading-[27px] text-justify mt-4">
                    <div className="float-left mr-4">
                        <Image src={logo} alt='Mision' height={140} width={120} />
                    </div>
                    <p className="font-MontserratRegular">
                        Somos un Laboratorio de Innovacion Juvenil perteneciente al IPICYT, dedicado a promover la investigación y el desarrollo de tecnologías de la información, centrándose en aspectos relacionados tanto con el frontend como el backend, y contribuir al avance de la ciencia y la tecnología en la región de San Luis Potosí y más allá
                    </p>
                </div>
            </div>

            <div className="px-4 py-8 sm:py-4 lg:px-24 xl:px-96">
                <div className="text-center">
                    <h2 className="font-MontserratBold text-[#8A26CC] text-4xl sm:text-5xl">
                        Misión
                        <div className="float-right ml-4">
                            <Image src={logo} alt='Mision' height={140} width={120} />
                        </div>
                    </h2>

                </div>

                <div className="text-[15px] leading-[27px] text-justify mt-4">
                    <p className="font-MontserratRegular text-left mb-4">
                        Establecerse como un centro tecnológico de excelencia a nivel nacional y regional. A través de sus servicios y productos, nuestro laboratorio se dedica a promover y desarrollar diversas áreas de importancia clave:
                    </p>
                    <ul className="font-MontserratRegular text-left">
                        <li> - Investigación Científica:</li>
                        <li> - Desarrollo de la Docencia:</li>
                        <li> - Generación de Conocimiento Tecnológico:</li>
                        <li> - Habilidades y Competencias Humanas:</li>
                        <li> - Soluciones TIC Eficientes:</li>
                    </ul>
                    <br />
                    <p className="font-MontserratRegular text-left mb-2 ">
                        En un ámbito de trabajo en equipo y colaboración
                    </p>


                </div>
            </div>





            <div className="px-4 py-8 sm:py-4 lg:px-24 xl:px-96">
                <div className="text-left">
                    <h2 className="font-MontserratBold text-[#8A26CC] text-4xl sm:text-5xl">
                        Visión
                    </h2>
                </div>
                <div className="text-[15px] leading-[27px] text-justify mt-4">
                    <div className="float-left mr-4">
                        <Image src={logo} alt='Mision' height={140} width={120} />
                    </div>
                    <p className="font-MontserratRegular">
                        El YouI Lab aspira a ser un referente global en la generación de conocimiento y la innovación en las áreas de desarrollo web, frontend y backend, así como en campos relacionados. Buscamos liderar la investigación en tecnologías emergentes, la inteligencia artificial, la ciberseguridad y otros dominios clave de la informática. Nuestra visión incluye la transferencia efectiva de este conocimiento a la industria y la sociedad, impulsando así el desarrollo tecnológico en la región y contribuyendo al progreso económico y social.
                    </p>
                </div>
            </div>







            <div className="md:mr-4 mt-4">
                <div className="content">
                    <div className="title_team">
                        <h2 className="inherit vertical-align text-center text-3xl text-titleAbout dark:text-[#8A26CC] font-MontserratBold">NUESTRO EQUIPO DE TRABAJO</h2>
                    </div>
                </div>
                {/* cards */}
                <Card />
            </div>
        </div>


    )
}
export default About;
