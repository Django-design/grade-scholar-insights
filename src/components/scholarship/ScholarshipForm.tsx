
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import PersonalInfoForm from "./PersonalInfoForm";
import AcademicTranscriptsForm from "./AcademicTranscriptsForm";
import TestScoresForm from "./TestScoresForm";
import ResultsView from "./ResultsView";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Academics" },
  { id: 3, name: "Test Scores" },
  { id: 4, name: "Results" },
];

const ScholarshipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      age: "",
      country: "",
      interestedDegree: "",
      email: "",
    },
    academics: {
      educationLevel: "",
      gradingScheme: "",
      gpa: "",
      major: "",
      graduationYear: "",
    },
    testScores: {
      hasSAT: false,
      satScore: "",
      hasGRE: false,
      greScore: "",
      hasTOEFL: false,
      toeflScore: "",
      hasIELTS: false,
      ieltsScore: "",
      otherTests: "",
    },
  });

  const handlePersonalInfoNext = (personalData: any) => {
    setFormData({
      ...formData,
      personal: personalData,
    });
    setCurrentStep(2);
  };

  const handleAcademicsNext = (academicData: any) => {
    setFormData({
      ...formData,
      academics: academicData,
    });
    setCurrentStep(3);
  };

  const handleTestScoresNext = (testScoreData: any) => {
    setFormData({
      ...formData,
      testScores: testScoreData,
    });
    setCurrentStep(4);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFormData({
      personal: {
        name: "",
        age: "",
        country: "",
        interestedDegree: "",
        email: "",
      },
      academics: {
        educationLevel: "",
        gradingScheme: "",
        gpa: "",
        major: "",
        graduationYear: "",
      },
      testScores: {
        hasSAT: false,
        satScore: "",
        hasGRE: false,
        greScore: "",
        hasTOEFL: false,
        toeflScore: "",
        hasIELTS: false,
        ieltsScore: "",
        otherTests: "",
      },
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <StepIndicator currentStep={currentStep} steps={steps} />
      
      <div className="mt-8">
        {currentStep === 1 && (
          <PersonalInfoForm
            onNext={handlePersonalInfoNext}
            initialData={formData.personal}
          />
        )}
        {currentStep === 2 && (
          <AcademicTranscriptsForm
            onNext={handleAcademicsNext}
            onPrevious={handlePrevious}
            initialData={formData.academics}
          />
        )}
        {currentStep === 3 && (
          <TestScoresForm
            onNext={handleTestScoresNext}
            onPrevious={handlePrevious}
            initialData={formData.testScores}
          />
        )}
        {currentStep === 4 && (
          <ResultsView
            formData={formData}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default ScholarshipForm;
