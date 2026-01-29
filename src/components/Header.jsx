import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import logo from '../assets/logo_final.png';
import LoginModal from './LoginModal';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, isLoggedIn, logout } = useShop();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'New Arrivals', href: '/category/new-arrivals' },
        { name: 'Suit Sets', href: '/category/suit-set' },
        { name: 'Dresses', href: '/category/dresses' },
        { name: 'Co-ords', href: '/category/co-ords' },
        { name: 'Deals', href: '/category/deals', isSale: true },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/category/${searchQuery.trim()}`);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <div className="w-full sticky top-0 z-50 bg-white font-sans shadow-sm">
            {/* Announcement Bar */}
            <div className={`bg-gradient-to-b from-[#1a1512] to-[#070504] text-white text-center transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-2 opacity-100'} text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase shadow-sm border-b border-white/10`}>
                Free Shipping on Orders Above ₹999
            </div>

            {/* Main Header - Single Line */}
            <header className="bg-gradient-to-b from-[#1a1512] via-[#0e0a08] to-[#070504] z-50 transition-all duration-300 shadow-2xl border-t border-white/20">
                <div className={`container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? 'h-16' : 'h-20 md:h-24'}`}>

                    {/* Left: Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    {/* Left: Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <img
                                src={logo}
                                alt="Bhagwati Creations"
                                className={`object-contain hover:scale-105 transition-all duration-500 ease-in-out ${isScrolled ? 'h-12' : 'h-20 md:h-24'}`}
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation Links (Desktop) */}
                    <nav className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
                        <Link to="/category/unstitched" className="text-sm font-semibold uppercase tracking-wider text-white hover:text-gray-100 transition-colors duration-300 relative group py-2">
                            UNSTITCHED
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>

                        {/* Catalog Dropdown */}
                        <div className="relative group py-2">
                            <button className="text-sm font-semibold uppercase tracking-wider text-white hover:text-gray-100 transition-colors duration-300 flex items-center gap-1">
                                STITCHED CATALOG
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white shadow-xl rounded-md overflow-hidden hidden group-hover:block border border-gray-100 transform origin-top transition-all duration-200 z-[60]">
                                <div className="py-2 flex flex-col">
                                    {[
                                        "Chanderi Collection",
                                        "Muslin Suits",
                                        "Organza Suits",
                                        "Silk Collection",
                                        "Co-ords",
                                        "Cotton Suits",
                                        "Party Wear",
                                        "Georgette Collection",
                                        "Pakistani Suits",
                                        "Tissue Collection",
                                        "Velvet Collection",
                                        "Handpainted Collection"
                                    ].map((item) => (
                                        <Link
                                            key={item}
                                            to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="px-6 py-3 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors text-left font-medium uppercase tracking-wide border-b border-gray-50 last:border-0"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/category/new-arrivals" className="text-sm font-semibold uppercase tracking-wider text-white hover:text-gray-100 transition-colors duration-300 relative group py-2">
                            NEW ARRIVALS
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>

                        <Link to="/category/all-collections" className="text-sm font-semibold uppercase tracking-wider text-white hover:text-gray-100 transition-colors duration-300 relative group py-2">
                            ALL COLLECTIONS
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                    </nav>

                    {/* Right: Icons */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Search Icon Trigger */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-white hover:text-gray-100 transition-colors"
                        >
                            <Search size={20} strokeWidth={2} />
                        </button>

                        {/* Profile/User Icon */}
                        <div className="relative group">
                            <button
                                className="text-white hover:text-gray-100 transition-colors py-2"
                            >
                                <User size={20} strokeWidth={2} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-full w-48 bg-white shadow-xl rounded-md overflow-hidden hidden group-hover:block border border-gray-100 transform origin-top transition-all duration-200 z-[60]">
                                <div className="py-1">
                                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Welcome</p>
                                        <p className="text-xs text-gray-400">{isLoggedIn ? "User" : "To Bhagwati Creations"}</p>
                                    </div>

                                    {!isLoggedIn ? (
                                        <button
                                            onClick={() => setIsLoginOpen(true)}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors"
                                        >
                                            Login / Sign Up
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                logout();
                                                alert("Logged out successfully");
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors"
                                        >
                                            Logout
                                        </button>
                                    )}

                                    <button
                                        onClick={() => isLoggedIn ? navigate('/orders') : (alert("Please Login to view My Orders"), setIsLoginOpen(true))}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors"
                                    >
                                        My Orders
                                    </button>

                                    <button
                                        onClick={() => isLoggedIn ? navigate('/addresses') : (alert("Please Login to view Saved Addresses"), setIsLoginOpen(true))}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors"
                                    >
                                        Saved Addresses
                                    </button>

                                    <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link to="/wishlist" className="hidden md:block text-white hover:text-gray-100 transition-colors">
                            <Heart size={20} strokeWidth={2} />
                        </Link>

                        <Link to="/cart" className="text-white hover:text-gray-100 transition-colors relative">
                            <ShoppingBag size={20} strokeWidth={2} />
                            <span className="absolute -top-1 -right-1 bg-white text-[#ed2585] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cart.length}</span>
                        </Link>
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
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-base font-medium uppercase tracking-wide
                                    ${link.isSale ? 'text-[#ed2585]' : 'text-[#ed2585]'}
                                `}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            className="text-left text-base font-medium uppercase tracking-wide text-[#ed2585] mt-4 flex items-center gap-2"
                            onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }}
                        >
                            <User size={20} /> Login / Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Large Search Overlay */}
            {isSearchOpen && (
                <>
                    <div className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}></div>
                    <div className="fixed top-0 left-0 w-full h-[50vh] bg-white z-[70] shadow-2xl flex flex-col items-center justify-center animate-in slide-in-from-top duration-500">
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute top-8 right-8 text-gray-400 hover:text-[#ed2585] transition-colors"
                        >
                            <X size={40} strokeWidth={1.5} />
                        </button>

                        <div className="w-full max-w-4xl px-8 text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">What are you looking for?</h2>
                            <form onSubmit={handleSearch} className="w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search for sarees, suits, lehengas..."
                                    className="w-full text-3xl md:text-6xl font-serif text-center border-b-2 border-gray-100 py-6 focus:outline-none focus:border-[#ed2585] placeholder-gray-200 text-gray-900 transition-all bg-transparent"
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 bottom-6 text-[#ed2585] hover:text-[#c41e6e] transition-colors"
                                >
                                    <Search size={32} />
                                </button>
                            </form>
                            <div className="mt-8 flex justify-center gap-4 text-sm text-gray-500">
                                <span>Popular:</span>
                                <button onClick={() => { setSearchQuery('Saree'); handleSearch({ preventDefault: () => { } }); }} className="hover:text-[#ed2585] underline">Saree</button>
                                <button onClick={() => { setSearchQuery('Anarkali'); handleSearch({ preventDefault: () => { } }); }} className="hover:text-[#ed2585] underline">Anarkali</button>
                                <button onClick={() => { setSearchQuery('Lehenga'); handleSearch({ preventDefault: () => { } }); }} className="hover:text-[#ed2585] underline">Lehenga</button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Header;
