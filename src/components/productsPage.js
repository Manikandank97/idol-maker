import React from 'react';
import { Link } from 'react-router-dom';
import ProductImg1 from '../assets/images/product-1.jpg';
import ProductImg2 from '../assets/images/product-2.jpg';
import ProductImg3 from '../assets/images/product-3.jpg';
import ProductImg4 from '../assets/images/product-4.jpg';
import ProductImg5 from '../assets/images/product-5.jpg';
import ProductImg6 from '../assets/images/product-6.jpg';
import ProductImg7 from '../assets/images/product-7.jpg';
import ProductImg8 from '../assets/images/product-8.jpg';
import ProductImg9 from '../assets/images/product-9.jpg';
import ProductImg10 from '../assets/images/product-10.jpg';
import ProductImg11 from '../assets/images/product-11.jpg';
import ProductImg12 from '../assets/images/product-12.jpg';
import ProductImg13 from '../assets/images/product-13.jpg';
import ProductImg14 from '../assets/images/product-14.jpg';
import ProductImg15 from '../assets/images/product-15.jpg';
import ProductImg16 from '../assets/images/product-16.jpg';

const Products = () => {
    return (
        <div className="idolMaker-product-section idolMaker-product-section-space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="idolMaker-product-section-title text-center">
                            <h2>Our Products</h2>
                            {/* <p>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p> */}
                        </div>
                    </div>
                </div>
                <div className="row idolMaker-mgTop-40">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg1} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg2} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                    {/* <div className="idolMaker-products-label discount">
                                            <span>10%</span>
                                        </div> */}
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Vinayak Silai</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹6000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹7000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg3} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg4} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Perumal Silai</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹6000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹7000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg5} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg6} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Natraj Silai</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹5000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹8000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg7} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg8} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                    {/* <div className="idolMaker-products-label discount">
                                            <span>15%</span>
                                        </div> */}
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Natraj Silai </Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹3000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹5000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg9} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg10} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                    {/* <div className="idolMaker-products-label discount">
                                            <span>30%</span>
                                        </div> */}
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Amman Silai</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹8000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹9000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg11} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg12} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                    {/* <div className="idolMaker-products-label discount">
                                            <span>12%</span>
                                        </div> */}
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Amman Stone Statue</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹4000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹5000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg13} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg14} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                    {/* <div className="idolMaker-products-label discount">
                                            <span>10%</span>
                                        </div> */}
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="fa fa-heart"></i></Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-search"></i></span></Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Snake Stone Statue</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹5000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹8000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="idolMaker-products-item mt-40">
                            <figure className="idolMaker-products-thumbnail">
                                <Link to="/">
                                    <img className="idolMaker-product-price-image" src={ProductImg15} alt="product" />
                                    <img className="idolMaker-product-section-image" src={ProductImg16} alt="product" />
                                </Link>
                                <div className="idolMaker-products-badge">
                                    <div className="idolMaker-products-label new">
                                        <span>New</span>
                                    </div>
                                </div>
                                <div className="idolMaker-products-button-group">
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to wishlist">
                                        <i className="fa fa-heart"></i>
                                    </Link>
                                    <Link to="/" data-toggle="modal" data-target="#quick_view">
                                        <span data-toggle="tooltip" data-placement="left" title="Quick View">
                                            <i className="fa fa-search"></i></span>
                                    </Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="left" title="Add to Cart">
                                        <i className="fa fa-shopping-cart"></i>
                                    </Link>
                                </div>
                            </figure>
                            <div className="idolMaker-products-caption">
                                <p className="idolMaker-products-name">
                                    <Link to="/">Pancha Loga Silai</Link>
                                </p>
                                <div className="idolMaker-products-price-box">
                                    <span className="idolMaker-products-price-new">₹6000.00</span>
                                    <span className="idolMaker-products-price-old"><del>₹7000.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="idolMaker-products-view-more-btn">
                            <Link className="idolMaker-home-slide-btn idolMaker-products-btn-load-more" to="/contact-us">Get Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products