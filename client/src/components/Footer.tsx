import { contactInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-poppins font-bold mb-4">RETIWALA</div>
            <p className="text-neutral-lightest mb-6 opacity-80">
              Premium building materials supplier serving the construction industry with quality products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-lightest hover:text-secondary transition duration-300">
                <span className="material-icon">facebook</span>
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} className="text-neutral-lightest hover:text-secondary transition duration-300">
                <span className="material-icon">whatsapp</span>
              </a>
              <a href="#" className="text-neutral-lightest hover:text-secondary transition duration-300">
                <span className="material-icon">instagram</span>
              </a>
              <a href="#" className="text-neutral-lightest hover:text-secondary transition duration-300">
                <span className="material-icon">linkedin</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">About Us</a></li>
              <li><a href="#materials" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Materials</a></li>
              <li><a href="#projects" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Projects</a></li>
              <li><a href="#testimonials" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Materials</h4>
            <ul className="space-y-2">
              <li><a href="#materials" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300" onClick={() => document.querySelector('button[data-category="sand"]')?.click()}>Sand</a></li>
              <li><a href="#materials" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300" onClick={() => document.querySelector('button[data-category="stone"]')?.click()}>Stone & Aggregates</a></li>
              <li><a href="#materials" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300" onClick={() => document.querySelector('button[data-category="limestone"]')?.click()}>Limestone</a></li>
              <li><a href="#materials" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300" onClick={() => document.querySelector('button[data-category="chisel"]')?.click()}>Construction Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-icon mr-3 text-secondary">location_on</span>
                <span className="opacity-80">{contactInfo.address.street}, {contactInfo.address.city}</span>
              </li>
              <li className="flex items-start">
                <span className="material-icon mr-3 text-secondary">phone</span>
                <span className="opacity-80">
                  <a href={`tel:${contactInfo.phone.sales}`} className="hover:text-secondary transition duration-300">{contactInfo.phone.sales}</a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-icon mr-3 text-secondary">email</span>
                <span className="opacity-80">
                  <a href={`mailto:${contactInfo.email.info}`} className="hover:text-secondary transition duration-300">{contactInfo.email.info}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-light pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-lightest opacity-80 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Retiwala Building Materials. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-neutral-lightest hover:text-secondary opacity-80 hover:opacity-100 transition duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
