import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from 'axios';

const PostDetails = () => {




    const router = useRouter();
    const postData = router.query.postData;

    const [dataItem1, setDataItem1] = useState([])
    const [dataName2, setDataName2] = useState([])

    useEffect(() => {
        axios.get(`http://199.192.23.189/swagger/post_categoriya/${postData}`)
            .then(ress => {
                setDataItem1(ress.data);
            })

        axios.get(`http://199.192.23.189/swagger/categoriya/`)
            .then(ress => {
                let a = []
                ress.data[0].data.map(item => {
                    if (item.id == postData) {
                        a.push(item)
                        setDataName2(a)
                    }
                })

            })

            .catch(err => {
                let a = []
                ress.data[0].data.map(item => {
                    if (item.id == postData) {
                        a.push(item)
                        setDataName2(a)
                    }
                })

            })

    }, [])




    return (
        <>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            {(dataName2.length > 0) ? (
                                <div className="col-xl-10 col-lg-12">
                                    <div className="row align-items-end mt-50">
                                        <div className="col-lg-7 mb-20">
                                            <div className="d-inline-block position-relative">
                                                <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">{dataName2[0].name}</h1><span className="btn btn-linear-small btn-number-arts">{dataItem1.length} articles</span>
                                            </div>
                                            <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.</p>
                                        </div>
                                        <div className="col-lg-5 mb-20 text-start text-lg-end">
                                            <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                                <ul className="breadcrumb">
                                                    <li><Link className="home" href="/">Home</Link></li>
                                                    <li><Link href="/blog-archive">Blog</Link></li>
                                                    <li><span>Travel Tips</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom border-gray-800 mt-10 mb-30" />
                                        </div>
                                    </div>
                                    <div className="mt-50 mb-50">
                                        <div className="row mt-50 mb-10">

                                            {
                                                dataItem1.map((item, i) => {
                                                    return (
                                                        <div className="col-lg-4" key={i}>
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
                                                })}
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
                                    <div className="mb-70" />

                                </div>) : (<h3>Loading...</h3>)

                            }
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
};



export default PostDetails;