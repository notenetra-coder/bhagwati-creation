import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`Added ${product.name} to cart!`);
    };

    const addToWishlist = (product) => {
        setWishlist((prev) => [...prev, product]);
        alert(`Added ${product.name} to wishlist!`);
    };

    return (
        <ShopContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
            {children}
        </ShopContext.Provider>
    );
};
