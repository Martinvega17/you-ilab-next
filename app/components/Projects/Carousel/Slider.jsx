import { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        desc : "Centinela del Aire",
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
        disc : "Aplicación que brinda una autoevaluación inmediata sobre la enfermedad del COVID-19.",
        src : "https://www.google.com/",
        alt : "Centinela del Aire",
    },
    {
        desc : "WeNet Mexico",
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
        disc : "WeNet está financiado por el programa H2020 de la UE y cuenta con el apoyo de investigadores de varios países. IPICYT representa a México al albergar WeNet MX.",
        src : "https://www.google.com/",
        alt : "WeNet Mexico",
    },
    {
        desc : "Centinela de la Salud",
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
        disc : "Es una plataforma móvil de salud financiada por el You-i Lab y el Consejo Potosino de Investigación. Su objetivo es proporcionar vigilancia epidemiológica sindrómica para virus transmitidos por el aire o vectores.",
        src : "https://www.google.com/",
        alt : "Centinela de la Salud",
    },
    {
        desc : "C-SEF",
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "Es un proyecto que busca desarrollar un protocolo automatizado para el uso seguro y eficiente de instalaciones educativas durante COVID-19.",
        src : "https://www.google.com/",
        alt : "C-SEF",
    },
    {
        desc : "Muframex",
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "El taller busca reunir investigadores multidisciplinarios para discutir el uso de plataformas IoT en la calidad del aire interior y su impacto en la salud humana",
        src : "https://www.google.com/",
        alt : "Muframex",
    },
    {
      desc : "Horizonte Saludable",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "busca crear un marco para que los ciudadanos monitoreen y aborden problemas ambientales en comunidades urbanas mexicanas.",
      src : "https://www.google.com/",
      alt : "Horizonte Saludable",
    },
    {
        desc : "Juventud al Dia",
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "Promover y fortalecer las habilidades tecnológicas en IA de estudiantes de educación media superior en San Luis Potosí",
        src : "https://www.google.com/",
        alt : "Juventud al Dia",
    },
    {
      desc : "Coincidencia Digital",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "Este proyecto busca estudiar los patrones de uso de las TIC entre jóvenes en la CDMX para informar políticas públicas y reducir la desigualdad social.",
      src : "https://www.google.com/",
      alt : "Coincidencia Digital",
    },
    {
      desc : "Urbis",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "UrBis es una plataforma de crowdsourcing desarrollada en el You-i Lab del IPICYT para abordar problemas socio-urbanos en México.",
      src : "https://www.google.com/",
      alt : "Urbis",
    },
    {
      desc : "SieNi - PCWO",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "El objetivo del proyecto liderado por el You-i Lab es desarrollar la plataforma CWO para delimitar cuencas hidrográficas y abordar problemáticas relacionadas con el agua.",
      src : "https://www.google.com/",
      alt : "SieNi - PCWO",
    },
    {
      desc : "Beyond the Street",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "El objetivo es utilizar el crowdsourcing móvil para motivar a jóvenes marginados a documentar su entorno socio-urbano.",
      src : "https://www.google.com/",
      alt : "Beyond the Street",
    },
    {
      desc : "Mi Casa es su Casa",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "El proyecto busca comprender el uso y percepción de los servicios de alojamiento compartido en países desarrollados y en desarrollo.",
      src : "https://www.google.com/",
      alt : "Mi Casa es su Casa",
    },
    {
      desc : "Environmental Restoration Perception",
      img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
      disc : "Identificar entornos restaurativos en León, Guanajuato y evaluar su efecto en la restauración psicológica a través de evaluaciones móviles.",
      src : "https://www.google.com/",
      alt : "Environmental Restoration Perception",
    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    autoplay : true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
