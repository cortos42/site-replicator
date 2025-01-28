import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Home, Calendar } from "lucide-react";

interface HousingTypeStepProps {
  formData: {
    housingType: string;
    constructionDate: string;
  };
  setFormData: (data: any) => void;
}

export const HousingTypeStep = ({ formData, setFormData }: HousingTypeStepProps) => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};