import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex items-center justify-between py-6 px-10 max-w-7xl mx-auto border-b border-gray-100 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-purple-600 tracking-tight m-0 leading-none">DigiTools</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <a href="#products" className="hover:text-purple-600 transition-colors">Products</a>
        <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-purple-600 transition-colors">Testimonials</a>
        <a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-6 text-gray-800 font-medium">
        <button 
          onClick={onCartClick} 
          className="relative text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="View Cart"
        >
          <FiShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button className="hidden md:block hover:text-purple-600 transition-colors">Login</button>
        <button className="btn-primary px-6 py-2.5 font-medium shadow-sm hover:shadow-md transition-all text-sm rounded-full">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
