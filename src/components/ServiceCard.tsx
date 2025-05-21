
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  className = "",
  image
}) => {
  return (
    <motion.div 
      className={`service-card hover-card-shine group relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-spigle-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <div className="service-icon mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-spigle-700">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-spigle-600 transition-colors">{title}</h3>
      
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      
      {image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <Link 
        to={link}
        className="inline-flex items-center text-spigle-600 font-medium text-sm group-hover:text-spigle-700 transition-all" 
      >
        <span className="relative">
          Learn More
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-spigle-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-2" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
