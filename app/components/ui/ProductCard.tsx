import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCart();

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Favorite Button */}
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
        
        {/* Quick Add Button */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => addItem(product)}
            className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md font-medium flex items-center space-x-2 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Adicionar ao Carrinho</span>
          </button>
        </motion.div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>
          
          {product.rating && (
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) 
                        ? 'text-amber-500' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                ({product.reviewCount})
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;