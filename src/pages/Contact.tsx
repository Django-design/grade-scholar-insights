import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  return <Layout>
      <section className="bg-gradient-to-r from-scholar-primary to-scholar-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Have questions about scholarships or need help with our platform? We're here for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">121immigrationservices@gmail.com</p>
                    <p className="text-gray-600">info@scholarai.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+9779829997364</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm CET</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 bg-scholar-accent rounded-full flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-scholar-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">MIJ</p>
                    <p className="text-gray-600">Scarborugh, Canada</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What is this regarding?" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here..." rows={5} value={formData.message} onChange={handleChange} required />
                  </div>

                  <Button type="submit" className="w-full bg-scholar-primary hover:bg-scholar-primary/90" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Is ScholarAI free to use?</h3>
                    <p className="text-gray-700">
                      Yes, our basic scholarship matching service is completely free for all students. We also offer premium features for those who need more advanced support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">How accurate are the scholarship matches?</h3>
                    <p className="text-gray-700">
                      Our AI algorithms continuously improve and currently achieve a high accuracy rate. However, we always recommend verifying eligibility criteria directly with the scholarship provider.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">How often is the scholarship database updated?</h3>
                    <p className="text-gray-700">
                      We update our scholarship database daily to ensure you have access to the most current opportunities available.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can I get help with my scholarship application?</h3>
                    <p className="text-gray-700">
                      Yes, our premium services include application review and feedback from education experts to help improve your chances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;