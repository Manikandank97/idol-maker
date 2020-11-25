import React from 'react'
import PaymentLogo from '../assets/images/payment-pic.png';

const Footer = () => {
    return (
        <>
            <div className="idolMaker-footer-container">

                <div className="idolMaker-footer-widget-section">
                    <div className="container">
                        <div className="idolMaker-footer-widget-inner-section idolMaker-product-section-space">
                            <div className="row idolMaker-mgBot-30">
                                <div className="col-lg-5 col-md-6 col-sm-8">
                                    <div className="idolMaker-footer-widget-inner-item mb-30">
                                        <div className="idolMaker-footer-widget-inner-item-title">
                                            <h5>Contact</h5>
                                        </div>
                                        <ul className="idolMaker-footer-widget-body-section idolMaker-footer-accout-widget">
                                            <li className="idolMaker-footer-address">
                                                <em><i className="fa fa-map-marker"></i></em>
                                                Main Road, Melpattampakkam, Panruti - 607104.
                                            </li>
                                            <li className="idolMaker-footer-email">
                                                <em><i className="fa fa-envelope"></i>Mail us: </em>
                                                <a href="mailto:s.dhinu90@gmail.com">s.dhinu90@gmail.com</a>
                                            </li>
                                            <li className="idolMaker-footer-phone">
                                                <em><i className="fa fa-phone"></i> Phones: </em>
                                                <a href="tel:(+91)9788271299">(+91) 9788271299</a>
                                            </li>
                                        </ul>
                                        <div className="idolMaker-footer-payment-method">
                                            <img src={PaymentLogo} alt="payment method" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-4">
                                    <div className="idolMaker-footer-widget-inner-item mb-30">
                                        <div className="idolMaker-footer-widget-inner-item-title">
                                            <h5>categories</h5>
                                        </div>
                                        <ul className="idolMaker-footer-widget-body-section">
                                            <li><a href="/">Brass</a></li>
                                            <li><a href="/">Silver</a></li>
                                            <li><a href="/">Stone</a></li>
                                            <li><a href="/">Pancha Loga's</a></li>
                                            <li><a href="/">Statues</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="idolMaker-footer-widget-inner-item mb-30">
                                        <div className="idolMaker-footer-widget-inner-item-title">
                                            <h5>information</h5>
                                        </div>
                                        <ul className="idolMaker-footer-widget-body-section">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">About Us</a></li>
                                            <li><a href="/">Contact Us</a></li>
                                            <li><a href="/">Exchanges</a></li>
                                            <li><a href="/">Shipping</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
                                    <div className="idolMaker-footer-widget-inner-item mb-30">
                                        <div className="idolMaker-footer-widget-inner-item-title">
                                            <h5>Quick Links</h5>
                                        </div>
                                        <ul className="idolMaker-footer-widget-body-section">
                                            <li><a href="/">Store Location</a></li>
                                            <li><a href="/">My Account</a></li>
                                            <li><a href="/">Orders Tracking</a></li>
                                            <li><a href="/">Size Guide</a></li>
                                            <li><a href="/">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="idolMaker-footer-bottom-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 order-2 order-md-1">
                                <div className="idolMaker-footer-bottom-copyright-text">
                                    <p>Copyright ©All Right Reserved.</p>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2">
                                <div className="idolMaker-footer-bottom-social-link">
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-linkedin"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;