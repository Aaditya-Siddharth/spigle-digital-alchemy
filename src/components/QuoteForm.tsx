
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface QuoteFormProps {
  open: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success('Your quote request has been sent successfully!');
      onClose();
    }, 1500);
    
    console.log('Form Data:', formData);
  };
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-auto bg-white rounded-xl shadow-2xl animate-scale-in p-6">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-serif font-semibold">Get a Free Quote</h3>
          <p className="text-gray-600 mt-2">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <Input 
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <Input 
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
            <Select value={formData.service} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="app-development">App Development</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="digital-marketing">Digital Marketing & SEO</SelectItem>
                <SelectItem value="business-analytics">Business Analytics</SelectItem>
                <SelectItem value="supply-chain">Supply Chain Optimization</SelectItem>
                <SelectItem value="consulting">Business Consulting</SelectItem>
                <SelectItem value="ai-automation">AI & Automation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Project Details</label>
            <Textarea 
              id="message"
              name="message"
              placeholder="Tell us about your project, requirements, and goals..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-spigle-600 hover:bg-spigle-700 text-white"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit Request'}
          </Button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
