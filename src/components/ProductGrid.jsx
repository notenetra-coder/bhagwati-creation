import React from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { products } from '../data/products';

const ProductGrid = () => {


    const [selectedProduct, setSelectedProduct] = React.useState(null);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 relative group">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 tracking-[0.2em] uppercase">New Arrivals</h2>
                    <div className="w-24 h-1 bg-[#ed2585] mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Discover our latest collection of handpicked ethnic wear, designed to make you shine on every occasion.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel w-full">
                    {/* Previous Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('product-carousel');
                            if (container) container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 md:p-4 rounded-full shadow-xl text-gray-800 hover:bg-[#ed2585] hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:flex items-center justify-center border border-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    {/* Scrollable Area */}
                    <div
                        id="product-carousel"
                        className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth w-full px-4 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {products.map(product => (
                            <div
                                key={product.id}
                                className="min-w-[calc(50%-8px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start flex-shrink-0"
                            >
                                <ProductCard
                                    product={product}
                                    onQuickView={(p) => setSelectedProduct(p)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('product-carousel');
                            if (container) container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 md:p-4 rounded-full shadow-xl text-gray-800 hover:bg-[#ed2585] hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:flex items-center justify-center border border-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>

                <div className="text-center mt-8">
                    <button className="border-2 border-[#ed2585] text-[#ed2585] px-10 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#ed2585] hover:text-white transition-colors duration-300">
                        View All Products
                    </button>
                </div>
            </div>

            <QuickViewModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section >
    );
};

export default ProductGrid;
