
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormDataState {
  personal: {
    name: string;
    age: string;
    country: string;
    interestedDegree: string;
    email: string;
    phone: string; // Added for WhatsApp contact
  };
  academics: {
    educationLevel: string;
    gradingScheme: string;
    gpa: string;
    major: string;
    graduationYear: string;
  };
  testScores: {
    hasSAT: boolean;
    satScore: string;
    hasGRE: boolean;
    greScore: string;
    hasTOEFL: boolean;
    toeflScore: string;
    hasIELTS: boolean;
    ieltsScore: string;
    otherTests: string;
  };
  leadCapture: {
    email: string;
    phone: string;
    consent: boolean;
  };
  currentStep: number;
}

const initialFormState: FormDataState = {
  personal: {
    name: "",
    age: "",
    country: "",
    interestedDegree: "",
    email: "",
    phone: "",
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
  leadCapture: {
    email: "",
    phone: "",
    consent: false,
  },
  currentStep: 1,
};

interface FormContextType {
  formData: FormDataState;
  updatePersonal: (data: Partial<FormDataState["personal"]>) => void;
  updateAcademics: (data: Partial<FormDataState["academics"]>) => void;
  updateTestScores: (data: Partial<FormDataState["testScores"]>) => void;
  updateLeadCapture: (data: Partial<FormDataState["leadCapture"]>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
}

const ScholarshipFormContext = createContext<FormContextType | undefined>(undefined);

export const ScholarshipFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormDataState>(initialFormState);

  const updatePersonal = (data: Partial<FormDataState["personal"]>) => {
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, ...data },
    }));
  };

  const updateAcademics = (data: Partial<FormDataState["academics"]>) => {
    setFormData((prev) => ({
      ...prev,
      academics: { ...prev.academics, ...data },
    }));
  };

  const updateTestScores = (data: Partial<FormDataState["testScores"]>) => {
    setFormData((prev) => ({
      ...prev,
      testScores: { ...prev.testScores, ...data },
    }));
  };

  const updateLeadCapture = (data: Partial<FormDataState["leadCapture"]>) => {
    setFormData((prev) => ({
      ...prev,
      leadCapture: { ...prev.leadCapture, ...data },
    }));
  };

  const nextStep = () => {
    setFormData((prev) => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  };

  const prevStep = () => {
    setFormData((prev) => ({
      ...prev,
      currentStep: Math.max(1, prev.currentStep - 1),
    }));
  };

  const goToStep = (step: number) => {
    setFormData((prev) => ({
      ...prev,
      currentStep: step,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  return (
    <ScholarshipFormContext.Provider
      value={{
        formData,
        updatePersonal,
        updateAcademics,
        updateTestScores,
        updateLeadCapture,
        nextStep,
        prevStep,
        goToStep,
        resetForm,
      }}
    >
      {children}
    </ScholarshipFormContext.Provider>
  );
};

export const useScholarshipForm = () => {
  const context = useContext(ScholarshipFormContext);
  if (!context) {
    throw new Error("useScholarshipForm must be used within a ScholarshipFormProvider");
  }
  return context;
};
