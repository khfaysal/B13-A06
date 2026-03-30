import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
    
    // Smooth scroll to MainSection
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
        <Hero />
        <Stats />
        
        <MainSection 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          onCheckout={proceedToCheckout}
        />
        
        <Steps />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
