import { useState } from "react";
import { 
  sandProducts, 
  stoneProducts, 
  limestoneProducts, 
  toolProducts,
  redLimestoneDimensions,
  limestoneTilesDimensions
} from "@/lib/constants";
import { Material, Dimension } from "@/lib/types";

const MaterialCard = ({
  material,
  dimensions,
  dimensionIndex
}: {
  material: Material;
  dimensions?: Dimension[][];
  dimensionIndex?: number;
}) => {
  return (
    <div className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300" data-category={material.category}>
      {/* Tag label if exists */}
      {material.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {material.tag}
          </span>
        </div>
      )}
      
      <div className="h-56 overflow-hidden relative">
        <img 
          src={material.image}
          alt={material.title}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-700"
        />
        {/* Category label */}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs py-1 px-3 capitalize">
          {material.category}
        </div>
      </div>
      
      <div className="p-5">
        <h4 className="font-poppins font-semibold text-xl mb-2 text-gray-800">{material.title}</h4>
        <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
        
        {/* Dimensions Section for Limestone */}
        {dimensions && dimensionIndex !== undefined && dimensions[dimensionIndex] && (
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <h5 className="font-medium mb-2 text-sm flex items-center text-blue-700">
              <span className="material-icon mr-1">straighten</span>
              Available Dimensions
            </h5>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {dimensions[dimensionIndex].map((dimension, i) => (
                <div key={i} className="bg-white p-2 rounded border border-blue-100 text-center">
                  <span className="block font-medium">{dimension.size}</span>
                  <span className="text-gray-500">{dimension.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <a 
            href={`tel:+919876543210`} 
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center justify-center flex-1"
          >
            <span className="material-icon mr-1 text-xs">call</span>
            Call to Order
          </a>
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center justify-center flex-1"
          >
            <span className="material-icon mr-1 text-xs">mail</span>
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedSandSection = () => {
  return (
    <div className="mb-12 pb-12 border-b border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
          <div className="sticky top-24">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Featured Material</span>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">Premium Quality Sand</h3>
            <p className="text-gray-600 mb-6">
              Our premium sand is carefully sourced and screened to ensure consistent quality for all your construction needs. Perfect for concrete mixing, plastering, and masonry work.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="material-icon text-green-500 mr-2">check_circle</span>
                <span className="text-gray-700">Carefully screened for consistent grain size</span>
              </li>
              <li className="flex items-start">
                <span className="material-icon text-green-500 mr-2">check_circle</span>
                <span className="text-gray-700">Free from clay, silt, and organic impurities</span>
              </li>
              <li className="flex items-start">
                <span className="material-icon text-green-500 mr-2">check_circle</span>
                <span className="text-gray-700">Available in bulk quantities with prompt delivery</span>
              </li>
              <li className="flex items-start">
                <span className="material-icon text-green-500 mr-2">check_circle</span>
                <span className="text-gray-700">Competitive pricing with volume discounts</span>
              </li>
            </ul>
            <a 
              href="#contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-center transition duration-300 shadow-lg"
            >
              Request Bulk Quote
            </a>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sandProducts.map((sand) => (
              <MaterialCard key={sand.id} material={sand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MaterialCategory = ({
  title,
  description,
  materials,
  dimensions,
  icon
}: {
  title: string;
  description: string;
  materials: Material[];
  dimensions?: Dimension[][];
  icon: string;
}) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <span className="material-icon text-4xl text-blue-600 mb-2">{icon}</span>
        <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-3">{title}</h3>
        <p className="max-w-2xl mx-auto text-gray-600">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material, index) => (
          <MaterialCard 
            key={material.id} 
            material={material} 
            dimensions={dimensions} 
            dimensionIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

const ToolsCategory = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <span className="material-icon text-4xl text-blue-600 mb-2">construction</span>
        <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-3">Construction Tools</h3>
        <p className="max-w-2xl mx-auto text-gray-600">Quality tools and equipment for all your masonry and construction needs.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {toolProducts.map(tool => (
          <div key={tool.id} className="gallery-item bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="h-44 overflow-hidden relative">
              <img 
                src={tool.image}
                alt={tool.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs py-1 px-3">
                Tool
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-lg mb-1 text-gray-800">{tool.title}</h4>
              <p className="text-gray-500 text-sm mb-3">{tool.description}</p>
              <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                <span>Inquire</span>
                <span className="material-icon ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MaterialsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("sand");
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="materials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">PREMIUM QUALITY</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">Building Materials</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We provide superior quality construction materials delivered directly to your site. Browse our extensive range of products below.
          </p>
        </div>

        {/* Featured Sand Section - Always visible regardless of tab */}
        <FeaturedSandSection />

        {/* Materials Category Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex overflow-x-auto hide-scrollbar space-x-1 pb-2">
            <button 
              className={`py-3 px-6 focus:outline-none whitespace-nowrap ${activeCategory === "sand" ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => handleCategoryChange("sand")}
            >
              <span className="material-icon mr-1 align-middle">beach_access</span>
              Sand Products
            </button>
            <button 
              className={`py-3 px-6 focus:outline-none whitespace-nowrap ${activeCategory === "stone" ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => handleCategoryChange("stone")}
            >
              <span className="material-icon mr-1 align-middle">grain</span>
              Stone & Aggregates
            </button>
            <button 
              className={`py-3 px-6 focus:outline-none whitespace-nowrap ${activeCategory === "limestone" ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => handleCategoryChange("limestone")}
            >
              <span className="material-icon mr-1 align-middle">view_in_ar</span>
              Limestone
            </button>
            <button 
              className={`py-3 px-6 focus:outline-none whitespace-nowrap ${activeCategory === "chisel" ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => handleCategoryChange("chisel")}
            >
              <span className="material-icon mr-1 align-middle">construction</span>
              Tools & Equipment
            </button>
          </div>
        </div>

        {/* Content based on active category */}
        <div className="mt-10">
          {activeCategory === "sand" && (
            <MaterialCategory 
              title="All Sand Products" 
              description="High-quality sand for various construction applications including concrete mixing, plastering, and masonry work."
              materials={sandProducts}
              icon="beach_access"
            />
          )}

          {activeCategory === "stone" && (
            <MaterialCategory 
              title="Stone & Aggregates" 
              description="Durable stones and aggregates for construction, foundations, and landscaping projects."
              materials={stoneProducts}
              icon="grain"
            />
          )}

          {activeCategory === "limestone" && (
            <MaterialCategory 
              title="Limestone Products" 
              description="Premium limestone blocks and tiles for construction and decorative applications."
              materials={limestoneProducts}
              dimensions={[redLimestoneDimensions, limestoneTilesDimensions]}
              icon="view_in_ar"
            />
          )}

          {activeCategory === "chisel" && <ToolsCategory />}
        </div>
        
        {/* Call to action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Material Specifications?</h3>
          <p className="mb-6">Contact our team for customized solutions and competitive bulk pricing</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:+919876543210`} 
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full flex items-center justify-center"
            >
              <span className="material-icon mr-2">call</span>
              Call Us Now
            </a>
            <a 
              href="#contact" 
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold py-3 px-8 rounded-full flex items-center justify-center"
            >
              <span className="material-icon mr-2">mail</span>
              Send Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
