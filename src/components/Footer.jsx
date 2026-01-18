import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = ({ onAboutClick }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for subscribing!");
    }

    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="/" className="block font-serif font-bold text-2xl tracking-widest text-primary mb-6">
                            Bhagwati Creations
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Celebrating the essence of Indian ethnic wear with a modern touch. Handcrafted with love for the contemporary woman.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-serif font-bold text-gray-900 mb-6 tracking-wide">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li>
                                <button onClick={onAboutClick} className="hover:text-primary transition-colors text-left">About Us</button>
                            </li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Return & Exchange</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-serif font-bold text-gray-900 mb-6 tracking-wide">Get in Touch</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0" />
                                <span>123 Fashion Street, Jaipur, Rajasthan, 302001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} />
                                <span>support@mystyle.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-serif font-bold text-gray-900 mb-6 tracking-wide">Newsletter</h3>
                        <p className="text-gray-500 text-sm mb-4">Subscribe to get updates on new arrivals and special offers.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-primary text-sm"
                                required
                            />
                            <button type="submit" className="bg-gray-900 text-white px-4 py-2 text-sm uppercase tracking-widest font-medium hover:bg-primary transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} MyStyle. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
