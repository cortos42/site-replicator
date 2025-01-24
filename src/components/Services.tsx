import { Paintbrush, Home, Wrench, Sofa } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush size={32} />,
    title: "Peinture",
    description: "Donnez vie à vos murs avec nos services de peinture professionnelle"
  },
  {
    icon: <Home size={32} />,
    title: "Rénovation complète",
    description: "Transformation totale de votre espace selon vos besoins"
  },
  {
    icon: <Wrench size={32} />,
    title: "Plomberie",
    description: "Installation et réparation de systèmes de plomberie"
  },
  {
    icon: <Sofa size={32} />,
    title: "Aménagement",
    description: "Optimisation de votre espace intérieur"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow
              transform hover:-translate-y-1 duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};