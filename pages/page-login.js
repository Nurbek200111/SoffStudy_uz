import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import useLead from "/hooks/UseLead";

export default function Home() {
    const { nameRef, phoneRef, leadStatus, handleSubmit } = useLead()

    return (
        <>
            <Head>
                <title>
                    Genz - Login
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-50 pb-50">
                                    <h2 className="color-linear d-inline-block">Kursga yozililish!</h2>
                                </div>
                                <div className="box-form-login pb-50">
                                    <div className="form-login bg-gray-850 border-gray-800 text-start">
                                        {
                                            leadStatus ? (
                                                <>
                                                    <h4 className="text-center text-success mt-20 wow animate__animated animate__fadeInUp">
                                                        <i className="fi fi-rr-paper-plane"> </i>
                                                        So'rovingiz qabul qilindi, biz siz bilan tez orada bog'lanamiz.
                                                    </h4>
                                                    <p className="text-center color-gray-50 mt-20 wow animate__animated animate__fadeInUp">
                                                        Biz 9:00 dan 21:00 gacha ishlaymiz (dam olish kunlaridan tashqari)
                                                    </p>
                                                </>
                                            ) : (
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <input required name="name" ref={nameRef} className="form-control bg-gray-850 border-gray-800" type="text" placeholder="Ismingiz" />
                                                    </div>
                                                    <div className="form-group position-relative">
                                                        <input maxLength="9" required ref={phoneRef} className="form-control bg-gray-850 border-gray-800 password"
                                                            type="text"
                                                            placeholder="Telefon nomeringiz"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-linear color-gray-850 hover-up" type="submit">Yuborish</button>
                                                    </div>
                                                </form>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}