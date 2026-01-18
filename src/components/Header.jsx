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
        { name: 'Jewelry', href: '#' },
    ];

    return (
        <div className="w-full z-50 bg-white">
            {/* Top Announcement Bar - Keeping the pink accent */}
            <div className="bg-primary text-white text-center py-2 text-xs md:text-sm tracking-widest font-medium uppercase">
                Free Shipping on Orders Above ₹999
            </div>

            {/* Logo Section - Scrolls away */}
            <div className="container mx-auto px-4 md:px-8 py-6 flex justify-between items-center relative">
                {/* Mobile Menu Button - Left on mobile */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Centered Logo */}
                <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <a href="/" className="block">
                        <img
                            src={logo}
                            alt="Bhagwati Creations"
                            className="h-16 md:h-24 object-contain transition-transform hover:scale-105"
                        />
                    </a>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-4 md:space-x-6 text-gray-800">
                    <button className="hover:text-primary transition-colors">
                        <Search size={22} />
                    </button>
                    <button className="hidden md:block hover:text-primary transition-colors">
                        <Heart size={22} />
                    </button>
                    <button className="hover:text-primary transition-colors relative">
                        <ShoppingBag size={22} />
                        <span className="absolute -top-1 -right-1.5 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
                    </button>
                </div>
            </div>

            {/* Navigation Bar - Sticky */}
            <header className="sticky top-0 z-50 bg-white shadow-sm border-t border-gray-100 hidden md:block">
                <div className="container mx-auto px-4 py-4 flex justify-center">
                    <nav className="flex space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white md:hidden animate-fade-in mx-4 my-20 shadow-2xl rounded-lg border border-gray-100 overflow-hidden">
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <X size={24} className="text-gray-600" />
                        </button>
                    </div>
                    <div className="flex flex-col p-6 space-y-4 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
