
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GradesStep = () => {
  const { formData, updateAcademics } = useScholarshipForm();
  const [gradingScheme, setGradingScheme] = useState(formData.academics.gradingScheme);
  const [gpa, setGpa] = useState(formData.academics.gpa);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleGradingSchemeChange = (value: string) => {
    setGradingScheme(value);
    setErrors((prev) => ({ ...prev, gradingScheme: "" }));
  };

  const handleGpaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGpa(e.target.value);
    setErrors((prev) => ({ ...prev, gpa: "" }));
  };

  const handleNext = () => {
    const newErrors: Record<string, string> = {};
    
    if (!gradingScheme) {
      newErrors.gradingScheme = "Please select your grading scheme";
    }
    
    if (!gpa) {
      newErrors.gpa = "Please enter your GPA or equivalent";
    } else {
      const gpaValue = parseFloat(gpa);
      
      if (isNaN(gpaValue)) {
        newErrors.gpa = "Please enter a valid number";
      } else if (
        (gradingScheme === "4.0 Scale" && (gpaValue < 0 || gpaValue > 4)) ||
        (gradingScheme === "10.0 Scale" && (gpaValue < 0 || gpaValue > 10)) ||
        (gradingScheme === "100% Scale" && (gpaValue < 0 || gpaValue > 100)) ||
        (gradingScheme === "UK Honours" && (gpaValue < 1 || gpaValue > 4))
      ) {
        newErrors.gpa = "GPA is outside the valid range for your grading scheme";
      }
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return false;
    }
    
    updateAcademics({
      gradingScheme,
      gpa
    });
    
    return true;
  };

  const gradingSchemes = [
    "4.0 Scale", "10.0 Scale", "100% Scale", "UK Honours", "Other"
  ];

  const getGpaPlaceholder = () => {
    switch (gradingScheme) {
      case "4.0 Scale": return "e.g., 3.5 out of 4.0";
      case "10.0 Scale": return "e.g., 8.5 out of 10.0";
      case "100% Scale": return "e.g., 85 out of 100";
      case "UK Honours": return "e.g., First Class, 2:1, etc.";
      default: return "Enter your GPA or equivalent";
    }
  };

  return (
    <FormStepLayout
      title="What are your grades?"
      description="*Burp* Your academic performance matters, Morty!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/major"
      prevUrl="/scholarship/education"
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="gradingScheme" className="text-xl">Grading System</Label>
          <Select value={gradingScheme} onValueChange={handleGradingSchemeChange}>
            <SelectTrigger id="gradingScheme" className="text-lg p-6 rounded-lg">
              <SelectValue placeholder="Select your grading system" />
            </SelectTrigger>
            <SelectContent>
              {gradingSchemes.map((scheme) => (
                <SelectItem key={scheme} value={scheme}>
                  {scheme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.gradingScheme && <p className="text-red-500">{errors.gradingScheme}</p>}
        </div>
        
        <div className="space-y-4">
          <Label htmlFor="gpa" className="text-xl">Your GPA/Grade</Label>
          <Input
            id="gpa"
            value={gpa}
            onChange={handleGpaChange}
            placeholder={getGpaPlaceholder()}
            className="text-lg p-6 rounded-lg"
          />
          {errors.gpa && <p className="text-red-500">{errors.gpa}</p>}
        </div>
      </div>
    </FormStepLayout>
  );
};

export default GradesStep;
