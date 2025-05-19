import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Shirt',
    description: 'A timeless white shirt made from premium cotton, perfect for any occasion.',
    price: 59.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 124,
    tags: ['shirts', 'essentials', 'formal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Light Blue', value: '#E0F0FF' },
      { name: 'Pink', value: '#FFE0F0' }
    ],
    inStock: true
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans in versatile dark wash denim.',
    price: 79.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    reviewCount: 89,
    tags: ['jeans', 'essentials', 'casual'],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Dark Blue', value: '#0A1E3F' },
      { name: 'Light Blue', value: '#6D89B6' },
      { name: 'Black', value: '#000000' }
    ],
    inStock: true
  },
  {
    id: '3',
    name: 'Leather Crossbody Bag',
    description: 'Elegant genuine leather bag with adjustable strap and multiple compartments.',
    price: 129.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviewCount: 56,
    tags: ['bags', 'leather', 'accessories'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Brown', value: '#964B00' },
      { name: 'Tan', value: '#D2B48C' }
    ],
    inStock: true
  },
  {
    id: '4',
    name: 'Cashmere Sweater',
    description: 'Luxuriously soft 100% cashmere sweater in a relaxed fit.',
    price: 149.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 42,
    tags: ['sweaters', 'luxury', 'winter'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory', value: '#FFFFF0' },
      { name: 'Gray', value: '#808080' },
      { name: 'Navy', value: '#000080' },
      { name: 'Burgundy', value: '#800020' }
    ],
    inStock: true
  },
  {
    id: '5',
    name: 'Minimalist Watch',
    description: 'Clean, contemporary timepiece with premium leather strap and Japanese movement.',
    price: 189.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviewCount: 78,
    tags: ['watches', 'accessories', 'gift'],
    colors: [
      { name: 'Black/Silver', value: '#000000' },
      { name: 'Brown/Gold', value: '#964B00' },
      { name: 'Navy/Silver', value: '#000080' }
    ],
    inStock: true
  },
  {
    id: '6',
    name: 'Wool Blend Coat',
    description: 'Sophisticated wool blend coat with classic tailoring and satin lining.',
    price: 249.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 34,
    tags: ['outerwear', 'winter', 'formal'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Camel', value: '#C19A6B' },
      { name: 'Black', value: '#000000' },
      { name: 'Dark Gray', value: '#A9A9A9' }
    ],
    inStock: true
  },
  {
    id: '7',
    name: 'Leather Chelsea Boots',
    description: 'Handcrafted leather Chelsea boots with elastic side panels and pull tab.',
    price: 189.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 92,
    tags: ['boots', 'leather', 'shoes'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Brown', value: '#964B00' }
    ],
    inStock: true
  },
  {
    id: '8',
    name: 'Silk Scarf',
    description: 'Luxurious silk scarf with hand-rolled edges and exclusive print.',
    price: 89.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    reviewCount: 28,
    tags: ['scarves', 'silk', 'accessories'],
    colors: [
      { name: 'Multicolor', value: '#FFFFFF' },
      { name: 'Blue Pattern', value: '#0000FF' },
      { name: 'Red Pattern', value: '#FF0000' }
    ],
    inStock: true
  }
];