
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
  characterImage?: string;
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
  characterImage,
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
      onNext();
    }
    if (nextUrl) {
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-scholar-primary/10 to-scholar-accent/10">
      <Head 
        title={`${title} | ScholarAI`}
        description={description}
      />
      
      {/* Character image */}
      {characterImage && (
        <div className={`relative ${isMobile ? "h-[35vh]" : "h-[25vh]"} overflow-hidden bg-black/5`}>
          <img
            src={characterImage}
            alt="Rick and Morty character"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      
      <div className="flex-1 flex flex-col px-4 py-8 max-w-lg mx-auto w-full">
        {/* Title and description */}
        <div className={`text-center mb-8 ${characterImage ? "-mt-16 relative z-10" : ""}`}>
          <h1 className="text-3xl sm:text-4xl font-bold text-scholar-primary mb-3">{title}</h1>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
        
        {/* Content */}
        <div className="flex-1">{children}</div>
        
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
