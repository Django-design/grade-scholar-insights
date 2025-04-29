
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ScholarshipFormProvider } from "./context/ScholarshipFormContext";

// Form step pages
import NameStep from "./pages/scholarship/NameStep";
import AgeStep from "./pages/scholarship/AgeStep";
import CountryStep from "./pages/scholarship/CountryStep";
import DegreeStep from "./pages/scholarship/DegreeStep";
import EducationStep from "./pages/scholarship/EducationStep";
import GradesStep from "./pages/scholarship/GradesStep";
import MajorStep from "./pages/scholarship/MajorStep";
import TestScoresStep from "./pages/scholarship/TestScoresStep";
import LeadCapture from "./pages/scholarship/LeadCapture";
import Results from "./pages/scholarship/Results";

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ScholarshipFormProvider>
          <TooltipProvider>
            <HelmetProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Scholarship Form Steps */}
                  <Route path="/scholarship">
                    <Route path="name" element={<NameStep />} />
                    <Route path="age" element={<AgeStep />} />
                    <Route path="country" element={<CountryStep />} />
                    <Route path="degree" element={<DegreeStep />} />
                    <Route path="education" element={<EducationStep />} />
                    <Route path="grades" element={<GradesStep />} />
                    <Route path="major" element={<MajorStep />} />
                    <Route path="test-scores" element={<TestScoresStep />} />
                    <Route path="lead-capture" element={<LeadCapture />} />
                    <Route path="results" element={<Results />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </HelmetProvider>
          </TooltipProvider>
        </ScholarshipFormProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
