import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, addToCart, addToWishlist, loading } = useShop();

    if (loading) return <div className="text-center py-20">Loading...</div>;

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <button
                    onClick={() => navigate('/')}
                    className="text-primary hover:underline"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    const isOutOfStock = product.stock <= 0;
    const [selectedSize, setSelectedSize] = React.useState(null);

    const handleAddToCart = () => {
        if (product.sizes && !selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart({ ...product, selectedSize });
    };

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                {/* Breadcrumb / Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back
                </button>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Section */}
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className={`w-full h-full object-cover ${isOutOfStock ? 'grayscale opacity-75' : ''}`}
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                                <span className="text-xl">No Image</span>
                            </div>
                        )}
                        {product.tag && !isOutOfStock && (
                            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs uppercase font-bold px-3 py-1 rounded shadow-sm">
                                {product.tag}
                            </span>
                        )}
                        {isOutOfStock && (
                            <span className="absolute top-4 right-4 bg-black text-white text-xs uppercase font-bold px-3 py-1 rounded shadow-sm">
                                Out of Stock
                            </span>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2 text-gray-500 uppercase tracking-widest text-sm font-medium">
                            {product.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-end gap-4 mb-2">
                            <span className="text-3xl font-semibold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-xl text-gray-400 line-through mb-1">{product.originalPrice}</span>
                            )}
                        </div>
                        <div className={`text-sm mb-6 font-medium ${isOutOfStock ? 'text-red-500' : 'text-green-600'}`}>
                            {isOutOfStock ? 'Currently Unavailable' : `In Stock: ${product.stock > 10 ? 'Available' : product.stock + ' left'}`}
                        </div>

                        {/* Size Selector */}
                        {product.sizes && (
                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Select Size</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${selectedSize === size
                                                    ? 'bg-black text-white border-black'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                            {product.description || "This is a premium high-quality aesthetic product designed to make you stand out. Crafted with attention to detail and fine fabrics."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={isOutOfStock}
                                className={`flex-1 py-4 px-8 rounded-full font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg duration-200
                                    ${isOutOfStock
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-[#ed2585] text-white hover:bg-[#c9186b] hover:shadow-xl hover:-translate-y-0.5'
                                    }`}
                            >
                                <ShoppingBag size={20} /> {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                            </button>
                            <button
                                onClick={() => addToWishlist(product)}
                                className="flex-1 bg-white border-2 border-gray-200 text-gray-700 py-4 px-8 rounded-full font-semibold uppercase tracking-wider hover:border-[#ed2585] hover:text-[#ed2585] transition-colors flex items-center justify-center gap-2"
                            >
                                <Heart size={20} /> Add to Wishlist
                            </button>
                        </div>

                        {/* Extra Info */}
                        <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm text-gray-500">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Authenticity</h4>
                                <p>100% Original Product</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Delivery</h4>
                                <p>Free Shipping on orders above ₹999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
