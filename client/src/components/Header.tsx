import { useState } from "react";
import { contactInfo } from "@/lib/constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-primary font-poppins font-bold text-3xl">RETIWALA</div>
              <div className="ml-2 text-secondary text-sm font-montserrat hidden md:block">Building Material Suppliers</div>
            </div>
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="material-icon">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
          
          {/* Contact Strip - Always Visible on Desktop */}
          <div className="hidden md:flex items-center space-x-4 bg-primary text-white px-4 py-2 rounded-lg">
            <a href={`tel:${contactInfo.phone.sales}`} className="flex items-center hover:bg-primary-light px-2 py-1 rounded transition duration-300">
              <span className="material-icon mr-1">phone</span>
              <span>{contactInfo.phone.sales}</span>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center hover:bg-primary-light px-2 py-1 rounded transition duration-300">
              <span className="material-icon mr-1">chat</span>
              <span>WhatsApp</span>
            </a>
            <a href={`mailto:${contactInfo.email.info}`} className="flex items-center hover:bg-primary-light px-2 py-1 rounded transition duration-300">
              <span className="material-icon mr-1">email</span>
              <span>Email Us</span>
            </a>
          </div>
          
          {/* Mobile menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-2`}>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="px-3 py-2 hover:bg-neutral-light rounded-md" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="px-3 py-2 hover:bg-neutral-light rounded-md" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#materials" className="px-3 py-2 hover:bg-neutral-light rounded-md" onClick={() => setMobileMenuOpen(false)}>Materials</a>
              <a href="#projects" className="px-3 py-2 hover:bg-neutral-light rounded-md" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#testimonials" className="px-3 py-2 hover:bg-neutral-light rounded-md" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="px-3 py-2 hover:bg-neutral-light rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
            
            <div className="mt-3 flex flex-col space-y-2 bg-primary text-white p-3 rounded-lg">
              <a href={`tel:${contactInfo.phone.sales}`} className="flex items-center">
                <span className="material-icon mr-1">phone</span>
                <span>{contactInfo.phone.sales}</span>
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center">
                <span className="material-icon mr-1">chat</span>
                <span>WhatsApp</span>
              </a>
              <a href={`mailto:${contactInfo.email.info}`} className="flex items-center">
                <span className="material-icon mr-1">email</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center mt-4">
          <div className="flex space-x-8">
            <a href="#home" className="px-3 py-2 text-neutral-dark hover:text-primary font-medium">Home</a>
            <a href="#about" className="px-3 py-2 text-neutral-dark hover:text-primary font-medium">About Us</a>
            <a href="#materials" className="px-3 py-2 text-neutral-dark hover:text-primary font-medium">Materials</a>
            <a href="#projects" className="px-3 py-2 text-neutral-dark hover:text-primary font-medium">Projects</a>
            <a href="#testimonials" className="px-3 py-2 text-neutral-dark hover:text-primary font-medium">Testimonials</a>
            <a href="#contact" className="px-3 py-2 text-neutral-dark hover:text-primary font-medium">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
