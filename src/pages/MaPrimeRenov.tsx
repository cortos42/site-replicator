import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Home, Building2, Calculator, Euro, Clock, Target } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const MaPrimeRenov = () => {
  const [selectedHousing, setSelectedHousing] = useState<"house" | "apartment" | null>(null);
  const [constructionPeriod, setConstructionPeriod] = useState<"less2" | "2to15" | "more15" | null>(null);

  const form = useForm({
    defaultValues: {
      housingType: "",
      constructionDate: "",
      surface: "",
      heatingType: "",
      plannedWorks: [],
      insulationType: [],
      startDate: "",
      postalCode: "",
      city: "",
      ownershipStatus: "",
      householdSize: "",
      income: "",
      phone: "",
      email: "",
    },
  });

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
                Questionnaire MaPrimeRénov'
              </h2>
              <form className="space-y-6">
                {/* 1. Type de logement */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">1. Votre projet concerne :</Label>
                  <RadioGroup className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maison" id="maison" />
                      <Label htmlFor="maison">Une maison</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="appartement" id="appartement" />
                      <Label htmlFor="appartement">Un appartement</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* 2. Période de construction */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">2. La construction de ce logement date de :</Label>
                  <RadioGroup className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moins2ans" id="moins2ans" />
                      <Label htmlFor="moins2ans">Moins de 2 ans</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2a15ans" id="2a15ans" />
                      <Label htmlFor="2a15ans">Entre 2 ans et 15 ans</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="plus15ans" id="plus15ans" />
                      <Label htmlFor="plus15ans">Plus de 15 ans</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* 3. Surface habitable */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    3. Quelle est la surface habitable approximative de votre logement (en m²) ?
                  </Label>
                  <Input type="number" placeholder="Surface à préciser" />
                </div>

                {/* 4. Mode de chauffage */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    4. Aujourd'hui, quel est le mode de chauffage principal pour ce logement ?
                  </Label>
                  <RadioGroup className="grid gap-2">
                    {[
                      "Chauffage au fioul",
                      "Chauffage électrique",
                      "Chauffage au gaz",
                      "Chauffage au bois",
                      "Pompe à chaleur",
                      "Chauffage au charbon"
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type}>{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 5. Travaux prévus */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    5. Quels travaux envisagez-vous de réaliser ?
                  </Label>
                  <RadioGroup className="grid gap-2">
                    {[
                      "Isolation",
                      "Chauffage",
                      "Ventilation",
                      "Énergie renouvelable",
                      "Autre"
                    ].map((work) => (
                      <div key={work} className="flex items-center space-x-2">
                        <RadioGroupItem value={work} id={work} />
                        <Label htmlFor={work}>{work}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 6. Type d'isolation */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    6. Quel type d'isolation envisagez-vous ?
                  </Label>
                  <RadioGroup className="grid gap-2">
                    {[
                      "Isolation des combles",
                      "Isolation des murs",
                      "Isolation des fenêtres",
                      "Isolation du sol",
                      "Aucune"
                    ].map((insulation) => (
                      <div key={insulation} className="flex items-center space-x-2">
                        <RadioGroupItem value={insulation} id={insulation} />
                        <Label htmlFor={insulation}>{insulation}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 7. Date de début des travaux */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    7. Quand prévoyez-vous de commencer les travaux ?
                  </Label>
                  <Input type="date" />
                </div>

                {/* 8. Code postal */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    8. Quel est votre code postal ?
                  </Label>
                  <Input type="text" placeholder="Code postal" />
                </div>

                {/* 9. Ville */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    9. Dans quelle ville se situe votre logement ?
                  </Label>
                  <Input type="text" placeholder="Ville" />
                </div>

                {/* 10. Statut de propriété */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    10. Êtes-vous propriétaire de ce logement ?
                  </Label>
                  <RadioGroup className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oui" id="proprietaire-oui" />
                      <Label htmlFor="proprietaire-oui">Oui</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non" id="proprietaire-non" />
                      <Label htmlFor="proprietaire-non">Non</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* 11. Taille du foyer */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    11. Combien de personnes vivent dans votre foyer ?
                  </Label>
                  <Input type="number" placeholder="Nombre de personnes" />
                </div>

                {/* 12. Revenu */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    12. Quel est votre revenu annuel ?
                  </Label>
                  <Input type="number" placeholder="Revenu annuel" />
                </div>

                {/* 13. Téléphone */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    13. Quel est votre numéro de téléphone ?
                  </Label>
                  <Input type="tel" placeholder="Numéro de téléphone" />
                </div>

                {/* 14. Email */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    14. Quel est votre adresse email ?
                  </Label>
                  <Input type="email" placeholder="Adresse email" />
                </div>

                <Button className="w-full text-lg py-6">
                  Valider mon questionnaire
                </Button>
              </form>
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
    </div>
  );
};

export default MaPrimeRenov;
