import { testimonials } from "@/lib/constants";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            Our reputation is built on customer satisfaction. Here's what some of our clients have to say about our materials and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card bg-neutral-lightest rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <span className="material-icon text-secondary text-3xl">format_quote</span>
              </div>
              <p className="text-neutral-dark mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`${testimonial.avatarColor} h-12 w-12 rounded-full flex items-center justify-center text-white font-medium`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-neutral-medium text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
