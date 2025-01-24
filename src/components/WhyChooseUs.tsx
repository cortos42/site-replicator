import { Check, Shield, PiggyBank, UserCheck } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Expertise Reconnue",
      description: "Plus de 10 ans d'expérience dans la rénovation énergétique"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-primary" />,
      title: "Accompagnement Personnalisé",
      description: "Un expert dédié pour vous guider à chaque étape de votre projet"
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-primary" />,
      title: "Optimisation MaPrimeRénov'",
      description: "Maximisez vos aides financières avec notre expertise"
    },
    {
      icon: <Check className="w-12 h-12 text-primary" />,
      title: "Garantie Satisfaction",
      description: "Travaux certifiés et garantis pour votre tranquillité"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pourquoi Choisir Rénov'&Moi ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow
              flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};