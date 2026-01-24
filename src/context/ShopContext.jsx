import React, { createContext, useState, useContext, useEffect } from 'react';
import InventoryService from '../services/inventory';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch products on mount
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await InventoryService.getAllProducts();
                setProducts(data);
            } catch (err) {
                console.error("Failed to load inventory", err);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    const addToCart = async (product) => {
        // Check stock before adding
        const currentStock = await InventoryService.checkStock(product.id);

        // Check how many of this item are already in cart
        const inCartCount = cart.filter(p => p.id === product.id).length;

        if (inCartCount >= currentStock) {
            alert(`Sorry, only ${currentStock} available in stock!`);
            return;
        }

        setCart((prev) => [...prev, product]);
        const sizeMsg = product.selectedSize ? ` (Size: ${product.selectedSize})` : '';
        alert(`Added ${product.name}${sizeMsg} to cart!`);
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
        <ShopContext.Provider value={{
            products,
            loading,
            cart,
            wishlist,
            isLoggedIn,
            addToCart,
            removeFromCart,
            addToWishlist,
            removeFromWishlist,
            login,
            logout
        }}>
            {children}
        </ShopContext.Provider>
    );
};
