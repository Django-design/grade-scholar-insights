
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EducationStep = () => {
  const { formData, updateAcademics } = useScholarshipForm();
  const [educationLevel, setEducationLevel] = useState(formData.academics.educationLevel);
  const [error, setError] = useState("");

  const handleChange = (value: string) => {
    setEducationLevel(value);
    setError("");
  };

  const handleNext = () => {
    if (!educationLevel) {
      setError("Please select your current education level");
      return false;
    }
    
    updateAcademics({ educationLevel });
    return true;
  };

  const educationLevels = [
    "High School", "High School Graduate", "Some College",
    "Associate's Degree", "Bachelor's Degree", "Master's Degree",
    "PhD", "Postdoctoral", "Other"
  ];

  return (
    <FormStepLayout
      title="Your current education?"
      description="We need to know your *burp* current education level, Morty!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/grades"
      prevUrl="/scholarship/degree"
      onNext={handleNext}
    >
      <div className="space-y-4">
        <Label htmlFor="education" className="text-xl">Current Education Level</Label>
        <Select value={educationLevel} onValueChange={handleChange}>
          <SelectTrigger id="education" className="text-lg p-6 rounded-lg">
            <SelectValue placeholder="Select your education level" />
          </SelectTrigger>
          <SelectContent>
            {educationLevels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </FormStepLayout>
  );
};

export default EducationStep;
