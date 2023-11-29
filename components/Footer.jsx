import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faRocket, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { BsTelephoneFill } from "react-icons/bs";
import Image from 'next/image';

const Styles = {
    footerText: 'border-b-2 border-gray-400 pb-4 leading-12 pl-4 tracking-wider font-regular'
};

const Footer = () => {
    return (
        <footer className="bg-footerBlue py-5 dark:bg-[#282948]">
            <div className="flex flex-col md:flex-row md:justify-between text-white lg:mx-10 2xl:mx-20 sm:mx-2 md:mx-4">
                <div className="w-full md:w-1/4 md:mx-0 mb-6 md:mb-0 mr-0 text-center md:mr-10 font-OverPass">
                    {/* Contenido de la primera columna */}
                    <h3 className={Styles.footerText + ' text-center text-xl ml-4 md:mr-10 text-white hover:underline cursor-pointer'}>YOUTH INNOVATION LABORATORY</h3>
                    <p className='mt-5 ml-0  font-sans'>El You-i Lab está alojado en el Centro Nacional de Supercómputo (CNS) de San Luis Potosí, que es una instalación de investigación HPC de vanguardia que se centra en el desarrollo de proyectos industriales a gran escala. El CNS que está gestionado por el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT).</p>
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
                                <span className="flex-shrink-0">+52 444 834 2000 ext 2117</span>
                            </p>
                            <p className="mb-10 flex items-center justify-center mt-2">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="h-6 w-6 mr-2 flex-shrink-0" />
                                <span className="flex-shrink-0">you-i.lab@ipicyt.edu.mx</span>
                            </p>
                        </div>
                        <h4 className="mt-4 text-xl text-center text-white">REDES SOCIALES:</h4>
                        <div className="flex space-x-3 mt-4 items-center justify-center">
                            <a href="https://www.facebook.com/youilab/" aria-label="logo-facebook" target="_blank" rel="noopener noreferrer" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 rounded-full inline-grid"
                                    fill="currentColor"
                                    style={{ color: "#ffffff" }}
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>

                            </a>
                            <a href="https://twitter.com/youi_lab/" aria-label="logo-twiter" target="_blank" rel="noopener noreferrer" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 rounded-full inline-grid"
                                    fill="currentColor"
                                    style={{ color: "#ffffff" }}
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="logo-linkedin" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a href="tel:+524448342000" aria-label="logo-phone" className="border-2 border-white rounded-full p-1 hover:border-blue-400 hover:bg-blue-400">
                                <BsTelephoneFill className="h-6 w-6 rounded-full inline-grid" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin de la tercera columna */}
            </div>
            <hr className="my-5" />
            <p className="text-center text-white">
                &copy; 2023 You i Lab. Todos los derechos reservados.<br />
                Powered by <b>You I Lab </b> <Image src='/assets/logos/Logo-Original.webp' width={500} height={500} alt="You I Lab Logo" className="inline-block w-10 h-10" />
            </p>
        </footer>
    );
};

export default Footer;
