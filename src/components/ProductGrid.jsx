import React from 'react';
import ProductCard from './ProductCard';

import product1 from '../assets/product1.png';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const ProductGrid = () => {
    // Mock Data
    const products = [
        { id: 1, name: "Peach Floral Anarkali Set", category: "Suit Set", price: "₹2,499", originalPrice: "₹4,999", tag: "Best Seller", image: product1 },
        { id: 2, name: "Teal Embroidered Kurta", category: "Kurta", price: "₹1,899", originalPrice: "₹2,599", image: product2 },
        { id: 3, name: "Ivory Cotton Maxi Dress", category: "Dresses", price: "₹2,100", tag: "New", image: product3 },
        { id: 4, name: "Gold Plated Chandbalis", category: "Jewelry", price: "₹899", originalPrice: "₹1,200" },
        { id: 5, name: "Maroon Silk Sharara Set", category: "Suit Set", price: "₹3,599", originalPrice: "₹6,000", tag: "Sale" },
        { id: 6, name: "Indigo Block Print Co-ord", category: "Co-ords", price: "₹1,599" },
        { id: 7, name: "Rose Pink Georgette Saree", category: "Saree", price: "₹2,899", tag: "Trending" },
        { id: 8, name: "Mustard Palazzo Set", category: "Suit Set", price: "₹1,999", originalPrice: "₹3,499" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 tracking-[0.2em] uppercase">New Arrivals</h2>
                    <div className="w-24 h-1 bg-[#ed2585] mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Discover our latest collection of handpicked ethnic wear, designed to make you shine on every occasion.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border-2 border-primary text-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
