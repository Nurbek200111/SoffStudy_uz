import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";

const PortfolioFilter = () => {


    const [filter, setFilter] = useState([]);
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        axios.get("http://199.192.23.189/swagger/categoriya/")
            .then(ress => {
                setFilter(ress.data[0]);
                setProjects(ress.data[0].data)
            })
    }, [])



    return (
        <Layout>
            <div className="cover-home1">
                <div className="container">
                    <div className="row dislay-flex justify-content-center">
                        <div className="col-xl-10 col-lg-12">
                            <div className="mt-70">
                                <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">{filter.title}</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">{filter.description}</p>

                                <div className="mb-70"/>
                                <div className="row">
                                    {projects.map(item =>{
                                        return(

                                            <div className='col-4 ' key={item.name}>
                                                <div className="project" data-category="web motion">
                                                    <div className="item-content">
                                                        <div className="card-style-1 p-50 hover-up mb-30" data-wow-delay=".0s">
                                                            <div className="card-image">
                                                                <Link className="link-post"href={`/postlar/${item.id}`}><img src={item.img_url} style={{height:400,width: "auto" }} alt="Genz" />
                                                                    <div className="card-info card-bg-2">
                                                                        <div className="info-bottom mb-15">
                                                                            <h3 className="color-white mb-10">{item.name}</h3>
                                                                            <p className="color-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                        
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PortfolioFilter;