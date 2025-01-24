import { Home, Thermometer, Wind, Windows } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const EligibleWorks = () => {
  const works = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Isolation",
      description: "Murs, combles, planchers",
      link: "/isolation"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Chauffage",
      description: "Pompe à chaleur, chaudière",
      link: "/chauffage"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Ventilation",
      description: "VMC simple et double flux",
      link: "/ventilation"
    },
    {
      icon: <Windows className="w-8 h-8" />,
      title: "Menuiseries",
      description: "Fenêtres, portes, volets",
      link: "/menuiseries"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Travaux Éligibles MaPrimeRénov'
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">{work.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <a 
                    href={work.link}
                    className="text-primary hover:underline font-medium"
                  >
                    En savoir plus
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};