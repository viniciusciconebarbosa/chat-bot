import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils';
import ChatMessage from './ChatMessage';
import { ChatbotMessage } from '../../types';
import { generateResponse } from '../../services/chatbot';

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Helper function to get greeting based on time of day
function getGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Bom dia";
  } else if (hour >= 12 && hour < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

const INITIAL_MESSAGES: ChatbotMessage[] = [
  {
    id: '1',
    content: `${getGreeting()}! 👋 Sou seu assistente de compras pessoal na LuxeStyle. Como posso ajudar você hoje?`,
    role: 'assistant',
    timestamp: new Date().toISOString(),
  },
];

const SUGGESTIONS = [
  '1 - Produtos',
  '2 - Serviços',
  '3 - Suporte'
];

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatbotMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage: ChatbotMessage = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      // Simulate API call to get response
      const response = await generateResponse(input);
      
      const botMessage: ChatbotMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: ChatbotMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Desculpe, encontrei um erro. Por favor, tente novamente mais tarde.',
        role: 'assistant',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    // Auto-submit after a short delay
    setTimeout(() => {
      const form = document.getElementById('chatbot-form') as HTMLFormElement;
      if (form) form.dispatchEvent(new Event('submit', { cancelable: true }));
    }, 100);
  };
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4">
            {/* Arrow and Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-amber-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.div>
                <span className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  Fale conosco!
                </span>
              </div>
            </motion.div>

            {/* Chat Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="p-4 rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageSquare className="h-24 w-24" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-full sm:w-96 max-w-full rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 6rem)' }}
            initial={{ opacity: 0, y: 20, height: '0px' }}
            animate={{ opacity: 1, y: 0, height: '500px' }}
            exit={{ opacity: 0, y: 20, height: '0px' }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-amber-500 text-white">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-medium">Assistente LuxeStyle</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-amber-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-sm">Assistente está digitando...</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Perguntas sugeridas:</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat Input */}
            <form 
              id="chatbot-form"
              onSubmit={handleSubmit} 
              className="border-t border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-amber-500 dark:focus-within:ring-amber-400 focus-within:border-transparent">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-grow px-4 py-2 bg-transparent outline-none text-gray-700 dark:text-gray-300"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className={cn(
                    "p-2 rounded-r-lg text-white",
                    input.trim() 
                      ? "bg-amber-500 hover:bg-amber-600" 
                      : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                  )}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;