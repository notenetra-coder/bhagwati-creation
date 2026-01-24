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
        <section className="relative w-full overflow-hidden bg-gray-50">
            {/* Full Screen Container */}
            <div className="relative w-full h-screen min-h-[500px]">

                {/* Background Image with Transition */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
                    style={{
                        backgroundImage: `url(${slide.image})`
                    }}
                >
                    {/* Optional Gradient Overlay for text readability if needed, but these images are designed banners */}
                    <div className="absolute inset-0 bg-black/5 md:bg-transparent"></div>
                </div>

                {/* Content Overlay - Minimal, mainly for the button */}
                <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16 z-10 transition-opacity duration-500">
                    <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-3 md:px-12 md:py-4 uppercase tracking-widest text-sm md:text-base font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl border border-white/50">
                        {slide.buttonText}
                    </button>
                </div>
            </div>

        </section>
    );
};
export default Hero;
