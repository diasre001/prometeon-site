"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/prometeon-logo.png" 
              alt="Prometeon" 
              width={180} 
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1A2B5F] font-medium">
              Home
            </Link>
            <Link href="/produtos" className="text-gray-700 hover:text-[#1A2B5F] font-medium">
              Produtos
            </Link>
            <Link href="/revendas/localizador" className="text-gray-700 hover:text-[#1A2B5F] font-medium">
              Revendas
            </Link>
            <Link href="/sobre-nos" className="text-gray-700 hover:text-[#1A2B5F] font-medium">
              Sobre Nós
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-[#1A2B5F] font-medium">
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#1A2B5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/produtos" 
                className="text-gray-700 hover:text-[#1A2B5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link 
                href="/revendas/localizador" 
                className="text-gray-700 hover:text-[#1A2B5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Revendas
              </Link>
              <Link 
                href="/sobre-nos" 
                className="text-gray-700 hover:text-[#1A2B5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-[#1A2B5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
