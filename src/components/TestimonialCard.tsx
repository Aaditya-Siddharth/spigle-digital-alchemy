
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  position,
  company,
  rating,
  image
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 flex-grow">
        "{content}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        {image ? (
          <img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-spigle-100 text-spigle-600 flex items-center justify-center font-semibold text-xl mr-4">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
