import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'New Arrivals', href: '#' },
        { name: 'Suit Sets', href: '#' },
        { name: 'Dresses', href: '#' },
        { name: 'Co-ords', href: '#' },
        { name: 'Jewelry', href: '#' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primaryLight shadow-md py-2' : 'bg-primary py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <div className="text-center flex-1 md:flex-none md:text-left">
                    <a href="/" className="block">
                        <img src={logo} alt="Bhagwati Creations" className="h-20 md:h-24 object-contain transition-all duration-300 transform hover:scale-105" />
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors uppercase tracking-wide ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Icons */}
                <div className={`flex items-center space-x-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                    <button className={`transition-colors ${isScrolled ? 'hover:text-primary' : 'hover:text-gray-200'}`}>
                        <Search size={20} />
                    </button>
                    <button className={`hidden md:block transition-colors ${isScrolled ? 'hover:text-primary' : 'hover:text-gray-200'}`}>
                        <Heart size={20} />
                    </button>
                    <button className={`transition-colors relative ${isScrolled ? 'hover:text-primary' : 'hover:text-gray-200'}`}>
                        <ShoppingBag size={20} />
                        <span className={`absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>0</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 border-t">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="py-3 text-sm font-medium text-gray-700 hover:text-primary border-b border-gray-100 last:border-none"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
