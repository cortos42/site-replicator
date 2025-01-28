import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";

interface HouseholdStepProps {
  formData: {
    ownershipStatus: string;
    householdSize: string;
  };
  setFormData: (data: any) => void;
}

export const HouseholdStep = ({ formData, setFormData }: HouseholdStepProps) => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};