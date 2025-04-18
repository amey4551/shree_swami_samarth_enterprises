import { Material, Project, Testimonial } from './types';

// Sand products
export const sandProducts: Material[] = [
  {
    id: 1,
    title: 'Construction Sand',
    description: 'High-quality sand perfect for concrete mixing and general construction work.',
    image: '/images/products/sand-4.jpg',
    category: 'sand',
    tag: 'Available in Bulk'
  },
  {
    id: 2,
    title: 'Fine Plastering Sand',
    description: 'Finely sieved sand ideal for plastering work and smooth finishes.',
    image: '/images/products/sand-3.jpg',
    category: 'sand',
    tag: 'Premium Quality'
  },
  {
    id: 3,
    title: 'Coarse Sand',
    description: 'Coarser grade sand suitable for foundation work and heavy-duty applications.',
    image: '/images/products/sand-2.jpg',
    category: 'sand',
    tag: 'Bulk Delivery Available'
  }
];

// Stone products
export const stoneProducts: Material[] = [
  {
    id: 4,
    title: 'Building Stones',
    description: 'Durable stones for construction, walls, and foundations.',
    image: '/images/products/red-stone-3.jpg',
    category: 'stone',
    tag: 'Multiple Sizes'
  },
  {
    id: 5,
    title: 'Stone Aggregates',
    description: 'Crushed stone aggregates for concrete mixing and road construction.',
    image: '/images/products/khadi.jpg',
    category: 'stone',
    tag: 'High Strength'
  },
  {
    id: 6,
    title: 'Crushed Stone',
    description: 'Various grades of crushed stone for different construction applications.',
    image: '/images/products/red-tone.jpg',
    category: 'stone',
    tag: 'Multiple Grades'
  }
];

// Limestone products
export const limestoneProducts: Material[] = [
  {
    id: 7,
    title: 'Red Limestone Blocks',
    description: 'Premium quality red limestone blocks for construction and decorative purposes.',
    image: '/images/products/red-stone-4.jpg',
    category: 'limestone',
    tag: 'Custom Sizes Available'
  },
  {
    id: 8,
    title: 'Limestone Tiles & Slabs',
    description: 'Polished limestone tiles and slabs for flooring and cladding applications.',
    image: '/images/products/red-stone-size.jpg',
    category: 'limestone',
    tag: 'Multiple Finishes'
  },
  {
    id: 9,
    title: 'Interior Limestone',
    description: 'Beautiful red limestone for interior walls, providing natural elegance to any space.',
    image: '/images/products/red-stone-use.jpg',
    category: 'limestone',
    tag: 'Interior Design'
  }
];

// Tool products
export const toolProducts: Material[] = [
  {
    id: 10,
    title: 'Stone Chisels',
    description: 'Professional-grade stone chisels for masonry work.',
    image: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  },
  {
    id: 11,
    title: 'Masonry Hammers',
    description: 'Durable hammers specifically designed for stone and brick work.',
    image: 'https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  },
  {
    id: 12,
    title: 'Trowels & Floats',
    description: 'Essential tools for concrete and mortar work.',
    image: 'https://images.pexels.com/photos/4792727/pexels-photo-4792727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  },
  {
    id: 13,
    title: 'Safety Equipment',
    description: 'Helmets, gloves, and safety gear for construction workers.',
    image: 'https://images.pexels.com/photos/2499007/pexels-photo-2499007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  }
];

// Projects
export const projectItems: Project[] = [
  {
    id: 1,
    title: 'Sunrise Heights',
    location: 'Residential Complex, Mumbai',
    description: 'Supplied premium sand and stone for this 200-unit residential complex.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Tech Park Tower',
    location: 'Commercial Building, Pune',
    description: 'Provided limestone and crushed stone for this modern 12-story office building.',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'East-West Highway',
    location: 'Infrastructure Project, Gujarat',
    description: 'Supplied large quantities of aggregate and sand for this 50km highway project.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'St. Mary\'s Academy',
    location: 'Educational Institution, Delhi',
    description: 'Provided red limestone blocks and construction sand for this prestigious school.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Grand Plaza Mall',
    location: 'Retail Complex, Bangalore',
    description: 'Supplied premium quality sand, stone, and limestone for this 5-floor shopping mall.',
    image: 'https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    title: 'Serenity Villas',
    location: 'Luxury Residential, Goa',
    description: 'Provided premium red stone and decorative limestone for these high-end villas.',
    image: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Retiwala has been our trusted supplier for sand and stone for over 5 years. Their materials are consistently high quality, and their delivery is always on time. Highly recommended for any construction project.",
    author: "Rajesh Kumar",
    position: "Project Manager, BuildRight Construction",
    initials: "RK",
    avatarColor: "bg-primary"
  },
  {
    id: 2,
    quote: "We needed a large quantity of premium sand for our residential project, and Retiwala delivered beyond our expectations. Their material quality helped us achieve superior construction results.",
    author: "Sunita Patel",
    position: "Director, Skyline Developers",
    initials: "SP",
    avatarColor: "bg-accent"
  },
  {
    id: 3,
    quote: "The red limestone blocks we purchased from Retiwala were excellent in quality and perfectly cut to our specifications. Their attention to detail and customer service is outstanding.",
    author: "Arun Sharma",
    position: "Architect, Creative Spaces",
    initials: "AS",
    avatarColor: "bg-secondary"
  }
];

// Red Limestone dimensions
export const redLimestoneDimensions = [
  { size: '9" × 4" × 3"', label: 'Standard' },
  { size: '12" × 6" × 4"', label: 'Large' },
  { size: 'Custom', label: 'Available' }
];

// Limestone Tiles dimensions
export const limestoneTilesDimensions = [
  { size: '12" × 12"', label: 'Tiles' },
  { size: '24" × 24"', label: 'Slabs' },
  { size: 'Custom', label: 'Available' }
];

// Contact info
export const contactInfo = {
  address: {
    street: '123 Construction Lane, Industrial Area',
    city: 'Mumbai, Maharashtra 400001',
    country: 'India',
  },
  phone: {
    sales: '+91 9876-543-210',
    support: '+91 9876-543-211',
  },
  email: {
    sales: 'sales@retiwala.com',
    info: 'info@retiwala.com',
  },
  hours: {
    weekdays: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    weekends: 'Sunday: Closed',
  },
  whatsapp: '919876543210',
};
