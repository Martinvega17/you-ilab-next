import { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

/* Images import */
import cAire from "@/assets/projects/logo_centinela.png";
import WeNet from "@/assets/projects/logo_wenet.png";
import cSalud from "@/assets/projects/logo_centinela_salud.png";
import Muframex from "@/assets/projects/logo_muframex.png";
import hSaludable from "@/assets/projects/logo_hsaludable.png";
import juventud from "@/assets/projects/logo_juventud.png";
import csef from "@/assets/projects/logo_csef.png";
import urbis from "@/assets/projects/logo_urbis.jpg";
import bStreet from "@/assets/projects/logo_beyond_street.png";
import Enviromental from "@/assets/projects/logo_environmental.png";

let data = [
  {
    desc: "Centinela del Aire",
    img: cAire,
    disc: "Aplicación que brinda una autoevaluación inmediata sobre la enfermedad del COVID-19.",
    src: "/Projects",
    alt: "Centinela del Aire",
  },
  {
    desc: "WeNet Mexico",
    img: WeNet,
    disc: "WeNet está financiado por el programa H2020 de la UE y cuenta con el apoyo de investigadores de varios países. IPICYT representa a México al albergar WeNet MX.",
    src: "/Projects",
    alt: "WeNet Mexico",
  },
  {
    desc: "Centinela de la Salud",
    img: cSalud,
    disc: "Es una plataforma móvil de salud financiada por el You-i Lab y el Consejo Potosino de Investigación. Su objetivo es proporcionar vigilancia epidemiológica sindrómica para virus transmitidos por el aire o vectores.",
    src: "/Projects",
    alt: "Centinela de la Salud",
  },
  {
    desc: "C-SEF",
    img: csef,
    disc: "Es un proyecto que busca desarrollar un protocolo automatizado para el uso seguro y eficiente de instalaciones educativas durante COVID-19.",
    src: "/Projects",
    alt: "C-SEF",
  },
  {
    desc: "Muframex",
    img: Muframex,
    disc: "El taller busca reunir investigadores multidisciplinarios para discutir el uso de plataformas IoT en la calidad del aire interior y su impacto en la salud humana",
    src: "/Projects",
    alt: "Muframex",
  },
  {
    desc: "Horizonte Saludable",
    img: hSaludable,
    disc: "busca crear un marco para que los ciudadanos monitoreen y aborden problemas ambientales en comunidades urbanas mexicanas.",
    src: "/Projects",
    alt: "Horizonte Saludable",
  },
  {
    desc: "Juventud al Dia",
    img: juventud,
    disc: "Promover y fortalecer las habilidades tecnológicas en IA de estudiantes de educación media superior en San Luis Potosí",
    src: "/Projects",
    alt: "Juventud al Dia",
  },
  {
    desc: "Urbis",
    img: urbis,
    disc: "UrBis es una plataforma de crowdsourcing desarrollada en el You-i Lab del IPICYT para abordar problemas socio-urbanos en México.",
    src: "/Projects",
    alt: "Urbis",
  },
  {
    desc: "Beyond the Street",
    img: bStreet,
    disc: "El objetivo es utilizar el crowdsourcing móvil para motivar a jóvenes marginados a documentar su entorno socio-urbano.",
    src: "/Projects",
    alt: "Beyond the Street",
  },
  {
    desc: "Environmental Restoration Perception",
    img: Enviromental,
    disc: "Identificar entornos restaurativos en León, Guanajuato y evaluar su efecto en la restauración psicológica a través de evaluaciones móviles.",
    src: "/Projects",
    alt: "Environmental Restoration Perception",
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
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
