
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ title, subtitle, faqs }) => {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-3">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4 hover:text-spigle-600 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
