import React from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import saleBg from '../assets/winter_sale_bg.png';

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden py-12 md:py-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${saleBg})`, backgroundColor: '#fdf2f8' }} // Fallrback color
        >
            <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-12">

                {/* Images Container - Arches */}
                <div className="flex justify-center items-end gap-4 md:gap-6 lg:w-1/2">
                    {/* Image 1 - Left Arch */}
                    <div className="w-28 md:w-40 lg:w-48 h-64 md:h-80 lg:h-96 rounded-t-[100px] overflow-hidden border-2 border-white/50 shadow-xl transform translate-y-4">
                        <img src={hero1} alt="Ethnic Wear" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>

                    {/* Image 2 - Center Arch (Taller) */}
                    <div className="w-32 md:w-48 lg:w-56 h-72 md:h-96 lg:h-[28rem] rounded-t-[120px] overflow-hidden border-2 border-white/80 shadow-2xl z-10 -mt-8">
                        <img src={hero2} alt="Wedding Collection" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>

                    {/* Image 3 - Right Arch */}
                    <div className="w-28 md:w-40 lg:w-48 h-64 md:h-80 lg:h-96 rounded-t-[100px] overflow-hidden border-2 border-white/50 shadow-xl transform translate-y-4">
                        <img src={hero3} alt="Festive Look" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left text-gray-800 font-serif">
                    <h2 className="italic text-4xl md:text-5xl lg:text-6xl text-[#d81159] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Winter Sale</h2>
                    <p className="uppercase tracking-[0.3em] text-sm md:text-base text-gray-600 mb-6 font-sans">Looks at Special Prices!</p>

                    <div className="flex flex-col items-center lg:items-start mb-8">
                        <div className="flex items-baseline gap-2 text-[#d81159] font-bold leading-none">
                            <span className="text-xl font-sans">GET FLAT</span>
                            <span className="text-7xl md:text-8xl lg:text-9xl">20</span>
                            <div className="flex flex-col text-2xl md:text-3xl leading-none">
                                <span>%</span>
                                <span>OFF</span>
                            </div>
                        </div>
                        <div className="bg-white/80 px-6 py-2 rounded-full mt-4 border border-[#d81159]/20 shadow-sm backdrop-blur-sm">
                            <span className="text-gray-600 font-medium font-sans">Use Code: </span>
                            <span className="text-[#d81159] font-bold tracking-wider font-sans">SALE20</span>
                        </div>
                    </div>

                    <button className="bg-[#d81159] text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg font-sans">
                        Shop Now
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
