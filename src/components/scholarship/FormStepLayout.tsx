
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Head from "@/components/Head";

interface FormStepLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  nextUrl?: string;
  prevUrl?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  isLastStep?: boolean;
}

const FormStepLayout = ({
  children,
  title,
  description,
  nextUrl,
  prevUrl,
  onNext,
  onPrevious,
  isLastStep = false,
}: FormStepLayoutProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNext = () => {
    if (onNext) {
      const canProceed = onNext();
      if (canProceed && nextUrl) {
        navigate(nextUrl);
      }
    } else if (nextUrl) {
      navigate(nextUrl);
    }
  };

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
    if (prevUrl) {
      navigate(prevUrl);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Head 
        title={`${title} | ScholarAI`}
        description={description}
      />
      
      <div className="flex-1 flex flex-col px-4 py-8 max-w-lg mx-auto w-full">
        {/* Title and description */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-scholar-primary mb-3">{title}</h1>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
        
        {/* Content */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          {children}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {prevUrl && (
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Back
            </Button>
          )}
          
          <div className="flex-1" />
          
          {nextUrl && (
            <Button 
              onClick={handleNext}
              className="bg-scholar-primary hover:bg-scholar-primary/90 flex items-center gap-2"
            >
              {isLastStep ? "Submit" : "Next"}
              <ChevronRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormStepLayout;
