import { contactInfo } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white">
      <div 
        className="absolute inset-0 bg-black opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>
      
      {/* Quick Contact Bar for Mobile */}
      <div className="absolute top-0 w-full bg-black bg-opacity-60 py-2 md:hidden z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`} className="flex items-center text-white text-sm">
            <span className="material-icon mr-1 text-green-400">phone</span>
            <span className="font-medium">{contactInfo.phone.sales}</span>
          </a>
          <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center text-white text-sm">
            <span className="material-icon mr-1 text-green-400">whatsapp</span>
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-4 drop-shadow-lg">
              Premium Building <span className="text-yellow-300">Materials</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-neutral-lightest">
              Quality Sand, Stone & Limestone
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-lightest max-w-2xl mx-auto md:mx-0">
              Serving contractors and homeowners for over 15 years with premium construction materials delivered on time.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`} 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-center transition duration-300 shadow-lg flex items-center justify-center"
              >
                <span className="material-icon mr-2">call</span>
                Call Now
              </a>
              <a 
                href="#materials" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-center transition duration-300 shadow-lg flex items-center justify-center"
              >
                <span className="material-icon mr-2">home_repair_service</span>
                View Materials
              </a>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-center transition duration-300 shadow-lg flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icon mr-2">whatsapp</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Banner */}
      <div className="bg-black bg-opacity-60 py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">500+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">100%</p>
              <p className="text-sm">Quality Materials</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">24/7</p>
              <p className="text-sm">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
