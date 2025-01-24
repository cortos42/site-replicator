import { 
  Layers, 
  Thermometer, 
  Wind, 
  Square, 
  ArrowRight,
  Percent,
  DollarSign,
  Timer,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const workSections = [
  {
    id: "isolation",
    icon: <Layers className="w-12 h-12 text-primary" />,
    title: "Isolation",
    description: "Solutions complètes d'isolation thermique pour votre habitat",
    details: [
      {
        title: "Isolation des murs",
        content: [
          {
            subtitle: "Types d'isolation",
            items: [
              "Isolation par l'intérieur (ITI)",
              "Isolation par l'extérieur (ITE)",
              "Matériaux : laine minérale, polystyrène, laine de bois"
            ]
          },
          {
            subtitle: "Performances",
            items: [
              "Résistance thermique R ≥ 3,7 m².K/W",
              "Économies d'énergie : jusqu'à 25%",
              "Amélioration du confort été comme hiver"
            ]
          },
          {
            subtitle: "Aspects financiers",
            items: [
              "Coût moyen : 70-150€/m²",
              "Retour sur investissement : 5-8 ans",
              "Plus-value immobilière : +5-10%"
            ]
          }
        ]
      },
      {
        title: "Isolation des combles",
        content: [
          {
            subtitle: "Types de combles",
            items: [
              "Combles perdus : isolation soufflée ou déroulée",
              "Combles aménagés : isolation sous rampants",
              "Matériaux : laine de verre, ouate de cellulose"
            ]
          },
          {
            subtitle: "Performances",
            items: [
              "Résistance thermique R ≥ 7 m².K/W",
              "Économies d'énergie : jusqu'à 30%",
              "Réduction significative des déperditions"
            ]
          }
        ]
      },
      {
        title: "Isolation des planchers bas",
        content: [
          {
            subtitle: "Solutions techniques",
            items: [
              "Isolation sous dalle",
              "Isolation en sous-face",
              "Matériaux : polyuréthane, polystyrène extrudé"
            ]
          },
          {
            subtitle: "Bénéfices",
            items: [
              "Confort thermique amélioré",
              "Économies : 10-15% sur le chauffage",
              "Protection contre l'humidité"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "chauffage",
    icon: <Thermometer className="w-12 h-12 text-primary" />,
    title: "Chauffage",
    description: "Systèmes de chauffage performants et économiques",
    details: [
      {
        title: "Pompes à chaleur",
        content: [
          {
            subtitle: "Types de PAC",
            items: [
              "Air/Eau : COP ≥ 3,5",
              "Air/Air : SCOP ≥ 3,8",
              "Géothermique : COP ≥ 4"
            ]
          },
          {
            subtitle: "Avantages",
            items: [
              "Économies : jusqu'à 70% sur le chauffage",
              "Éligible MaPrimeRénov'",
              "Durée de vie : 15-20 ans"
            ]
          }
        ]
      },
      {
        title: "Chaudières haute performance",
        content: [
          {
            subtitle: "Critères techniques",
            items: [
              "Rendement ≥ 92%",
              "Classe énergétique A",
              "Régulation modulante"
            ]
          },
          {
            subtitle: "Aspects économiques",
            items: [
              "Coût : 4000-8000€ installation comprise",
              "Économies : 25-30% sur la facture",
              "Aides : jusqu'à 4000€"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ventilation",
    icon: <Wind className="w-12 h-12 text-primary" />,
    title: "Ventilation",
    description: "Systèmes de ventilation pour un air sain",
    details: [
      {
        title: "VMC Simple Flux",
        content: [
          {
            subtitle: "Caractéristiques",
            items: [
              "Consommation < 0,25 Wh/m³",
              "Débit modulé selon l'occupation",
              "Installation simple et rapide"
            ]
          },
          {
            subtitle: "Bénéfices",
            items: [
              "Renouvellement d'air continu",
              "Évacuation de l'humidité",
              "Coût modéré : 500-1000€"
            ]
          }
        ]
      },
      {
        title: "VMC Double Flux",
        content: [
          {
            subtitle: "Performance",
            items: [
              "Rendement > 85%",
              "Récupération de chaleur",
              "Filtration de l'air entrant"
            ]
          },
          {
            subtitle: "Économies",
            items: [
              "Jusqu'à 40% sur le chauffage",
              "Retour sur investissement : 5-7 ans",
              "Éligible aux aides : jusqu'à 2500€"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "menuiseries",
    icon: <Square className="w-12 h-12 text-primary" />,
    title: "Menuiseries",
    description: "Fenêtres et portes-fenêtres performantes",
    details: [
      {
        title: "Double vitrage",
        content: [
          {
            subtitle: "Critères techniques",
            items: [
              "Uw ≤ 1,3 W/m².K",
              "Sw ≥ 0,3 (facteur solaire)",
              "Isolation acoustique : 28-35 dB"
            ]
          },
          {
            subtitle: "Matériaux disponibles",
            items: [
              "PVC : excellent rapport qualité/prix",
              "Aluminium : design et durabilité",
              "Bois : esthétique et écologique"
            ]
          }
        ]
      },
      {
        title: "Triple vitrage",
        content: [
          {
            subtitle: "Performance",
            items: [
              "Uw ≤ 1,0 W/m².K",
              "Isolation acoustique renforcée",
              "Protection solaire optimale"
            ]
          },
          {
            subtitle: "Investissement",
            items: [
              "Coût : 500-800€/m²",
              "Aides : jusqu'à 100€/m²",
              "Durée de vie : 25-30 ans"
            ]
          }
        ]
      }
    ]
  }
];

const EligibleWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Travaux Éligibles aux Aides
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez les travaux de rénovation énergétique éligibles aux aides financières et leurs spécifications techniques.
        </p>

        <div className="grid gap-8">
          {workSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {section.icon}
                    <div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {section.details.map((detail, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-xl">
                          {detail.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-6">
                            {detail.content.map((contentBlock, blockIndex) => (
                              <div key={blockIndex} className="space-y-2">
                                <h4 className="font-semibold text-lg">
                                  {contentBlock.subtitle}
                                </h4>
                                <ul className="space-y-2">
                                  {contentBlock.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-secondary rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
            <p className="text-sm text-muted-foreground">
              Les critères techniques et montants d'aide sont donnés à titre indicatif et peuvent varier selon votre situation. Contactez-nous pour une évaluation personnalisée de votre projet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibleWorksPage;
