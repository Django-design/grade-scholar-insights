
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface TestScoresFormProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
  initialData: {
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
}

const TestScoresForm = ({ onNext, onPrevious, initialData }: TestScoresFormProps) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="hasSAT" className="text-base">SAT</Label>
              <Switch
                id="hasSAT"
                checked={formData.hasSAT}
                onCheckedChange={(checked) => handleSwitchChange("hasSAT", checked)}
              />
            </div>
            {formData.hasSAT && (
              <div className="ml-8">
                <Label htmlFor="satScore">SAT Score</Label>
                <Input
                  id="satScore"
                  name="satScore"
                  placeholder="Enter your SAT score"
                  value={formData.satScore}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="hasGRE" className="text-base">GRE</Label>
              <Switch
                id="hasGRE"
                checked={formData.hasGRE}
                onCheckedChange={(checked) => handleSwitchChange("hasGRE", checked)}
              />
            </div>
            {formData.hasGRE && (
              <div className="ml-8">
                <Label htmlFor="greScore">GRE Score</Label>
                <Input
                  id="greScore"
                  name="greScore"
                  placeholder="Enter your GRE score"
                  value={formData.greScore}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="hasTOEFL" className="text-base">TOEFL</Label>
              <Switch
                id="hasTOEFL"
                checked={formData.hasTOEFL}
                onCheckedChange={(checked) => handleSwitchChange("hasTOEFL", checked)}
              />
            </div>
            {formData.hasTOEFL && (
              <div className="ml-8">
                <Label htmlFor="toeflScore">TOEFL Score</Label>
                <Input
                  id="toeflScore"
                  name="toeflScore"
                  placeholder="Enter your TOEFL score"
                  value={formData.toeflScore}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="hasIELTS" className="text-base">IELTS</Label>
              <Switch
                id="hasIELTS"
                checked={formData.hasIELTS}
                onCheckedChange={(checked) => handleSwitchChange("hasIELTS", checked)}
              />
            </div>
            {formData.hasIELTS && (
              <div className="ml-8">
                <Label htmlFor="ieltsScore">IELTS Score</Label>
                <Input
                  id="ieltsScore"
                  name="ieltsScore"
                  placeholder="Enter your IELTS score"
                  value={formData.ieltsScore}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherTests">Other Test Scores (Optional)</Label>
            <Input
              id="otherTests"
              name="otherTests"
              placeholder="Enter any other test scores (e.g., GMAT: 720)"
              value={formData.otherTests}
              onChange={handleChange}
            />
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
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TestScoresForm;
