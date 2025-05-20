
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  className = ""
}) => {
  return (
    <div className={`service-card hover-card-shine group ${className}`}>
      <div className="service-icon mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      
      <Link 
        to={link}
        className="inline-flex items-center text-spigle-600 font-medium text-sm group-hover:text-spigle-700 transition-colors" 
      >
        Learn More
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
