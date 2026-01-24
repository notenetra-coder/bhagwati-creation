import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import Chatbot from './components/Chatbot';

import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const Contact = lazy(() => import('./pages/Contact'));
const Checkout = lazy(() => import('./pages/Checkout'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const TrackOrder = lazy(() => import('./pages/TrackOrder'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'));
const ReturnExchange = lazy(() => import('./pages/ReturnExchange'));

function App() {
  // Main application component
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/return-exchange" element={<ReturnExchange />} />
          </Routes>
        </Suspense>
      </main>
      <Footer onAboutClick={() => setIsAboutOpen(true)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <Chatbot />
    </div>
  );
}

export default App;
