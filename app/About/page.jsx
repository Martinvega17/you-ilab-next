import Card from '../../components/SwiperCarousel';
import logo from '@/assets/logos/logo.png'
import about from '@/assets/footer/about.jpg';
import Image from 'next/image';
import team from '@/assets/team/team.jpg';
import Cards from '../../components/card';

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
            <div className="px-4 py-10 sm:py-20 sm:px-10 lg:px-24 xl:px-30 2xl:px-60">
                <div className="text-[15px] leading-[27px]  flex flex-wrap">

                    <div className="w-full  border-b-[#e9404e] border-b-2 border-solid">
                        <h2 className='mb-6 text-[#4DB9CA] text-4xl font-MontserratBold text-center'>
                            You I Lab
                        </h2>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-full mt-10  ">
                        <p className="font-MontserratRegular mb-4 mt-4">
                            El YouI Lab del IPICYT (Instituto Potosino de Investigación Científica y Tecnológica) es un laboratorio de investigación que tiene una rica historia de contribuciones al campo de la informática y las tecnologías de la información en San Luis Potosí y más allá. Fundado en [insertar año de fundación], este laboratorio se ha destacado por su enfoque interdisciplinario y su compromiso con la promoción de la ciencia y la tecnología en la región.
                        </p>
                        
                        <Image src={team} alt='' className='h-56 w-auto float-right ml-3' />
                        <p className="font-MontserratRegular">
                            A lo largo de los años, el YouI Lab ha estado involucrado en una amplia variedad de proyectos innovadores que han abarcado tanto el desarrollo web como el backend y frontend, lo que refleja su enfoque integral en el campo de la informática. Desde sus primeros días, el laboratorio ha estado a la vanguardia de la investigación en inteligencia artificial y tecnologías emergentes, lo que le ha permitido mantener una posición líder en el ámbito de la investigación científica y tecnológica.
                        </p>
                        
                    </div>

                </div>
            </div>

            <Cards />


            <div className="md:mr-4 mt-4">
                <div className="content">
                    <div className="title_team pb-10">
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
