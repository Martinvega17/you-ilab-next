import { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    desc: "Centinela del Aire",
    img: '/assets/projects/centinela del aire/Centinela_del_Aire.webp',
    disc: "Aplicación que brinda una autoevaluación inmediata sobre la enfermedad del COVID-19.",
    src: "/Projects",
    alt: "Centinela del Aire",
  },
  {
    desc: "WeNet Mexico",
    img: '/assets/projects/wenet/wenet.webp',
    disc: "WeNet esWeNet, financiado por H2020 de la UE, con apoyo global, IPICYT lidera en México como anfitrión de WeNet MX.",
    src: "/Projects",
    alt: "WeNet Mexico",
  },
  {
    desc: "Centinela de la Salud",
    img: '/assets/projects/centinela de la salud/cds.webp',
    disc: "Plataforma móvil de salud financiada por You-i Lab y Consejo Potosino para vigilancia epidemiológica de virus transmitidos.",
    src: "/Projects",
    alt: "Centinela de la Salud",
  },
  {
    desc: "C-SEF",
    img: '/assets/projects/c-sef/C-SEF.webp',
    disc: "Desarrollo de protocolo automatizado seguro y eficiente para uso en instalaciones educativas durante COVID-19.",
    src: "/Projects",
    alt: "C-SEF",
  },
  {
    desc: "Muframex",
    img: '/assets/projects/muframex/Muframex.webp',
    disc: "El taller reúne expertos para debatir IoT en calidad del aire interior y su impacto en la salud.",
    src: "/Projects",
    alt: "Muframex",
  },
  {
    desc: "Horizonte Saludable",
    img: '/assets/projects/horizonte saludable/Horizonte_Saludable.webp',
    disc: "busca crear un marco para que los ciudadanos monitoreen y aborden problemas ambientales en comunidades urbanas mexicanas.",
    src: "/Projects",
    alt: "Horizonte Saludable",
  },
  {
    desc: "Juventud al Dia",
    img: '/assets/projects/juventud al dia/Juventud.webp',
    disc: "Promover y fortalecer las habilidades tecnológicas en IA de estudiantes de educación media superior en San Luis Potosí",
    src: "/Projects",
    alt: "Juventud al Dia",
  },
  {
    desc: "Urbis",
    img: '/assets/projects/juventud al dia/Juventud.webp',
    disc: "UrBis es una plataforma crowdsourcing del You-i Lab IPICYT, resuelve problemas socio-urbanos en México.",
    src: "/Projects",
    alt: "Urbis",
  },
  {
    desc: "Beyond the Street",
    img: '/assets/projects/beyond the street/Beyond_the_Street.webp',
    disc: "El objetivo es utilizar el crowdsourcing móvil para motivar a jóvenes marginados a documentar su entorno socio-urbano.",
    src: "/Projects",
    alt: "Beyond the Street",
  },
  {
    desc: "Environmental Restoration Perception",
    img: '/assets/projects/environmental/Environmental_Restoration_Perception.webp',
    disc: "Analizar entornos restaurativos en León, Guanajuato, y evaluar su efecto psicológico mediante evaluaciones.",
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
    <button
        onClick={() => arrowRef.current.slickPrev()}
        className="back"
        aria-label="Previous"
    >
        <IoIosArrowBack />
    </button>
    <button
        onClick={() => arrowRef.current.slickNext()}
        className="next"
        aria-label="Next"
    >
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
