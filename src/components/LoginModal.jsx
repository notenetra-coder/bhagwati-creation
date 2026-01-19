import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X } from 'lucide-react';
import loginBanner from '../assets/login_banner.png';
import logo from '../assets/logo.png';
// Actually I don't have an india-flag.png. I will use a simple emoji or text 🇮🇳

const LoginModal = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const { login } = useShop();

    if (!isOpen) return null;

    const handleLogin = () => {
        if (phoneNumber.length >= 10) {
            login();
            onClose();
            alert("Logged in successfully!");
        } else {
            alert("Please enter a valid phone number");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white w-full max-w-4xl h-[500px] md:h-[600px] rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row z-[101] animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button Mobile - visible on top right of modal */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[110] text-gray-500 hover:text-black md:hidden"
                >
                    <X size={24} />
                </button>

                {/* Left Side - Image Banner */}
                <div className="hidden md:block w-1/2 h-full relative">
                    <img
                        src={loginBanner}
                        alt="Festive Fashion"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8 text-white text-center">
                        <h2 className="text-3xl font-serif mb-2">Register & Be A Part Of The</h2>
                        <h2 className="text-4xl font-serif italic mb-6">BHAGWATI Circle!</h2>

                        <div className="space-y-2 text-sm opacity-90">
                            <p>Get Extra 10% Off | Use Code: <span className="font-bold">FIRST10</span></p>
                            <p>- No Minimum Cart Value.</p>
                            <p>- Max Discount INR 3000</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col relative">
                    {/* Close Button Desktop */}
                    <button
                        onClick={onClose}
                        className="hidden md:block absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex-1 flex flex-col items-center justify-center mt-8 md:mt-0">
                        {/* Logo */}
                        <img src={logo} alt="Bhagwati Creations" className="h-16 object-contain mb-8" />

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold mb-1">Login / Sign Up</h3>
                            <p className="text-gray-500 text-sm">Enter your log in details</p>
                        </div>

                        {/* Form */}
                        <div className="w-full space-y-4 max-w-xs">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                            <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-[#ed2585] transition-colors">
                                <div className="bg-gray-50 px-3 py-2 border-r border-gray-300 flex items-center gap-2">
                                    <span className="text-lg">🇮🇳</span>
                                    <span className="text-gray-600 text-sm">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    className="flex-1 px-4 py-2 outline-none text-gray-800"
                                    placeholder="Phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={handleLogin}
                                className="w-full bg-black text-white py-3 rounded font-medium text-sm hover:bg-gray-800 transition-colors uppercase tracking-wide mt-6"
                            >
                                Request OTP
                            </button>
                        </div>

                        {/* Footer Terms */}
                        <div className="mt-8 text-center text-xs text-gray-400">
                            <p>I accept that I have read & understood</p>
                            <div className="flex justify-center gap-1 mt-1">
                                <a href="#" className="underline hover:text-[#ed2585]">Privacy Policy</a>
                                <span>and</span>
                                <a href="#" className="underline hover:text-[#ed2585]">T&Cs</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
