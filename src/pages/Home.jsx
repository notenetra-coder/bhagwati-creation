import React from 'react';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProductGrid from '../components/ProductGrid';
import VideoShopping from '../components/VideoShopping';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedCarousel />
            <ProductGrid />
            <VideoShopping />
        </>
    );
};

export default Home;
