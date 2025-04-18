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
        <h3 className="section-heading">{title}</h3>
        <a href="#contact" className="text-earth-clayDark hover:text-earth-clay font-medium flex items-center group">
          <span>Request Quote</span>
          <span className="material-icon ml-1 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((material, index) => (
          <div key={material.id} className="rugged-card texture-overlay" data-category={material.category}>
            <div className="h-64 overflow-hidden relative">
              <img 
                src={material.image}
                alt={material.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
              {material.tag && (
                <div className="absolute top-3 right-3 bg-earth-sand px-3 py-1 rounded-sm text-earth-clayDark font-medium text-sm shadow-md">
                  {material.tag}
                </div>
              )}
            </div>
            <div className="p-6 relative">
              <h4 className="font-bold text-xl mb-2 text-earth-clayDark">{material.title}</h4>
              <p className="text-neutral-dark opacity-75 mb-4">{material.description}</p>
              
              {/* Dimensions Section for Limestone */}
              {dimensions && dimensions[index] && (
                <div className="bg-earth-sandLight border border-earth-sand p-4 rounded-sm mb-4">
                  <h5 className="font-medium mb-3 flex items-center text-earth-clayDark">
                    <span className="material-icon mr-1">straighten</span>
                    Standard Dimensions
                  </h5>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    {dimensions[index].map((dimension, i) => (
                      <div key={i} className="bg-white p-2 rounded-sm border border-earth-sand text-center shadow-sm">
                        <span className="block font-medium text-earth-clayDark">{dimension.size}</span>
                        <span className="text-neutral-dark opacity-75">{dimension.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-2">
                <a href="#contact" className="bg-earth-clay hover:bg-earth-clayDark text-white font-medium py-2 px-6 rounded-sm transition-all duration-300 shadow-md flex items-center group">
                  <span>Get Quote</span>
                  <span className="material-icon ml-1 text-sm group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
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
        <h3 className="section-heading">Construction Tools</h3>
        <a href="#contact" className="text-earth-clayDark hover:text-earth-clay font-medium flex items-center group">
          <span>Request Quote</span>
          <span className="material-icon ml-1 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toolProducts.map(tool => (
          <div key={tool.id} className="rugged-card texture-overlay" data-category="chisel">
            <div className="h-48 overflow-hidden">
              <img 
                src={tool.image}
                alt={tool.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2 text-earth-clayDark">{tool.title}</h4>
              <p className="text-neutral-dark opacity-75 text-sm mb-3">{tool.description}</p>
              <a href="#contact" className="text-earth-clayDark hover:text-earth-clay font-medium text-sm flex items-center group">
                <span>Get Quote</span>
                <span className="material-icon ml-1 text-sm group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
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
    <section id="materials" className="py-16 md:py-28 bg-earth-sandLight sand-pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-clayDark mb-6 relative inline-block">
            Our Building Materials
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-earth-clay"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-dark mt-8 text-lg">
            We provide premium quality building materials for all your construction projects. 
            From fine sand to durable red limestone, all our materials are sourced from the best suppliers.
          </p>
        </div>

        {/* Materials Category Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-sm shadow-md" id="materialTabs">
            <button 
              className={`py-2 px-4 md:px-6 rounded-sm border-b-2 ${
                activeCategory === "all" 
                  ? "border-earth-clay bg-earth-clay/10 text-earth-clayDark font-bold" 
                  : "border-transparent hover:border-earth-clay/50 hover:bg-earth-clay/5"
              } transition-all duration-300`}
              onClick={() => handleCategoryChange("all")}
            >
              All Materials
            </button>
            <button 
              className={`py-2 px-4 md:px-6 rounded-sm border-b-2 ${
                activeCategory === "sand" 
                  ? "border-earth-clay bg-earth-clay/10 text-earth-clayDark font-bold" 
                  : "border-transparent hover:border-earth-clay/50 hover:bg-earth-clay/5"
              } transition-all duration-300`}
              onClick={() => handleCategoryChange("sand")}
            >
              Sand
            </button>
            <button 
              className={`py-2 px-4 md:px-6 rounded-sm border-b-2 ${
                activeCategory === "stone" 
                  ? "border-earth-clay bg-earth-clay/10 text-earth-clayDark font-bold" 
                  : "border-transparent hover:border-earth-clay/50 hover:bg-earth-clay/5"
              } transition-all duration-300`}
              onClick={() => handleCategoryChange("stone")}
            >
              Stone
            </button>
            <button 
              className={`py-2 px-4 md:px-6 rounded-sm border-b-2 ${
                activeCategory === "limestone" 
                  ? "border-earth-clay bg-earth-clay/10 text-earth-clayDark font-bold" 
                  : "border-transparent hover:border-earth-clay/50 hover:bg-earth-clay/5"
              } transition-all duration-300`}
              onClick={() => handleCategoryChange("limestone")}
            >
              Limestone
            </button>
            <button 
              className={`py-2 px-4 md:px-6 rounded-sm border-b-2 ${
                activeCategory === "chisel" 
                  ? "border-earth-clay bg-earth-clay/10 text-earth-clayDark font-bold" 
                  : "border-transparent hover:border-earth-clay/50 hover:bg-earth-clay/5"
              } transition-all duration-300`}
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
