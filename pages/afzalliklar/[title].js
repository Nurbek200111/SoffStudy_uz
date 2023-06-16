import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import data from "../../util/advantages";

const AdvantageDetail = () => {

    let Router = useRouter()

    const [blogPost, setBlogPost] = useState(null);

    const { title } = Router.query;

    useEffect(() => {
        setBlogPost(data.find((data) => data.name == title));
    }, [title]);


    return (
        <>
            <Layout>

                {blogPost && (
                    <>
                        <div className="cover-home3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-1" />
                                    <div className="col-xl-10 col-lg-12">
                                        <div className="row mt-50 align-items-end">
                                            <div className="col-lg-9 col-md-8">
                                                <h2 className="color-linear mb-30">{blogPost.name} </h2>
                                            </div>
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
                                                    <p className="text-xl color-gray-500">The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again. I’ve honey feeling. Caring dreamland projects noteworthy than minimal, their it oh pretty feeling may. Include pink be.</p>
                                                    <div className="mt-20 mb-20">
                                                        <img className="img-bdrd-16" src={`${blogPost.images[3]}`} alt="Genz" />
                                                    </div>
                                                    <p className="text-lg color-gray-500 mb-50">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellu s ut sit.</p>
                                                    <div className="mt-20 mb-20">
                                                        <img className="img-bdrd-16" src={`${blogPost.images[2]}`} alt="Genz" />
                                                    </div>
                                                    <h3 className="color-white mb-30">Use your headings</h3>
                                                    <p className="text-lg color-gray-500">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                                    <div className="mt-20 mb-20">
                                                        <img className="img-bdrd-16" src={`${blogPost.images[1]}`} alt="Genz" />
                                                    </div>
                                                    <p className="text-lg color-gray-500">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p>
                                                    <div className="row mt-50">
                                                        {
                                                            blogPost.images.map((blogImage, index) => {
                                                                return (
                                                                    <div key={index} className="col-lg-6">
                                                                        <img className="img-bdrd-16 mb-30" src={`${blogImage}`} alt="Genz" />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="sidebar">
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <h5 className="line-bottom">Afzalliklarimiz</h5>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="list-cats">
                                                                {
                                                                    data.map((item, index) => {
                                                                        return (
                                                                            <div key={index} className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                                <div className="cat-left">
                                                                                    <div className="image-cat">
                                                                                        <Link href={`/afzalliklar/${item.name}`}><img src={item.img_src} alt="Genz" /></Link></div>
                                                                                    <div className="info-cat">
                                                                                        <Link className="color-gray-500 text-xl" href={`/afzalliklar/${item.name}`}>{item.name}</Link></div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <Link href=""><img src="/assets/imgs/page/logo/Soff Study white logo.png" alt="Genz" /></Link>
                                                            <h6 className="color-gray-700">Bizni instagramda kuzatib boring</h6>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="row mt-30 mb-10">
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
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



export default AdvantageDetail;