import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import HotTopic from "../components/slider/HotTopic";
import Typewriter from 'typewriter-effect';
import Brand from '../components/slider/Brand';
import data from "../util/advantages";
import courses from "../util/courses";
import useLead from "/hooks/UseLead";

export default function Home() {
    const { nameRef, phoneRef, leadStatus, handleSubmit } = useLead()

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
                                        <div className="col-12 pt-sm-100">
                                            <div className="banner-img position-relative wow animate__animated animate__fadeIn"><img style={{borderRadius: "20px"}} src="assets/imgs/page/homepage/sayt_img.jpg" alt="Genz" />
                                               
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
                                                    delay: 50,
                                                    deleteSpeed: Infinity
                                                }}
                                            />
                                        </h6>
                                        <HotTopic />
                                    </div>
                                </div>
                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                                    Qanday afzalliklarimiz bor?
                                </h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                    Avalam bor biz kurslarni shunchaki o'rgatmaymiz. Aniq dasturchi bo'lishingi va muamolarni o'z olgan bilimlaringiz bilan yecha oladigan va IT(Ayti) bozorida o'z o'rnini topa oladigan inson bo'lishingizga hissa qo'shamiz.
                                </p>
                                <div className="row mt-70 soff__card">
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <div key={index} className="col-lg-4 wow animate__animated animate__fadeIn">
                                                    <div className="card-blog-1 hover-up">
                                                        <div className="card-image mb-20">
                                                            <Link className="post-type" href="/blog-archive" />
                                                            <Link href={`/afzalliklar/${item.name}`}>
                                                                <img src={item.img_src} alt={item.img_src} />
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
                                                                    {
                                                                        item.keywords.map(keyword => {
                                                                            return (
                                                                                <Link key={keyword} className="color-gray-700 text-sm" href="">#{keyword} </Link>
                                                                            )
                                                                        })
                                                                    }

                                                                </div>
                                                                <div className="col-5 text-end">
                                                                    <Link className="readmore color-gray-500 text-sm" href={`/afzalliklar/${item.name}`}>
                                                                        <span>Batafsil</span>
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
                                <h2 className="color-linear d-inline-block mt-20 mb-10 wow animate__animated animate__fadeInUp">
                                    Bizning asosiy yo'nalishlarimiz
                                </h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                    30% nazariy, 70% amaliy darslar moslashtirilgan kurslarimiz
                                </p>
                                <div className="row mt-70 mb-50">
                                    {
                                        courses.map((item, index) => {
                                            return (
                                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                                    <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0s">
                                                        <div className="card-image"><Link href="/blog-archive"><img src={item.img} alt="Genz" /></Link></div>
                                                        <div className="card-info"><Link className="color-gray-500" href="/blog-archive">{item.title}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>


                                <h2 className="color-linear d-inline-block mt-20 mb-10 wow animate__animated animate__fadeInUp">
                                    Bizning hamkorlar
                                </h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                    Biz bilan ishonchi hamkorlik qiling...
                                </p>

                                <Brand col={6} show={6} />


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
