import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";

const PostFullData1 = () => {

    let Router = useRouter()
    const postFullData = Router.query.postFullData;
    console.log("salom mne postdan keldim==>  ", postFullData);




    const [filter1, setFilter1] = useState([]);
    const [projects1, setProjects1] = useState([]);
    const [auoter1, setAutor1] = useState([]);
    const [post1, setPost1] = useState([]);


    useEffect(() => {
        axios.get(`http://199.192.23.189/swagger/post_all/`)
            .then(ress => {
                setPost1(ress.data)
                ress.data.map(item => {
                    if (item.id == postFullData) {
                        setFilter1(item)
                        console.log(item);
                        setAutor1(item.authors_data[0]);
                    }
                })
            })

        axios.get(`http://199.192.23.189/swagger/categoriya/`)
            .then(ress => {
                setProjects1(ress.data[0].data)
            })
    }, [postFullData])




    return (
        <>
            <Layout>

                {(
                    <>
                        <div className="cover-home3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-1" />
                                    <div className="col-xl-10 col-lg-12">
                                        <div className="pt-30 border-bottom border-gray-800 pb-20">
                                            <div className="box-breadcrumbs">
                                                <ul className="breadcrumb">
                                                    <li>
                                                        <Link className="home" href="/">Home</Link></li>
                                                    <li>
                                                        <Link href="/blog-archive">Blog</Link></li>
                                                    <li><span>Digital Design That Will Help You Start Your Business</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row mt-50 align-items-end">
                                            {/* Aoutor */}
                                            <div className="col-lg-9 col-md-8">

                                                <h2 className="color-linear mb-30">{filter1.name}</h2>
                                                
                                                            <div className="box-author mb-20"><img src={auoter1.img_url} alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="color-gray-700">{auoter1.first_name} {auoter1.last_name}</h6><span className="color-gray-700 text-sm">{filter1.date}</span>
                                                                </div>

                                                            </div>
                                                
                                            </div>
                                            {/* Ijtimoiy Tarmoqlar */}
                                            <div className="col-lg-3 col-md-4">
                                                <div className="box-share border-gray-800">
                                                    <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                                                    <Link className="icon-media icon-fb" href="#" />
                                                    <Link className="icon-media icon-tw" href="#" />
                                                    <Link className="icon-media icon-printest" href="#" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-50">
                                            <div className="col-lg-8">
                                                <div className="content-detail border-gray-800">
                                                    <div className="mt-20 mb-20">
                                                        <img className="img-bdrd-16" src={filter1.img_url} alt={filter1.name} />
                                                    </div>
                                                    <p className="text-lg color-gray-500 mb-50">{filter1.full_data}</p>

                                                </div>


                                            </div>
                                            <div className="col-lg-4">
                                            <div className="sidebar">
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <h5 className="line-bottom">Postlar</h5>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="list-cats">


                                                                {
                                                                    post1.map(item => {
                                                                        return (
                                                                            <>
                                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                                    <div className="cat-left">
                                                                                        <div className="image-cat">
                                                                                            <Link href={`/postFullData/${item.id}`}><img src={item.img_url} alt="Genz" /></Link></div>
                                                                                        <div className="info-cat">
                                                                                            <Link className="color-gray-500 text-xl" href={`/postFullData/${item.id}`}>{item.name}</Link></div>
                                                                                    </div>
                                                                                    <div className="cat-right">
                                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href={`/postFullData/${item.id}`}>{item.count}
                                                                                            posts</Link></div>
                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sidebar">
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <h5 className="line-bottom">Categories</h5>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="list-cats">


                                                                {
                                                                    projects1.map(item => {
                                                                        return (
                                                                            <>
                                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                                    <div className="cat-left">
                                                                                        <div className="image-cat">
                                                                                            <Link href={`/postlar/${item.id}`}><img src={item.img_url} alt="Genz" /></Link></div>
                                                                                        <div className="info-cat">
                                                                                            <Link className="color-gray-500 text-xl" href={`/postlar/${item.id}`}>{item.name}</Link></div>
                                                                                    </div>
                                                                                    <div className="cat-right">
                                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href={`/postlar/${item.id}`}>{item.count}
                                                                                            posts</Link></div>
                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }



                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Layout>
        </>
    );
};



export default PostFullData1;