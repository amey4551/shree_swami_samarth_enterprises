const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <div className="bg-secondary h-72 w-72 absolute -top-4 -left-4 rounded-lg"></div>
              <img 
                src="/images/products/red-stone-use.jpg" 
                alt="Premium red limestone in interior construction" 
                className="relative z-10 rounded-lg shadow-xl object-cover h-80 w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">About Retiwala</h2>
            <div className="h-1 w-20 bg-secondary mb-6"></div>
            <p className="text-neutral-dark mb-6">
              Founded with a vision to provide high-quality building materials to the construction industry, Retiwala has established itself as a trusted name in the market. With over 15 years of experience, we understand the importance of quality and timely delivery in construction projects.
            </p>
            <p className="text-neutral-dark mb-6">
              We specialize in supplying premium sand, limestone, building stones, and other essential construction materials. Our team of experts ensures that every product meets the highest standards of quality and durability.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <span className="material-icon text-secondary mr-2">verified</span>
                <span className="font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center">
                <span className="material-icon text-secondary mr-2">local_shipping</span>
                <span className="font-medium">Timely Delivery</span>
              </div>
              <div className="flex items-center">
                <span className="material-icon text-secondary mr-2">support_agent</span>
                <span className="font-medium">Expert Support</span>
              </div>
              <div className="flex items-center">
                <span className="material-icon text-secondary mr-2">price_check</span>
                <span className="font-medium">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
