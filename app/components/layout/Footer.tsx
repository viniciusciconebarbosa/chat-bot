import React from 'react';
import { Sparkles, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-heading font-semibold text-white">LuxeStyle</span>
            </div>
            <p className="text-gray-400 mb-6">
              Eleve seu estilo com moda premium projetada para o indivíduo moderno.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Loja</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Todos os Produtos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Novidades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mais Vendidos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Itens em Promoção</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cartões Presente</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Atendimento</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Envios e Devoluções</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxeStyle. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Termos de Serviço</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;