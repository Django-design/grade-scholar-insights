
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, GraduationCap, Book } from "lucide-react";

interface ScholarshipMatch {
  id: string;
  name: string;
  organization: string;
  amount: string;
  description: string;
  eligibilityScore: number;
  deadline: string;
  link: string;
}

interface ResultsViewProps {
  formData: any;
  onReset: () => void;
}

// Mock function to analyze profile and generate scholarship matches
const analyzeProfile = (formData: any): {
  eligibilityScore: number;
  scholarships: ScholarshipMatch[];
  strengths: string[];
  improvements: string[];
} => {
  // Simulating AI analysis based on student data
  const educationLevelMap: Record<string, number> = {
    "High School": 1,
    "Associate's Degree": 2,
    "Bachelor's Degree": 3,
    "Master's Degree": 4,
    "PhD": 5,
  };

  let baseScore = 65; // Everyone starts with a base score
  
  // Adjust based on GPA
  let gpaScore = 0;
  const gpaValue = parseFloat(formData.academics.gpa);
  const gradingScheme = formData.academics.gradingScheme;
  
  if (gradingScheme === "4.0 Scale") {
    if (gpaValue >= 3.8) gpaScore = 20;
    else if (gpaValue >= 3.5) gpaScore = 15;
    else if (gpaValue >= 3.0) gpaScore = 10;
    else gpaScore = 5;
  } else if (gradingScheme === "100% Scale") {
    if (gpaValue >= 90) gpaScore = 20;
    else if (gpaValue >= 80) gpaScore = 15;
    else if (gpaValue >= 70) gpaScore = 10;
    else gpaScore = 5;
  } else {
    // Default scoring for other schemes
    gpaScore = 10;
  }
  
  // Adjust based on test scores
  let testScore = 0;
  if (formData.testScores.hasSAT && parseInt(formData.testScores.satScore) > 1400) {
    testScore += 5;
  }
  if (formData.testScores.hasGRE && parseInt(formData.testScores.greScore) > 310) {
    testScore += 5;
  }
  if ((formData.testScores.hasTOEFL && parseInt(formData.testScores.toeflScore) > 100) || 
      (formData.testScores.hasIELTS && parseFloat(formData.testScores.ieltsScore) >= 7.5)) {
    testScore += 5;
  }
  
  const totalScore = Math.min(baseScore + gpaScore + testScore, 100);
  
  // Generate mock scholarship matches based on profile
  const scholarships: ScholarshipMatch[] = [
    {
      id: "1",
      name: "Global Excellence Scholarship",
      organization: "International Education Foundation",
      amount: "$10,000",
      description: "For outstanding students pursuing higher education internationally",
      eligibilityScore: Math.min(totalScore + 5, 100),
      deadline: "May 15, 2025",
      link: "#",
    },
    {
      id: "2",
      name: formData.personal.interestedDegree + " Merit Scholarship",
      organization: "Academic Achievement Trust",
      amount: "$5,000 - $15,000",
      description: `Available to students pursuing a ${formData.personal.interestedDegree} degree with strong academic records`,
      eligibilityScore: Math.min(totalScore, 100),
      deadline: "June 30, 2025",
      link: "#",
    },
    {
      id: "3",
      name: `${formData.academics.major} Field Scholarship`,
      organization: "Professional Development Association",
      amount: "$7,500",
      description: `Provided to promising students in ${formData.academics.major}`,
      eligibilityScore: Math.min(totalScore - 10, 100),
      deadline: "April 30, 2025",
      link: "#",
    },
  ];
  
  // Generate personalized feedback
  const strengths = [];
  const improvements = [];
  
  if (gpaScore > 15) {
    strengths.push("Strong academic performance");
  } else {
    improvements.push("Consider ways to strengthen your academic record");
  }
  
  if (testScore > 10) {
    strengths.push("Excellent standardized test scores");
  } else {
    if (!formData.testScores.hasSAT && !formData.testScores.hasGRE) {
      improvements.push("Taking standardized tests like SAT or GRE could improve your eligibility");
    } else {
      improvements.push("Consider retaking standardized tests to improve your scores");
    }
  }
  
  if (educationLevelMap[formData.academics.educationLevel] >= 3) {
    strengths.push("Advanced education level is valuable for many scholarships");
  }
  
  // Always provide at least one improvement suggestion
  if (improvements.length === 0) {
    improvements.push("Consider gaining relevant extracurricular or volunteer experience");
  }
  
  return {
    eligibilityScore: totalScore,
    scholarships,
    strengths,
    improvements,
  };
};

const ResultsView = ({ formData, onReset }: ResultsViewProps) => {
  const analysisResults = analyzeProfile(formData);
  
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="bg-white shadow-md">
        <CardHeader className="bg-gradient-to-r from-scholar-primary to-scholar-secondary text-white">
          <CardTitle className="text-2xl font-bold">Your Scholarship Analysis</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Overall Eligibility Score</h3>
            <div className="flex items-center">
              <Progress
                value={analysisResults.eligibilityScore}
                className="h-3 flex-1 mr-4"
                indicatorClassName="bg-scholar-primary"
              />
              <span className="font-bold text-xl">{analysisResults.eligibilityScore}%</span>
            </div>
            <p className="mt-2 text-gray-600">
              Based on your academic history, test scores, and profile information
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Your Strengths</h3>
            <ul className="space-y-2">
              {analysisResults.strengths.map((strength, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 bg-green-100 text-green-600 p-1 rounded-full">
                    <Award className="h-4 w-4" />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Areas for Improvement</h3>
            <ul className="space-y-2">
              {analysisResults.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Book className="h-4 w-4 text-scholar-secondary" />
                  </span>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mt-12 mb-6">Recommended Scholarships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analysisResults.scholarships.map((scholarship) => (
          <Card key={scholarship.id} className="bg-white shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-lg font-semibold">{scholarship.name}</CardTitle>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-scholar-secondary mr-2" />
                  <span className="text-sm font-medium bg-scholar-accent px-2 py-1 rounded text-scholar-secondary">
                    {scholarship.eligibilityScore}% Match
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{scholarship.organization}</p>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-scholar-primary mb-2">{scholarship.amount}</p>
              <p className="text-gray-700">{scholarship.description}</p>
              <p className="text-sm text-gray-600 mt-4">
                <span className="font-medium">Deadline:</span> {scholarship.deadline}
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-scholar-secondary hover:bg-scholar-secondary/90"
                asChild
              >
                <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                  View Scholarship Details
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          onClick={onReset}
          className="bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
          Start a New Search
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;
