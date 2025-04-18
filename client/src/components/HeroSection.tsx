import { contactInfo } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section id="home" className="relative text-gray-800">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gray-900/30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.85)',
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="p-6 md:p-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-3">
              Premium Building Materials <span className="text-amber-700">Supplier</span>
            </h1>
            
            <div className="h-1 w-24 bg-amber-700 mb-5"></div>
            
            <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-700">
              Quality Sand, Stone & Limestone
            </h2>
            
            <p className="text-base md:text-lg mb-8 text-gray-600 max-w-2xl">
              Serving contractors and homeowners for over 15 years with premium construction materials delivered promptly and reliably to your project site.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`} 
                className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded text-center transition duration-300 shadow-md flex items-center justify-center"
              >
                <span className="material-icon mr-2">call</span>
                Call For Pricing
              </a>
              <a 
                href="#materials" 
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded text-center transition duration-300 shadow-md flex items-center justify-center"
              >
                <span className="material-icon mr-2">category</span>
                Browse Materials
              </a>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded text-center transition duration-300 shadow-md flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icon mr-2">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Banner */}
      <div className="bg-gray-800 py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">15+</p>
              <p className="text-sm text-white">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">500+</p>
              <p className="text-sm text-white">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">100%</p>
              <p className="text-sm text-white">Quality Materials</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">24/7</p>
              <p className="text-sm text-white">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
