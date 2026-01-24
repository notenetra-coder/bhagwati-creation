import React, { useState, useEffect } from 'react';
import heroSlide1 from '../assets/hero_slide_1.png';
import heroSlide2 from '../assets/hero_slide_2.png';
import heroSlide3 from '../assets/hero_slide_3.jpg';

const slides = [
    {
        id: 1,
        image: heroSlide1,
        link: '/category/fabric-collection',
        buttonText: "Explore Fabrics"
    },
    {
        id: 2,
        image: heroSlide2,
        link: '/category/festive-collection',
        buttonText: "Shop Festive"
    },
    {
        id: 3,
        image: heroSlide3,
        link: '/category/wedding-collection',
        buttonText: "Wedding Special"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds for these detailed images
        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative w-full overflow-hidden bg-gray-50">
            {/* Aspect Ratio Container - using a roughly common web banner aspect ratio or responsive */}
            <div className="relative w-full aspect-[16/7] md:aspect-[21/9] lg:aspect-[3/1] min-h-[400px] md:min-h-[500px]">

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

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`transition-all duration-300 shadow-sm border border-white/50 rounded-full h-2 md:h-3
                            ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80 w-2 md:w-3'}
                        `}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

            {/* Navigation Arrows (Optional but good for 2 slides) */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all text-white hover:text-gray-900 hidden md:block"
                onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all text-white hover:text-gray-900 hidden md:block"
                onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

        </section>
    );
};
export default Hero;
