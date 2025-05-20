
import React from 'react';

const ClientLogos: React.FC = () => {
  // In a real implementation, these would be actual logo images
  const clients = [
    { name: "Acme Inc.", logo: "https://via.placeholder.com/150x50?text=ACME" },
    { name: "Tech Corp", logo: "https://via.placeholder.com/150x50?text=TECHCORP" },
    { name: "Innovate LLC", logo: "https://via.placeholder.com/150x50?text=INNOVATE" },
    { name: "Global Systems", logo: "https://via.placeholder.com/150x50?text=GLOBAL" },
    { name: "Future AI", logo: "https://via.placeholder.com/150x50?text=FUTURE" },
    { name: "Modern Solutions", logo: "https://via.placeholder.com/150x50?text=MODERN" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-12">Trusted by Industry Leaders</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
