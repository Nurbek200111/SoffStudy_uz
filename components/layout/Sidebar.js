import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo border-gray-800">
                            <Link className="d-flex" href="/">
                                <img className="logo-night" alt="GenZ" src="/assets/imgs/page/logo/Soff Study white logo.png" />
                                <img className="d-none logo-day" alt="GenZ" src="/assets/imgs/page/logo/Soff Study dark logo.png" />
                            </Link>
                        </div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/">Home</Link>
                                            <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/">Homepage - 1</Link></li>
                                                <li><Link href="/index-2">Homepage - 2</Link></li>
                                                <li><Link href="/index-3">Homepage - 3</Link></li>
                                                <li><Link href="/index-4">Homepage - 4</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/#">Category</Link>
                                            <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/blog-archive">Blog Category 1</Link></li>
                                                <li><Link href="/blog-archive-2">Blog Category 2</Link></li>
                                                <li><Link href="/blog-archive-3">Blog Category 3</Link></li>
                                                <li><Link href="/blog-archive-4">Blog Category 4</Link></li>
                                                <li><Link href="/blog-archive-5">Blog Category 5</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/#">Single Post</Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/single-sidebar">Blog Single 1</Link></li>
                                                <li><Link href="/single-no-sidebar">Blog Single 2</Link></li>
                                                <li><Link href="/single-center">Blog Single 3</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                        <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link className="color-gray-500" href="/page-portfolio">Portfolio</Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link className="color-gray-500" href="/page-portfolio">My Portfolio</Link></li>
                                                <li><Link className="color-gray-500" href="/page-portfolio-2">My Portfolio 2</Link></li>
                                                <li><Link className="color-gray-500" href="/portfolio-details">Portfolio Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"} onClick={() => handleToggle(4)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/#">Pages</Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/page-about">About</Link></li>
                                                <li><Link href="/page-author">Author posts</Link></li>
                                                <li><Link href="/page-contact">Contact</Link></li>
                                                <li><Link href="/page-search">Search results</Link></li>
                                                <li><Link href="/page-login">Login</Link></li>
                                                <li><Link href="/page-signup">Signup</Link></li>
                                                <li><Link href="/page-404">Page 404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/page-contact">Contact</Link></li>
                                    </ul>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sidebar;