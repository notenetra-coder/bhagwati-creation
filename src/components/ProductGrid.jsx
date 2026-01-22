import React from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { products } from '../data/products';

const ProductGrid = () => {


    const [selectedProduct, setSelectedProduct] = React.useState(null);

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
                        <ProductCard
                            key={product.id}
                            product={product}
                            onQuickView={(p) => setSelectedProduct(p)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border-2 border-primary text-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                        View All Products
                    </button>
                </div>
            </div>

            <QuickViewModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
};

export default ProductGrid;
