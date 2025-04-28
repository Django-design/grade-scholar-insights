
import Layout from "@/components/Layout";
import ScholarshipForm from "@/components/scholarship/ScholarshipForm";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Search, School, User } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-scholar-primary to-scholar-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Scholarship Match with AI
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover scholarship opportunities tailored to your academic profile, test scores, and personal background.
          </p>
          <Button
            size="lg"
            className="bg-white text-scholar-primary hover:bg-white/90"
            onClick={() => {
              const formSection = document.getElementById("scholarship-form");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Search
          </Button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-scholar-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-scholar-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-600">
                Tell us about yourself, your interests, and education goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-scholar-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-scholar-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Transcripts</h3>
              <p className="text-gray-600">
                Share your education level and grades for better matching.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-scholar-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-scholar-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Test Scores</h3>
              <p className="text-gray-600">
                Add any standardized test scores to improve your recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-scholar-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-scholar-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">
                Our AI analyzes your profile to find the best scholarship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="scholarship-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Scholarships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete the form below and let our AI-powered system find the best scholarship opportunities for you.
            </p>
          </div>
          <ScholarshipForm />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-scholar-primary" />
                </div>
              </div>
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
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Scholarship?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have used ScholarAI to find and secure scholarships that match their unique profiles.
          </p>
          <Button
            size="lg"
            className="bg-scholar-primary hover:bg-scholar-primary/90 text-white"
            onClick={() => {
              const formSection = document.getElementById("scholarship-form");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
