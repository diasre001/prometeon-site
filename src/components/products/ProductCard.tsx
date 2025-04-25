import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  name, 
  category, 
  description, 
  features, 
  slug 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64 bg-gray-100">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#E63946] font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold text-[#1A2B5F] mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-[#1A2B5F] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={`/produtos/${slug}`}
          className="inline-block w-full text-center bg-[#1A2B5F] text-white py-2 px-4 rounded-md hover:bg-[#0f1a3a] transition-colors"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
