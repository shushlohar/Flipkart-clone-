// Mock Product Database

const categoriesData = [
  { id: 'all', name: 'All Categories', icon: '🛍️' },
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'mobiles', name: 'Mobiles', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'home', name: 'Home & Kitchen', icon: '🏠' },
  { id: 'beauty', name: 'Beauty & Toys', icon: '💄' },
  { id: 'appliances', name: 'Appliances', icon: '📺' }
];

const bannerCarousels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop',
    title: 'Big Saving Days',
    subtitle: 'Up to 80% Off on Top Brands | Credit Card Offers',
    link: '#search?q=sale'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop',
    title: 'Premium Laptops & Gadgets',
    subtitle: 'No Cost EMI starting from ₹1,999/month',
    link: '#category?id=electronics'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    title: 'Fashion Revolution',
    subtitle: 'Minimum 50% Off | Styles for Men & Women',
    link: '#category?id=fashion'
  }
];

const productsData = [
  {
    id: 'p1',
    title: 'HP Pavilion Intel Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11) Laptop',
    category: 'electronics',
    subcategory: 'Laptops',
    price: 52990,
    originalPrice: 68500,
    discount: 22,
    rating: 4.3,
    ratingCount: 8432,
    reviewCount: 924,
    brand: 'HP',
    fAssured: true,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      'Intel Core i5 12th Gen Processor',
      '16 GB DDR4 RAM | 512 GB SSD Storage',
      '15.6 inch Full HD Display',
      'Windows 11 Operating System'
    ],
    specifications: {
      'General': {
        'Model Name': 'Pavilion Laptop',
        'Color': 'Natural Silver',
        'Suitable For': 'Processing & Multitasking'
      },
      'Processor': {
        'Processor Brand': 'Intel',
        'Processor Name': 'Core i5',
        'Generation': '12th Gen'
      }
    },
    description: 'Elevate your performance with the HP Pavilion Laptop. Driven by a powerful 12th Gen Intel Core i5 processor, this sleek machine breezes through demanding work, dynamic creative projects, and high-definition streaming.',
    reviews: [
      { name: 'Rohan Sharma', rating: 5, comment: 'Amazing laptop for office work and coding.', date: '2026-05-15' },
      { name: 'Priya Patel', rating: 4, comment: 'Performance is super fast.', date: '2026-05-20' }
    ]
  },
  {
    id: 'p2',
    title: 'Apple MacBook AIR Apple M2 Chip - (8 GB/256 GB SSD/macOS) Liquid Retina Display',
    category: 'electronics',
    subcategory: 'Laptops',
    price: 89900,
    originalPrice: 114900,
    discount: 21,
    rating: 4.7,
    ratingCount: 12450,
    reviewCount: 1420,
    brand: 'Apple',
    fAssured: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      'Apple M2 Processor Chipset',
      '8 GB Unified RAM | 256 GB SSD',
      '13.6 inch Liquid Retina Display',
      'Up to 18 Hours Battery Life'
    ],
    specifications: {
      'General': {
        'Model Name': 'MacBook Air M2',
        'Color': 'Space Grey'
      }
    },
    description: 'Redesigned around the next-generation M2 chip, the Apple MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure.',
    reviews: [
      { name: 'Kunal G.', rating: 5, comment: 'Mindblowing battery life and display quality.', date: '2026-04-10' }
    ]
  },
  {
    id: 'p3',
    title: 'Sony WH-1000XM4 Active Noise Cancelling Bluetooth Headphones',
    category: 'electronics',
    subcategory: 'Headphones',
    price: 19990,
    originalPrice: 29990,
    discount: 33,
    rating: 4.6,
    ratingCount: 38241,
    reviewCount: 4239,
    brand: 'Sony',
    fAssured: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      'Industry-leading Active Noise Cancellation (ANC)',
      '30 Hours battery life | Quick charging',
      'Touch Sensors control'
    ],
    specifications: {
      'General': {
        'Model Name': 'WH-1000XM4',
        'Type': 'Over the Ear'
      }
    },
    description: 'Sony WH-1000XM4 smart headphones offer advanced noise cancellation technology with exceptional sound quality.',
    reviews: [
      { name: 'Vijay Anand', rating: 5, comment: 'ANC is absolute magic.', date: '2026-03-24' }
    ]
  },
  {
    id: 'p4',
    title: 'Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 94999,
    originalPrice: 124999,
    discount: 24,
    rating: 4.6,
    ratingCount: 5493,
    reviewCount: 712,
    brand: 'Samsung',
    fAssured: true,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      '12 GB RAM | 256 GB Storage',
      '6.8 inch Quad HD+ AMOLED Display',
      '200MP + 12MP + 10MP + 10MP Quad Camera',
      'Snapdragon 8 Gen 2 Processor'
    ],
    specifications: {
      'General': {
        'Model Name': 'Galaxy S23 Ultra',
        'Color': 'Phantom Black'
      }
    },
    description: 'Samsung Galaxy S23 Ultra 5G represents the pinnacle of mobile technology. Boasting an incredible 200MP camera and integrated S-Pen.',
    reviews: [
      { name: 'Tushar D.', rating: 5, comment: 'The 100x zoom is spectacular.', date: '2026-02-18' }
    ]
  },
  {
    id: 'p5',
    title: 'Apple iPhone 15 (Blue, 128 GB)',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 66999,
    originalPrice: 79900,
    discount: 16,
    rating: 4.6,
    ratingCount: 18453,
    reviewCount: 1980,
    brand: 'Apple',
    fAssured: true,
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      '128 GB Storage',
      '6.1 inch Super Retina XDR Display',
      '48MP + 12MP Dual Rear Camera',
      'A16 Bionic Chip'
    ],
    specifications: {
      'General': {
        'Model Name': 'iPhone 15',
        'Color': 'Blue'
      }
    },
    description: 'iPhone 15 brings you Dynamic Island, a 48MP Main camera, USB-C, and a durable design.',
    reviews: [
      { name: 'Abhishek K.', rating: 5, comment: 'Loving the dynamic island!', date: '2026-05-10' }
    ]
  },
  {
    id: 'p6',
    title: "Puma Men's Solid Sports T-Shirt (DryFit, Navy Blue)",
    category: 'fashion',
    subcategory: "Men's Wear",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.1,
    ratingCount: 2315,
    reviewCount: 310,
    brand: 'Puma',
    fAssured: false,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      'Regular Fit | DryFit technology',
      '100% Polyester | Machine washable'
    ],
    specifications: {
      'General': {
        'Fabric': 'Polyester',
        'Fit': 'Regular'
      }
    },
    description: 'Keep your active sessions comfortable with Puma DryFit Sports T-Shirt.',
    reviews: [
      { name: 'Karthik V.', rating: 4, comment: 'Nice fit, absorbs sweat.', date: '2026-05-22' }
    ]
  }
];

// LocalStorage load/save helpers
const storageKey = {
  cart: 'fk_clone_cart',
  wishlist: 'fk_clone_wishlist',
  orders: 'fk_clone_orders',
  reviews: 'fk_clone_reviews',
  user: 'fk_clone_user'
};

function loadState(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function saveState(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}
