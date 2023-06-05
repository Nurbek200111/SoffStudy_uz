import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Brand = () => {

    // const data = [
    //     {
    //         img: "agon.svg",
    //     },
    //     {
    //         img: "mon.svg",
    //     },
    //     {
    //         img: "fig.svg",
    //     },
    //     {
    //         img: "flow.svg",
    //     },
    //     {
    //         img: "evara.svg",
    //     },
    // ];

    const [data, setData] =  useState([])

    useEffect(()=> {
        axios.get("http://199.192.23.189/swagger/partners/")
        .then(ress => {
            setData(ress.data);
        })

    },[])


    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper pt-5"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <a href="#"><img src={`${item.img_url}`} alt={`${item.name}`} style={{
                            height: 100,
                            borderRadius: 10
                        } } /></a>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Brand;

