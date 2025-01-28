import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin } from "lucide-react";

interface LocationStepProps {
  formData: {
    startDate: string;
    location: {
      postalCode: string;
      city: string;
    };
  };
  setFormData: (data: any) => void;
}

export const LocationStep = ({ formData, setFormData }: LocationStepProps) => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};