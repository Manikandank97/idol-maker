import React from 'react';
import HeaderMenu from './headerMenu';
import BannerPage from './bannerPage';
import Products from './productsPage';
import Footer from './footerPage';
import Contact from './contactUsPage';


const HomePage = () => {
    const pageCheck = window.location.pathname;
    return (
        <>
            <HeaderMenu />
            {pageCheck === '/contact-us' ? <Contact /> : <><BannerPage /> <Products /></>}
            <Footer />
        </>
    )
}

export default HomePage;