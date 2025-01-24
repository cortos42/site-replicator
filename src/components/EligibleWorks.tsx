import { Home, Thermometer, Wind, AppWindow } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const works = [
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: "Isolation",
    description: "Isolation des murs, combles et sols pour une meilleure performance énergétique."
  },
  {
    icon: <Thermometer className="w-10 h-10 text-primary" />,
    title: "Chauffage",
    description: "Installation de systèmes de chauffage modernes et économiques."
  },
  {
    icon: <Wind className="w-10 h-10 text-primary" />,
    title: "Ventilation",
    description: "Systèmes de ventilation pour un air sain et une meilleure efficacité énergétique."
  },
  {
    icon: <AppWindow className="w-10 h-10 text-primary" />,
    title: "Fenêtres",
    description: "Remplacement des fenêtres pour une meilleure isolation thermique et phonique."
  }
];

export const EligibleWorks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Travaux Éligibles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="mb-4">{work.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <button className="text-primary font-medium group-hover:underline">
                  En savoir plus →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};