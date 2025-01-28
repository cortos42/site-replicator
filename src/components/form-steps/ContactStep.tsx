import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Wallet, Phone, Mail } from "lucide-react";

interface ContactStepProps {
  formData: {
    income: string;
    contact: {
      phone: string;
      email: string;
    };
  };
  setFormData: (data: any) => void;
}

export const ContactStep = ({ formData, setFormData }: ContactStepProps) => {
  return (
    <div className="space-y-8">
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
  );
};