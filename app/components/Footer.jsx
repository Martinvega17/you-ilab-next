
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="bg-footerBlue py-5">
            <div className="flex flex-col md:flex-row md:justify-between text-white ">
                <div className="w-full md:w-1/3 mx-4 md:mx-0 mb-6 md:mb-0 mr-0 md:mr-10 container">
                    <h3 className='text-center text-xl mr-4 md:mr-10 text-white'>YOUTH INNOVATION LABORATORY</h3>
                    <p className='mt-5 ml-0 md:ml-10 mr-10 md:mr-10'>El You-i Lab está alojado en el Centro Nacional de Supercómputo (CNS) de San Luis Potosí, que es una instalación de investigación HPC de vanguardia que se centra en el desarrollo de proyectos industriales a gran escala. El CNS que está gestionado por el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT).</p>
                </div>
                <div className=" md:w-3/3 mx-4 md:mx-0 mb-6 md:mb-0">
                    <h3 className='mb-5 text-xl text-center text-white'>ENLACES DE INTERES</h3>
                    <ul className='md:text-center text-center'>
                        <li className='mb-4'>
                            <a className="nav-link text-white hover:text-gray-300" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">CONACYT</a>
                        </li>
                        <li className='mb-4'>
                            <a className="nav-link text-white hover:text-gray-300" href="https://www.ipicyt.edu.mx/" target="_blank" rel="noopener noreferrer">IPICYT</a>
                        </li>
                        <li className='mb-4'>
                            <a className="nav-link text-white hover:text-gray-300" href="https://cns.ipicyt.edu.mx/" target="_blank" rel="noopener noreferrer">CNS</a>
                        </li>
                        <li className='mb-4'>
                            <a className="nav-link text-white hover:text-gray-300" href="https://bit.ly/division-biologia-molecular" target="_blank" rel="noopener noreferrer">DBM</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className='text-center text-xl text-white'>CONTACTO</h3>
                    <div className="mx-4 text-center">
                    <p className='mt-5 '>
                        <FontAwesomeIcon icon={faRocket} />
                        <span className="ml-2">
                            Camino a la Presa de San José 2055, Lomas 4a Sección, <br />78216 San Luis Potosí, S.L.P., México.
                        </span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} />
                        <span> +52 444 834 2000</span>
                    </p>
                    <p className="mb-10">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                        <span className="ml-2"> you-i.lab@ipicyt.edu.mx</span>
                    </p>
                    <h4 className='mt-4 text-xl text-center text-white'>REDES SOCIALES:</h4>
                    <div className='flex space-x-3 mt-4 items-center justify-center'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                size="xl"
                                className="p-2 rounded-full inline-grid border-white border hover:bg-blue-400 hover:border-blue-600"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                size="xl"
                                className="p-2 rounded-full inline-grid border-white border hover:bg-blue-400 hover:border-blue-600"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="xl"
                                className="p-2 rounded-full inline-grid border-white border hover:bg-blue-400 hover:border-blue-600"
                            />
                        </a>
                        <a href="tel:+1234567890">
                            <FontAwesomeIcon
                                icon={faPhone}
                                size="xl"
                                className="p-2 rounded-full inline-grid border-white border hover:bg-blue-400 hover:border-blue-600"
                            />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <p className="text-center text-white">
                &copy; 2023 You i Lab. All rights reserved.<br />
                Powered by You I Lab <Image src={logo_you_i_lab} alt="You I Lab Logo" className="inline-block w-6 h-6" /> 
            </p>
        </footer>
    );
};

export default Footer;
