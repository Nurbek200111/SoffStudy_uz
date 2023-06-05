import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react";

import SwitchButton from '../elements/SwitchButton';

const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo">
                            <Link className="d-flex" href="/">
                                <img className="logo-night" alt="GenZ" src="/assets/imgs/page/logo/Soff Study white logo.png" />
                                <img className="d-none logo-day" alt="GenZ" src="/assets/imgs/page/logo/Soff Study dark logo.png" />
                            </Link>
                        </div>
                        <div className="header-nav">
                            { <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    <li className="has-children"><Link className="active" href="/">Home</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/">Homepage - 1</Link></li>
                                            <li><Link className="color-gray-500" href="/index-2">Homepage - 2</Link></li>
                                            <li><Link className="color-gray-500" href="/index-3">Homepage - 3</Link></li>
                                            <li><Link className="color-gray-500" href="/index-4">Homepage - 4</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="/page-about">About Me</Link>
                                        <ul className="sub-menu">
                                            <li><Link className="color-gray-500" href="/page-portfolio">My Portfolio</Link></li>
                                            <li><Link className="color-gray-500" href="/page-portfolio-2">My Portfolio 2</Link></li>
                                            <li><Link className="color-gray-500" href="/portfolio-details">Portfolio Details</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li className="has-children"><Link className="color-gray-500" href="#">Category</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/blog-archive">Blog Category 1</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-2">Blog Category 2</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-3">Blog Category 3</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-4">Blog Category 4</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-5">Blog Category 5</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="has-children"><Link className="color-gray-500" href="#">Single Post</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/single-sidebar">Blog Single 1</Link></li>
                                            <li><Link className="color-gray-500" href="/single-no-sidebar">Blog Single 2</Link></li>
                                            <li><Link className="color-gray-500" href="/single-center">Blog Single 3</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="has-children"><Link className="color-gray-500" href="#">Pages</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/page-about">About</Link></li>
                                            <li><Link className="color-gray-500" href="/page-author">Author posts</Link></li>
                                            <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                            <li><Link className="color-gray-500" href="/page-search">Search results</Link></li>
                                            <li><Link className="color-gray-500" href="/page-login">Login</Link></li>
                                            <li><Link className="color-gray-500" href="/page-signup">Signup</Link></li>
                                            <li><Link className="color-gray-500" href="/page-404">Page 404</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                    <li><Link className="color-gray-500" href="/page-gallery">Gallery</Link></li>
                                    <li><Link className="color-gray-500" href="/page-categories">Categories</Link></li>
                                </ul>
                            </nav> }
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right text-end">
                            <SwitchButton />
                            <Link className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow" href="/page-login">Kursga yozilish</Link>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;