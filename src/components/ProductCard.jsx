import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useShop();
    const navigate = useNavigate();

    const isWishlisted = wishlist.some(item => item.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(product);
    };

    const handleQuickView = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onQuickView) onQuickView(product);
    }

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <span className="text-4xl mb-2 font-thin">{product.id}</span>
                        <span className="text-xs uppercase tracking-widest">Product Image</span>
                    </div>
                )}

                {/* Quick Action Overlay */}
                <div className={`absolute bottom-0 left-0 w-full bg-white/90 p-4 transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-primary text-white py-2 text-sm uppercase tracking-wide font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                        <ShoppingBag size={16} /> Add to Cart
                    </button>
                </div>

                {/* Wishlist Icon */}
                <button
                    onClick={handleWishlist}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 ${isWishlisted ? 'bg-white text-[#ed2585] opacity-100' : 'bg-white/80 text-gray-600 hover:text-[#ed2585] hover:bg-white'}`}
                >
                    <Heart size={18} fill={isWishlisted ? "#ed2585" : "none"} />
                </button>

                {/* Quick View Icon */}
                <button
                    onClick={handleQuickView}
                    className="absolute top-12 right-3 p-2 rounded-full bg-white/80 text-gray-600 hover:text-[#ed2585] hover:bg-white transition-colors opacity-0 group-hover:opacity-100 mt-2"
                    title="Quick View"
                >
                    <Eye size={18} />
                </button>

                {/* Tag */}
                {product.tag && (
                    <span className="absolute top-3 left-3 bg-red-800 text-white text-[10px] uppercase font-bold px-2 py-1">
                        {product.tag}
                    </span>
                )}
            </div>

            <div className="text-center">
                <h3 className="text-sm text-gray-900 font-medium mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{product.category}</div>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-900 font-semibold">{product.price}</span>
                    {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
