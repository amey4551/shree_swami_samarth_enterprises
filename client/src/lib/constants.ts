import { Material, Project, Testimonial } from "./types";
import sand1 from "../../../public/images/products/sand-1.jpg";
import sand2 from "../../../public/images/products/sand-2.jpg";
import sand3 from "../../../public/images/products/sand-3.jpg";
import stone1 from "../../../public/images/products/red-stone-3.jpg";
import stone2 from "../../../public/images/products/red-stone-4.jpg";
import stone3 from "../../../public/images/products/red-tone.jpg";
import chisel1 from "../../../public/images/products/khadi.jpg";
import chisel2 from "../../../public/images/products/khadi3.jpg";
import chisel3 from "../../../public/images/products/khadi4.jpg";
import project1 from "../../../public/images/Construction site/1736272661641.jpg";
import project2 from "../../../public/images/Construction site/1736272702535.jpg";
import project3 from "../../../public/images/Construction site/1736272732978.jpg";

// Sand products
export const sandProducts: Material[] = [
  {
    id: 1,
    title: "Construction Sand",
    description:
      "High-quality river sand perfect for concrete mixing and general construction work.",
    image: sand1,
    category: "sand",
    tag: "Available in Bulk",
  },
  {
    id: 2,
    title: "Fine Plastering Sand",
    description:
      "Finely sieved river sand ideal for plastering work and smooth finishes.",
    image: sand2,
    category: "sand",
    tag: "Premium Quality",
  },
  {
    id: 3,
    title: "Coarse Sand",
    description:
      "Coarser grade sand suitable for foundation work , slab , column and plinth filling , water proofing , double coat plaster and heavy-duty applications. ",
    image: sand3,
    category: "sand",
    tag: "Bulk Delivery Available",
  },
];

// Stone products
export const stoneProducts: Material[] = [
  {
    id: 4,
    title: "Stone aggregate (20 mm)",
    description:
      "Durable stone for construction walls, columns, plinths, beams and foundation.",
    image: chisel1,
    category: "stone",
    tag: "Multiple Sizes",
  },
  {
    id: 5,
    title: "Stone aggregate (10 mm)",
    description:
      "Crushed stone aggregate for concrete mixing , road construction and different construction application.",
    image: chisel2,
    category: "stone",
    tag: "High Strength",
  },
  {
    id: 6,
    title: "Mixed aggregate ",
    description: "Combination of 10mm and 20mm.",
    image: chisel3,
    category: "stone",
    tag: "Multiple Grades",
  },
];

// Limestone products
export const limestoneProducts: Material[] = [
  {
    id: 7,
    title: "Red Limestone Blocks (9 inches)",
    description:
      "Premium quality red limestone blocks for construction and decorative purposes.",
    image: stone1,
    category: "limestone",
    tag: "Custom Sizes Available",
  },
  {
    id: 8,
    title: "Red limestone blocks (10 inches)",
    description:
      "Polished limestone tiles and slabs for flooring and cladding applications.",
    image: stone2,
    category: "limestone",
    tag: "Multiple Finishes",
  },
  {
    id: 9,
    title: "Interior Limestone",
    description:
      "Beautiful red limestone for interior walls, providing natural elegance to any space.",
    image: stone3,
    category: "limestone",
    tag: "Interior Design",
  },
];

// Tool products
// export const toolProducts: Material[] = [
//   {
//     id: 10,
//     title: 'Stone Chisels',
//     description: 'Professional-grade stone chisels for masonry work.',
//     image: project,
//     category: 'chisel'
//   },
//   {
//     id: 11,
//     title: 'Masonry Hammers',
//     description: 'Durable hammers specifically designed for stone and brick work.',
//     image: project,
//     category: 'chisel'
//   },
//   {
//     id: 12,
//     title: 'Trowels & Floats',
//     description: 'Essential tools for concrete and mortar work.',
//     image: 'https://images.pexels.com/photos/4792727/pexels-photo-4792727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'chisel'
//   },
//   {
//     id: 13,
//     title: 'Safety Equipment',
//     description: 'Helmets, gloves, and safety gear for construction workers.',
//     image: 'https://images.pexels.com/photos/2499007/pexels-photo-2499007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'chisel'
//   }
// ];

// Projects
export const projectItems: Project[] = [
  {
    id: 1,
    title: "Thivim",
    location: "Residential Project, Kerala",
    description:
      "Supplied premium red limestone for this modern interior with elegant shelf design.",
    image: project1,
  },
  {
    id: 2,
    title: "Porvorim",
    location: "Construction Site, Tamil Nadu",
    description:
      "Provided precision-cut red limestone blocks for this residential construction project.",
    image: project2,
  },
  {
    id: 3,
    title: "Madgaon",
    location: "Infrastructure Development, Maharashtra",
    description:
      "Supplied large quantities of high-quality construction river sand for foundation work.",
    image: project3,
  },
  {
    id: 4,
    title: "Mapusa",
    location: "Construction Material Center, Gujarat",
    description:
      "Processing and supplying premium fine river sand for plastering and concrete work.",
    image: project1,
  },
  {
    id: 5,
    title: "Ponda (Mardol)",
    location: "Commercial Project, Bangalore",
    description:
      "Supplied khadi stone aggregates for concrete mixing and foundation work.",
    image: project2,
  },
  {
    id: 6,
    title: "Panjim",
    location: "Heritage Restoration, Rajasthan",
    description:
      "Provided premium red stone blocks for traditional masonry and architectural features.",
    image: project3,
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Retiwala has been our trusted supplier for river sand and stone for over 5 years. Their materials are consistently high quality, and their delivery is always on time. Highly recommended for any construction project.",
    author: "Vishnudas Kanekar ",
    position: "GHD INFRA",
    initials: "VK",
    avatarColor: "bg-primary",
  },
  {
    id: 2,
    quote:
      "We needed a large quantity of premium river sand for our residential project, and Retiwala delivered beyond our expectations. Their material quality helped us achieve superior construction results.",
    author: "Shailesh Kamat ",
    position: "KAMAT CREATIONS",
    initials: "SK",
    avatarColor: "bg-accent",
  },
  {
    id: 3,
    quote:
      "The red limestone blocks we purchased from Retiwala were excellent in quality and perfectly cut to our specifications. Their attention to detail and customer service is outstanding.",
    author: "Anil D’souza",
    position: "GOAN PARADISE",
    initials: "AD",
    avatarColor: "bg-secondary",
  },
];

// Red Limestone dimensions
export const redLimestoneDimensions = [
  { size: '9" × 14" × 7"', label: "Standard (चिरा)" },
  { size: "100 sq.ft.", label: "VERTICAL: 120 Blocks" },
  { size: "100 sq.ft.", label: "HORIZONTAL: 150 Blocks" },
  // { size: 'Custom', label: 'Available' }
];

// Limestone Tiles dimensions
export const limestoneTilesDimensions = [
  { size: '12" × 12"', label: "Tiles" },
  { size: '24" × 24"', label: "Slabs" },
  { size: "Custom", label: "Available" },
];



// Contact info
export const contactInfo = {
  address: {
    street: "Shop No. 38, Ground Floor, Gera’s Imperium Premio, Near Gera School Kadamba Plateau",
    city: "Old-Goa",
    country: "India",
  },
  phone: {
    sales: "+91 94232 78813",
    support: "91 94232 78813",
  },
  email: {
    sales: "infoshreeswamisamarth@gmail.com",
    info: "infoshreeswamisamarth@gmail.com",
  },
  hours: {
    weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
    weekends: "Sunday: Closed",
  },
  whatsapp: "+91 94232 78813",
};
