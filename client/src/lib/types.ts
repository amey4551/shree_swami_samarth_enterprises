export interface Material {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'sand' | 'stone' | 'limestone' | 'chisel';
  tag?: string;
}

export interface Dimension {
  size: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  initials: string;
  avatarColor: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  material: string;
  message: string;
}
