import React, { useEffect } from 'react';
import { X, ShoppingBag, Heart, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const QuickViewModal = ({ product, isOpen, onClose }) => {
    const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useShop();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    const isWishlisted = wishlist.some(item => item.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleWishlist = (e) => {
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-300 relative flex flex-col md:flex-row max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition-colors shadow-sm"
                >
                    <X size={20} />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 bg-gray-100 relative h-64 md:h-auto">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-top"
                    />
                    {product.tag && (
                        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                            {product.tag}
                        </span>
                    )}
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">

                    {/* Category & Rating */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{product.category}</span>
                        <div className="flex items-center gap-1 text-yellow-500">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={14} fill="currentColor" />
                            ))}
                            <span className="text-gray-400 text-xs ml-1">(4.8)</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4 leading-tight">
                        {product.name}
                    </h2>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through decoration-1">{product.originalPrice}</span>
                        )}
                        {product.originalPrice && (
                            <span className="text-green-600 text-sm font-semibold px-2 py-0.5 bg-green-50 rounded-full">
                                Save {Math.round((parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))) / parseInt(product.originalPrice.replace(/[^\d]/g, '')) * 100)}%
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
                        {product.description || "Experience elegant craftsmanship with this exclusive piece, designed to make you stand out with sophistication and style."}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col gap-4 mt-auto">
                        <div className="flex gap-3">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-lg font-medium tracking-wide hover:bg-gray-800 active:transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-gray-200"
                            >
                                <ShoppingBag size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                Add to Cart
                            </button>
                            <button
                                onClick={handleWishlist}
                                className={`p-3.5 rounded-lg border transition-all flex items-center justify-center ${isWishlisted ? 'border-pink-200 bg-pink-50 text-[#ed2585]' : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                            >
                                <Heart size={20} fill={isWishlisted ? "#ed2585" : "none"} />
                            </button>
                        </div>

                        <button
                            onClick={() => {
                                onClose();
                                navigate(`/product/${product.id}`);
                            }}
                            className="text-center text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all font-medium"
                        >
                            View Full Product Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
