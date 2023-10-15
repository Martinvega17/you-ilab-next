import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import wenet from './logos/wenet.png'
import balvi from './logos/balvi.png'
import idiap from './logos/idiap.png'
import universitie from './logos/universitie.png'
import salud from './logos/salud.png'
import cse from './logos/CSE.png'

import '@/styles/slider.css';

class App extends Component {
    

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            speed: 7400,
            autoplaySpeed: 100,
            cssEase: "linear",
            arrows: false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
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
                        slidesToShow: 1,
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
        return (
            <div className="mainContainer">
                <h2 className="text-4xl text-black font-MontserratBold dark:text-white ">Aliados</h2>
                <Slider {...settings}>
                    <div className="container ">
                        <a href="https://www.internetofus.eu/" target="_blanck">
                        <Image src={wenet}  alt="" className="grayscale hover:grayscale-0 h-[6em] max-w-[200px]" />
                        </a>
                    </div>
                    <div className="container">
                        <a href="https://www.balvi.io/" target="_blanck">
                        <Image src={balvi}  alt="" className="grayscale hover:grayscale-0 h-[6em] max-w-[200px]" />
                        </a>
                    </div>
                    <div className="container">
                        <a href="https://www.idiap.ch/en" target="_blanck">
                        <Image src={idiap}  alt="" className="grayscale hover:grayscale-0 h-[6em] max-w-[200px]" />
                        </a>
                    </div>
                    <div className="container">
                        <a href="https://www.univ-spn.fr/" target="_blanck">
                        <Image src={universitie}  alt="" className="grayscale hover:grayscale-0 h-[6em] max-w-[200px]" />
                        </a>
                    </div>
                    <div className="container">
                        <a href="https://slp.gob.mx/ssalud/Paginas/Inicio.aspx" target="_blanck">
                        <Image src={salud}  alt="" className="grayscale hover:grayscale-0 h-[6em] max-w-[200px]" />
                        </a>
                    </div>
                    <div className="container">
                        <a href="https://postgrad.cse.uom.lk/" target="_blanck">
                        <Image src={cse}  alt="" className="grayscale hover:grayscale-0 h-[6em] max-w-[200px]" />
                        </a>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default App;