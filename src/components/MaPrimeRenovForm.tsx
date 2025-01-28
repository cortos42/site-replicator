import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, 
  Building2, 
  Calendar,
  MapPin,
  Users,
  Wallet,
  Phone,
  Mail,
  Ruler,
  Flame,
  Wrench,
  Shield
} from "lucide-react";

export const MaPrimeRenovForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    housingType: "",
    constructionDate: "",
    surface: "",
    heatingType: "",
    workType: [] as string[],
    insulationType: [] as string[],
    startDate: "",
    location: { postalCode: "", city: "" },
    ownershipStatus: "",
    householdSize: "",
    income: "",
    contact: { phone: "", email: "" }
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const questions = [
    // Questions 1-2
    <div key="1-2" className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Home className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">1. Votre projet concerne :</h3>
        </div>
        <RadioGroup 
          value={formData.housingType}
          onValueChange={(value) => setFormData({...formData, housingType: value})}
          className="grid gap-4"
        >
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
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Calendar className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">2. La construction de ce logement date de :</h3>
        </div>
        <RadioGroup 
          value={formData.constructionDate}
          onValueChange={(value) => setFormData({...formData, constructionDate: value})}
          className="grid gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="moins2" id="moins2" />
            <Label htmlFor="moins2">Moins de 2 ans</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2a15" id="2a15" />
            <Label htmlFor="2a15">Entre 2 ans et 15 ans</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="plus15" id="plus15" />
            <Label htmlFor="plus15">Plus de 15 ans</Label>
          </div>
        </RadioGroup>
      </div>
    </div>,

    // Questions 3-4
    <div key="3-4" className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Ruler className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">3. Quelle est la surface habitable approximative de votre logement (en m²) ?</h3>
        </div>
        <Input 
          type="number" 
          placeholder="Surface à préciser"
          value={formData.surface}
          onChange={(e) => setFormData({...formData, surface: e.target.value})}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Flame className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">4. Aujourd'hui, quel est le mode de chauffage principal pour ce logement ?</h3>
        </div>
        <RadioGroup 
          value={formData.heatingType}
          onValueChange={(value) => setFormData({...formData, heatingType: value})}
          className="grid gap-4"
        >
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
    </div>,

    // Questions 5-6
    <div key="5-6" className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Wrench className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">5. Quels travaux envisagez-vous de réaliser ?</h3>
        </div>
        <div className="grid gap-4">
          {[
            "Rénovation globale",
            "Isolation",
            "Chauffage",
            "Ventilation"
          ].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox 
                id={type}
                checked={formData.workType.includes(type)}
                onCheckedChange={(checked) => {
                  setFormData({
                    ...formData,
                    workType: checked 
                      ? [...formData.workType, type]
                      : formData.workType.filter(t => t !== type)
                  });
                }}
              />
              <Label htmlFor={type}>{type}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">6. Quels types d'isolation souhaitez-vous effectuer ?</h3>
        </div>
        <div className="grid gap-4">
          {[
            "Isolation des combles",
            "Isolation des murs",
            "Isolation du sol",
            "Isolation des fenêtres, porte-fenêtres ou volets roulants",
            "Isolation d'une toiture terrasse"
          ].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox 
                id={type}
                checked={formData.insulationType.includes(type)}
                onCheckedChange={(checked) => {
                  setFormData({
                    ...formData,
                    insulationType: checked 
                      ? [...formData.insulationType, type]
                      : formData.insulationType.filter(t => t !== type)
                  });
                }}
              />
              <Label htmlFor={type}>{type}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Questions 7-8
    <div key="7-8" className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Calendar className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">7. Quand souhaitez-vous démarrer vos travaux ?</h3>
        </div>
        <RadioGroup 
          value={formData.startDate}
          onValueChange={(value) => setFormData({...formData, startDate: value})}
          className="grid gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="6mois" id="6mois" />
            <Label htmlFor="6mois">Dans les 6 prochains mois</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="plusTard" id="plusTard" />
            <Label htmlFor="plusTard">Plus tard</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <MapPin className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">8. Où se situe votre logement ?</h3>
        </div>
        <div className="grid gap-4">
          <Input 
            placeholder="Code postal"
            value={formData.location.postalCode}
            onChange={(e) => setFormData({
              ...formData,
              location: { ...formData.location, postalCode: e.target.value }
            })}
          />
          <Input 
            placeholder="Ville"
            value={formData.location.city}
            onChange={(e) => setFormData({
              ...formData,
              location: { ...formData.location, city: e.target.value }
            })}
          />
        </div>
      </div>
    </div>,

    // Questions 9-10
    <div key="9-10" className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Users className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">9. Dans ce logement, vous êtes :</h3>
        </div>
        <RadioGroup 
          value={formData.ownershipStatus}
          onValueChange={(value) => setFormData({...formData, ownershipStatus: value})}
          className="grid gap-4"
        >
          {[
            "Propriétaire occupant",
            "Propriétaire d'une résidence secondaire",
            "Propriétaire bailleur",
            "Locataire"
          ].map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <RadioGroupItem value={status} id={status} />
              <Label htmlFor={status}>{status}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Users className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">10. Combien de personnes composent votre foyer, y compris vous-même ?</h3>
        </div>
        <Input 
          type="number"
          placeholder="Nombre de personnes"
          value={formData.householdSize}
          onChange={(e) => setFormData({...formData, householdSize: e.target.value})}
        />
      </div>
    </div>,

    // Questions 11-12
    <div key="11-12" className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Wallet className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">11. Quel est le revenu fiscal annuel approximatif de votre foyer ?</h3>
        </div>
        <RadioGroup 
          value={formData.income}
          onValueChange={(value) => setFormData({...formData, income: value})}
          className="grid gap-4"
        >
          {[
            "Inférieur à 25 115 €",
            "Entre 25 115 € et 32 197 €",
            "Entre 32 197 € et 45 340 €",
            "Supérieur à 45 340 €"
          ].map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <RadioGroupItem value={range} id={range} />
              <Label htmlFor={range}>{range}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Mail className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">12. Coordonnées</h3>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <Input 
              type="tel"
              placeholder="Numéro de téléphone"
              value={formData.contact.phone}
              onChange={(e) => setFormData({
                ...formData,
                contact: { ...formData.contact, phone: e.target.value }
              })}
            />
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <Input 
              type="email"
              placeholder="Email"
              value={formData.contact.email}
              onChange={(e) => setFormData({
                ...formData,
                contact: { ...formData.contact, email: e.target.value }
              })}
            />
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="relative">
      <ScrollArea className="h-[60vh] pr-4">
        {questions[currentStep - 1]}
      </ScrollArea>
      <div className="flex justify-between mt-4 pt-4 border-t">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Précédent
        </Button>
        <Button onClick={handleNext} disabled={currentStep === totalSteps}>
          {currentStep === totalSteps ? "Terminer" : "Suivant"}
        </Button>
      </div>
    </div>
  );
};