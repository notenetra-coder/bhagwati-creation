import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, ArrowLeft } from 'lucide-react';

import vid1 from '../assets/carousel-video-1.mp4';
import vid2 from '../assets/carousel-video-2.mp4';
import vid3 from '../assets/carousel-video-3.mp4';
import vid4 from '../assets/carousel-video-4.mp4';
import vid5 from '../assets/carousel-video-5.mp4';
import vid6 from '../assets/carousel-video-6.mp4';

const reelsData = [
    {
        id: 1,
        video: vid1,
        title: "Straight-cut Velvet Tunic",
        price: "Rs. 6,250.00",
        originalPrice: "Rs. 8,500.00"
    },
    {
        id: 2,
        video: vid2,
        title: "Silk Collection",
        price: "Rs. 5,850.00",
        originalPrice: ""
    },
    {
        id: 3,
        video: vid3,
        title: "Pure Mul Mul Soft Cotton",
        price: "Rs. 4,350.00",
        originalPrice: ""
    },
    {
        id: 4,
        video: vid4,
        title: "New Arrivals Short Kurti",
        price: "Rs. 4,850.00",
        originalPrice: "Rs. 5,500.00"
    },
    {
        id: 5,
        video: vid5,
        title: "Unstitched Mul Cotton",
        price: "Rs. 4,250.00",
        originalPrice: ""
    },
    {
        id: 6,
        video: vid6,
        title: "Stitched Long Crochet",
        price: "Rs. 4,650.00",
        originalPrice: ""
    }
];

const ReelCard = ({ data }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.error("Autoplay fail:", e));
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to start (thumbnail view)
            setIsPlaying(false);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div
            className="relative flex flex-col group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Card Container - Fixed Aspect Ratio */}
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-gray-200">
                <video
                    ref={videoRef}
                    src={data.video}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />

                {/* Gradient Overlay - Always present at bottom for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Mute Button (Top Right) */}
                <button
                    onClick={toggleMute}
                    className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                {/* Play Icon (Center - hidden when playing) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <Play className="text-white drop-shadow-lg" size={48} fill="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                </div>
            </div>

            {/* Product Info - Below the card (Like a catalog) or Overlay (Like Reels) - User asked for match. 
                Common 'Shop the Look' design is overlay. 
            */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg leading-tight mb-1 drop-shadow-md text-white/95 truncate">
                    {data.title}
                </h3>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-base tracking-wide">{data.price}</span>
                    {data.originalPrice && (
                        <span className="text-xs text-white/70 line-through">{data.originalPrice}</span>
                    )}
                </div>

                {/* 'Shop Now' Button appearing on hover */}
                <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-300 mt-0 group-hover:mt-3">
                    <button className="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const InstagramReels = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-rose-500 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-3">
                        Follow us @bhagwati_creations01
                    </p>
                    <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
                        Shop Latest Collection
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                        Be the first to explore our brand-new arrivals, crafted just for you.
                    </p>
                </div>

                {/* Reels Slider Container */}
                <div className="relative group/slider">
                    {/* Left Arrow */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('reels-container');
                            if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 p-3 rounded-full shadow-lg text-gray-800 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-0 hidden md:block"
                        aria-label="Scroll Left"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('reels-container');
                            if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 p-3 rounded-full shadow-lg text-gray-800 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hidden md:block"
                        aria-label="Scroll Right"
                    >
                        <ArrowRight size={24} />
                    </button>

                    {/* Scrollable Row */}
                    <div
                        id="reels-container"
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reelsData.map((reel) => (
                            <div key={reel.id} className="min-w-[280px] md:min-w-[320px] snap-center">
                                <ReelCard data={reel} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="mt-16 text-center">
                    <a
                        href="https://www.instagram.com/bhagwati_creations01/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-medium uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-gray-800 transition-all duration-300 rounded-sm"
                    >
                        View More on Instagram <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default InstagramReels;
