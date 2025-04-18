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
            className="bg-amber-700 hover:bg-amber-800 text-white rounded-full h-12 pl-4 pr-4 flex items-center justify-center shadow-lg transition duration-300 text-sm"
          >
            <span className="material-icon mr-1">call</span>
            <span>{contactInfo.phone.sales}</span>
          </a>
          
          <a 
            href={`mailto:${contactInfo.email.sales}`}
            className="bg-gray-700 hover:bg-gray-800 text-white rounded-full h-12 pl-4 pr-4 flex items-center justify-center shadow-lg transition duration-300 text-sm"
          >
            <span className="material-icon mr-1">email</span>
            <span>{contactInfo.email.sales}</span>
          </a>
        </div>
      )}
      
      {/* Main WhatsApp button */}
      <div className="relative group">
        <a 
          href={`https://wa.me/${contactInfo.whatsapp}`} 
          className="bg-green-700 hover:bg-green-800 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icon text-2xl">whatsapp</span>
        </a>
        
        {/* Toggle button */}
        <button 
          onClick={toggleExpand} 
          className={`absolute -top-3 -left-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full h-7 w-7 flex items-center justify-center shadow-md transition-all duration-300 ${isExpanded ? 'rotate-45 transform' : ''}`}
        >
          <span className="material-icon text-sm">{isExpanded ? 'close' : 'add'}</span>
        </button>
        
        {/* Label */}
        <span className="absolute top-1/2 right-full mr-3 transform -translate-y-1/2 whitespace-nowrap bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
