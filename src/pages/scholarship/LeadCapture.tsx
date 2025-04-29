
import { useState } from "react";
import { useScholarshipForm } from "@/context/ScholarshipFormContext";
import FormStepLayout from "@/components/scholarship/FormStepLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const LeadCapture = () => {
  const { formData, updateLeadCapture } = useScholarshipForm();
  const [email, setEmail] = useState(formData.leadCapture.email || formData.personal.email);
  const [phone, setPhone] = useState(formData.leadCapture.phone || formData.personal.phone);
  const [consent, setConsent] = useState(formData.leadCapture.consent);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required for WhatsApp";
    } else if (!/^\+?[0-9\s\-()]{8,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!consent) {
      newErrors.consent = "You must agree to receive scholarship information";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return false;
    }
    
    updateLeadCapture({
      email,
      phone,
      consent
    });
    
    toast({
      title: "Almost there!",
      description: "We're calculating your scholarship matches!",
    });
    
    return true;
  };

  return (
    <FormStepLayout
      title="Unlock Your Scholarships!"
      description="One last step! *Burp* We'll send your matches to your email and WhatsApp!"
      characterImage="/lovable-uploads/7e6acd16-9473-4454-abf3-291860fd6920.jpg"
      nextUrl="/scholarship/results"
      prevUrl="/scholarship/test-scores"
      onNext={handleNext}
      isLastStep={true}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xl">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="text-lg p-6 rounded-lg"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xl">WhatsApp Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 234 567 8900"
            className="text-lg p-6 rounded-lg"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        
        <div className="flex items-top space-x-3 pt-4">
          <Checkbox 
            id="consent" 
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
          />
          <Label htmlFor="consent" className="text-base leading-tight">
            I agree to receive scholarship information via email and WhatsApp. Our team may contact me about scholarship opportunities.
          </Label>
        </div>
        {errors.consent && <p className="text-red-500">{errors.consent}</p>}
      </div>
    </FormStepLayout>
  );
};

export default LeadCapture;
