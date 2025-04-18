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
    title: 'Limestone Interior',
    location: 'Residential Project, Kerala',
    description: 'Supplied premium red limestone for this modern interior with elegant shelf design.',
    image: '/images/products/red-stone-use.jpg'
  },
  {
    id: 2,
    title: 'Red Stone Blocks',
    location: 'Construction Site, Tamil Nadu',
    description: 'Provided precision-cut red limestone blocks for this residential construction project.',
    image: '/images/products/red-stone-4.jpg'
  },
  {
    id: 3,
    title: 'Sand Supply Project',
    location: 'Infrastructure Development, Maharashtra',
    description: 'Supplied large quantities of high-quality construction sand for foundation work.',
    image: '/images/products/sand-1.jpg'
  },
  {
    id: 4,
    title: 'Fine Sand Processing',
    location: 'Construction Material Center, Gujarat',
    description: 'Processing and supplying premium fine sand for plastering and concrete work.',
    image: '/images/products/sand-4.jpg'
  },
  {
    id: 5,
    title: 'Stone Aggregates',
    location: 'Commercial Project, Bangalore',
    description: 'Supplied khadi stone aggregates for concrete mixing and foundation work.',
    image: '/images/products/khadi.jpg'
  },
  {
    id: 6,
    title: 'Red Stone Masonry',
    location: 'Heritage Restoration, Rajasthan',
    description: 'Provided premium red stone blocks for traditional masonry and architectural features.',
    image: '/images/products/red-tone.jpg'
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
  { size: '9" × 14" × 7"', label: 'Standard (चिरा)' },
  { size: '100 sq.ft.', label: 'VERTICAL: 120 Blocks' },
  { size: '100 sq.ft.', label: 'HORIZONTAL: 150 Blocks' },
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
