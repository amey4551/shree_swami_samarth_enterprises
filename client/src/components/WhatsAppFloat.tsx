import { contactInfo } from "@/lib/constants";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <div 
        className={`bg-white text-gray-800 rounded-lg p-3 mr-3 shadow-lg transition-all duration-300 flex items-center relative ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <span className="whitespace-nowrap font-medium">Chat with us on WhatsApp</span>
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
      </div>
      
      {/* Button */}
      <a 
        href={`https://wa.me/${contactInfo.whatsapp}`} 
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-xl transition duration-300 transform hover:scale-110 animate-bounce-slow relative"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="material-icon text-3xl">whatsapp</span>
        <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-ping"></span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
