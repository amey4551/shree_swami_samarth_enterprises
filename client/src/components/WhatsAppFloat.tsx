import { contactInfo } from "@/lib/constants";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href={`https://wa.me/${contactInfo.whatsapp}`} 
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-icon text-3xl">whatsapp</span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
