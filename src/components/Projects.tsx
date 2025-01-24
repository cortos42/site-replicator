const projects = [
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    title: "Rénovation salon moderne"
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    title: "Cuisine contemporaine"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    title: "Salle de bain luxueuse"
  },
  {
    image: "https://images.unsplash.com/photo-1600566752734-2a0cd53b9f20",
    title: "Chambre principale"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover 
                transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};