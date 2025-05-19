import React, { useState, useEffect } from 'react';
import { Sparkles, Search, Moon, Sun, Menu, X, ShoppingBag } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { Link, useOutletContext } from '@remix-run/react';

interface OutletContext {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const { setIsCartOpen } = useOutletContext<OutletContext>();
  
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className={`sticky top-0 z-30 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-heading font-semibold">LuxeStyle</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="#" className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Início</Link>
            <Link to="#products" className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Loja</Link>
            <Link to="#about" className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Sobre</Link>
            <Link to="#" className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Contato</Link>
          </nav>
          
          {/* Action Items */}
          <div className="flex items-center space-x-4">
            <button
              className="p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button
              className="p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              className="p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
              aria-label="Shopping bag"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Início</Link>
            <Link to="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Loja</Link>
            <Link to="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Sobre</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Contato</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;