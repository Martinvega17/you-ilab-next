"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/Swiper.css';
import dataDigital from './datos/data.jsx';
import Modal from 'react-modal';
import '@/styles/Modal.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);


/* Modal.setAppElement('#root'); */

const SwiperCarousel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);
    const swiperRef = useRef(null);

    const handleViewMore = (card) => {
        setExpandedCard(card);
        setModalOpen(true);
    };



    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="swiper mySwiper swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper pb-8">
                {dataDigital.map((card) => (
                    <div key={card.id} className="card swiper-slide">
                        <div className="card__image">
                            <Image src={card.image} width={500} height={500} alt="card image" />
                        </div>

                        <div className="card__content" onClick={() => handleViewMore(card)}>
                            <span className="card__title text-center text-black font-MontserratBold">{card.name}</span>
                            <span className="card__name text-center font-MontserratRegular">{card.profession}</span>

                            {card.text.length > 100 && (
                                <button className="card__btn">View More</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalOpen}
                contentLabel="Expanded Card"
                className="modal animate-fade-down"
                overlayClassName="overlay"
                onRequestClose={closeModal}
            >
                <div className="modal-content dark:text-black">
                    {expandedCard && (
                        <>
                            <div className="modal__close-container">
                                <button
                                    className="modal-close-button"
                                    onClick={() => setModalOpen(false)}
                                >
                                    X
                                </button>
                            </div>
                            <div className="card__image">
                                <Image src={expandedCard.image} width={500} height={500} alt="card image" />
                                <div className="modal__links-container">
                                    {expandedCard.cv && (
                                        <Link href={expandedCard.cv} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFile} style={{ color: "#0077B5" }} className="icon" />
                                        </Link>
                                    )}
                                    {expandedCard.email && (
                                        <Link href={`mailto:${expandedCard.email}`}>
                                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#0077B5" }} className="icon" />
                                        </Link>
                                    )}
                                    {expandedCard.linkedin && (
                                        <Link href={expandedCard.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} className="icon" />
                                        </Link>
                                    )}
                                    {expandedCard.github && (
                                        <Link href={expandedCard.github} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} style={{ color: "#171515" }} className="icon" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="card__content">
                                <span className="card__name font-MontserratBold text-center">
                                    {expandedCard.name}
                                </span>

                                <span className="card__title dark:text-black text-center font-MontserratRegular">
                                    {expandedCard.profession}
                                </span>

                            </div>
                            <p className="card__text dark:text-black mx-auto font-MontserratRegular">{expandedCard.text}</p>

                        </>
                    )}
                </div>
            </Modal>


        </section>
    );
};

export default SwiperCarousel;
