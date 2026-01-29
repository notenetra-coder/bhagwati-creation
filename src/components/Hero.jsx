import React, { useState, useEffect } from 'react';
import heroSlide1 from '../assets/hero_final_v2.jpg';

const slides = [
    {
        id: 1,
        image: heroSlide1,
        link: '/category/fabric-collection',
        buttonText: "Explore Fabrics"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slide = slides[currentSlide];

    return (
        <section className="relative w-full bg-gray-50 flex items-center justify-center">
            {/* Image Container - Natural Height */}
            <div className="relative w-full">
                <img
                    src={slide.image}
                    alt="Hero Banner"
                    className="w-full h-auto object-contain max-h-screen mx-auto"
                />

                {/* Content Overlay */}

            </div>

        </section>
    );
};
export default Hero;
