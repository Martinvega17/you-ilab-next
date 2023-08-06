import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faRocket, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook, BsTwitter, BsTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn } from 'react-icons/fa'
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import Image from 'next/image';

const Styles = {
    footerText: 'border-b-2 border-gray-400 pb-4 leading-12 pl-4 tracking-wider font-regular'
};

const Footer = () => {
    return (
        <footer className="bg-footerBlue py-5 dark:bg-[#282948]">
            <div className="flex flex-col md:flex-row md:justify-between text-white">
            <div className="w-full md:w-1/4 md:mx-0 mb-6 md:mb-0 mr-0 md:mr-10 font-OverPass">
                    {/* Contenido de la primera columna */}
                    <h3 className={Styles.footerText + ' text-center text-xl ml-4 md:mr-10 text-white hover:underline cursor-pointer'}>YOUTH INNOVATION LABORATORY</h3>
                    <p className='mt-5 ml-0 md:ml-10 mr-10 md:mr-10 font-sans '>El You-i Lab está alojado en el Centro Nacional de Supercómputo (CNS) de San Luis Potosí, que es una instalación de investigación HPC de vanguardia que se centra en el desarrollo de proyectos industriales a gran escala. El CNS que está gestionado por el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT).</p>
                </div>
                {/* Fin de la primera columna */}
                {/* Contenido de la segunda columna */}
                <div className="w-full md:w-1/4  md:mx-0 mb-6 md:mb-0 mr-0 md:mr-10 font-OverPass">
                    <h3 className={Styles.footerText + ' text-center text-xl mr-4 md:mr-10 text-white hover:underline cursor-pointer'}>ENLACES DE INTERES</h3>
                    <ul className='md:text-center text-center mt-6 flex flex-col justify-center items-center'>
                        <li className='mb-4'>
                            <a className="nav-link text-[#91f2fe] hover:text-[#FFFCFC] hover:underline flex items-center justify-between group" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
                                CONAHCYT
                                <span className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400">
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className="h-[14px] w-[14px]" />
                                </span>
                            </a>
                        </li>
                        <li className='mb-4'>
                            <a className="nav-link text-[#91f2fe] hover:text-[#FFFCFC] hover:underline flex items-center justify-between group" href="https://www.ipicyt.edu.mx/" target="_blank" rel="noopener noreferrer">
                                IPICYT
                                <span className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400">
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className="h-[14px] w-[14px]" />
                                </span>
                            </a>
                        </li>
                        <li className='mb-4'>
                            <a className="nav-link text-[#91f2fe] hover:text-[#FFFCFC] hover:underline flex items-center justify-between group" href="https://cns.ipicyt.edu.mx/" target="_blank" rel="noopener noreferrer">
                                CNS
                                <span className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400">
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className="h-[14px] w-[14px]" />
                                </span>
                            </a>
                        </li>
                        <li className='mb-4'>
                            <a className="nav-link text-[#91f2fe] hover:text-[#FFFCFC] hover:underline flex items-center justify-between group" href="https://ipicyt.edu.mx/Biologia_Molecular/areas_biologia_molecular.php" target="_blank" rel="noopener noreferrer">
                                DBM
                                <span className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400">
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className="h-[14px] w-[14px]" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Fin  de la segunda columna */}
                {/* Contenido de la tercera columna */}
                <div className="w-full md:w-1/4  md:mx-0 mb-6 md:mb-0 mr-0 md:mr-10 font-OverPass">
                    <h3 className={Styles.footerText + ' text-center text-xl mr-4 md:mr-10 text-white hover:underline cursor-pointer'}>CONTACTO</h3>
                    <div className="mx-4 text-center mt-6">
                        <div className="text-center">
                            <p className="flex items-start justify-center mt-2 gap-4">
                                <FontAwesomeIcon icon={faRocket} className="h-6 w-6 -mr-3 flex-shrink-0" />
                                <span className="max-w-sm">
                                    Camino a la Presa San José 2055, Lomas 4a sección San Luis Potosí, 78216 SLP, México.
                                </span>
                            </p>
                            <p className="flex items-center justify-center mt-2">
                                <FontAwesomeIcon icon={faPhone} className="h-6 w-6 mr-2 flex-shrink-0" />
                                <span className="flex-shrink-0">+52 444 834 2000</span>
                            </p>
                            <p className="mb-10 flex items-center justify-center mt-2">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="h-6 w-6 mr-2 flex-shrink-0" />
                                <span className="flex-shrink-0">you-i.lab@ipicyt.edu.mx</span>
                            </p>
                        </div>
                        <h4 className="mt-4 text-xl text-center text-white">REDES SOCIALES:</h4>
                        <div className="flex space-x-3 mt-4 items-center justify-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <BsFacebook className="h-8 w-8 rounded-full inline-grid" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <BsTwitter className="h-8 w-8 rounded-full inline-grid" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <FaLinkedinIn className="h-8 w-8 rounded-full inline-grid" />
                            </a>
                            <a href="tel:+1234567890" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <BsTelephoneFill className="h-8 w-8 rounded-full inline-grid" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin de la tercera columna */}
            </div>
            <hr className="my-5" />
            <p className="text-center text-white">
                &copy; 2023 You i Lab. All rights reserved.<br />
                Powered by <b>You I Lab </b> <Image src={logo_you_i_lab} alt="You I Lab Logo" className="inline-block w-6 h-6" />
            </p>
        </footer>
    );
};

export default Footer;
