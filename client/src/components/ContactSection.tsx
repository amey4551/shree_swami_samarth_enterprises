import { useState, FormEvent, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/constants";
import { ContactForm } from "@/lib/types";
import { IoLogoWhatsapp } from "react-icons/io";

// Replace this with your actual EmailJS details
const EMAILJS_SERVICE_ID = "service_js0ddbg";
const EMAILJS_TEMPLATE_ID = "template_ys0996n";
const EMAILJS_PUBLIC_KEY = "jrZyHs4wj6PCJdf9k";

// Define a type for the EmailJS global object
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, unknown>,
        publicKey: string
      ) => Promise<{ status: number; text: string }>;
    };
  }
}

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    material: "",
    message: "",
  });

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.material ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Check if EmailJS is loaded
    if (!window.emailjs) {
      toast({
        title: "Error",
        description: "Email service is not available right now. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get current date and time for the email
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      
      // Prepare template parameters - these match the variables in your template
      const templateParams = {
        name: formData.name, // This is used in "A message by {{name}} has been received"
        from_name: formData.name, // This is used in the template body
        from_email: formData.email,
        time: formattedTime,
        phone: formData.phone,
        material: formData.material,
        message: formData.message,
        to_name: "Admin", // Optional: recipient name
        // You can also specify a reply_to if needed
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          material: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            Have questions about our materials or need a quote? Get in touch
            with us for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                Get in Touch
              </h3>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 94232 78813"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="material"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Material Interested In
                  </label>
                  <select
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Material</option>
                    <option value="sand">Sand</option>
                    <option value="stone">Stone & Aggregates</option>
                    <option value="limestone">Limestone</option>
                    <option value="tools">Construction Tools</option>
                    <option value="other">Other Materials</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please provide details about your requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                Contact Information
              </h3>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <span className="material-icon text-secondary text-2xl mr-4">
                    location_on
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Office Address</h4>
                    <p className="text-gray-500">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}
                      <br />
                      {contactInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="material-icon text-secondary text-2xl mr-4">
                    phone
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Phone Numbers</h4>
                    <p className="text-gray-500 mb-2">
                      <a
                        href={`tel:${contactInfo.phone.sales}`}
                        className="hover:text-primary transition duration-300"
                      >
                        {contactInfo.phone.sales}
                      </a>
                      <span className="text-sm"> (Sales)</span>
                    </p>
                    <p className="text-gray-500">
                      <a
                        href={`tel:${contactInfo.phone.support}`}
                        className="hover:text-primary transition duration-300"
                      >
                        {contactInfo.phone.support}
                      </a>
                      <span className="text-sm"> (Support)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="material-icon text-secondary text-2xl mr-4">
                    email
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Email Addresses</h4>
                    <p className="text-gray-500 mb-2">
                      <a
                        href={`mailto:${contactInfo.email.sales}`}
                        className="hover:text-primary transition duration-300"
                      >
                        {contactInfo.email.sales}
                      </a>
                      <span className="text-sm"> (Sales Inquiries)</span>
                    </p>
                    <p className="text-gray-500">
                      <a
                        href={`mailto:${contactInfo.email.info}`}
                        className="hover:text-primary transition duration-300"
                      >
                        {contactInfo.email.info}
                      </a>
                      <span className="text-sm"> (General Information)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="material-icon text-secondary text-2xl mr-4">
                    schedule
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-500 mb-1">
                      {contactInfo.hours.weekdays}
                    </p>
                    <p className="text-gray-500">
                      {contactInfo.hours.weekends}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-neutral-light hover:bg-neutral-medium text-neutral-dark hover:text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <span className="material-icon">facebook</span>
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    className="bg-neutral-light hover:bg-neutral-medium text-neutral-dark hover:text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <IoLogoWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                Location Map
              </h3>
              <div className="w-full h-64 bg-neutral-light rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.29289864130166!2d73.91802477753892!3d15.501292743578492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbf000582d61b%3A0x817a839b717803cc!2sCasa%20Baptista!5e0!3m2!1sen!2sin!4v1745007614975!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Kismat Colony Location"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;