
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DegreeStep = () => {
  const { formData, updatePersonal } = useScholarshipForm();
  const [interestedDegree, setInterestedDegree] = useState(formData.personal.interestedDegree);
  const [error, setError] = useState("");

  const handleChange = (value: string) => {
    setInterestedDegree(value);
    setError("");
  };

  const handleNext = () => {
    if (!interestedDegree) {
      setError("Please select the degree you're interested in");
      return false;
    }
    
    updatePersonal({ interestedDegree });
    return true;
  };

  const degreeTypes = [
    "Bachelor's", "Master's", "PhD", "Associate's", "Certificate", 
    "Diploma", "Professional Degree", "Postdoctoral"
  ];

  return (
    <FormStepLayout
      title="What degree do you want?"
      description="*Burp* Tell us what kind of degree you're looking for, Morty!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/education"
      prevUrl="/scholarship/country"
      onNext={handleNext}
    >
      <div className="space-y-4">
        <Label htmlFor="degree" className="text-xl">Degree Type</Label>
        <Select value={interestedDegree} onValueChange={handleChange}>
          <SelectTrigger id="degree" className="text-lg p-6 rounded-lg">
            <SelectValue placeholder="Select degree type" />
          </SelectTrigger>
          <SelectContent>
            {degreeTypes.map((degree) => (
              <SelectItem key={degree} value={degree}>
                {degree}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </FormStepLayout>
  );
};

export default DegreeStep;
