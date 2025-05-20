
import React from 'react';
import { CheckCircle, Clock, Users, LineChart, HeartHandshake } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Users className="w-10 h-10 text-spigle-600" />,
      title: "Expert Team",
      description: "Our professionals bring decades of combined experience across industries, technologies, and business domains to deliver exceptional results."
    },
    {
      icon: <Clock className="w-10 h-10 text-spigle-600" />,
      title: "Results-Driven Timeline",
      description: "We don't just deliver on time—we optimize our timelines for maximum impact and efficiency, creating value at every stage."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-spigle-600" />,
      title: "Client Obsession",
      description: "Your success is our purpose. We prioritize your specific needs, goals, and vision throughout the development and support process."
    },
    {
      icon: <LineChart className="w-10 h-10 text-spigle-600" />,
      title: "Measurable Success",
      description: "We define clear KPIs and metrics from day one and provide transparent reporting that ties our work to your business outcomes."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-spigle-600" />,
      title: "Lifetime Partnership",
      description: "We're not just providers; we're partners invested in your long-term success with support that extends beyond project completion."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Why Choose Spigle?</h2>
          <p className="text-gray-600">We don't just meet industry standards—we set them. Our approach combines technical excellence with business acumen to create solutions that truly transform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
