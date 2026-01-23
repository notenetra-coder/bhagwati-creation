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
            <InstagramReels />
            <ProductGrid title="New Arrivals" CarouselId="new-arrivals" />
            <ProductGrid
                title="Co-ords Collection"
                CarouselId="coords-collection"
                products={Array(10).fill({}).map((_, i) => ({
                    id: `coords-${i}`,
                    name: "Co-ord Set Placeholder",
                    category: "Co-ords",
                    price: "₹0",
                    image: null
                }))}
            />
            <ProductGrid
                title="Cotton Suits"
                CarouselId="cotton-suits"
                products={Array(10).fill({}).map((_, i) => ({
                    id: `cotton-${i}`,
                    name: "Cotton Suit Placeholder",
                    category: "Suits",
                    price: "₹0",
                    image: null
                }))}
            />
            <ProductGrid
                title="Mixed Collection"
                CarouselId="mixed-collection"
                products={Array(10).fill({}).map((_, i) => ({
                    id: `mixed-${i}`,
                    name: "Mixed Item Placeholder",
                    category: "Mixed",
                    price: "₹0",
                    image: null
                }))}
            />
            <ShopByCategories />
            <FeaturedCarousel />
            <VideoShopping />
        </>
    );
};

export default Home;
