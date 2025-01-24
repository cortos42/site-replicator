import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, HelpCircle, Heart, Clock, Shield, Target } from "lucide-react";

const MaPrimeRenov = () => {
  const faqItems = [
    {
      question: "Qui peut bénéficier de MaPrimeRénov' ?",
      answer: "MaPrimeRénov' est accessible à tous les propriétaires occupants et bailleurs, ainsi qu'aux copropriétés. Le montant de l'aide varie selon vos revenus et le gain énergétique des travaux."
    },
    {
      question: "Quels types de travaux sont éligibles ?",
      answer: "Les travaux éligibles incluent l'isolation (murs, combles, planchers), le changement de chauffage, la ventilation, et le remplacement des fenêtres. Chaque type de travaux doit respecter des critères de performance."
    },
    {
      question: "Quel est le montant de l'aide ?",
      answer: "Le montant varie selon vos revenus, la nature des travaux et leur efficacité énergétique. Il peut aller de 20% à 90% du montant des travaux, avec des plafonds spécifiques par type de travaux."
    },
    {
      question: "Comment faire la demande ?",
      answer: "La demande se fait en ligne sur le site maprimerenov.gouv.fr. Nous vous accompagnons dans toutes les étapes, de la création du compte à la validation finale du dossier."
    },
    {
      question: "Quels documents sont nécessaires ?",
      answer: "Les principaux documents requis sont : avis d'imposition, devis d'entreprise RGE, plan de financement, et justificatif de propriété. Notre équipe vous aide à rassembler tous les documents nécessaires."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Engagement",
      description: "Nous nous investissons pleinement dans chaque projet pour garantir votre satisfaction et maximiser vos économies d'énergie."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Expertise",
      description: "Notre équipe de professionnels qualifiés maîtrise parfaitement les aspects techniques et administratifs de votre rénovation."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Personnalisation",
      description: "Chaque projet est unique. Nous adaptons notre accompagnement à vos besoins et objectifs spécifiques."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Réactivité",
      description: "Nous assurons un suivi régulier et répondons rapidement à toutes vos questions tout au long du projet."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Section 1: MaPrimeRénov' Guide */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">MaPrimeRénov' : Guide Complet</h1>
          <p className="text-lg text-muted-foreground">
            MaPrimeRénov' est l'aide principale de l'État pour la rénovation énergétique. 
            Découvrez comment ce dispositif peut vous aider à financer vos travaux et améliorer 
            le confort de votre logement.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Conditions d'Éligibilité</CardTitle>
            <CardDescription>Les critères essentiels pour bénéficier de l'aide</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Propriétaires éligibles</h3>
                <p className="text-muted-foreground">Propriétaires occupants, bailleurs et copropriétés</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Logements concernés</h3>
                <p className="text-muted-foreground">Résidences principales construites depuis plus de 15 ans</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Conditions de ressources</h3>
                <p className="text-muted-foreground">Montant de l'aide calculé selon les revenus du foyer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Questions Fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 2: Notre Expertise */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Notre Expertise à Votre Service</h2>
          <p className="text-lg text-muted-foreground">
            Nous vous accompagnons à chaque étape de votre projet de rénovation énergétique, 
            de l'évaluation initiale jusqu'à l'obtention de vos aides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">{value.icon}</div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notre Processus d'Accompagnement</CardTitle>
            <CardDescription>Un parcours simplifié en 4 étapes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-medium">Évaluation Initiale</h3>
                  <p className="text-muted-foreground">Analyse de votre situation et de vos besoins en rénovation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-medium">Plan Personnalisé</h3>
                  <p className="text-muted-foreground">Définition des travaux et optimisation des aides financières</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-medium">Montage du Dossier</h3>
                  <p className="text-muted-foreground">Préparation et soumission de votre dossier MaPrimeRénov'</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-medium">Suivi et Validation</h3>
                  <p className="text-muted-foreground">Accompagnement jusqu'au versement de votre prime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center py-8">
          <Button size="lg" className="animate-fade-up">
            Simuler Mes Aides
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MaPrimeRenov;