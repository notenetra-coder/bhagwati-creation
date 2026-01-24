import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useShop();
    const navigate = useNavigate();

    // Grouping items or listing them simple? Simple list for now.
    // Assuming context doesn't have removeFromCart yet, I might need to add it or just assume I can edit context
    // Wait, the current context plan only had addToCart. I should check context first. 

    // Let's assume I need to update context to allow removing items first.
    // For now I'll write the view, but I might need to update ShopContext.

    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^\d]/g, ''));
        return sum + price;
    }, 0);

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 mb-6 hover:text-[#ed2585]">
                <ArrowLeft size={20} className="mr-2" /> Continue Shopping
            </button>
            <h1 className="text-3xl font-serif font-medium mb-8">Shopping Cart ({cart.length})</h1>

            {cart.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
                    <button onClick={() => navigate('/')} className="bg-[#ed2585] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-[#c9186b]">
                        Start Shopping
                    </button>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex gap-4 border p-4 rounded-lg items-center bg-white shadow-sm">
                                <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-lg">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                    <p className="font-bold text-[#ed2585]">{item.price}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-400 hover:text-red-500"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg h-fit">
                        <h3 className="text-xl font-medium mb-4">Order Summary</h3>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <div className="border-t pt-4 flex justify-between font-bold text-lg mb-6">
                            <span>Total</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                        <button
                            onClick={() => navigate('/checkout')}
                            className="w-full bg-[#ed2585] text-white py-3 rounded font-semibold uppercase tracking-wider hover:bg-[#c9186b]"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
