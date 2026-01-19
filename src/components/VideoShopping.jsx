import React from 'react';
import { Phone } from 'lucide-react';

const VideoShopping = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#831843] via-[#db2777] to-[#ed2585] py-20 text-white text-center">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight drop-shadow-md">
                        The Ultimate In-Store Experience <br /> Via 24x7 Video Shopping
                    </h2>

                    <div className="w-24 h-1 bg-white/80 mx-auto my-8 rounded-full"></div>

                    <p className="text-lg md:text-2xl font-light mb-12 tracking-wide text-pink-50">
                        Our Stylists On Call Can Speak: <span className="font-medium">English, Hindi, Gujarati & Marathi</span>
                    </p>

                    <button className="bg-white text-[#be185d] px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-pink-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 mx-auto">
                        <Phone size={24} className="animate-pulse" />
                        Start Call Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoShopping;
