import { useState } from 'react';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { FcDocument, FcRuler, FcCamera, FcSettings, FcReadingEbook, FcFeedback } from 'react-icons/fc';
import productsData from './data/products.json';

// ---- Icon Map ----
const iconMap = {
  FcDocument: <FcDocument size={28} />,
  FcRuler: <FcRuler size={28} />,
  FcCamera: <FcCamera size={28} />,
  FcSettings: <FcSettings size={28} />,
  FcReadingEbook: <FcReadingEbook size={28} />,
  FcFeedback: <FcFeedback size={28} />
};

const iconMapSmall = {
  FcDocument: <FcDocument size={24} />,
  FcRuler: <FcRuler size={24} />,
  FcCamera: <FcCamera size={24} />,
  FcSettings: <FcSettings size={24} />,
  FcReadingEbook: <FcReadingEbook size={24} />,
  FcFeedback: <FcFeedback size={24} />
};

// ---- Product Card ----
const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col h-full text-left">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
          {iconMap[product.icon] || <FcDocument size={28} />}
        </div>
        {product.tag && (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold
            ${product.tagType === 'best-seller' ? 'bg-amber-100 text-amber-700' : ''}
            ${product.tagType === 'popular' ? 'bg-purple-100 text-purple-700' : ''}
            ${product.tagType === 'new' ? 'bg-emerald-100 text-emerald-700' : ''}
          `}>
            {product.tag}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">{product.description}</p>
      
      <div className="mb-6 flex items-end tracking-tight">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 font-medium mb-1 ml-1">/{product.period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600 font-medium">
            <FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={16} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button 
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full py-3.5 font-semibold text-sm transition-all text-white rounded-full ${
            isAdded ? 'bg-emerald-500 hover:bg-emerald-500' : 'btn-primary hover:shadow-lg hover:shadow-purple-200'
          }`}
        >
          {isAdded ? 'Added to cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

// ---- Cart Summary ----
const CartSummary = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <FcDocument size={48} className="opacity-50 grayscale" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Looks like you haven&apos;t added any premium tools yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto text-left">
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Selected Products</h2>
        
        <div className="space-y-4 mb-8">
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                   {iconMapSmall[item.icon] || <FcDocument size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.period} plan</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className="font-bold text-gray-900">${item.price}</span>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                  title="Remove"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-6 mt-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl text-gray-600 font-medium">Total Balance</span>
            <span className="text-3xl font-bold text-gray-900">${total.toFixed(2)}</span>
          </div>
          <button 
            onClick={onCheckout}
            className="w-full btn-primary py-4 text-base font-bold flex justify-center shadow-lg shadow-purple-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

// ---- Premium Section (Main) ----
const Premium = ({ activeTab, setActiveTab, cart, onAddToCart, onRemoveFromCart, onCheckout }) => {
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

export default Premium;
