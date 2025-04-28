
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface AcademicTranscriptsFormProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
  initialData: {
    educationLevel: string;
    gradingScheme: string;
    gpa: string;
    major: string;
    graduationYear: string;
  };
}

const educationLevels = [
  "High School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];

const gradingSchemes = [
  "4.0 Scale",
  "10.0 Scale",
  "100% Scale",
  "Letter Grade (A-F)",
  "UK Honours (First, 2:1, etc.)",
  "Other",
];

const AcademicTranscriptsForm = ({ onNext, onPrevious, initialData }: AcademicTranscriptsFormProps) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.educationLevel) {
      newErrors.educationLevel = "Education level is required";
    }
    if (!formData.gradingScheme) {
      newErrors.gradingScheme = "Grading scheme is required";
    }
    if (!formData.gpa.trim()) {
      newErrors.gpa = "GPA or score is required";
    }
    if (!formData.major.trim()) {
      newErrors.major = "Field of study/Major is required";
    }
    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = "Graduation year is required";
    } else if (
      isNaN(Number(formData.graduationYear)) || 
      Number(formData.graduationYear) < 1950 || 
      Number(formData.graduationYear) > 2030
    ) {
      newErrors.graduationYear = "Please enter a valid year";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="educationLevel">Education Level</Label>
            <Select
              value={formData.educationLevel}
              onValueChange={(value) => handleSelectChange("educationLevel", value)}
            >
              <SelectTrigger className={errors.educationLevel ? "border-red-500" : ""}>
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
            {errors.educationLevel && <p className="text-red-500 text-sm">{errors.educationLevel}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="gradingScheme">Grading Scheme</Label>
            <Select
              value={formData.gradingScheme}
              onValueChange={(value) => handleSelectChange("gradingScheme", value)}
            >
              <SelectTrigger className={errors.gradingScheme ? "border-red-500" : ""}>
                <SelectValue placeholder="Select your grading scheme" />
              </SelectTrigger>
              <SelectContent>
                {gradingSchemes.map((scheme) => (
                  <SelectItem key={scheme} value={scheme}>
                    {scheme}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.gradingScheme && <p className="text-red-500 text-sm">{errors.gradingScheme}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="gpa">GPA/Grade Average</Label>
            <Input
              id="gpa"
              name="gpa"
              placeholder="Enter your GPA or grade average"
              value={formData.gpa}
              onChange={handleChange}
              className={errors.gpa ? "border-red-500" : ""}
            />
            {errors.gpa && <p className="text-red-500 text-sm">{errors.gpa}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="major">Field of Study/Major</Label>
            <Input
              id="major"
              name="major"
              placeholder="Enter your field of study or major"
              value={formData.major}
              onChange={handleChange}
              className={errors.major ? "border-red-500" : ""}
            />
            {errors.major && <p className="text-red-500 text-sm">{errors.major}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="graduationYear">Graduation Year</Label>
            <Input
              id="graduationYear"
              name="graduationYear"
              type="number"
              placeholder="Enter your graduation year"
              value={formData.graduationYear}
              onChange={handleChange}
              className={errors.graduationYear ? "border-red-500" : ""}
            />
            {errors.graduationYear && <p className="text-red-500 text-sm">{errors.graduationYear}</p>}
          </div>

          <div className="flex space-x-4">
            <Button 
              type="button" 
              variant="outline" 
              className="w-1/2" 
              onClick={onPrevious}
            >
              Previous
            </Button>
            <Button 
              type="submit" 
              className="w-1/2 bg-scholar-primary hover:bg-scholar-primary/90"
            >
              Next
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AcademicTranscriptsForm;
