
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const TestScoresStep = () => {
  const { formData, updateTestScores } = useScholarshipForm();
  const [testData, setTestData] = useState({
    hasSAT: formData.testScores.hasSAT,
    satScore: formData.testScores.satScore,
    hasGRE: formData.testScores.hasGRE,
    greScore: formData.testScores.greScore,
    hasTOEFL: formData.testScores.hasTOEFL,
    toeflScore: formData.testScores.toeflScore,
    hasIELTS: formData.testScores.hasIELTS,
    ieltsScore: formData.testScores.ieltsScore,
    otherTests: formData.testScores.otherTests,
  });

  const handleToggleChange = (field: string) => (checked: boolean) => {
    setTestData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTestData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleNext = () => {
    updateTestScores(testData);
    return true;
  };

  return (
    <FormStepLayout
      title="Test Scores"
      description="*Burp* Have any standardized test scores, Morty? They can help with scholarships!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/lead-capture"
      prevUrl="/scholarship/major"
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="hasSAT" className="text-xl">SAT Score</Label>
            <Switch
              id="hasSAT"
              checked={testData.hasSAT}
              onCheckedChange={handleToggleChange("hasSAT")}
            />
          </div>
          
          {testData.hasSAT && (
            <div className="ml-6 mt-2">
              <Input
                value={testData.satScore}
                onChange={handleInputChange("satScore")}
                placeholder="Enter your SAT score (e.g., 1400)"
                className="text-lg p-6 rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="hasGRE" className="text-xl">GRE Score</Label>
            <Switch
              id="hasGRE"
              checked={testData.hasGRE}
              onCheckedChange={handleToggleChange("hasGRE")}
            />
          </div>
          
          {testData.hasGRE && (
            <div className="ml-6 mt-2">
              <Input
                value={testData.greScore}
                onChange={handleInputChange("greScore")}
                placeholder="Enter your GRE score (e.g., 320)"
                className="text-lg p-6 rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="hasTOEFL" className="text-xl">TOEFL Score</Label>
            <Switch
              id="hasTOEFL"
              checked={testData.hasTOEFL}
              onCheckedChange={handleToggleChange("hasTOEFL")}
            />
          </div>
          
          {testData.hasTOEFL && (
            <div className="ml-6 mt-2">
              <Input
                value={testData.toeflScore}
                onChange={handleInputChange("toeflScore")}
                placeholder="Enter your TOEFL score (e.g., 100)"
                className="text-lg p-6 rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="hasIELTS" className="text-xl">IELTS Score</Label>
            <Switch
              id="hasIELTS"
              checked={testData.hasIELTS}
              onCheckedChange={handleToggleChange("hasIELTS")}
            />
          </div>
          
          {testData.hasIELTS && (
            <div className="ml-6 mt-2">
              <Input
                value={testData.ieltsScore}
                onChange={handleInputChange("ieltsScore")}
                placeholder="Enter your IELTS score (e.g., 7.5)"
                className="text-lg p-6 rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="otherTests" className="text-xl">Other Test Scores (Optional)</Label>
          <Textarea
            id="otherTests"
            value={testData.otherTests}
            onChange={handleInputChange("otherTests")}
            placeholder="Enter any other test scores (e.g., GMAT: 720, LSAT: 165)"
            className="text-lg p-4 rounded-lg min-h-[120px]"
          />
        </div>
      </div>
    </FormStepLayout>
  );
};

export default TestScoresStep;
