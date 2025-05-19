import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CartPreviewProps {
  onClose: () => void;
}

const CartPreview: React.FC<CartPreviewProps> = ({ onClose }) => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />
      
      {/* Cart Panel */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        className="fixed inset-y-0 right-0 w-full md:w-96 bg-white dark:bg-gray-900 shadow-xl z-50"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Carrinho ({totalItems})
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center space-x-4 py-4 border-b border-gray-200 dark:border-gray-800"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ${item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-sm text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-2 text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full py-3 px-4 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CartPreview;