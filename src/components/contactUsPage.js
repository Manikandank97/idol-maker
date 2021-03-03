import React from 'react';
// import PaymentLogo from '../assets/images/payment-pic.png';

const Contact = () => {
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
                                                <em><i class="fa fa-whatsapp" aria-hidden="true"></i> Phones: </em>
                                                {/* <a href="tel:(+91)9788271299">(+91) 9788271299</a> */}
                                                <a href="https://wa.me/918668013198/">(+91) 8668013198</a>
                                            </li>
                                        </ul>
                                        {/* <div className="idolMaker-footer-payment-method">
                                            <img src={PaymentLogo} alt="payment method" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;