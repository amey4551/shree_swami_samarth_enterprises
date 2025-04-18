import { contactInfo } from "@/lib/constants";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Contact options when expanded */}
      {isExpanded && (
        <div className="mb-4 flex flex-col space-y-3 items-end animate-fadeIn">
          <a 
            href={`tel:${contactInfo.phone.sales.replace(/[^0-9+]/g, '')}`}
            className="bg-blue-600 text-white rounded-full h-12 pl-4 pr-4 flex items-center justify-center shadow-lg transition duration-300 text-sm"
          >
            <span className="material-icon mr-1">call</span>
            <span>{contactInfo.phone.sales}</span>
          </a>
          
          <a 
            href={`mailto:${contactInfo.email.sales}`}
            className="bg-red-600 text-white rounded-full h-12 pl-4 pr-4 flex items-center justify-center shadow-lg transition duration-300 text-sm"
          >
            <span className="material-icon mr-1">email</span>
            <span>{contactInfo.email.sales}</span>
          </a>
        </div>
      )}
      
      {/* Main WhatsApp button */}
      <div className="relative">
        <a 
          href={`https://wa.me/${contactInfo.whatsapp}`} 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icon text-3xl">whatsapp</span>
        </a>
        
        {/* Toggle button */}
        <button 
          onClick={toggleExpand} 
          className={`absolute -top-3 -left-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md transition duration-300 ${isExpanded ? 'rotate-45' : ''}`}
        >
          <span className="material-icon text-sm">{isExpanded ? 'close' : 'add'}</span>
        </button>
        
        {/* Label */}
        <div className="absolute top-1/2 -left-32 transform -translate-y-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
          Chat Now
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
