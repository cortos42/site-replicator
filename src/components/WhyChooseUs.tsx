import { Shield, Users, PiggyBank, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const advantages = [
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Expertise Technique",
    description: "Notre équipe d'experts qualifiés vous garantit des solutions adaptées et performantes pour votre habitat."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Accompagnement Personnalisé",
    description: "Un conseiller dédié vous accompagne à chaque étape de votre projet de rénovation."
  },
  {
    icon: <PiggyBank className="w-12 h-12 text-primary" />,
    title: "Optimisation Financière",
    description: "Maximisez vos aides avec MaPrimeRénov' et réduisez significativement vos factures énergétiques."
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "Garantie Qualité",
    description: "Des travaux certifiés et garantis, réalisés selon les normes en vigueur."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pourquoi Nous Choisir ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center text-primary">
              MaPrimeRénov' : Jusqu'à 20 000€ d'aide
            </h3>
            <p className="text-center text-gray-700">
              Bénéficiez d'une aide financière importante pour vos travaux de rénovation énergétique.
              Notre équipe vous accompagne dans l'obtention de votre prime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};