import { projectItems } from "@/lib/constants";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Our Projects
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto">
            We take pride in supplying high-quality construction materials to
            prestigious projects across Goa. Our materials have been used in a
            wide range of developments, including residential complexes,
            commercial buildings, and infrastructure projects throughout the
            state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Black tint overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 relative z-10">
                  <h3 className="font-poppins font-semibold text-xl mb-1 text-white">
                    {project.title}
                  </h3>
                  {/* <p className="text-neutral-lightest opacity-80 text-sm mb-3">
                    {project.location}
                  </p> */}
                  {/* <p className="text-neutral-lightest text-sm hidden group-hover:block transition-all duration-300">
                    {project.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
