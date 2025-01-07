import { Product } from '../../../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img 
        src={product.image_url} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.brand}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>
        <p className="text-lg font-bold text-primary-600 mb-4">৳{product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full flex items-center justify-center space-x-2 bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;