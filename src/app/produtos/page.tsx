import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Produtos | Prometeon - Especialista em Pneus para Caminhões, Ônibus e Agro',
  description: 'Conheça nossa linha completa de pneus para caminhões, ônibus, aplicações agrícolas e fora de estrada. Soluções de alta performance para profissionais.',
};

export default function Products() {
  const productCategories = [
    {
      title: 'Caminhões e Ônibus',
      description: 'Pneus de alta performance para transporte de mercadorias e pessoas, oferecendo excelente quilometragem e baixo consumo de combustível.',
      image: '/images/prometeon-truck-red.jpeg',
      link: '/produtos/truck',
    },
    {
      title: 'Agrícola',
      description: 'Pneus desenvolvidos especialmente para tratores e máquinas agrícolas, oferecendo excelente tração e durabilidade em terrenos difíceis.',
      image: '/images/prometeon-tractor.png',
      link: '/produtos/agro',
    },
    {
      title: 'Fora de Estrada (OTR)',
      description: 'Pneus robustos para aplicações em mineração, construção e indústria, projetados para oferecer máxima durabilidade em condições extremas.',
      image: '/images/prometeon-banner-innovation.jpeg',
      link: '/produtos/otr',
    },
  ];

  const productLines = [
    {
      title: 'Série R01',
      category: 'Caminhões e Ônibus',
      description: 'Pneus de alta performance para transporte de longa distância, oferecendo excelente quilometragem e baixo consumo de combustível.',
      features: ['Alta quilometragem', 'Baixo consumo de combustível', 'Excelente tração em piso molhado'],
      image: '/images/prometeon-truck-red.jpeg',
      link: '/produtos/truck/r01',
    },
    {
      title: 'Série MC',
      category: 'Caminhões e Ônibus',
      description: 'Ideal para uso misto (estrada/fora de estrada), oferecendo excelente desempenho em diferentes tipos de terreno.',
      features: ['Uso misto', 'Alta resistência a impactos', 'Excelente tração em terrenos irregulares'],
      image: '/images/prometeon-truck-white.jpeg',
      link: '/produtos/truck/mc',
    },
    {
      title: 'Série PHD',
      category: 'Agrícola',
      description: 'Desenvolvidos especialmente para tratores e máquinas agrícolas, oferecendo excelente tração e durabilidade em terrenos difíceis.',
      features: ['Alta resistência a cortes', 'Excelente tração em terrenos difíceis', 'Maior vida útil'],
      image: '/images/prometeon-tractor.png',
      link: '/produtos/agro/phd',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#1A2B5F] py-20">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/prometeon-banner-innovation.jpeg" 
            alt="Produtos Prometeon" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluções em Pneus para Profissionais</h1>
            <p className="text-xl mb-8">
              A Prometeon é o único fabricante de pneus especializado em transporte de mercadorias e pessoas, 
              também atuante no campo de pneus agrícolas e fora de estrada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#categorias" variant="secondary" size="lg">
                Explorar Categorias
              </Button>
              <Button href="/produtos/encontre-seu-pneu" variant="outline" size="lg">
                Encontre seu Pneu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section id="categorias" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Categorias de Produtos" 
            subtitle="Soluções especializadas para diferentes aplicações e necessidades"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-64">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A2B5F] mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <Link 
                    href={category.link}
                    className="inline-block w-full text-center bg-[#1A2B5F] text-white py-3 px-6 rounded-md hover:bg-[#0f1a3a] transition-colors"
                  >
                    Ver Produtos
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encontre seu Pneu */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-[#1A2B5F] mb-4">Encontre o Pneu Ideal para sua Necessidade</h2>
                <p className="text-gray-600 mb-6">
                  Utilize nossa ferramenta de busca avançada para encontrar o pneu perfeito para seu veículo, 
                  seja para caminhões, ônibus ou aplicações agrícolas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Tipo de Veículo</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]">
                      <option value="">Selecione</option>
                      <option value="truck">Caminhão</option>
                      <option value="bus">Ônibus</option>
                      <option value="agro">Agrícola</option>
                      <option value="otr">OTR</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Aplicação</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]">
                      <option value="">Selecione</option>
                      <option value="highway">Rodovia</option>
                      <option value="mixed">Uso Misto</option>
                      <option value="offroad">Fora de Estrada</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href="/produtos/encontre-seu-pneu" variant="secondary" size="lg" fullWidth>
                    Buscar Pneus
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="/images/prometeon-fleet-management.jpeg" 
                  alt="Encontre seu pneu" 
                  width={500} 
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Produtos em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Linhas de Produtos em Destaque" 
            subtitle="Conheça nossas principais linhas de pneus para diferentes aplicações"
          />
          
          <div className="mt-12 space-y-12">
            {productLines.map((product, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-lg shadow-lg overflow-hidden`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="h-64 lg:h-full">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="text-sm text-[#E63946] font-medium mb-2">{product.category}</div>
                  <h3 className="text-2xl font-bold text-[#1A2B5F] mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#1A2B5F] mb-3">Características</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-[#E63946] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={product.link}
                    className="inline-block bg-[#1A2B5F] text-white py-3 px-6 rounded-md hover:bg-[#0f1a3a] transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/produtos/todos" variant="outline" size="lg">
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Tecnologia e Inovação */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold text-[#1A2B5F] mb-4">Tecnologia e Inovação</h2>
              <p className="text-gray-600 mb-4">
                Cada pneu é resultado da Tecnologia Prometeon, um trabalho de engenharia focado em inovação 
                com o objetivo de oferecer a solução certa para nossos clientes.
              </p>
              <p className="text-gray-600 mb-6">
                O investimento contínuo em P&D está no coração da nossa empresa, oferecendo ao mercado 
                produtos e serviços tecnologicamente inovadores, integrados e multimarcas.
              </p>
              <Button href="/inovacao" variant="primary" size="lg">
                Conheça Nossa Tecnologia
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/images/prometeon-banner-innovation.jpeg" 
                alt="Tecnologia e Inovação Prometeon" 
                width={600} 
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Localizador de Revendas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Encontre uma Revenda" 
            subtitle="Localize a revenda Prometeon mais próxima de você"
          />
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <p className="text-gray-600 mb-6">
                  Nossa rede de revendedores está pronta para oferecer o melhor atendimento e os produtos 
                  ideais para sua necessidade. Utilize nosso localizador para encontrar a revenda mais próxima.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Estado</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]">
                      <option value="">Selecione</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="RS">Rio Grande do Sul</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Cidade</label>
                    <input 
                      type="text" 
                      placeholder="Digite sua cidade" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]"
                    />
                  </div>
                </div>
                <Button href="/revendas/localizador" variant="secondary" size="lg" fullWidth>
                  Buscar Revendas
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
