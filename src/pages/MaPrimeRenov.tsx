import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Home, 
  Building2, 
  Calculator, 
  Euro, 
  Target
} from "lucide-react";
import { MaPrimeRenovForm } from "@/components/MaPrimeRenovForm";

const MaPrimeRenov = () => {
  const [selectedHousing, setSelectedHousing] = useState<"house" | "apartment" | null>(null);
  const [constructionPeriod, setConstructionPeriod] = useState<"less2" | "2to15" | "more15" | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const features = [
    {
      title: "Simulation en ligne",
      description: "Estimez vos aides en quelques clics"
    },
    {
      title: "Résultat immédiat",
      description: "Obtenez une réponse instantanée"
    },
    {
      title: "100% Gratuit",
      description: "Sans engagement de votre part"
    }
  ];

  const benefits = [
    {
      icon: <Calculator className="w-6 h-6 text-primary" />,
      text: "Calculez gratuitement le montant de vos aides. Le résultat est immédiat"
    },
    {
      icon: <Euro className="w-6 h-6 text-primary" />,
      text: "Cumulez les aides MaPrimeRénov' avec la Prime Effy"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      text: "Jusqu'à 80% du montant des travaux financés grâce aux aides"
    }
  ];

  const stats = [
    { value: "4 300", label: "artisans RGE en France, avec à l'APP" },
    { value: "+100 000", label: "familles accompagnées chaque année" },
    { value: "16 ans", label: "d'expérience en rénovation énergétique" },
    { value: "Équipe dédiée", label: "et un suivi personnalisé de votre dossier de A à Z" }
  ];

  return (
    <div className="space-y-16 py-8">
      <section className="relative bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold">
                Obtenez MaPrimeRénov' pour vos travaux
              </h1>
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white/10 backdrop-blur-sm animate-scale-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-white text-gray-900 animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">
                J'estime mes aides et mon devis en 2 min
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="mb-3 font-medium">Vos travaux concernent :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={selectedHousing === "house" ? "default" : "outline"}
                      className="h-24 flex-col gap-2"
                      onClick={() => setSelectedHousing("house")}
                    >
                      <Home className="w-8 h-8" />
                      Une maison
                    </Button>
                    <Button
                      variant={selectedHousing === "apartment" ? "default" : "outline"}
                      className="h-24 flex-col gap-2"
                      onClick={() => setSelectedHousing("apartment")}
                    >
                      <Building2 className="w-8 h-8" />
                      Un appartement
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-medium">Votre logement a été construit :</p>
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant={constructionPeriod === "less2" ? "default" : "outline"}
                      onClick={() => setConstructionPeriod("less2")}
                    >
                      - de 2 ans
                    </Button>
                    <Button
                      variant={constructionPeriod === "2to15" ? "default" : "outline"}
                      onClick={() => setConstructionPeriod("2to15")}
                    >
                      Entre 2 et 15 ans
                    </Button>
                    <Button
                      variant={constructionPeriod === "more15" ? "default" : "outline"}
                      onClick={() => setConstructionPeriod("more15")}
                    >
                      + de 15 ans
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full text-lg py-6 animate-pulse"
                  disabled={!selectedHousing || !constructionPeriod}
                  onClick={() => setIsDialogOpen(true)}
                >
                  Je calcule mes aides
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {benefit.icon}
              <p className="text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi faire confiance à Rénov'&Moi ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center space-y-2 animate-scale-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="max-w-2xl mx-auto p-8 space-y-6">
          <h2 className="text-2xl font-bold">
            Demandez votre devis gratuit pour votre projet de rénovation énergétique
          </h2>
          <Button 
            size="lg" 
            className="animate-pulse"
            onClick={() => setIsDialogOpen(true)}
          >
            Je demande mon devis gratuit
          </Button>
        </Card>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-6">Questionnaire d'éligibilité</h2>
          <MaPrimeRenovForm onClose={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaPrimeRenov;