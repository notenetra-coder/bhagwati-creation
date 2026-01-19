import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'New Arrivals', href: '#' },
        { name: 'Suit Sets', href: '#' },
        { name: 'Dresses', href: '#' },
        { name: 'Co-ords', href: '#' },
        { name: 'Deals', href: '#', isSale: true }, // Replaced Jewelry with Deals
    ];

    return (
        <div className="w-full relative z-50 bg-white font-sans shadow-sm">
            {/* Announcement Bar */}
            <div className="bg-[#ed2585] text-white text-center py-2 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase">
                Free Shipping on Orders Above ₹999
            </div>

            {/* Main Header - Single Line */}
            <header className="sticky top-0 bg-[#ed2585] z-50">
                <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">

                    {/* Left: Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    {/* Left: Brand Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="block">
                            <img
                                src={logo}
                                alt="Bhagwati Creations"
                                className="h-20 md:h-28 object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </a>
                    </div>

                    {/* Center: Navigation Links (Desktop) */}
                    <nav className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold uppercase tracking-wider relative group py-2
                                    ${link.isSale ? 'text-white' : 'text-white hover:text-gray-100'}
                                    transition-colors duration-300
                                `}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
                            </a>
                        ))}
                    </nav>

                    {/* Right: Icons */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <button className="text-white hover:text-gray-100 transition-colors">
                            <Search size={20} strokeWidth={2} />
                        </button>
                        <button className="hidden md:block text-white hover:text-gray-100 transition-colors">
                            <Heart size={20} strokeWidth={2} />
                        </button>
                        <button className="text-white hover:text-gray-100 transition-colors relative">
                            <ShoppingBag size={20} strokeWidth={2} />
                            <span className="absolute -top-1 -right-1 bg-white text-[#ed2585] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                    className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <span className="text-lg font-serif italic text-[#ed2585]">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-red-500">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col p-6 space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-base font-medium uppercase tracking-wide
                                    ${link.isSale ? 'text-[#ed2585]' : 'text-[#ed2585]'}
                                `}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
