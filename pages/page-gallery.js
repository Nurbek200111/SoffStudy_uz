import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PortfolioFilter from '../components/elements/PortfolioFilter';
import Layout from '../components/layout/Layout';
import Brand from '../components/slider/Brand';
import Testimonial from '../components/slider/Testimonial';
import Gallery1 from '/repositories/GalleryRepository'
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolio = () => {
    const [galleryImg, setGalleryImg] = useState([])
    const [galleryImg1, setGalleryImg1] = useState([])

    useEffect(() => {

        axios.get("http://199.192.23.189/swagger/galeriya/")
            .then(ress => {
                setGalleryImg(ress.data)
                setGalleryImg1(ress.data[0].data);
            })

    }, [])

    function takePhoto(val) {
        val.src = window.URL.createObjectURL(val.files[0])
        src = val.src
    }

    return (
        <>
            <Head>
                <title>
                    Genz - Portfolio
                </title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-70 mb-50">
                                    {
                                        galleryImg.map(item => {
                                            return (
                                                <>
                                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">{item.title}</h2>
                                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">{item.description}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                <div className="gallery row mt-70 mb-50">
                                    {
                                        galleryImg1.map(item => {
                                            console.log("salom");
                                            return (
                                                <>
                                                   
                                                        <div class="col-sm-4 mt-3">
                                                            <div class="card ">
                                                                <div class="card-body d-flex flex-column align-items-center">
                                                                    <img src={item.img_url} alt="rasm yo`q" /> 
                                                                    <h5 class="card-title">{item.name}</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                    )
                                        })
                                    }




                                                </div >
                            </div>
                            </div>
                        </div>
                    </div>

            </Layout>
        </>
    );
};

export default Portfolio;