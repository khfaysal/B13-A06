import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';
import Banner from './Banner';
import Count from './Count';
import Premium from './Premium';
import TransparentPricing from './TransparentPricing';
import Footer from './Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.info(`${product.name} is already in the cart.`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error('Item removed from cart.');
  };

  const proceedToCheckout = () => {
    if (cart.length > 0) {
      setCart([]);
      setActiveTab('products');
      toast.success('Successfully proceeded to checkout! Cart cleared.');
    }
  };

  const handleCartClick = () => {
    setActiveTab('cart');
    const mainSection = document.getElementById('products');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Navbar cartCount={cart.length} onCartClick={handleCartClick} />
      
      <main>
        <Banner />
        <Count />
        <Premium 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          onCheckout={proceedToCheckout}
        />
        <TransparentPricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
