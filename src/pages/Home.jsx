import React from 'react';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProductGrid from '../components/ProductGrid';
import ShopByCategories from '../components/ShopByCategories';
import InstagramReels from '../components/InstagramReels';
import VideoShopping from '../components/VideoShopping';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedCarousel />
            <ProductGrid />
            <ShopByCategories />
            <InstagramReels />
            <VideoShopping />
        </>
    );
};

export default Home;
