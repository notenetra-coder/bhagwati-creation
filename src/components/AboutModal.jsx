import React from 'react';
import { X } from 'lucide-react';

const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative bg-[#fdfbf7] w-full max-w-2xl p-8 md:p-12 rounded-lg shadow-2xl border border-primary/20"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary transition-colors"
                >
                    <X size={28} />
                </button>

                <div className="text-center">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-8">About Us</h2>

                    <div className="space-y-6 text-gray-700 font-serif leading-relaxed text-lg">
                        <p>
                            <span className="font-bold text-primary">Bhagwati Creations</span> is the proud extension of <span className="font-bold">Guddu Selection Point</span>, our renowned Rohini store with over <span className="font-bold text-primary">27 years</span> of legacy. We bring a modern, stylish approach to ladies' suits, offering a thoughtfully curated range that blends elegance, comfort, and contemporary trends.
                        </p>

                        <p>
                            Catering to both <span className="font-bold">wholesale</span> and <span className="font-bold">retail</span> clients, we feature a unique collection of <span className="font-bold text-primary">boutique unstitched suits, ready-to-wear suits, and co-ord sets.</span>
                        </p>

                        <p>
                            At Bhagwati Creations, every outfit is designed to celebrate individuality and inspire confidence, making every woman feel effortlessly graceful and stylish.
                        </p>

                        <p className="mt-8 font-bold text-xl text-primary font-cursive">
                            Mayank Arora
                        </p>
                    </div>
                </div>

                {/* Decorative corner flowers could be added here as background images if available */}
            </div>
        </div>
    );
};

export default AboutModal;
