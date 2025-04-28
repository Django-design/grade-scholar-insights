
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, School } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-scholar-primary to-scholar-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About ScholarAI
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empowering students to find and secure scholarships through innovative AI technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At ScholarAI, we believe that financial constraints should never prevent talented students from pursuing their educational dreams. Our mission is to democratize access to scholarship information and help students worldwide connect with funding opportunities that align with their unique backgrounds and aspirations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Using the power of artificial intelligence and machine learning, we've developed a sophisticated platform that matches students with relevant scholarships based on their academic profiles, test scores, personal backgrounds, and career goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How Our Technology Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Data Collection</h3>
                      <p className="text-gray-700">
                        Our system continuously aggregates scholarship data from thousands of sources, ensuring our database remains comprehensive and up-to-date.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Smart Matching</h3>
                      <p className="text-gray-700">
                        Our AI algorithms analyze each student's profile against thousands of scholarship criteria to find the best matches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <School className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Personalized Analysis</h3>
                      <p className="text-gray-700">
                        Beyond simple matching, we provide personalized insights on how students can improve their eligibility for specific scholarships.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                      <p className="text-gray-700">
                        Our system gets smarter with every search, learning from successful applications to better serve future students.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              ScholarAI was founded by a group of education technology experts who experienced firsthand the challenges of finding and applying for scholarships. After witnessing countless talented students miss out on opportunities simply because they were unaware they existed, our founders decided to leverage artificial intelligence to solve this problem.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Since our launch, we've helped thousands of students discover scholarship opportunities worth millions of dollars. Our platform continuously evolves, incorporating the latest advancements in AI technology to provide increasingly accurate and helpful recommendations.
            </p>
            <p className="text-lg text-gray-700">
              We remain committed to our core belief that financial circumstances should not determine educational opportunities. Through innovation, dedication, and a passion for educational equity, we're working to make quality education accessible to all deserving students.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
