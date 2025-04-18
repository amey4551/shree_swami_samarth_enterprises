import { Material, Project, Testimonial } from './types';
import sand1 from '@assets/sand 1.jpg';
import sand2 from '@assets/sand 2.jpg';
import sand3 from '@assets/sand 3.jpg';
import sand4 from '@assets/sand 4.jpg';
import khadi from '@assets/khadi.jpg';
import khadi2 from '@assets/khadi 2.jpg';
import khadi3 from '@assets/khadi 3.jpg';
import khadi4 from '@assets/khadi 4.jpg';
import redStone3 from '@assets/reds stone 3.jpg';
import redStone4 from '@assets/red stone 4.jpg';
import redStoneUse from '@assets/red stone use.jpg';
import redStoneSize from '@assets/red stone size.jpg';

// Sand products
export const sandProducts: Material[] = [
  {
    id: 1,
    title: 'Construction Sand',
    description: 'High-quality sand perfect for concrete mixing and general construction work.',
    image: sand1,
    category: 'sand',
    tag: 'Available in Bulk'
  },
  {
    id: 2,
    title: 'Fine Plastering Sand',
    description: 'Finely sieved sand ideal for plastering work and smooth finishes.',
    image: sand3,
    category: 'sand',
    tag: 'Premium Quality'
  },
  {
    id: 3,
    title: 'River Sand',
    description: 'Natural river sand, washed and screened, perfect for premium construction work.',
    image: sand4,
    category: 'sand',
    tag: 'Bulk Delivery Available'
  }
];

// Stone products
export const stoneProducts: Material[] = [
  {
    id: 4,
    title: 'Khadi Building Stones',
    description: 'Premium quality khadi stones ideal for walls, foundations, and structural construction.',
    image: khadi,
    category: 'stone',
    tag: 'Multiple Sizes'
  },
  {
    id: 5,
    title: 'Stone Aggregates',
    description: 'Crushed stone aggregates for concrete mixing and road construction. Superior durability.',
    image: khadi2,
    category: 'stone',
    tag: 'High Strength'
  },
  {
    id: 6,
    title: 'Processed Stone Material',
    description: 'Various grades of processed stone for specialized construction applications.',
    image: khadi4,
    category: 'stone',
    tag: 'Multiple Grades'
  }
];

// Limestone products
export const limestoneProducts: Material[] = [
  {
    id: 7,
    title: 'Premium Red Limestone',
    description: 'Premium quality red limestone blocks for construction and decorative purposes. Known for durability.',
    image: redStone4,
    category: 'limestone',
    tag: 'Custom Sizes Available'
  },
  {
    id: 8,
    title: 'Red Limestone for Interiors',
    description: 'Specially processed red limestone ideal for interior walls and design applications.',
    image: redStoneUse,
    category: 'limestone',
    tag: 'Interior Grade'
  },
  {
    id: 9,
    title: 'Dimensional Red Limestone',
    description: 'Precision-cut red limestone blocks with exact dimensions for specialized construction.',
    image: redStoneSize,
    category: 'limestone',
    tag: 'Standardized Dimensions'
  }
];

// Tool products
export const toolProducts: Material[] = [
  {
    id: 9,
    title: 'Stone Chisels',
    description: 'Professional-grade stone chisels for masonry work.',
    image: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  },
  {
    id: 10,
    title: 'Masonry Hammers',
    description: 'Durable hammers specifically designed for stone and brick work.',
    image: 'https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  },
  {
    id: 11,
    title: 'Trowels & Floats',
    description: 'Essential tools for concrete and mortar work.',
    image: 'https://images.pexels.com/photos/4792727/pexels-photo-4792727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chisel'
  },
  {
    id: 12,
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
