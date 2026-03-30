import { useState } from 'react';
import ProductCard from './ProductCard';
import CartSummary from './CartSummary';
import productsData from '../data/products.json';

const MainSection = ({ activeTab, setActiveTab, cart, onAddToCart, onRemoveFromCart, onCheckout }) => {
  return (
    <section id="products" className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Premium Digital Tools</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm relative">
            <button
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all z-10 ${
                activeTab === 'products' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all z-10 ${
                activeTab === 'cart' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('cart')}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <CartSummary cart={cart} onRemove={onRemoveFromCart} onCheckout={onCheckout} />
        )}
      </div>
    </section>
  );
};

export default MainSection;
