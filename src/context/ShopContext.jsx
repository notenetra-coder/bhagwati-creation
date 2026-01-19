import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`Added ${product.name} to cart!`);
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter(item => item.id !== productId));
    };

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            if (prev.some(item => item.id === product.id)) return prev; // Avoid duplicates
            alert(`Added ${product.name} to wishlist!`);
            return [...prev, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prev) => prev.filter(item => item.id !== productId));
    };

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <ShopContext.Provider value={{ cart, wishlist, isLoggedIn, addToCart, removeFromCart, addToWishlist, removeFromWishlist, login, logout }}>
            {children}
        </ShopContext.Provider>
    );
};
