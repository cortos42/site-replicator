import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";

const MaPrimeRenov = () => {
  const [selectedHousing, setSelectedHousing] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const benefits = [
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

  return (
    <div className="min-h-screen bg-[#1E1B3B] text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Title and Benefits */}
        <div className="space-y-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Obtenez MaPrimeRénov' pour vos travaux
          </h1>

          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#2A2751] p-6 rounded-lg space-y-2"
              >
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Simulator */}
        <div className="bg-white rounded-2xl p-8 text-black">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">
              J'esJe vais restructurer la page MaPrimeRenov pour qu'elle corresponde exactement à la capture d'écran, avec un design plus épuré comportant :
- Un titre principal "Obtenez MaPrimeRénov' pour vos travaux"
- 3 cartes d'avantages à gauche
- Un simulateur à droite dans une carte blanche

<lov-code>
Let's refactor the MaPrimeRenov page to match the new design:

<lov-write file_path="src/pages/MaPrimeRenov.tsx">
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Building } from "lucide-react";

const MaPrimeRenov = () => {
  const [selectedHousing, setSelectedHousing] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const benefits = [
    {
      title: "Simulation en ligne",
      description: "Estimez vos aides en quelques clics",
    },
    {
      title: "Résultat immédiat",
      description: "Obtenez une réponse instantanée",
    },
    {
      title: "100% Gratuit",
      description: "Sans engagement de votre part",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e1b4b] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Obtenez MaPrimeRénov' pour vos travaux
            </h1>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-[#2a2668]/50 border-0">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Simulator */}
          <Card className="p-8 bg-white text-black">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                J'estime mes aides et mon devis en 2 min
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-lg mb-4">Vos travaux concernent :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={selectedHousing === 'house' ? 'default' : 'outline'}
                      className="w-full h-32 flex flex-col gap-2"
                      onClick={() => setSelectedHousing('house')}
                    >
                      <Home className="w-8 h-8" />
                      <span>Une maison</span>
                    </Button>
                    <Button
                      variant={selectedHousing === 'apartment' ? 'default' : 'outline'}
                      className="w-full h-32 flex flex-col gap-2"
                      onClick={() => setSelectedHousing('apartment')}
                    >
                      <Building className="w-8 h-8" />
                      <span>Un appartement</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-lg mb-4">Votre logement a été construit :</p>
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant={selectedPeriod === 'less2' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedPeriod('less2')}
                    >
                      - de 2 ans
                    </Button>
                    <Button
                      variant={selectedPeriod === '2to15' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedPeriod('2to15')}
                    >
                      Entre 2 et 15 ans
                    </Button>
                    <Button
                      variant={selectedPeriod === 'more15' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedPeriod('more15')}
                    >
                      + de 15 ans
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-6"
                  disabled={!selectedHousing || !selectedPeriod}
                >
                  Je calcule mes aides
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MaPrimeRenov;