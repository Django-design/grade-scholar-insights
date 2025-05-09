
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, Book, GraduationCap, Search } from "lucide-react";
import Head from "@/components/Head";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const startScholarshipForm = () => {
    navigate("/scholarship/name");
  };

  return (
    <Layout>
      <Head
        title="ScholarAI - Find Your Perfect Scholarship"
        description="Use our advanced AI to match your profile with thousands of scholarship opportunities."
        keywords="scholarships, education funding, college scholarships, scholarship matching"
      />
      
      {/* Hero Section - Cleaner design */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find Your Perfect Scholarship with ScholarAI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let our advanced AI match your profile with thousands of scholarship opportunities. Don't miss out on free education money!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-scholar-primary text-white hover:bg-scholar-primary/90 font-bold px-8"
                onClick={startScholarshipForm}
              >
                Start Your Search
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How ScholarAI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-scholar-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-600">
                Tell us about yourself, your interests, and your education goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-scholar-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Records</h3>
              <p className="text-gray-600">
                Share your grades and academic achievements for better matching.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-scholar-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Matching</h3>
              <p className="text-gray-600">
                Our advanced AI finds scholarships that match your unique profile.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-scholar-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized scholarship recommendations and apply today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use ScholarAI Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Use ScholarAI?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-scholar-primary font-bold mr-2">•</span>
                  <span>Our advanced algorithm matches your profile with thousands of scholarship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scholar-primary font-bold mr-2">•</span>
                  <span>Personalized recommendations based on your academic achievements and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scholar-primary font-bold mr-2">•</span>
                  <span>Save hours of research time with our instant scholarship matching service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scholar-primary font-bold mr-2">•</span>
                  <span>Get actionable insights to improve your scholarship eligibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Scholarship?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students who have used ScholarAI to find scholarships and fund their education!
            </p>
            <Button 
              size="lg" 
              className="bg-scholar-primary hover:bg-scholar-primary/90 text-white font-bold px-8"
              onClick={startScholarshipForm}
            >
              Check Your Scholarship Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
