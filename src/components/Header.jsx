import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import logo from '../assets/logo.png';
import LoginModal from './LoginModal';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { cart } = useShop();
    const navigate = useNavigate();

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
        <div className="w-full relative z-50 bg-white font-sans shadow-sm">
            {/* Announcement Bar */}
            <div className="bg-[#ed2585] text-white text-center py-2 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase">
                Free Shipping on Orders Above ₹999
            </div>

            {/* Main Header - Single Line */}
            <header className="sticky top-0 bg-[#ed2585] z-50 transition-all duration-300">
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
                        <Link to="/" className="block">
                            <img
                                src={logo}
                                alt="Bhagwati Creations"
                                className="h-20 md:h-24 object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation Links (Desktop) */}
                    <nav className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-semibold uppercase tracking-wider relative group py-2
                                    ${link.isSale ? 'text-white' : 'text-white hover:text-gray-100'}
                                    transition-colors duration-300
                                `}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Icons */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Search Input (Expandable) */}
                        <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48 bg-white rounded-full px-3 py-1' : 'w-auto'}`}>
                            {isSearchOpen && (
                                <form onSubmit={handleSearch} className="w-full">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-transparent outline-none text-xs text-black placeholder-gray-500"
                                        autoFocus
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onBlur={() => !searchQuery && setIsSearchOpen(false)} // Close on blur if empty
                                    />
                                </form>
                            )}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className={`${isSearchOpen ? 'text-[#ed2585]' : 'text-white'} hover:text-gray-100 transition-colors ml-auto`}
                            >
                                <Search size={20} strokeWidth={2} />
                            </button>
                        </div>

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

                                    <button
                                        onClick={() => isLoggedIn ? navigate('/contact') : (alert("Please Login to Contact Us"), setIsLoginOpen(true))}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors"
                                    >
                                        Contact Us
                                    </button>
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

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Header;
