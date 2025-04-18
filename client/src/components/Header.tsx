import { useState, useEffect } from "react";
import { contactInfo } from "@/lib/constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white shadow-lg py-2" 
        : "bg-white/95 shadow-md py-3"
    }`}>
      {/* Top contact strip */}
      <div className="hidden lg:block bg-blue-900 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <a href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`} className="flex items-center hover:text-blue-200 transition">
                <span className="material-icon text-xs mr-1">call</span>
                <span>{contactInfo.phone.sales}</span>
              </a>
              <a href={`mailto:${contactInfo.email.info}`} className="flex items-center hover:text-blue-200 transition">
                <span className="material-icon text-xs mr-1">email</span>
                <span>{contactInfo.email.info}</span>
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <p className="flex items-center">
                <span className="material-icon text-xs mr-1">access_time</span>
                <span>Mon-Sat: 9AM-6PM</span>
              </p>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="flex items-center bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icon text-xs mr-1">whatsapp</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center py-1">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-poppins font-bold px-1 py-2 rounded">
                <span className="text-3xl tracking-tight">RETIWALA</span>
              </div>
              <div className="absolute -bottom-2 right-0 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded shadow-sm font-semibold">
                Since 2008
              </div>
            </div>
            <div className="ml-3 text-gray-600 text-sm font-medium hidden md:block">Building Materials Supplier</div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="material-icon text-3xl text-gray-700">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#home" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-gray-100 transition">
              Home
            </a>
            <a href="#materials" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-gray-100 transition">
              Materials
            </a>
            <a href="#projects" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-gray-100 transition">
              Projects
            </a>
            <a href="#testimonials" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-gray-100 transition">
              Testimonials
            </a>
            <a href="#about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-gray-100 transition">
              About
            </a>
            <a href="#contact" className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition flex items-center">
              <span className="material-icon mr-1">contacts</span>
              Contact Us
            </a>
          </nav>
        </div>
        
        {/* Mobile menu dropdown */}
        <div className={`${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="py-4 flex flex-col space-y-3 border-t border-gray-200 mt-2">
            <a 
              href="#home" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-100 rounded-md transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#materials" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-100 rounded-md transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Materials
            </a>
            <a 
              href="#projects" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-100 rounded-md transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#testimonials" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-100 rounded-md transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-100 rounded-md transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-icon mr-1">contacts</span>
              Contact Us
            </a>
          </nav>
          
          {/* Mobile contact options */}
          <div className="grid grid-cols-2 gap-3 py-4 border-t border-gray-200">
            <a 
              href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center bg-green-600 text-white py-2 px-3 rounded-lg"
            >
              <span className="material-icon mr-1">call</span>
              <span>Call Now</span>
            </a>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="flex items-center justify-center bg-green-500 text-white py-2 px-3 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icon mr-1">whatsapp</span>
              <span>WhatsApp</span>
            </a>
            <a 
              href={`mailto:${contactInfo.email.info}`}
              className="flex items-center justify-center bg-blue-600 text-white py-2 px-3 rounded-lg col-span-2"
            >
              <span className="material-icon mr-1">email</span>
              <span>Email: {contactInfo.email.info}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
