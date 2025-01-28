import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HousingTypeStep } from "./form-steps/HousingTypeStep";
import { SurfaceAndHeatingStep } from "./form-steps/SurfaceAndHeatingStep";
import { WorkTypesStep } from "./form-steps/WorkTypesStep";
import { LocationStep } from "./form-steps/LocationStep";
import { HouseholdStep } from "./form-steps/HouseholdStep";
import { ContactStep } from "./form-steps/ContactStep";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const MaPrimeRenovForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('form_submissions')
        .insert({
          housing_type: formData.housingType,
          construction_date: formData.constructionDate,
          surface: formData.surface,
          heating_type: formData.heatingType,
          work_types: formData.workType,
          insulation_types: formData.insulationType,
          start_date: formData.startDate,
          postal_code: formData.location.postalCode,
          city: formData.location.city,
          ownership_status: formData.ownershipStatus,
          household_size: formData.householdSize,
          income: formData.income,
          phone: formData.contact.phone,
          email: formData.contact.email
        });

      if (error) throw error;

      toast({
        title: "Formulaire envoyé avec succès !",
        description: "Nous vous contacterons bientôt pour discuter de votre projet.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const steps = [
    <HousingTypeStep key="housing" formData={formData} setFormData={setFormData} />,
    <SurfaceAndHeatingStep key="surface" formData={formData} setFormData={setFormData} />,
    <WorkTypesStep key="works" formData={formData} setFormData={setFormData} />,
    <LocationStep key="location" formData={formData} setFormData={setFormData} />,
    <HouseholdStep key="household" formData={formData} setFormData={setFormData} />,
    <ContactStep key="contact" formData={formData} setFormData={setFormData} />
  ];

  return (
    <div className="relative">
      <ScrollArea className="h-[60vh] pr-4">
        {steps[currentStep - 1]}
      </ScrollArea>
      <div className="flex justify-between mt-4 pt-4 border-t">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1 || isSubmitting}
        >
          Précédent
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={isSubmitting}
        >
          {currentStep === totalSteps ? (isSubmitting ? "Envoi en cours..." : "Terminer") : "Suivant"}
        </Button>
      </div>
    </div>
  );
};