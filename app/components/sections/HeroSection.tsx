import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-6">
              Nova Coleção 2025
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Descubra o seu
              <span className="text-amber-500"> Estilo Único</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Explore nossa coleção de produtos de alta qualidade, projetados para expressar sua individualidade e elevar seu estilo pessoal.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gray-900 dark:bg-amber-500 text-white rounded-md font-medium flex items-center hover:bg-gray-800 dark:hover:bg-amber-600 transition-colors">
                Comprar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Ver Coleções
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden max-w-[400px] mx-auto">
              <img 
                src="https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2" 
                alt="Fashion model"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-[200px]">
              <div className="flex items-start mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt={`Customer ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Gostei muito da qualidade e do design do meu novo casaco!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;