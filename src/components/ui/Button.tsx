import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

// Variantes do botão
export const buttonVariants = () => ({
  primary: 'bg-[#1A2B5F] text-white hover:bg-[#0f1a3a] focus:ring-[#1A2B5F]',
  secondary: 'bg-[#E63946] text-white hover:bg-[#c5303b] focus:ring-[#E63946]',
  outline: 'bg-transparent border border-[#1A2B5F] text-[#1A2B5F] hover:bg-[#1A2B5F] hover:text-white focus:ring-[#1A2B5F]',
});

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = buttonVariants();  // Usando as variantes

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
