const HeroSection = () => {
  return (
    <section id="home" className="relative bg-primary text-white">
      <div 
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
            Premium Building Materials for Your Construction Needs
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-lightest opacity-90">
            Serving quality construction materials to builders, contractors, and homeowners for over 15 years. Trusted by industry professionals.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg text-center transition duration-300 shadow-lg"
            >
              Contact Us
            </a>
            <a 
              href="#materials" 
              className="bg-white hover:bg-neutral-light text-primary font-bold py-3 px-8 rounded-lg text-center transition duration-300 shadow-lg"
            >
              Explore Materials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
