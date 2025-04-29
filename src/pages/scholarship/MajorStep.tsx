
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MajorStep = () => {
  const { formData, updateAcademics } = useScholarshipForm();
  const [major, setMajor] = useState(formData.academics.major);
  const [graduationYear, setGraduationYear] = useState(formData.academics.graduationYear);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleMajorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
    setErrors((prev) => ({ ...prev, major: "" }));
  };

  const handleGraduationYearChange = (value: string) => {
    setGraduationYear(value);
    setErrors((prev) => ({ ...prev, graduationYear: "" }));
  };

  const handleNext = () => {
    const newErrors: Record<string, string> = {};
    
    if (!major.trim()) {
      newErrors.major = "Please enter your major or field of study";
    }
    
    if (!graduationYear) {
      newErrors.graduationYear = "Please select your expected graduation year";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return false;
    }
    
    updateAcademics({
      major,
      graduationYear
    });
    
    return true;
  };

  // Generate graduation years (current year - 5 to current year + 10)
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: 16 }, (_, i) => (currentYear - 5 + i).toString());

  return (
    <FormStepLayout
      title="What's your major?"
      description="*Burp* Tell me what you're studying, Morty! It's important!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/test-scores"
      prevUrl="/scholarship/grades"
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="major" className="text-xl">Major/Field of Study</Label>
          <Input
            id="major"
            value={major}
            onChange={handleMajorChange}
            placeholder="e.g., Computer Science, Biology, Economics"
            className="text-lg p-6 rounded-lg"
          />
          {errors.major && <p className="text-red-500">{errors.major}</p>}
        </div>
        
        <div className="space-y-4">
          <Label htmlFor="graduationYear" className="text-xl">Expected Graduation Year</Label>
          <Select value={graduationYear} onValueChange={handleGraduationYearChange}>
            <SelectTrigger id="graduationYear" className="text-lg p-6 rounded-lg">
              <SelectValue placeholder="Select graduation year" />
            </SelectTrigger>
            <SelectContent>
              {graduationYears.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.graduationYear && <p className="text-red-500">{errors.graduationYear}</p>}
        </div>
      </div>
    </FormStepLayout>
  );
};

export default MajorStep;
