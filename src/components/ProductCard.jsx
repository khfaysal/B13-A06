import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { FcDocument, FcRuler, FcCamera, FcSettings, FcReadingEbook, FcFeedback } from 'react-icons/fc';

const iconMap = {
  FcDocument: <FcDocument size={28} />,
  FcRuler: <FcRuler size={28} />,
  FcCamera: <FcCamera size={28} />,
  FcSettings: <FcSettings size={28} />,
  FcReadingEbook: <FcReadingEbook size={28} />,
  FcFeedback: <FcFeedback size={28} />
};

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

export default ProductCard;
