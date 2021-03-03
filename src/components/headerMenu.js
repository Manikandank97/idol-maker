import React from 'react';
import { Link } from 'react-router-dom';
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
                                    <Link to="/">
                                        <img src={BrandLogo} alt="" height="70px" width="100px" />
                                    </Link>
                                </div>
                                <div className="col-md-6 position-static">
                                    <div className="idolMaker-idolMaker-main-menu-container">
                                        <div className="idolMaker-main-menu">
                                            <nav className="idolMaker-desktop-menu">
                                                <ul>
                                                    <li className="active"><Link to="/">HOME </Link>                                                    </li>
                                                    <li className="static"><Link to="/">SCULPTURES</Link>
                                                    </li>
                                                    <li><Link to="/">IDOL <i className="fa fa-angle-down"></i></Link>
                                                        <ul className="dropdown">
                                                            <li><Link to="/">Brass <i className="fa fa-angle-right"></i></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link to="/">Brass Silai 1</Link></li>
                                                                    <li><Link to="/">Brass Silai 2</Link></li>
                                                                    <li><Link to="/">Brass Silai 3</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="/">Statues <i className="fa fa-angle-right"></i></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link to="/">Statue 1</Link></li>
                                                                    <li><Link to="/">Statue 2</Link></li>
                                                                    <li><Link to="/">Statue 3</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="/">Pancha Loga's <i className="fa fa-angle-right"></i></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link to="/">Pancha Loga 1</Link></li>
                                                                    <li><Link to="/">Pancha Loga 2 </Link></li>
                                                                    <li><Link to="/">Pancha Loga 3 </Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/">ABOUT US</Link></li>
                                                    <li><Link to="/">CONTACT US</Link></li>
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
                                                    <Link to="/" className="offcanvas-btn">
                                                        <i className="fa fa-search"></i>
                                                    </Link>
                                                </li>
                                                <li className="idolMaker-user-hover">
                                                    <Link to="/">
                                                        <i className="fa fa-user"></i>
                                                    </Link>
                                                    <ul className="dropdown-list">
                                                        <li><Link to="/">login</Link></li>
                                                        <li><Link to="/">register</Link></li>
                                                        <li><Link to="/">my account</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <i className="fa fa-heart"></i>
                                                        <div className="idolMaker-minicart-notification-icon">0</div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="idolMaker-minicart-btn">
                                                        <i className="fa fa-shopping-cart"></i>
                                                        <div className="idolMaker-minicart-notification-icon">0</div>
                                                    </Link>
                                                </li>
                                            </ul>
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