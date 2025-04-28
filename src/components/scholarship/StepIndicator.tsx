
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  steps: {
    id: number;
    name: string;
  }[];
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
  return (
    <div className="flex justify-center items-center mb-8">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`step-item ${currentStep === step.id ? "active" : ""} ${
            currentStep > step.id ? "complete" : ""
          }`}
        >
          <div className="step">
            {currentStep > step.id ? (
              <Check className="h-5 w-5" />
            ) : (
              step.id
            )}
          </div>
          <p className="text-sm mt-2">{step.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
