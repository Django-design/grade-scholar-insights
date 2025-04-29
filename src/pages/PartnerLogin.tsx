
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

const PartnerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication would be implemented here
    console.log("Partner login attempt", { email, password });
  };
  
  return (
    <Layout>
      <Head
        title="Partner Login | ScholarAI"
        description="Login to your partner account to manage your scholarship programs."
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Partner Login</h1>
            <p className="text-gray-600 mt-2">Manage your scholarship programs</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-scholar-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-scholar-secondary hover:bg-scholar-secondary/90">
              Login
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Want to offer scholarships?{" "}
              <Link to="/partner-signup" className="text-scholar-secondary hover:underline">
                Become a Partner
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerLogin;
