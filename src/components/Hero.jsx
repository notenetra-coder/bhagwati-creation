import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import saleBg from '../assets/winter_sale_bg.png';
import weddingBg from '../assets/wedding_bg.png';
import partyBg from '../assets/party_bg.png';
import fabricBg from '../assets/fabric_collection_hero.png';

const slides = [
    {
        id: 1,
        type: 'standard',
        bgImage: saleBg,
        theme: {
            titleColor: '#d81159',
            subtitleColor: 'text-gray-600',
            buttonColor: 'bg-[#d81159]',
            offerColor: '#d81159',
            codeColor: '#d81159',
            bgColor: '#fdf2f8'
        },
        title: "Winter Sale",
        subtitle: "Looks at Special Prices!",
        offer: {
            prefix: "GET FLAT",
            value: "20",
            suffix: "% OFF"
        },
        code: "SALE20",
        images: [hero1, hero2, hero3]
    },
    {
        id: 2,
        type: 'full-banner',
        bgImage: fabricBg, // The new user provided image
        theme: {
            bgColor: '#2c1e14', // Matching the dark tone of the image likely
            buttonColor: 'bg-black'
        },
        buttonText: "Explore Fabrics"
    },
    {
        id: 3,
        type: 'standard',
        bgImage: weddingBg,
        theme: {
            titleColor: '#1e3a8a',
            subtitleColor: 'text-gray-200',
            buttonColor: 'bg-[#1e3a8a]',
            offerColor: '#1e40af',
            codeColor: '#1e40af',
            bgColor: '#eff6ff'
        },
        title: "Wedding Edit",
        subtitle: "Royal Looks for the Big Day",
        offer: {
            prefix: "FLAT",
            value: "15",
            suffix: "% OFF"
        },
        code: "WEDDING15",
        images: [hero3, hero1, hero2]
    },
    {
        id: 4,
        type: 'standard',
        bgImage: partyBg,
        theme: {
            titleColor: '#9333ea',
            subtitleColor: 'text-white',
            buttonColor: 'bg-[#9333ea]',
            offerColor: '#7e22ce',
            codeColor: '#7e22ce',
            bgColor: '#faf5ff'
        },
        title: "Party Ready",
        subtitle: "Shine All Night Long",
        offer: {
            prefix: "EXTRA",
            value: "10",
            suffix: "% OFF"
        },
        code: "PARTY10",
        images: [hero1, hero3, hero2]
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section
            className="relative w-full overflow-hidden transition-all duration-700 ease-in-out"
            style={{
                backgroundColor: slide.theme.bgColor,
                minHeight: '600px'
            }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
                style={{
                    backgroundImage: `url(${slide.bgImage})`,
                }}
            />

            <div className={`container mx-auto px-4 md:px-8 h-full relative z-10 py-12 md:py-20 flex items-center justify-center min-h-[600px] ${slide.type === 'full-banner' ? 'items-end' : ''}`}>

                {slide.type === 'standard' ? (
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full animate-in fade-in duration-500">
                        {/* Images Container - Arches */}
                        <div className="flex justify-center items-end gap-4 md:gap-6 lg:w-1/2">
                            {/* Image 1 - Left Arch */}
                            <div className="w-28 md:w-40 lg:w-48 h-64 md:h-80 lg:h-96 rounded-t-[100px] overflow-hidden border-2 border-white/50 shadow-xl transform translate-y-4">
                                <img src={slide.images[0]} alt="Side Look" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>

                            {/* Image 2 - Center Arch (Taller) */}
                            <div className="w-32 md:w-48 lg:w-56 h-72 md:h-96 lg:h-[28rem] rounded-t-[120px] overflow-hidden border-2 border-white/80 shadow-2xl z-10 -mt-8">
                                <img src={slide.images[1]} alt="Main Look" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>

                            {/* Image 3 - Right Arch */}
                            <div className="w-28 md:w-40 lg:w-48 h-64 md:h-80 lg:h-96 rounded-t-[100px] overflow-hidden border-2 border-white/50 shadow-xl transform translate-y-4">
                                <img src={slide.images[2]} alt="Side Look" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left text-gray-800 font-serif">
                            <h2
                                className="italic text-4xl md:text-5xl lg:text-6xl mb-2 transition-colors duration-500"
                                style={{ fontFamily: 'Playfair Display, serif', color: slide.theme.titleColor }}
                            >
                                {slide.title}
                            </h2>
                            <p className={`uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-sans ${slide.theme.subtitleColor}`}>
                                {slide.subtitle}
                            </p>

                            <div className="flex flex-col items-center lg:items-start mb-8">
                                <div className="flex items-baseline gap-2 font-bold leading-none" style={{ color: slide.theme.offerColor }}>
                                    <span className="text-xl font-sans">{slide.offer.prefix}</span>
                                    <span className="text-7xl md:text-8xl lg:text-9xl">{slide.offer.value}</span>
                                    <div className="flex flex-col text-2xl md:text-3xl leading-none">
                                        <span>%</span>
                                        <span>{slide.offer.suffix.replace('% ', '')}</span>
                                    </div>
                                </div>
                                <div className="bg-white/80 px-6 py-2 rounded-full mt-4 border border-opacity-20 shadow-sm backdrop-blur-sm" style={{ borderColor: slide.theme.offerColor }}>
                                    <span className="text-gray-600 font-medium font-sans">Use Code: </span>
                                    <span className="font-bold tracking-wider font-sans" style={{ color: slide.theme.codeColor }}>{slide.code}</span>
                                </div>
                            </div>

                            <button className={`${slide.theme.buttonColor} text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg font-sans`}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Full Banner Mode */
                    <div className="w-full h-full flex items-end justify-center pb-12 animate-in fade-in duration-500">
                        <button className={`${slide.theme.buttonColor} text-white px-12 py-4 uppercase tracking-widest text-base font-bold hover:scale-105 transition-transform duration-300 shadow-2xl font-sans`}>
                            {slide.buttonText}
                        </button>
                    </div>
                )}

            </div>

            {/* Carousel Indicators/Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm border border-white/50 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};
export default Hero;
