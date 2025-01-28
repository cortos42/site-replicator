import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Building2, Calculator, Check, Euro, Clock, Target } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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

const MaPrimeRenov = () => {
  const [selectedHousing, setSelectedHousing] = useState<"house" | "apartment" | null>(null);
  const [constructionPeriod, setConstructionPeriod] = useState<"less2" | "2to15" | "more15" | null>(null);

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

            {/* Simulateur */}
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
                >
                  Je calcule mes aides
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questionnaire d'éligibilité
        </h2>
        <ScrollArea className="h-[600px] rounded-md border">
          <div className="grid grid-cols-2 gap-6 p-6">
            {/* Question 1 & 2 */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">1. Votre projet concerne :</h3>
              <RadioGroup onValueChange={(value) => setSelectedHousing(value as "house" | "apartment")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="house" id="house" />
                  <Label htmlFor="house">Une maison</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="apartment" id="apartment" />
                  <Label htmlFor="apartment">Un appartement</Label>
                </div>
              </RadioGroup>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">2. La construction de ce logement date de :</h3>
              <RadioGroup onValueChange={(value) => setConstructionPeriod(value as "less2" | "2to15" | "more15")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="less2" id="less2" />
                  <Label htmlFor="less2">Moins de 2 ans</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2to15" id="2to15" />
                  <Label htmlFor="2to15">Entre 2 ans et 15 ans</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="more15" id="more15" />
                  <Label htmlFor="more15">Plus de 15 ans</Label>
                </div>
              </RadioGroup>
            </Card>

            {/* Question 3 & 4 */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">3. Quelle est la surface habitable approximative de votre logement (en m²) ?</h3>
              <Input type="number" placeholder="Surface à préciser" />
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">4. Aujourd'hui, quel est le mode de chauffage principal pour ce logement ?</h3>
              <RadioGroup>
                {["Chauffage au fioul", "Chauffage électrique", "Chauffage au gaz", 
                  "Chauffage au bois", "Pompe à chaleur", "Chauffage au charbon"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Question 5 & 6 */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">5. Quels travaux envisagez-vous de réaliser ?</h3>
              <RadioGroup>
                {["Rénovation globale", "Isolation", "Chauffage", "Ventilation"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">6. Quels types d'isolation souhaitez-vous effectuer ?</h3>
              <RadioGroup>
                {[
                  "Isolation des combles",
                  "Isolation des murs",
                  "Isolation du sol",
                  "Isolation des fenêtres, porte-fenêtres ou volets roulants",
                  "Isolation d'une toiture terrasse"
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Question 7 & 8 */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">7. Quand souhaitez-vous démarrer vos travaux ?</h3>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6months" id="6months" />
                  <Label htmlFor="6months">Dans les 6 prochains mois</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="later" id="later" />
                  <Label htmlFor="later">Plus tard</Label>
                </div>
              </RadioGroup>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">8. Où se situe votre logement ?</h3>
              <div className="space-y-4">
                <Input type="text" placeholder="Code postal" />
                <Input type="text" placeholder="Ville" />
              </div>
            </Card>

            {/* Question 9 & 10 */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">9. Dans ce logement, vous êtes :</h3>
              <RadioGroup>
                {[
                  "Propriétaire occupant",
                  "Propriétaire d'une résidence secondaire",
                  "Propriétaire bailleur",
                  "Locataire"
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">10. Combien de personnes composent votre foyer, y compris vous-même ?</h3>
              <Input type="number" placeholder="Nombre de personnes" />
            </Card>

            {/* Question 11 & 12 */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">11. Quel est le revenu fiscal annuel approximatif de votre foyer ?</h3>
              <RadioGroup>
                {[
                  "Inférieur à 25 115 €",
                  "Entre 25 115 € et 32 197 €",
                  "Entre 32 197 € et 45 340 €",
                  "Supérieur à 45 340 €"
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">12. Coordonnées</h3>
              <div className="space-y-4">
                <Input type="tel" placeholder="Numéro de téléphone" />
                <Input type="email" placeholder="Mail" />
              </div>
            </Card>
          </div>
        </ScrollArea>

        <div className="mt-8 flex justify-center">
          <Button size="lg" className="animate-pulse">
            Valider mes réponses
          </Button>
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
          <Button size="lg" className="animate-pulse">
            Je demande mon devis gratuit
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default MaPrimeRenov;
