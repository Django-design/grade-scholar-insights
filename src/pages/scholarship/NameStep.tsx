
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NameStep = () => {
  const { formData, updatePersonal } = useScholarshipForm();
  const [name, setName] = useState(formData.personal.name);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError("");
  };

  const handleNext = () => {
    if (!name.trim()) {
      setError("Please tell us your name");
      return false;
    }
    
    updatePersonal({ name });
    return true;
  };

  return (
    <FormStepLayout
      title="What's your name?"
      description="Listen up, *burp* we need your name to find you some scholarships!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/age"
      onNext={handleNext}
    >
      <div className="space-y-4">
        <Label htmlFor="name" className="text-xl">Full Name</Label>
        <Input
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="text-lg p-6 rounded-lg"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </FormStepLayout>
  );
};

export default NameStep;
