export const menuCategories = ['Breakfast', 'Coffee', 'Main Course', 'Desserts', 'Drinks'] as const
export type MenuCategory = typeof menuCategories[number]

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  popular?: boolean
  image: string
  tags?: string[]
}

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: 'b1',
    name: 'Butter Croissant',
    description: 'Flaky, golden-baked French croissant with house-churned butter and seasonal preserve',
    price: 160,
    category: 'Breakfast',
    popular: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
    tags: ['Vegetarian'],
  },
  {
    id: 'b2',
    name: 'Avocado Toast',
    description: 'Sourdough toast with smashed avocado, poached eggs, microgreens and chilli flakes',
    price: 340,
    category: 'Breakfast',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80',
    tags: ['Healthy'],
  },
  {
    id: 'b3',
    name: 'Classic Eggs Benedict',
    description: 'Toasted English muffin, Canadian ham, poached eggs and silky hollandaise',
    price: 420,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&q=80',
  },
  {
    id: 'b4',
    name: 'Açaí Bowl',
    description: 'Blended açaí with banana, topped with granola, fresh berries and honey drizzle',
    price: 390,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80',
    tags: ['Vegan', 'Healthy'],
  },
  // Coffee
  {
    id: 'c1',
    name: 'Signature Cappuccino',
    description: 'Double-shot espresso with velvety micro-foam, dusted with Valrhona cocoa',
    price: 180,
    category: 'Coffee',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
  },
  {
    id: 'c2',
    name: 'Cold Brew',
    description: '18-hour steeped single-origin cold brew, served over crystal-clear ice spheres',
    price: 220,
    category: 'Coffee',
    popular: true,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  },
  {
    id: 'c3',
    name: 'Olea Flat White',
    description: 'Ristretto shots over silky steamed whole milk — our café\'s signature blend',
    price: 200,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80',
  },
  {
    id: 'c4',
    name: 'Saffron Latte',
    description: 'Espresso blended with warm saffron-infused milk and a touch of cardamom',
    price: 260,
    category: 'Coffee',
    popular: true,
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&q=80',
    tags: ['Chef\'s Special'],
  },
  // Main Course
  {
    id: 'm1',
    name: 'Truffle Pasta',
    description: 'Hand-rolled tagliatelle in white truffle cream, wild mushrooms and aged parmesan',
    price: 520,
    category: 'Main Course',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
    tags: ['Vegetarian'],
  },
  {
    id: 'm2',
    name: 'Pan-Seared Salmon',
    description: 'Norwegian salmon fillet, asparagus, lemon-caper butter and herb-roasted potatoes',
    price: 680,
    category: 'Main Course',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
  },
  {
    id: 'm3',
    name: 'Lamb Rogan Josh',
    description: 'Slow-braised Kashmiri lamb in a rich aromatic gravy, saffron rice and naan',
    price: 720,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
    tags: ['Chef\'s Special'],
  },
  {
    id: 'm4',
    name: 'Mushroom Risotto',
    description: 'Arborio rice with porcini, shiitake and cremini mushrooms, truffle oil and pecorino',
    price: 460,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
    tags: ['Vegetarian'],
  },
  // Desserts
  {
    id: 'd1',
    name: 'Crème Brûlée',
    description: 'Vanilla bean custard with a perfectly caramelised sugar crust, fresh berries',
    price: 280,
    category: 'Desserts',
    popular: true,
    image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&q=80',
  },
  {
    id: 'd2',
    name: 'Dark Chocolate Fondant',
    description: 'Warm 72% cacao fondant with molten centre, vanilla bean ice cream',
    price: 320,
    category: 'Desserts',
    popular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
  },
  {
    id: 'd3',
    name: 'Saffron Panna Cotta',
    description: 'Delicate saffron-infused Italian panna cotta with rose water and pistachio crumble',
    price: 260,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&q=80',
    tags: ['Chef\'s Special'],
  },
  // Drinks
  {
    id: 'dr1',
    name: 'Rose Garden Cocktail',
    description: 'Hendrick\'s gin, rose lychee syrup, elderflower tonic, crystallised rose petal',
    price: 540,
    category: 'Drinks',
    popular: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
    tags: ['Signature'],
  },
  {
    id: 'dr2',
    name: 'Spiced Mango Mocktail',
    description: 'Alphonso mango purée, kokum, chaat masala rim, mint, sparkling water',
    price: 220,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80',
    tags: ['Non-Alcoholic'],
  },
  {
    id: 'dr3',
    name: 'Olea Spritz',
    description: 'Aperol, Prosecco, blood orange soda, fresh thyme, dehydrated orange wheel',
    price: 580,
    category: 'Drinks',
    popular: true,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80',
    tags: ['Signature'],
  },
]

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    text: 'Olea is the finest café experience Delhi has to offer. The Saffron Latte alone is worth the visit — fragrant, delicate and utterly luxurious. The ambiance transports you completely.',
    date: 'March 2024',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    role: 'Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: 'I\'ve dined across five-star properties in Delhi but Olea\'s Truffle Pasta rivals the best in the world. The service is impeccable and the atmosphere is genuinely elevated.',
    date: 'February 2024',
  },
  {
    id: 't3',
    name: 'Aisha Khan',
    role: 'Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    text: 'From the moment you walk in, every detail has been considered. The space is a masterclass in hospitality design. I return every weekend without exception.',
    date: 'January 2024',
  },
  {
    id: 't4',
    name: 'Vikram Nair',
    role: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    text: 'The live music evenings at Olea are something genuinely special. Paired with the Rose Garden Cocktail and you have a perfect Delhi evening. My go-to for client dinners.',
    date: 'April 2024',
  },
  {
    id: 't5',
    name: 'Neha Kapoor',
    role: 'Chef & Food Writer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    text: 'As someone who critiques restaurants professionally, Olea consistently surprises me. The sourcing is thoughtful, the execution precise and the warmth of the team unmatched.',
    date: 'May 2024',
  },
]

export const galleryImages = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    alt: 'Olea Café Interior',
    height: 'tall',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: 'Coffee Art',
    height: 'short',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Fine Dining Setup',
    height: 'tall',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80',
    alt: 'Signature Cocktail',
    height: 'short',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80',
    alt: 'Chef\'s Plating',
    height: 'short',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
    alt: 'Café Ambiance',
    height: 'tall',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
    alt: 'Dessert Presentation',
    height: 'short',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    alt: 'Restaurant Interior',
    height: 'tall',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1452967712862-0cca1839ff27?w=600&q=80',
    alt: 'Evening Ambiance',
    height: 'short',
  },
]

export const stats = [
  { value: 4.8, suffix: '+', label: 'Google Rating', prefix: '' },
  { value: 50, suffix: 'k+', label: 'Happy Customers', prefix: '' },
  { value: 8, suffix: '+', label: 'Years of Service', prefix: '' },
  { value: 40, suffix: '+', label: 'Signature Dishes', prefix: '' },
]
