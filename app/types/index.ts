export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
}

export interface ChatbotMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
} 