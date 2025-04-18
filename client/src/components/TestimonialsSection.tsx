import { useEffect, useState } from "react";
import { testimonials } from "@/lib/constants";

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any, isActive: boolean }) => {
  return (
    <div 
      className={`transition-all duration-500 transform ${
        isActive 
          ? "scale-100 opacity-100 translate-y-0 z-10" 
          : "scale-95 opacity-40 translate-y-4 z-0"
      }`}
    >
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center mb-4">
          <span className="material-icon text-yellow-500 text-3xl">star</span>
          <span className="material-icon text-yellow-500 text-3xl">star</span>
          <span className="material-icon text-yellow-500 text-3xl">star</span>
          <span className="material-icon text-yellow-500 text-3xl">star</span>
          <span className="material-icon text-yellow-500 text-3xl">star</span>
        </div>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center">
          <div className={`bg-gradient-to-br from-blue-500 to-purple-600 h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
            {testimonial.initials}
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
            <p className="text-gray-500 text-sm">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">TRUSTED BY PROFESSIONALS</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about our quality materials and reliable service.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large screens - side by side */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          {/* Mobile - single testimonial */}
          <div className="md:hidden">
            <TestimonialCard 
              testimonial={testimonials[activeIndex]} 
              isActive={true}
            />
            
            {/* Mobile navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Trusted By Leading Construction Companies</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <div className="text-center">
              <span className="material-icon text-5xl text-gray-500">apartment</span>
              <p className="font-medium text-gray-700 mt-2">BuildRight Ltd.</p>
            </div>
            <div className="text-center">
              <span className="material-icon text-5xl text-gray-500">business</span>
              <p className="font-medium text-gray-700 mt-2">Skyline Developers</p>
            </div>
            <div className="text-center">
              <span className="material-icon text-5xl text-gray-500">domain</span>
              <p className="font-medium text-gray-700 mt-2">Creative Spaces</p>
            </div>
            <div className="text-center">
              <span className="material-icon text-5xl text-gray-500">foundation</span>
              <p className="font-medium text-gray-700 mt-2">Metro Contractors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
