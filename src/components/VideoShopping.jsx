import React from 'react';
import { Phone } from 'lucide-react';
import videoShoppingBg from '../assets/video_shopping_banner.png';

const VideoShopping = () => {
    return (
        <section
            className="relative py-28 text-white text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${videoShoppingBg})` }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 leading-tight tracking-wide">
                        The Ultimate In-Store Experience <br />
                        Via 24x7 Video Shopping
                    </h2>

                    <p className="text-sm md:text-base font-light mb-10 tracking-wider text-gray-200">
                        Our Stylists On Call Can Speak: English, Hindi, Gujarati & Marathi
                    </p>

                    <button className="bg-white text-black px-10 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.15em] hover:bg-gray-100 transition-colors duration-300">
                        Start Call Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoShopping;
