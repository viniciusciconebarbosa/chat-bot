// Simulated chatbot service
// In a real application, this would connect to a backend API or AI service

import { products } from '../data/products';

// Sample knowledge base for common questions
const knowledgeBase = {
  shipping: `Informações sobre Frete e Entrega:

• Frete Grátis: Para pedidos acima de R$250
• Frete Padrão: R$19,90 (3-5 dias úteis)
• Frete Expresso: R$49,90 (1-2 dias úteis)
• Entrega em até 24h: Disponível para grandes centros
• Rastreamento: Disponível para todos os pedidos
• Pontos de Retirada: Mais de 1000 pontos em todo Brasil

Observações:
- Pedidos feitos até 12h são processados no mesmo dia
- Entregas não são realizadas aos finais de semana
- Em caso de atraso, você recebe 10% de desconto no próximo pedido`,

  returns: `Política de Devolução:

• Prazo: 30 dias para devolução
• Condições:
  - Produto sem uso
  - Embalagem original
  - Etiquetas intactas
  - Nota fiscal

Processo de Devolução:
1. Acesse "Meus Pedidos"
2. Selecione o item para devolução
3. Escolha o motivo
4. Imprima a etiqueta de postagem
5. Envie pelo correio ou agende coleta

Reembolso:
- Cartão de Crédito: 5-7 dias úteis
- Boleto: 10-15 dias úteis
- PIX: 1-2 dias úteis`,

  sizeGuide: `Guia de Tamanhos:

Como Medir:
1. Peito: Circunferência mais larga do tórax
2. Cintura: Circunferência natural da cintura
3. Quadril: Circunferência mais larga do quadril
4. Altura: Do chão até o topo da cabeça

Tabela de Tamanhos:
• PP: Peito 86cm, Cintura 66cm, Quadril 90cm
• P:  Peito 90cm, Cintura 70cm, Quadril 94cm
• M:  Peito 94cm, Cintura 74cm, Quadril 98cm
• G:  Peito 98cm, Cintura 78cm, Quadril 102cm
• GG: Peito 102cm, Cintura 82cm, Quadril 106cm

Dicas:
- Se estiver entre tamanhos, recomendamos pegar o maior
- Nossas peças têm um ajuste regular
- Para medidas específicas, consulte a tabela completa no site`,

  payment: `Formas de Pagamento:

Cartões de Crédito:
• Visa, Mastercard, American Express
• Parcelamento em até 12x sem juros
• Parcelamento em até 18x com juros

Outras Formas:
• PIX (pagamento instantâneo)
• Boleto Bancário (compensação em 1-3 dias)
• PayPal
• Apple Pay
• Google Pay

Segurança:
- Ambiente 100% seguro
- Certificado SSL
- Proteção contra fraudes
- Dados criptografados`,

  discount: `Descontos e Promoções:

Cupons Disponíveis:
• BEMVINDO15: 15% OFF no primeiro pedido
• FRETE0: Frete grátis em qualquer compra
• BUNDLE20: 20% OFF em compras acima de R$500

Programa de Fidelidade:
• 1 ponto a cada R$1 gasto
• 100 pontos = R$10 de desconto
• Níveis: Bronze, Prata, Ouro, Diamante
• Benefícios exclusivos por nível

Promoções Sazonais:
• Black Friday (Novembro)
• Aniversário LuxeStyle (Março)
• Liquidação de Verão (Janeiro)
• Liquidação de Inverno (Julho)

Dicas:
- Inscreva-se na newsletter para receber ofertas exclusivas
- Siga nossas redes sociais para promoções relâmpago
- Ative as notificações para não perder nenhuma oferta`
};

const MAIN_MENU = `
Bem-vindo à LuxeStyle! Como posso ajudar você hoje?

1 - Produtos
2 - Serviços
3 - Suporte
`;

const PRODUCTS_MENU = `
Categorias de Produtos:

1 - Roupas
2 - Acessórios
3 - Calçados
4 - Bolsas
5 - Relógios
6 - Voltar ao Menu Principal
`;

const SERVICES_MENU = `
Nossos Serviços:

1 - Frete e Entrega
2 - Política de Devolução
3 - Guia de Tamanhos
4 - Formas de Pagamento
5 - Descontos e Promoções
6 - Voltar ao Menu Principal
`;

const SUPPORT_MENU = `
Suporte ao Cliente:

1 - Dúvidas Frequentes
2 - Status do Pedido
3 - Reclamações
4 - Sugestões
5 - Voltar ao Menu Principal
`;

const HUMAN_ATTENDANT_OPTION = `
Não encontrou o que procurava? Fale com um de nossos atendentes:

1 - Falar com Atendente
2 - Voltar ao Menu Principal
`;

// Adicionar estado para rastrear o menu atual
let currentMenu = 'main';

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

