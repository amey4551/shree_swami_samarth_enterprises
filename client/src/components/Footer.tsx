import { contactInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer>
      {/* Top section with contact info */}
      <div className="bg-gray-100 py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl text-gray-800 mb-2">Need Building Materials?</h3>
              <p className="text-gray-600">Contact us today for quality products and competitive pricing</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`}
                className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded flex items-center justify-center"
              >
                <span className="material-icon mr-2">call</span>
                Call: {contactInfo.phone.sales}
              </a>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icon mr-2">whatsapp</span>
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="bg-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-white">
                  RETI<span className="text-amber-500">WALA</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">Building Materials Supplier</div>
              </div>
              <p className="text-gray-300 mb-6">
                Premium building materials supplier serving the construction industry since 2008 with quality products and reliable service nationwide.
              </p>
              
              {/* Social icons */}
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="material-icon">facebook</span>
                </a>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} className="bg-green-700 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="material-icon">whatsapp</span>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="material-icon">instagram</span>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="material-icon">linkedin</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500 text-xs">navigate_next</span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#materials" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500 text-xs">navigate_next</span>
                    Materials
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500 text-xs">navigate_next</span>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500 text-xs">navigate_next</span>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500 text-xs">navigate_next</span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500 text-xs">navigate_next</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Materials */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Our Materials</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#materials" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-500">beach_access</span>
                    Premium Sand
                  </a>
                </li>
                <li>
                  <a href="#materials" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-gray-400">grain</span>
                    Stone & Aggregates
                  </a>
                </li>
                <li>
                  <a href="#materials" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-red-400">view_in_ar</span>
                    Limestone Products
                  </a>
                </li>
                <li>
                  <a href="#materials" className="text-gray-300 hover:text-white flex items-center transition-colors duration-300">
                    <span className="material-icon mr-2 text-amber-400">construction</span>
                    Construction Tools
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="material-icon mr-3 text-amber-500 mt-1">location_on</span>
                  <span className="text-gray-300">
                    {contactInfo.address.street}, <br />
                    {contactInfo.address.city}
                  </span>
                </li>
                <li className="flex">
                  <span className="material-icon mr-3 text-green-400 mt-1">access_time</span>
                  <div className="text-gray-300">
                    <p className="mb-1">{contactInfo.hours.weekdays}</p>
                    <p>{contactInfo.hours.weekends}</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="material-icon mr-3 text-amber-500">phone</span>
                  <a href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {contactInfo.phone.sales}
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="material-icon mr-3 text-amber-500">email</span>
                  <a href={`mailto:${contactInfo.email.info}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {contactInfo.email.info}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Retiwala Building Materials. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
