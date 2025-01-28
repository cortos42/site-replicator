import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Ruler, Flame } from "lucide-react";

interface SurfaceAndHeatingStepProps {
  formData: {
    surface: string;
    heatingType: string;
  };
  setFormData: (data: any) => void;
}

export const SurfaceAndHeatingStep = ({ formData, setFormData }: SurfaceAndHeatingStepProps) => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};