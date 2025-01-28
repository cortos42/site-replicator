import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HousingTypeStep } from "./form-steps/HousingTypeStep";
import { SurfaceAndHeatingStep } from "./form-steps/SurfaceAndHeatingStep";
import { WorkTypesStep } from "./form-steps/WorkTypesStep";
import { LocationStep } from "./form-steps/LocationStep";
import { HouseholdStep } from "./form-steps/HouseholdStep";
import { ContactStep } from "./form-steps/ContactStep";

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