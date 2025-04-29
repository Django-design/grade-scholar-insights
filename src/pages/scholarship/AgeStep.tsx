
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AgeStep = () => {
  const { formData, updatePersonal } = useScholarshipForm();
  const [age, setAge] = useState(formData.personal.age);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
    setError("");
  };

  const handleNext = () => {
    if (!age.trim()) {
      setError("Please enter your age");
      return false;
    }
    
    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 16 || ageNum > 100) {
      setError("Please enter a valid age between 16 and 100");
      return false;
    }
    
    updatePersonal({ age });
    return true;
  };

  return (
    <FormStepLayout
      title="How old are you?"
      description="Your age helps us find scholarships that are *burp* right for you, Morty!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/country"
      prevUrl="/scholarship/name"
      onNext={handleNext}
    >
      <div className="space-y-4">
        <Label htmlFor="age" className="text-xl">Your Age</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={handleChange}
          placeholder="Enter your age"
          className="text-lg p-6 rounded-lg"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </FormStepLayout>
  );
};

export default AgeStep;
