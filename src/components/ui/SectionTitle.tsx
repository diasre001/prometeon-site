import React from 'react';
import Link from 'next/link';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  withButton?: {
    text: string;
    link: string;
  };
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  withButton
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      <div className="flex items-center justify-between">
        <div className={withButton ? 'flex-1' : 'w-full'}>
          <h2 className="text-3xl font-bold text-[#1A2B5F]">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        {withButton && (
          <Link 
            href={withButton.link}
            className="inline-flex items-center text-[#E63946] hover:text-[#c5303b] font-medium"
          >
            {withButton.text}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        )}
      </div>
      
      <div className="mt-4 w-24 h-1 bg-[#E63946] rounded-full mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
