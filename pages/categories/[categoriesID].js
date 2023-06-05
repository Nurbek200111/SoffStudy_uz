import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import Link from "next/link";

import { useEffect, useState } from 'react';

export default function Sahifa() {
    const router = useRouter();
    const categoriesID = router.query.categoriesID;

    const [dataItem, setDataItem] = useState([])
    const [dataName, setDataName] = useState([])

    useEffect(() => {
        axios.get(`http://192.168.1.22:8000/swagger/post_categoriya/${categoriesID}`)
            .then(ress => {
                setDataItem(ress.data);
                console.log(ress.data);
            })



        axios.get(`http://192.168.1.22:8000/swagger/categoriya/`)
            .then(ress => {
                ress.data[0].data.map(dataItem1 => {
                    if (dataItem1.id == categoriesID) {
                        setDataName(dataItem1.name)
                    }
                })
            })

    }, [])




    return (
        <div>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-50">
                                    <div className="col-lg-7 mb-20">
                                        <div className="d-inline-block position-relative">
                                            <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">{dataName}</h1><span className="btn btn-linear-small btn-number-arts">36 articles</span>
                                        </div>
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
                                    
                                        {dataItem.map((item, i) => (
                                            <div className="col-lg-4" key={i}>
                                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="card-image mb-20">
                                                        <Link href={`/blog/${item.id}`} ><img src={`assets/imgs/page/travel-tip/${item.img}`} alt={`${item.name}`} /></Link></div>
                                                    <div className="card-info">
                                                        <div className="row">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#{item.key_words}</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.date}</span></div>
                                                        </div><Link href={`/postlar/${item.id}`} >
                                                            <h5 className="color-white mt-20">{item.name}</h5></Link>
                                                        <div className="row align-items-center mt-25">
                                                            <div className="col-7">
                                                                <div className="box-author">
                                                                    <img src={`assets/imgs/page/homepage1/${item.author}`} alt="Genz" />
                                                                    <div className="author-info">
                                                                        <h6 className="color-gray-700">{item.authorTitle}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                  
                                </div>
                                <div className="mb-70" />
                            
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    );
}