import React from 'react';
import { Award, Package, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: <Award className="h-10 w-10 text-amber-500" />, 
    title: 'Qualidade Premium', 
    description: 'Oferecemos apenas os materiais de maior qualidade para nossos produtos, garantindo durabilidade e conforto.' 
  },
  { 
    icon: <Truck className="h-10 w-10 text-amber-500" />, 
    title: 'Entrega Rápida', 
    description: 'Desfrute de entrega gratuita em todos os pedidos com entrega em até 2-5 dias úteis.' 
  },
  { 
    icon: <Package className="h-10 w-10 text-amber-500" />, 
    title: 'Devoluções Facil', 
    description: 'Não satisfeito com sua compra? Devolução em até 30 dias para reembolso completo.' 
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/5] rounded-lg overflow-hidden"
              >
                <img 
                  src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Woman in stylish outfit"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="aspect-[4/5] rounded-lg overflow-hidden mt-8"
              >
                <img 
                  src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fashion accessories"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="aspect-[4/5] rounded-lg overflow-hidden"
              >
                <img 
                  src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Man in stylish outfit"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="aspect-[4/5] rounded-lg overflow-hidden mt-8"
              >
                <img 
                  src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fashion detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-6">
              Sobre LuxeStyle
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Estilo sem esforço para todas as ocasiões.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
            Na LuxeStyle, acreditamos que a moda é uma forma poderosa de expressão pessoal. Nossa missão é oferecer roupas e acessórios de alta qualidade e estilo, ajudando você a expressar sua personalidade única e se sentir confiante em qualquer situação.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
            Fundada em 2022, rapidamente nos estabelecemos como um destino para pessoas antenadas na moda, que valorizam qualidade, sustentabilidade e um design atemporal.
            </p>
            
            <div className="space-y-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;