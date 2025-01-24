import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle, HelpCircle, Heart, Clock, Shield, Target, Euro, Home, Calendar } from "lucide-react";

const MaPrimeRenov = () => {
  const [primeAmount, setPrimeAmount] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedHousing, setSelectedHousing] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const calculatePrime = () => {
    setIsCalculating(true);
    // Simulation d'un calcul
    const randomAmount = Math.floor(Math.random() * 15000) + 5000;
    setTimeout(() => {
      setPrimeAmount(randomAmount);
      setIsCalculating(false);
    }, 1000);
  };

  const stats = [
    { value: "15000€", label: "Prime moyenne" },
    { value: "80%", label: "Taux de satisfaction" },
    { value: "30%", label: "Économies d'énergie" },
  ];

  const timelineSteps = [
    {
      title: "Évaluation initiale",
      description: "Analyse de votre situation et de vos besoins",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Devis et simulation",
      description: "Estimation des coûts et des aides",
      icon: <Euro className="w-6 h-6" />,
    },
    {
      title: "Montage du dossier",
      description: "Préparation et soumission de votre demande",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Réalisation des travaux",
      description: "Suivi et accompagnement pendant les travaux",
      icon: <Target className="w-6 h-6" />,
    },
  ];

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
      {/* Hero Section avec animation fade-in */}
      <section className="relative h-[60vh] flex items-center animate-fade-up">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] 
          bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative text-white max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Simplifiez Votre Rénovation Énergétique
          </h1>
          <p className="text-xl md:text-2xl">
            Découvrez MaPrimeRénov' et maximisez vos aides financières
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white animate-pulse"
            onClick={calculatePrime}
          >
            {isCalculating ? "Calcul en cours..." : "Simuler mon aide"}
          </Button>
          
          {primeAmount > 0 && (
            <div className="mt-8 text-3xl font-bold animate-fade-up">
              Estimation de votre prime : {primeAmount}€
            </div>
          )}
        </div>
      </section>

      {/* Section Simulateur */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne de gauche - Simulateur */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Simulez vos aides MaPrimeRénov'</h2>
              <p className="text-muted-foreground">
                Découvrez en quelques clics le montant de vos aides pour vos travaux de rénovation énergétique.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Type de logement</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={selectedHousing === 'house' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedHousing('house')}
                    >
                      <Home className="mr-2" />
                      Maison
                    </Button>
                    <Button
                      variant={selectedHousing === 'apartment' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedHousing('apartment')}
                    >
                      <Home className="mr-2" />
                      Appartement
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Période de construction</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={selectedPeriod === 'before2009' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedPeriod('before2009')}
                    >
                      <Calendar className="mr-2" />
                      Avant 2009
                    </Button>
                    <Button
                      variant={selectedPeriod === 'after2009' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setSelectedPeriod('after2009')}
                    >
                      <Calendar className="mr-2" />
                      Après 2009
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6"
                  onClick={calculatePrime}
                  disabled={!selectedHousing || !selectedPeriod || isCalculating}
                >
                  {isCalculating ? "Calcul en cours..." : "Calculer mon aide"}
                </Button>

                {primeAmount > 0 && (
                  <div className="p-4 bg-primary/10 rounded-lg text-center animate-fade-up">
                    <p className="text-lg">Estimation de votre prime :</p>
                    <p className="text-3xl font-bold text-primary">{primeAmount}€</p>
                  </div>
                )}
              </div>
            </div>

            {/* Colonne de droite - Avantages */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Les avantages MaPrimeRénov'</h2>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Euro className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Jusqu'à 20 000€ d'aide</h3>
                      <p className="text-muted-foreground">Bénéficiez d'une aide financière importante pour vos travaux de rénovation énergétique.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Cumulable avec d'autres aides</h3>
                      <p className="text-muted-foreground">MaPrimeRénov' est cumulable avec les CEE et d'autres aides locales.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Versement rapide</h3>
                      <p className="text-muted-foreground">Recevez votre prime rapidement après la fin des travaux.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques avec compteurs animés */}
      <section className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">
                {stat.value}
              </CardTitle>
              <CardDescription className="text-lg">
                {stat.label}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Timeline interactive */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Notre Processus</h2>
        <div className="relative">
          {timelineSteps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{step.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20"></div>
        </div>
      </section>

      {/* FAQ Section avec animations */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Questions Fréquentes</h2>
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
      </section>

      {/* Section Avantages avec hover effects */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* CTA Final */}
      <section className="text-center py-12">
        <Card className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Prêt à commencer votre projet ?</CardTitle>
            <CardDescription>
              Nos experts sont là pour vous accompagner à chaque étape
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Contactez-nous
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default MaPrimeRenov;
