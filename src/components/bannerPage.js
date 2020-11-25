import React from 'react';
import HomeSlide1 from '../assets/images/home3-slide1.jpg';

const BannerPage = () => {

    let BannerSLide1 = {
        backgroundImage: `url(${HomeSlide1})`
    };

    return (
        <>
            <div className="idolMaker-slider-area-container">
                <div className="idolMaker-slider-active idolMaker-smooth-arrow-style idolMaker-smooth-arrow-style_hero idolMaker-smooth-dot-style">
                    <div className="idolMaker-hero-s1-slide">
                        <div className="idolMaker-hero-slide-dispItem_3 idolMaker-slide-bg-img" style={BannerSLide1}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="idolMaker-hero-slider-bg-content">
                                            <span>HANDCRAFTED SILAI</span>
                                            <h1>Experience </h1>
                                            <h2>All Our Sculpture Collection</h2>
                                            <a href="/" className="idolMaker-home-slide-btn">shop now</a>
                                        </div>
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

export default BannerPage