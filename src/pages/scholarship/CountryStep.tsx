
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CountryStep = () => {
  const { formData, updatePersonal } = useScholarshipForm();
  const [country, setCountry] = useState(formData.personal.country);
  const [error, setError] = useState("");

  const handleChange = (value: string) => {
    setCountry(value);
    setError("");
  };

  const handleNext = () => {
    if (!country) {
      setError("Please select your country");
      return false;
    }
    
    updatePersonal({ country });
    return true;
  };

  // List of countries (abbreviated for brevity)
  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", 
    "Germany", "France", "Japan", "China", "India", "Brazil", 
    "Mexico", "South Africa", "Nigeria", "Egypt", "Russia"
  ];

  return (
    <FormStepLayout
      title="Where are you from?"
      description="Your location helps us find *burp* scholarships in your region, Morty!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/degree"
      prevUrl="/scholarship/age"
      onNext={handleNext}
    >
      <div className="space-y-4">
        <Label htmlFor="country" className="text-xl">Your Country</Label>
        <Select value={country} onValueChange={handleChange}>
          <SelectTrigger id="country" className="text-lg p-6 rounded-lg">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </FormStepLayout>
  );
};

export default CountryStep;
