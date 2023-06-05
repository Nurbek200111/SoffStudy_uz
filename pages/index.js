import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import HotTopic from "../components/slider/HotTopic";
import Typewriter from 'typewriter-effect';

import Brand from "../components/slider/Brand";

import data from "../util/advantages";
import courses from "../util/courses";
import useLead from "/hooks/UseLead";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

import Courses from '/repositories/CoursesRepository';
import Advantages1 from '/repositories/AdvantagesRepository';


export default function Home() {
    const { nameRef, phoneRef, leadStatus, handleSubmit } = useLead()

    const [courses1, setCourses1] = useState([])
    const [courses2, setCourses2] = useState([])

    const [partners2, setPartners] = useState([])
    const [adventages1, setAdventages1] = useState([])
    const [adventages2, setAdventages2] = useState([])


    useEffect(() => {

        axios.get("http://199.192.23.189/swagger/advantages/")
            .then(ress => {
                setAdventages1(ress.data)
                setAdventages2(ress.data[0].data)
            })




        axios.get("http://199.192.23.189/swagger/courses/")
            .then(data => {
                setCourses1(data.data)
                setCourses2(data.data[0].data)
            })

    }, [])





    return (
        <>
            <Head>
                <title>Soff Study - Zamonaviy kasblar o'quv markazi</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="banner">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 pt-sm-100">
                                            <span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">
                                                Assalomu alaykum! Saytimizga Hush kelibsiz.
                                            </span>
                                            <h2 className="color-gray-50 mt-20 wow animate__animated animate__fadeInUp">
                                                Kasblarni
                                                {/* <Link className="typewrite color-linear" href="#" data-period={3000} data-type="[ &quot;Brian Clark&quot;, &quot;Designer&quot;, &quot;Creator&quot; ]" /> */}
                                            </h2>
                                            <h2 className="color-gray-50 wow animate__animated animate__fadeInUp">
                                                <Typewriter
                                                    options={{
                                                        wrapperClassName: " color-linear",
                                                        strings: ['"Soff Study"da', 'Tajribalilardan', 'Real loyihalar bilan'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </h2>
                                            <h2 className="color-gray-50 mb-20 wow animate__animated animate__fadeInUp">
                                                o'rganing
                                            </h2>
                                            {/* <div className="row">
                                                <div className="col-lg-9">
                                                    <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                                                        Maqsad, aniq! O'quvchilarning natijasiga qaratilgan. O'z ustida ishlab sabr qila oladiganlargina
                                                        "Soff Study" bilan o'z yoqtirgan yo'nalishida ish joyini topadi.</p>
                                                </div>
                                            </div> */}
                                            <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">

                                                {
                                                    (leadStatus) &&
                                                    <span className="text-sm-bold text-success color-gray-600 wow animate__animated animate__fadeInUp">
                                                        <i className="fi fi-rr-paper-plane"> </i> So'rovingiz qabul qilindi, biz siz bilan tez orada bog'lanamiz.
                                                    </span>
                                                }

                                                <div className="inner-subscriber bg-gray-800">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="d-flex justify-content-between mb-3 mt-2">
                                                            <input ref={nameRef} required className="input-sybscriber" type="text" placeholder="Ismingiz" />
                                                            <input ref={phoneRef} maxLength='9' minLength='9' required className="input-sybscriber" type="text" placeholder="Telefoningiz" />
                                                        </div>
                                                        <button type="submit" className="btn btn-linear w-100">Ma'lumot olish<i className="fi-rr-arrow-small-right" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <div className="banner-img position-relative wow animate__animated animate__fadeIn"><img src="assets/imgs/page/homepage/Zufarbek Abdurahmonov Image 2.png" alt="Genz" />
                                                <div className="pattern-1"><img src="assets/imgs/template/soff study logo.png" alt="Genz" />
                                                </div>
                                                <div className="pattern-2"><img src="assets/imgs/template/pattern-2.svg" alt="Genz" />
                                                </div>
                                                <div className="pattern-3"><img src="assets/imgs/template/pattern-3.svg" alt="Genz" />
                                                </div>
                                                <div className="pattern-4"><img src="assets/imgs/template/pattern-4.svg" alt="Genz" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-70">
                                    <div className="box-topics border-gray-800 bg-gray-850 ">
                                        <h6 className="color-gray-50 wow animate__animated animate__fadeInUp">
                                            <Typewriter
                                                options={{
                                                    wrapperClassName: " color-linear",
                                                    strings: [" Maqsad, aniq! O'quvchilarning natijasiga qaratilgan. O'z ustida ishlab sabr qila oladiganlargina \"Soff Study\" bilan birgalikda o'z maqsadiga erishadi. Bunga biz ishonamiz va tajribamizdan ham o'tkazdik!"],
                                                    autoStart: true,
                                                    loop: false,
                                                    delay: 40,
                                                    deleteSpeed: Infinity
                                                }}
                                            />
                                        </h6>
                                        {/* <HotTopic /> */}
                                    </div>
                                </div>


                                {/* adventages */}
                                {
                                    adventages1.map(item => {
                                        return (
                                            <>
                                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                                                    {item.title}
                                                </h2>
                                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                                    {item.description}
                                                </p>

                                            </>
                                        )
                                    })
                                }


                                <div className="row mt-70 soff__card">
                                    {
                                        adventages2.map((item, index) => {
                                            return (
                                                <div key={index} className="col-lg-4 wow animate__animated animate__fadeIn">
                                                    <div className="card-blog-1 hover-up">
                                                        <div className="card-image mb-20">
                                                            {/* <Link className="post-type" href="/blog-archive" /> */}
                                                            <Link href={`/afzalliklar/${item.name}`}>
                                                                <img src={item.img_url} alt={item.img_url} />
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link href={`/afzalliklar/${item.name}`}>
                                                                <h4 className="color-white mt-20">
                                                                    {item.name}
                                                                </h4>
                                                            </Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <Link key={index} className="color-gray-700 text-sm" href="">#{item.key_words} </Link>
                                                                </div>
                                                                <div className="col-5 text-end">
                                                                    <Link className="readmore color-gray-500 text-sm" href={`/afzalliklar/${item.name}`}>
                                                                        <span>Batal</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* courses */}
                                {
                                    courses1.map(item => {
                                        return (
                                            <>
                                                <h2 className="color-linear d-inline-block mt-20 mb-10 wow animate__animated animate__fadeInUp">
                                                    {item.title}
                                                </h2>

                                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                                    {item.description}
                                                </p>
                                            </>
                                        )
                                    })
                                }


                                <div className="row mt-70 mb-50">
                                    {
                                        courses2.map((item) => {
                                            return (
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                                    <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0s">
                                                        <div className="card-image"><Link href="/blog-archive"><img src={item.img_url} alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link className="color-gray-500" href="/blog-archive">{item.name}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>


                                {/* partners */}
                                <h2 className="color-linear d-inline-block mt-20 mb-10 wow animate__animated animate__fadeInUp">
                                                   Hamkorlarimiz
                                                </h2>

                                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                                    Bizni qo'lab-quvvatlashda tavom eting!!!
                                                </p>
                                <div className="row mt-70 mb-50">
                                    <Brand />
                                </div>

                                {/* <div className="row mt-70">
                                    <div className="col-lg-8">
                                        <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
                                        <p className="text-lg color-gray-500">Don't miss the latest trends</p>
                                        <div className="box-list-posts mt-70">
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-1.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-2.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-3.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-4.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                <div className="card-image hover-up"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-news-5.jpg" alt="Genz" /></Link>
                                                </div>
                                                <div className="card-info"><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link><Link href="/single-sidebar">
                                                    <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working from Home
                                                        as a Freelancer</h4>
                                                </Link>
                                                    <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello
                                                        and bound and the and bland moral misheard roadrunner flapped lynx far
                                                        that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                            Lifestyle</Link></div>
                                                        <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <nav className="mb-50">
                                            <ul className="pagination">
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left" /></Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><Link className="page-link" href="#">1</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="#">3</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><Link className="page-link" href="#">...</Link></li>
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><Link className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right" /></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="sidebar">
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Popular Posts</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-posts">
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Creating is a privilege but it’s
                                                                    also a gift</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Being unique is better than being
                                                                    perfect</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Every day, in every city and town
                                                                    across the country</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Your voice, your mind, your story,
                                                                    your vision</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Your voice, your mind, your story,
                                                                    your vision</h6>
                                                            </Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Last Comment</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-comments">
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                excited dear hello and bound and the and bland moral misheard
                                                                roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane
                                                                    Cooper</span><span className="color-gray-700 text-xs">15
                                                                        April 2022</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                excited dear hello and bound and the and bland moral misheard
                                                                roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen
                                                                    Doe</span><span className="color-gray-700 text-xs">15 April
                                                                        2022</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one
                                                                excited dear hello and bound and the and bland moral misheard
                                                                roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara
                                                                    Cartland</span><span className="color-gray-700 text-xs">15
                                                                        April 2022</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar"><Link href=""><img src="assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                                    <h6 className="color-gray-700">Follow us on instagram</h6>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="row mt-30 mb-10">
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link>
                                                        </div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                            <Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
