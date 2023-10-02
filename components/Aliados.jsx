
import Slider from "react-slick";

import balviLogo from '@/assets/aliados/balvi.png';
import cemobiliLogo from '@/assets/aliados/CEMOBILI.png';
import cseLogo from '@/assets/aliados/CSE.png';
import idiapLogo from '@/assets/aliados/idiap.png';
import saludLogo from '@/assets/aliados/salud.png';
import uspLogo from '@/assets/aliados/USP.png';
import wenetLogo from '@/assets/aliados/WeNet.png';
import Image from "next/image";



const AliadosCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true, // Reproducción automática
        autoplaySpeed: 3000, // Velocidad de reproducción automática (en milisegundos)
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 325,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }
        ]
    };

    const images = [
        {
            id: 1,
            src: balviLogo,
            alt: "Balvi",
            url: "https://www.balvi.io/"
        },
        {
            id: 2,
            src: cemobiliLogo,
            alt: "Ce Mobili",
            url: "url-de-la-pagina-2"
        },
        {
            id: 3,
            src: cseLogo,
            alt: "CSE",
            url: "https://postgrad.cse.uom.lk/"
        },
        {
            id: 4,
            src: idiapLogo,
            alt: "idiap",
            url: "https://www.idiap.ch/en"
        },
        {
            id: 5,
            src: saludLogo,
            alt: "Secretaria de salud",
            url: "https://slp.gob.mx/ssalud/Paginas/Inicio.aspx"
        },
        {
            id: 6,
            src: uspLogo,
            alt: "USP",
            url: "https://www-l2ti.univ-paris13.fr/"
        },
        {
            id: 7,
            src: wenetLogo,
            alt: "WeNet",
            url: "https://www.internetofus.eu/"
        },
    ];

    return (
        <div className='ml-4 mr-0 relative'>
            <h2 className='text-center text-3xl mt-2 text-black dark:text-white'>Aliados</h2>
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <a href={image.url} target="_blank" rel="noopener noreferrer">
                            <Image src={image.src} alt={image.alt} className='w-[120px] h-[6em] grayscale hover:grayscale-0' />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AliadosCarousel;
