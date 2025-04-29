
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CostCalculator = () => {
  const [tuition, setTuition] = useState<number>(0);
  const [living, setLiving] = useState<number>(0);
  const [books, setBooks] = useState<number>(0);
  const [travel, setTravel] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number | null>(null);
  
  const calculateTotalCost = () => {
    const total = tuition + living + books + travel;
    setTotalCost(total);
  };
  
  return (
    <Layout>
      <Head
        title="Education Cost Calculator | ScholarAI"
        description="Calculate your total education costs including tuition, living expenses, and more."
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Education Cost Calculator</h1>
          <p className="text-gray-600 mb-8">
            Estimate your total education costs by entering the details below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <Label htmlFor="tuition">Annual Tuition ($)</Label>
              <Input 
                id="tuition" 
                type="number" 
                value={tuition || ''} 
                onChange={(e) => setTuition(Number(e.target.value))}
                placeholder="e.g., 20000"
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="living">Annual Living Expenses ($)</Label>
              <Input 
                id="living" 
                type="number" 
                value={living || ''} 
                onChange={(e) => setLiving(Number(e.target.value))}
                placeholder="e.g., 12000"
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="books">Books and Supplies ($)</Label>
              <Input 
                id="books" 
                type="number" 
                value={books || ''} 
                onChange={(e) => setBooks(Number(e.target.value))}
                placeholder="e.g., 1200"
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="travel">Travel Expenses ($)</Label>
              <Input 
                id="travel" 
                type="number" 
                value={travel || ''} 
                onChange={(e) => setTravel(Number(e.target.value))}
                placeholder="e.g., 1000"
              />
            </div>
          </div>
          
          <Button onClick={calculateTotalCost} className="w-full bg-scholar-primary">
            Calculate Total Cost
          </Button>
          
          {totalCost !== null && (
            <Card className="mt-6">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle>Your Estimated Costs</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-xl font-bold mb-2">Total Annual Cost</p>
                  <p className="text-4xl font-bold text-scholar-primary">${totalCost.toLocaleString()}</p>
                  <p className="mt-4 text-gray-600">
                    This is an estimate based on the information you provided. Actual costs may vary.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CostCalculator;
