import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1A2B5F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/prometeon-logo-white.png" 
                alt="Prometeon Logo" 
                width={180} 
                height={50} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Especialista em pneus para caminhões, ônibus e agro, oferecendo soluções de alta performance para os desafios mais exigentes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/prometeon" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/prometeon" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/prometeon" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/prometeon" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos/truck" className="text-gray-300 hover:text-white">
                  Pneus para Caminhões
                </Link>
              </li>
              <li>
                <Link href="/produtos/agro" className="text-gray-300 hover:text-white">
                  Pneus Agrícolas
                </Link>
              </li>
              <li>
                <Link href="/produtos/otr" className="text-gray-300 hover:text-white">
                  Pneus OTR
                </Link>
              </li>
              <li>
                <Link href="/produtos/encontre-seu-pneu" className="text-gray-300 hover:text-white">
                  Encontre seu Pneu
                </Link>
              </li>
              <li>
                <Link href="/revendas/localizador" className="text-gray-300 hover:text-white">
                  Localizador de Revendas
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/assistencia-tecnica" className="text-gray-300 hover:text-white">
                  Assistência Técnica
                </Link>
              </li>
              <li>
                <Link href="/servicos/garantia" className="text-gray-300 hover:text-white">
                  Garantia
                </Link>
              </li>
              <li>
                <Link href="/servicos/recapagem" className="text-gray-300 hover:text-white">
                  Recapagem
                </Link>
              </li>
              <li>
                <Link href="/servicos/consultoria-frotas" className="text-gray-300 hover:text-white">
                  Consultoria para Frotas
                </Link>
              </li>
              <li>
                <Link href="/area-cliente" className="text-gray-300 hover:text-white">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nos" className="text-gray-300 hover:text-white">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos/historia" className="text-gray-300 hover:text-white">
                  História
                </Link>
              </li>
              <li>
                <Link href="/sustentabilidade" className="text-gray-300 hover:text-white">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="/inovacao" className="text-gray-300 hover:text-white">
                  Inovação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscreva-se para receber novidades e ofertas exclusivas.
            </p>
            <form className="space-y-2">
              <div>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-2 rounded-md bg-[#0f1a3a] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c5303b] transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Prometeon Tyre Group. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/politica-privacidade" className="text-gray-400 text-sm hover:text-white">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-gray-400 text-sm hover:text-white">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-400 text-sm hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
