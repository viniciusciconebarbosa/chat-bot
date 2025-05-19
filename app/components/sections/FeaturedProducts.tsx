import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';
import { motion } from 'framer-motion';

const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Coleção em Destaque
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Produtos em Destaque
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubra nossa seleção de produtos em destaque, cuidadosamente selecionados para estilo, qualidade e excepcional valor.
            </p>
          </motion.div>
        </div>
        
        {/* Product Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Todos', 'Roupas', 'Acessórios', 'Sapatos', 'Novos'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === 'All' 
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;