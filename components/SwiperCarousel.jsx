"use client"
import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/Swiper.css';
import dataDigital from '../components/data';
import Modal from 'react-modal';
import '@/styles/Modal.css';
import Image from 'next/image';

import cv from '@/assets/icons/perfil-cv.png'
import ln from '@/assets/icons/perfil-linkedin.png'
import email from '@/assets/icons/perfil-email.png'
import gh from '@/assets/icons/perfil-github.svg'

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

    return (
        <section className="swiper mySwiper swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
                {dataDigital.map((card) => (
                    <div key={card.id} className="card swiper-slide">
                        <div className="card__image">
                            <Image src={card.image} alt="card image" />
                        </div>

                        <div className="card__content" onClick={() => handleViewMore(card)}>
                            <span className="card__title text-center text-black">{card.name}</span>
                            <span className="card__name text-center font-latoBold">{card.profession}</span>

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
                className="modal"
                overlayClassName="overlay"
            >
                <div className="modal-content dark:text-black">
                    {expandedCard && (
                        <>
                            <button
                                className="modal-close-button"
                                onClick={() => setModalOpen(false)}
                            >
                                X
                            </button>
                            <div className="card__image">
                                <Image src={expandedCard.image} alt="card image" />
                            </div>
                            <div className="card__content">
                                <span className="card__title dark:text-black">
                                    {expandedCard.profession}
                                </span>
                                <span className="card__name font-bold">{expandedCard.name}</span>
                                <p className="card__text dark:text-black">{expandedCard.text}</p>
                            </div>
                            <div className="modal__links-container">
                                {expandedCard.cv && (
                                    <a href={expandedCard.cv} target="_blank" rel="noopener noreferrer">
                                        <Image src={cv} alt="cv" />
                                    </a>
                                )}
                                {expandedCard.email && (
                                    <a href={`mailto:${expandedCard.email}`}>
                                        <Image src={email} alt="email" />
                                    </a>
                                )}
                                {expandedCard.linkedin && (
                                    <a href={expandedCard.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Image src={ln} alt="linkedin" />
                                    </a>
                                )}
                                {expandedCard.github && (
                                    <a href={expandedCard.github} target="_blank" rel="noopener noreferrer">
                                        <Image src={gh} alt="github" />
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </Modal>


        </section>
    );
};

export default SwiperCarousel;
