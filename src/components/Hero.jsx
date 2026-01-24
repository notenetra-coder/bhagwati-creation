import React, { useState, useEffect } from 'react';
import heroSlide1 from '../assets/hero_slide_1.png';

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
                <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 pointer-events-none">
                    <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-3 md:px-12 md:py-4 uppercase tracking-widest text-sm md:text-base font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl border border-white/50 pointer-events-auto">
                        {slide.buttonText}
                    </button>
                </div>
            </div>

        </section>
    );
};
export default Hero;
