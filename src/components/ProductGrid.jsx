import React from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { products } from '../data/products';

const ProductGrid = () => {


    const [selectedProduct, setSelectedProduct] = React.useState(null);

    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4 md:px-8 relative group">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-3 tracking-[0.2em] uppercase">New Arrivals</h2>
                    <div className="w-16 h-1 bg-[#ed2585] mx-auto rounded-full"></div>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm font-light leading-relaxed">
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
                        className="flex overflow-x-auto gap-2 md:gap-4 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth w-full px-4 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {products.map(product => (
                            <div
                                key={product.id}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/5 min-w-0 pl-2 md:pl-4 snap-start flex-shrink-0"
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
