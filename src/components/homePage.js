import React from 'react';
import HeaderMenu from './headerMenu';
import BannerPage from './bannerPage';
import Products from './productsPage';
import Footer from './footerPage';


const HomePage = () => {
    return (
        <>
            <HeaderMenu />
            <BannerPage />
            <Products />
            <Footer />
        </>
    )
}

export default HomePage;