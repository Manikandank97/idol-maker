import React from 'react';
import BrandLogo from '../assets/images/IM-logo.jpg';
// import BottomMenuImg from '../assets/images/img-bottom-menu.jpg';

const HeaderMenu = () => {
    return (
        <>
            <div classNameName="idolMaker-header-section">
                <div classNameName="idolMaker-header">
                    <div className="idolMaker-sticky-header">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-md-3">
                                    <div>
                                        <a href="/">
                                            <img src={BrandLogo} alt="" height="70px" width="100px" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 position-static">
                                    <div className="idolMaker-idolMaker-main-menu-container">
                                        <div className="idolMaker-main-menu">
                                            <nav className="idolMaker-desktop-menu">
                                                <ul>
                                                    <li className="active"><a href="/">HOME </a>                                                    </li>
                                                    <li className="static"><a href="/">SCULPTURES</a>
                                                    </li>
                                                    <li><a href="/">IDOL <i className="fa fa-angle-down"></i></a>
                                                        <ul className="dropdown">
                                                            <li><a href="/">Brass <i className="fa fa-angle-right"></i></a>
                                                                <ul className="dropdown">
                                                                    <li><a href="/">Brass Silai 1</a></li>
                                                                    <li><a href="/">Brass Silai 2</a></li>
                                                                    <li><a href="/">Brass Silai 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="/">Statues <i className="fa fa-angle-right"></i></a>
                                                                <ul className="dropdown">
                                                                    <li><a href="/">Statue 1</a></li>
                                                                    <li><a href="/">Statue 2</a></li>
                                                                    <li><a href="/">Statue 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="/">Pancha Loga's <i className="fa fa-angle-right"></i></a>
                                                                <ul className="dropdown">
                                                                    <li><a href="/">Pancha Loga 1</a></li>
                                                                    <li><a href="/">Pancha Loga 2 </a></li>
                                                                    <li><a href="/">Pancha Loga 3 </a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/">ABOUT US</a></li>
                                                    <li><a href="/">CONTACT US</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="idolMaker-header-wrapper">
                                        <div className="idolMaker-header-section">
                                            <ul className="nav justify-content-end">
                                                <li>
                                                    <a href="/" className="offcanvas-btn">
                                                        <i className="fa fa-search"></i>
                                                    </a>
                                                </li>
                                                <li className="idolMaker-user-hover">
                                                    <a href="/">
                                                        <i className="fa fa-user"></i>
                                                    </a>
                                                    <ul className="dropdown-list">
                                                        <li><a href="/">login</a></li>
                                                        <li><a href="/">register</a></li>
                                                        <li><a href="/">my account</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="fa fa-heart"></i>
                                                        <div className="idolMaker-minicart-notification-icon">0</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/" className="idolMaker-minicart-btn">
                                                        <i className="fa fa-shopping-cart"></i>
                                                        <div className="idolMaker-minicart-notification-icon">0</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="idolMaker-mobile-header-container d-lg-none d-md-block sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="idolMaker-header-mobile-view">
                                    <div className="idolMaker-mobile-brand-icon">
                                        <a href="/">
                                            <img src={BrandLogo} alt="Brand Icon" />
                                        </a>
                                    </div>
                                    <div className="idolMaker-mobile-menu-toggle-wrapper">
                                        <div className="idolMaker-mobile-mini-cart-wrap">
                                            <a href="/">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                        <div className="idolMaker-mobile-menu-cart-btn">
                                            <div className="idolMaker-cart-off-canvas-btn">
                                                <i className="fa fa-menu"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeaderMenu