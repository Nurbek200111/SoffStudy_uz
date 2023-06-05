import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AutorID() {


    const router = useRouter();

    const autorID = router.query.autorID

    const [dataAutor1, setDataAutor1] = useState([])
    const [dataAutor2, setDataAutor2] = useState([])


    let b = []
    useEffect(() => {
        axios.get(`http://199.192.23.189/swagger/post_all/`)
            .then(ress => {
                // console.log(ress.data);
                ress.data.map(item => {
                    if (item.authors_data[0].first_name === autorID) {
                        b.push(item)
                        setDataAutor1(b)


                    }
                })
                setDataAutor2(b[0].authors_data)
            })
            .catch(err => {

                err.data.map(item => {
                    if (item.authors_data[0].first_name == autorID) {
                        console.log(item);
                        b.push(item)
                        setDataAutor1(b)



                    }
                })
                setDataAutor2(b[0].authors_data)
            })


            .finally(console.log("error"))





    }, [])



    console.log(dataAutor2, 'ssasq');
    let c;


    return (
        <>
            <Head>
                <title>
                    Genz - Author Bio
                </title>
            </Head>
            <Layout>
                <div className="banner banner-home4 bg-gray-850">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-20">
                                    {
                                        dataAutor2.length > 0 ? dataAutor2.map(item => {
                                            c = item.first_name
                                            return (
                                                <div className="box-banner-4">
                                                    <div className="banner-image"><img src={item.img_url} alt="Genz" /></div>
                                                    <div className="banner-info"><span className="text-sm-bold color-gray-600">Hello Everyone!</span>
                                                        <h3 className="color-linear d-inline-block mt-10 mb-15">I'm {item.first_name}, a lover of technology, business and experiencing new things</h3>
                                                        <div className="box-socials"><Link className="bg-gray-800 hover-up" href="#"><span className="fb" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="inst" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="snap" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="tw" /></Link></div>
                                                    </div>
                                                </div>

                                            )
                                        }):<h3>Loadingg....d...</h3>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="mt-50">
                                    <h2 className="color-linear d-inline-block mb-10">Posted by {c}</h2>
                                    <p className="text-lg color-gray-500">Exclusive author</p>
                                    <div className="row mt-50 mb-10">
                                        {

                                            dataAutor1.length > 0 ? dataAutor1.map((item, index) => {
                                                console.log(item, "nurqw");
                                                return (
                                                    <div className="col-lg-4" key={index}>
                                                        <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                            <div className="card-image mb-20">
                                                                <Link href={`/postFullData/${item.id}`} ><img src={item.img_url} style={{ height: 200, width: 400 }} alt="Genz" /></Link></div>
                                                            <div className="card-info">
                                                                <div className="row">
                                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#{item.key_words}</Link></div>
                                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 times ago</span></div>
                                                                </div><Link href={`/postFullData/${item.id}`} >
                                                                    <h5 className="color-white mt-20">{item.name}</h5></Link>
                                                                <div className="row align-items-center mt-25">
                                                                    <div className="col-7">
                                                                        <Link href={`/autor_post/${item.authors_data[0].first_name}`}>
                                                                            <div className="box-author">
                                                                                <img src={item.authors_data[0].img_url} alt="Genz" />
                                                                                <div className="author-info">
                                                                                    <h6 className="color-gray-700">{item.authors_data[0].first_name} {item.authors_data[0].last_name}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-5 text-end"><Link className="color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }) : <h3>Loading</h3>
                                        }

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
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}