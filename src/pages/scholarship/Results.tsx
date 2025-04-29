
import { useEffect } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import { useNavigate } from "react-router-dom";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Button } from "@/components/ui/button";
import { Check, Award, GraduationCap, Mail, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Results = () => {
  const { formData } = useScholarshipForm();
  const navigate = useNavigate();
  
  // Simple validation to prevent direct access
  useEffect(() => {
    if (!formData.leadCapture.email || !formData.leadCapture.phone) {
      navigate("/scholarship/lead-capture");
    } else {
      // Show success toast when the page loads
      toast({
        title: "Success!",
        description: "Your scholarship matches are ready!",
      });
    }
  }, [formData, navigate]);
  
  // Calculate mock match percentage based on form data
  const calculateMatchPercentage = () => {
    let score = 0;
    const total = 5;
    
    // Academic level
    if (["Bachelor's", "Master's"].includes(formData.academics.educationLevel)) {
      score++;
    }
    
    // GPA conversion (assuming 4.0 scale)
    const gpa = parseFloat(formData.academics.gpa);
    if (!isNaN(gpa) && gpa > 3.5) {
      score++;
    } else if (!isNaN(gpa) && gpa > 3.0) {
      score += 0.5;
    }
    
    // Test scores
    if (formData.testScores.hasSAT || formData.testScores.hasGRE) {
      score++;
    }
    
    // Age
    const age = parseInt(formData.personal.age);
    if (!isNaN(age) && age >= 18 && age <= 30) {
      score++;
    }
    
    // Country (giving preference to international)
    if (formData.personal.country !== "United States") {
      score++;
    }
    
    const percentage = Math.min(Math.round((score / total) * 100), 96);
    return Math.max(percentage, 65); // Ensure minimum of 65% for better user experience
  };
  
  // Generate two random scholarship names
  const mockScholarships = [
    "Interdimensional Science Scholarship",
    "Portal Research Excellence Award",
    "Galactic Federation Scholarship",
    "Citadel of Ricks Academic Grant",
    "Unity Higher Education Fund",
    "Anatomy Park Internship Grant"
  ];
  
  const selectedScholarships = mockScholarships
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  return (
    <FormStepLayout
      title="Your Scholarship Matches!"
      description={`Wubba Lubba Dub Dub! You matched with ${selectedScholarships.length} scholarships!`}
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
    >
      <div className="space-y-8">
        {/* Match percentage */}
        <div className="text-center">
          <div className="text-5xl font-bold text-scholar-primary mb-2">{calculateMatchPercentage()}%</div>
          <p className="text-lg">Match with top scholarships</p>
        </div>
        
        {/* Scholarship matches */}
        <div className="space-y-4">
          {selectedScholarships.map((scholarship, index) => (
            <div 
              key={index}
              className="border-2 border-scholar-primary/20 bg-white rounded-lg p-4 flex items-center"
            >
              <div className="h-12 w-12 bg-scholar-primary/10 rounded-full flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-scholar-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{scholarship}</h3>
                <p className="text-sm text-gray-600">Results sent to your email</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact confirmation */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <p className="font-semibold text-green-700">We'll contact you soon!</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>{formData.leadCapture.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{formData.leadCapture.phone}</span>
            </div>
          </div>
        </div>
        
        {/* Additional information */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-600">One of our scholarship advisors will contact you shortly with detailed information about your matches.</p>
          <Button 
            onClick={() => navigate("/")}
            className="bg-scholar-primary hover:bg-scholar-primary/90"
            size="lg"
          >
            Return Home
          </Button>
        </div>
      </div>
    </FormStepLayout>
  );
};

export default Results;
