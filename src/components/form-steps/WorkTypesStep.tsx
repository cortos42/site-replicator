import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Wrench, Shield } from "lucide-react";

interface WorkTypesStepProps {
  formData: {
    workType: string[];
    insulationType: string[];
  };
  setFormData: (data: any) => void;
}

export const WorkTypesStep = ({ formData, setFormData }: WorkTypesStepProps) => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};