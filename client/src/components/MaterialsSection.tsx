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

const MaterialCategory = ({
  title,
  materials,
  dimensions
}: {
  title: string;
  materials: Material[];
  dimensions?: Dimension[][];
}) => {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-poppins font-bold text-primary">{title}</h3>
        <a href="#contact" className="text-accent hover:text-accent-light font-medium flex items-center">
          <span>Request Quote</span>
          <span className="material-icon ml-1">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((material, index) => (
          <div key={material.id} className="gallery-item bg-white rounded-lg shadow-md overflow-hidden" data-category={material.category}>
            <div className="h-64 overflow-hidden">
              <img 
                src={material.image}
                alt={material.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h4 className="font-poppins font-semibold text-xl mb-2">{material.title}</h4>
              <p className="text-neutral-medium mb-4">{material.description}</p>
              
              {/* Dimensions Section for Limestone */}
              {dimensions && dimensions[index] && (
                <div className="bg-neutral-lightest p-4 rounded-lg mb-4">
                  <h5 className="font-medium mb-2 flex items-center">
                    <span className="material-icon mr-1 text-secondary">straighten</span>
                    Standard Dimensions
                  </h5>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    {dimensions[index].map((dimension, i) => (
                      <div key={i} className="bg-white p-2 rounded border border-neutral-light text-center">
                        <span className="block font-medium">{dimension.size}</span>
                        <span className="text-neutral-medium">{dimension.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                {material.tag && <span className="text-primary font-medium">{material.tag}</span>}
                <a href="#contact" className="bg-secondary hover:bg-secondary-light text-white font-medium py-2 px-4 rounded">
                  Inquire
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ToolsCategory = () => {
  return (
    <div id="tools-section">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-poppins font-bold text-primary">Construction Tools</h3>
        <a href="#contact" className="text-accent hover:text-accent-light font-medium flex items-center">
          <span>Request Quote</span>
          <span className="material-icon ml-1">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toolProducts.map(tool => (
          <div key={tool.id} className="gallery-item bg-white rounded-lg shadow-md overflow-hidden" data-category="chisel">
            <div className="h-48 overflow-hidden">
              <img 
                src={tool.image}
                alt={tool.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-poppins font-semibold text-lg mb-2">{tool.title}</h4>
              <p className="text-neutral-medium text-sm mb-3">{tool.description}</p>
              <a href="#contact" className="text-primary hover:text-primary-light font-medium text-sm flex items-center">
                <span>View Details</span>
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
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const shouldShowCategory = (category: string) => {
    return activeCategory === "all" || activeCategory === category;
  };

  return (
    <section id="materials" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">Our Materials</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            We provide a wide range of high-quality building materials to meet all your construction needs. Browse through our categories below.
          </p>
        </div>

        {/* Materials Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8" id="materialTabs">
            <button 
              className={`py-2 px-6 rounded-full ${activeCategory === "all" ? "bg-primary text-white" : "bg-neutral-light hover:bg-primary hover:text-white"} transition duration-300 font-medium`}
              onClick={() => handleCategoryChange("all")}
            >
              All Materials
            </button>
            <button 
              className={`py-2 px-6 rounded-full ${activeCategory === "sand" ? "bg-primary text-white" : "bg-neutral-light hover:bg-primary hover:text-white"} transition duration-300 font-medium`}
              onClick={() => handleCategoryChange("sand")}
            >
              Sand
            </button>
            <button 
              className={`py-2 px-6 rounded-full ${activeCategory === "stone" ? "bg-primary text-white" : "bg-neutral-light hover:bg-primary hover:text-white"} transition duration-300 font-medium`}
              onClick={() => handleCategoryChange("stone")}
            >
              Stone
            </button>
            <button 
              className={`py-2 px-6 rounded-full ${activeCategory === "limestone" ? "bg-primary text-white" : "bg-neutral-light hover:bg-primary hover:text-white"} transition duration-300 font-medium`}
              onClick={() => handleCategoryChange("limestone")}
            >
              Limestone
            </button>
            <button 
              className={`py-2 px-6 rounded-full ${activeCategory === "chisel" ? "bg-primary text-white" : "bg-neutral-light hover:bg-primary hover:text-white"} transition duration-300 font-medium`}
              onClick={() => handleCategoryChange("chisel")}
            >
              Chisel & Tools
            </button>
          </div>
        </div>

        {/* Sand Section */}
        {shouldShowCategory("sand") && (
          <MaterialCategory 
            title="Premium Sand" 
            materials={sandProducts} 
          />
        )}

        {/* Stone Section */}
        {shouldShowCategory("stone") && (
          <MaterialCategory 
            title="Stone & Aggregates" 
            materials={stoneProducts} 
          />
        )}

        {/* Limestone Section */}
        {shouldShowCategory("limestone") && (
          <MaterialCategory 
            title="Limestone Products" 
            materials={limestoneProducts} 
            dimensions={[redLimestoneDimensions, limestoneTilesDimensions]}
          />
        )}

        {/* Tools Section */}
        {shouldShowCategory("chisel") && <ToolsCategory />}
      </div>
    </section>
  );
};

export default MaterialsSection;
