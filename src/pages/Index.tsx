
import Layout from "@/components/Layout";
import ScholarshipForm from "@/components/scholarship/ScholarshipForm";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Search, School, User } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-scholar-portal via-scholar-primary to-scholar-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-scholar-portalBg opacity-70"></div>
          <div className="w-[500px] h-[500px] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-scholar-portal rounded-full opacity-70 animate-portal-spin"></div>
          <div className="w-[300px] h-[300px] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-scholar-accent rounded-full opacity-40 blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="relative">
            <div className="flex justify-center items-center mb-6">
              <img
                src="public/lovable-uploads/98790847-44d5-4395-a208-cb9f6e79785a.png"
                alt="Rick and Morty Portal"
                className="w-64 h-64 mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wubba Lubba Dub Dub! Find Your Perfect Scholarship!
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hey Morty *burp* we need to find you some scholarships! Let's use this *burp* advanced AI to match your brainwaves with educational opportunities!
            </p>
            <Button
              size="lg"
              className="bg-scholar-accent text-black hover:bg-scholar-accent/90 font-bold"
              onClick={() => {
                const formSection = document.getElementById("scholarship-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Search
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works, Morty! Don't *burp* Screw This Up!</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-scholar-primary hover:border-scholar-accent transition-colors">
              <div className="h-16 w-16 bg-scholar-portal rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-600">
                Tell me about yourself, Morty! Your interests, your... *burp* your education goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-scholar-primary hover:border-scholar-accent transition-colors">
              <div className="h-16 w-16 bg-scholar-portal rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Transcripts</h3>
              <p className="text-gray-600">
                Your grades, Morty! We need your grades! Even if they're *burp* terrible!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-scholar-primary hover:border-scholar-accent transition-colors">
              <div className="h-16 w-16 bg-scholar-portal rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Test Scores</h3>
              <p className="text-gray-600">
                Standardized tests are *burp* bureaucratic nonsense, Morty, but we need them anyway!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-scholar-primary hover:border-scholar-accent transition-colors">
              <div className="h-16 w-16 bg-scholar-portal rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">
                My AI will find you scholarships way better than any human could, Morty! *burp*
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="scholarship-form" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="relative">
              <img
                src="https://i.imgur.com/8CPZUPJ.png"
                alt="Morty thinking"
                className="w-24 h-24 mx-auto mb-4 animate-float"
              />
              <h2 className="text-3xl font-bold mb-4">Find Your Scholarships</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't be scared Morty, just fill out the form below and our AI will find the best scholarships for you!
              </p>
            </div>
          </div>
          <ScholarshipForm />
        </div>
      </section>

      <section className="bg-black/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border-2 border-scholar-primary">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-scholar-portal rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
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

      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Scholarship?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Listen Morty, *burp* education is important! Join thousands of students who have used ScholarAI to find scholarships!
          </p>
          <Button
            size="lg"
            className="bg-scholar-accent hover:bg-scholar-accent/90 text-black font-bold"
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

