import redStoneImage from "@assets/red stone 4.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative texture-overlay min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-black opacity-60 z-0"
        style={{
          backgroundImage: `url(${redStoneImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      
      {/* Texture overlay for a rugged look */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20L0 20z' /%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-20">
        <div className="max-w-4xl">
          <div className="bg-earth-clayDark/80 backdrop-blur-sm p-6 md:p-10 rounded-md border-l-4 border-earth-sand shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="block text-earth-sandLight opacity-90">RETIWALA</span>
              Premium Building Materials
            </h1>
            <p className="text-lg md:text-xl mb-8 text-earth-sandLight opacity-90 font-medium">
              Providing high-quality sand, stones, khadi, and red limestone for all your construction needs. 
              Trusted by contractors and builders for over 15 years.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-earth-sand hover:bg-earth-sandDark text-earth-clayDark font-bold py-3 px-8 rounded text-center transition duration-300 shadow-lg"
              >
                Contact Us
              </a>
              <a 
                href="#materials" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-earth-sand font-bold py-3 px-8 rounded text-center transition duration-300"
              >
                Explore Materials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