// Helper function to detect user intent
function detectIntent(message: string): string {
  message = message.toLowerCase().trim();
  
  // Greeting detection - expanded to include more variations and handle accents
  const greetings = [
    'ola', 'olá', 'oi', 'bom dia', 'boa tarde', 'boa noite',
    'hey', 'hi', 'hello', 'bom diaa', 'boa tardee', 'boa noitee',
    'ola!', 'olá!', 'oi!', 'bom dia!', 'boa tarde!', 'boa noite!',
    'ola!!', 'olá!!', 'oi!!', 'bom dia!!', 'boa tarde!!', 'boa noite!!'
  ].map(greeting => greeting.toLowerCase().trim());
  
  if (greetings.some(greeting => message.includes(greeting))) {
    currentMenu = 'main';
    return 'greeting';
  }
  
  // Main menu options
  if (currentMenu === 'main') {
    if (message === '1') {
      currentMenu = 'products';
      return 'products_menu';
    }
    if (message === '2') {
      currentMenu = 'services';
      return 'services_menu';
    }
    if (message === '3') {
      currentMenu = 'support';
      return 'support_menu';
    }
  }
  
  // Products submenu
  if (currentMenu === 'products') {
    if (message === '1') return 'clothing';
    if (message === '2') return 'accessories';
    if (message === '3') return 'footwear';
    if (message === '4') return 'bags';
    if (message === '5') return 'watches';
    if (message === '6' || message === 'voltar' || message === 'menu principal') {
      currentMenu = 'main';
      return 'main_menu';
    }
  }
  
  // Services submenu
  if (currentMenu === 'services') {
    if (message === '1') return 'shipping';
    if (message === '2') return 'returns';
    if (message === '3') return 'sizeGuide';
    if (message === '4') return 'payment';
    if (message === '5') return 'discount';
    if (message === '6' || message === 'voltar' || message === 'menu principal') {
      currentMenu = 'main';
      return 'main_menu';
    }
  }
  
  // Support submenu
  if (currentMenu === 'support') {
    if (message === '1') return 'faq';
    if (message === '2') return 'order_status';
    if (message === '3') return 'complaints';
    if (message === '4') return 'suggestions';
    if (message === '5' || message === 'voltar' || message === 'menu principal') {
      currentMenu = 'main';
      return 'main_menu';
    }
  }
  
  // Text-based intent detection
  if (message.includes('frete') || message.includes('entrega')) return 'shipping';
  if (message.includes('devolução') || message.includes('reembolso')) return 'returns';
  if (message.includes('tamanho') || message.includes('medida')) return 'sizeGuide';
  if (message.includes('pagamento') || message.includes('pagar')) return 'payment';
  if (message.includes('desconto') || message.includes('promoção')) return 'discount';
  if (message.includes('ajuda') || message.includes('suporte')) {
    currentMenu = 'support';
    return 'support_menu';
  }
  if (message.includes('produto') || message.includes('comprar')) {
    currentMenu = 'products';
    return 'products_menu';
  }
  if (message.includes('atendente') || message.includes('humano')) return 'human';
  if (message.includes('voltar') || message.includes('menu principal')) {
    currentMenu = 'main';
    return 'main_menu';
  }
  
  return 'unknown';
}

// Function to find related products
function findRelatedProducts(keyword: string) {
  keyword = keyword.toLowerCase();
  return products.filter(product => {
    return (
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
  }).slice(0, 3);
}

// Simulated response generation function
export async function generateResponse(message: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const intent = detectIntent(message);
  
  switch (intent) {
    case 'greeting':
      const greeting = getGreeting();
      return `${greeting}! 👋 Sou seu assistente de compras pessoal na LuxeStyle. Como posso ajudar você hoje?\n\n${MAIN_MENU}`;
      
    case 'main_menu':
      return MAIN_MENU;
      
    case 'products_menu':
      return PRODUCTS_MENU;
      
    case 'services_menu':
      return SERVICES_MENU;
      
    case 'support_menu':
      return SUPPORT_MENU;
      
    case 'shipping':
      return knowledgeBase.shipping + "\n\n" + SERVICES_MENU;
      
    case 'returns':
      return knowledgeBase.returns + "\n\n" + SERVICES_MENU;
      
    case 'sizeGuide':
      return knowledgeBase.sizeGuide + "\n\n" + SERVICES_MENU;
      
    case 'payment':
      return knowledgeBase.payment + "\n\n" + SERVICES_MENU;
      
    case 'discount':
      return knowledgeBase.discount + "\n\n" + SERVICES_MENU;
      
    case 'human':
      return "Você será redirecionado para um atendente humano em instantes. Por favor, aguarde...\n\n" + MAIN_MENU;
      
    case 'clothing':
    case 'accessories':
    case 'footwear':
    case 'bags':
    case 'watches':
      const category = intent;
      const relatedProducts = findRelatedProducts(category);
      if (relatedProducts.length > 0) {
        let response = `Aqui estão alguns produtos da categoria ${category}:\n\n`;
        relatedProducts.forEach(product => {
          response += `- ${product.name}: R$${product.price.toFixed(2)}\n`;
        });
        response += "\n" + PRODUCTS_MENU;
        return response;
      }
      return "Desculpe, não encontrei produtos nesta categoria no momento.\n\n" + HUMAN_ATTENDANT_OPTION;
      
    case 'faq':
      return "Aqui estão algumas dúvidas frequentes:\n\n1. Como faço para rastrear meu pedido?\n2. Qual o prazo de entrega?\n3. Como solicitar uma troca?\n\nPara mais informações, escolha uma opção do menu de suporte.\n\n" + SUPPORT_MENU;
      
    case 'order_status':
      return "Para verificar o status do seu pedido, por favor, forneça o número do pedido ou entre em contato com nosso atendente.\n\n" + SUPPORT_MENU;
      
    case 'complaints':
      return "Lamentamos qualquer inconveniente. Por favor, descreva sua reclamação e um de nossos atendentes entrará em contato em breve.\n\n" + SUPPORT_MENU;
      
    case 'suggestions':
      return "Agradecemos seu feedback! Suas sugestões são muito importantes para melhorarmos nossos serviços.\n\n" + SUPPORT_MENU;
      
    default:
      return "Desculpe, não entendi sua solicitação. Por favor, escolha uma das opções abaixo:\n\n" + HUMAN_ATTENDANT_OPTION;
  }
}