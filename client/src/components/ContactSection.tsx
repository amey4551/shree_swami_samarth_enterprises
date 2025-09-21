import { useState, FormEvent, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/constants";
import { ContactForm } from "@/lib/types";
import { IoLogoWhatsapp } from "react-icons/io";

// Replace these with your actual EmailJS details after setup
const EMAILJS_SERVICE_ID = "service_js0ddbg"; // Replace with your Gmail service ID
const EMAILJS_TEMPLATE_ID = "template_ys0996n"; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = "jrZyHs4wj6PCJdf9k"; // Replace with your public key

// EmailJS type definitions
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
  const [emailJsLoaded, setEmailJsLoaded] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    material: "",
    message: "",
  });

  // Load EmailJS script and initialize
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        setEmailJsLoaded(true);
        console.log("✅ EmailJS loaded successfully");
      }
    };
    
    script.onerror = () => {
      console.error("❌ Failed to load EmailJS");
      toast({
        title: "Service Error",
        description: "Email service failed to load. Please refresh the page.",
        variant: "destructive",
      });
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [toast]);

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

  const validateForm = (): boolean => {
    const { name, email, phone, material, message } = formData;
    
    if (!name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!material) {
      toast({
        title: "Validation Error",
        description: "Please select a material you're interested in.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!message.trim() || message.trim().length < 10) {
      toast({
        title: "Validation Error",
        description: "Please provide a message with at least 10 characters.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check if EmailJS is loaded
    if (!emailJsLoaded || !window.emailjs) {
      toast({
        title: "Service Error",
        description: "Email service is not ready. Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check for placeholder values
    if (
      EMAILJS_SERVICE_ID === "service_js0ddbg" ||
      EMAILJS_TEMPLATE_ID === "template_ys0996n" ||
      EMAILJS_PUBLIC_KEY === "jrZyHs4wj6PCJdf9k"
    ) {
      toast({
        title: "Configuration Error",
        description: "EmailJS is not properly configured. Please check your service settings.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get current date and time
      const now = new Date();
      const formattedTime = now.toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
      });
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        material: formData.material,
        message: formData.message,
        time: formattedTime,
        to_name: "Construction Materials Team",
        reply_to: formData.email,
      };

      console.log("📧 Sending email with params:", templateParams);

      // Send email using EmailJS
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("✅ Email sent successfully:", response);

      if (response.status === 200) {
        toast({
          title: "Message Sent! 🎉",
          description: "Thank you for your inquiry. We'll respond within 24 hours.",
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
        throw new Error(`Email sending failed with status: ${response.status}`);
      }
      
    } catch (error) {
      console.error("❌ Email sending failed:", error);
      
      let errorMessage = "Failed to send your message. Please try again.";
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid template ID')) {
          errorMessage = "Email template configuration error. Please contact support.";
        } else if (error.message.includes('Invalid service ID')) {
          errorMessage = "Email service configuration error. Please contact support.";
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = "Email authentication error. Please contact support.";
        }
      }
      
      toast({
        title: "Sending Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      material: "",
      message: "",
    });
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-poppins font-bold text-primary">
                  Get in Touch
                </h3>
                {/* EmailJS Status Indicator */}
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${emailJsLoaded ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span className={`text-xs ${emailJsLoaded ? 'text-green-600' : 'text-gray-500'}`}>
                    {emailJsLoaded ? 'Email Ready' : 'Loading...'}
                  </span>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    placeholder="Enter your full name"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    placeholder="your.email@example.com"
                    maxLength={150}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    placeholder="+91 94232 78813"
                    maxLength={15}
                  />
                </div>

                <div>
                  <label
                    htmlFor="material"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Material Interested In *
                  </label>
                  <select
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                  >
                    <option value="">-- Select Material --</option>
                    <option value="River Sand">River Sand</option>
                    <option value="Stone & Aggregates">Stone & Aggregates</option>
                    <option value="Limestone">Limestone</option>
                    <option value="Construction Tools">Construction Tools</option>
                    <option value="Other Materials">Other Materials</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-neutral-dark mb-2 font-medium"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 resize-y"
                    placeholder="Please provide details about your requirements, quantity needed, delivery location, etc."
                    maxLength={1000}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/1000 characters
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={isSubmitting || !emailJsLoaded}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-200"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* Configuration Notice */}
              {/* {(EMAILJS_SERVICE_ID === "service_js0ddbg" || 
                EMAILJS_TEMPLATE_ID === "template_ys0996n" || 
                EMAILJS_PUBLIC_KEY === "jrZyHs4wj6PCJdf9k") && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    ⚠️ EmailJS needs to be configured. Please update the service credentials.
                  </p>
                </div>
              )} */}
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
                    {/* <p className="text-gray-500">
                      <a
                        href={`tel:${contactInfo.phone.support}`}
                        className="hover:text-primary transition duration-300"
                      >
                        {contactInfo.phone.support}
                      </a>
                      <span className="text-sm"> (Support)</span>
                    </p> */}
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
                    {/* <p className="text-gray-500">
                      <a
                        href={`mailto:${contactInfo.email.info}`}
                        className="hover:text-primary transition duration-300"
                      >
                        {contactInfo.email.info}
                      </a>
                      <span className="text-sm"> (General Information)</span>
                    </p> */}
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
                 src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d9879.212888681202!2d73.88372250709213!3d15.490018191171677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3bbfbf1e753d9ba7%3A0xb8bab8de7c77defb!2sE%20Plot%20bearing%20S%2FNo%2C%20Gera%E2%80%99s%20Imperium%20Premio%2C%20Gera%E2%80%99s%20Imperium%2C%20Premio%20at%20Zone%2C%2013%2F1A%2C%20part%20Village%2C%20Panellim%2C%20Panvelim%2C%20Goa%20403402!3m2!1d15.4922132!2d73.8890263!5e0!3m2!1sen!2sin!4v1758445047289!5m2!1sen!2sin"width="100%"
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