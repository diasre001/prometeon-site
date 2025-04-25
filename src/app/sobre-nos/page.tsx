import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Nós | Prometeon - Especialista em Pneus para Caminhões, Ônibus e Agro',
  description: 'Conheça a história e os valores da Prometeon Tyre Group, o único fabricante de pneus especializado em transporte de mercadorias e pessoas, também atuante no campo de pneus agrícolas e fora de estrada.',
};

export default function AboutUs() {
  const milestones = [
    {
      year: 2017,
      title: 'Fundação da Prometeon',
      description: 'Oficialmente estabelecida como um spin-off da divisão industrial da PIRELLI Tyre, a Prometeon inicia sua jornada produzindo e vendendo pneus da marca PIRELLI.',
    },
    {
      year: 2018,
      title: 'Expansão Global',
      description: 'Ampliação da presença internacional com foco em mercados estratégicos na América Latina, Europa e Ásia.',
    },
    {
      year: 2020,
      title: 'Inovação Tecnológica',
      description: 'Lançamento de novas linhas de produtos com tecnologia avançada para maior eficiência e sustentabilidade.',
    },
    {
      year: 2023,
      title: 'Compromisso com Sustentabilidade',
      description: 'Implementação de iniciativas para redução da pegada de carbono e desenvolvimento de produtos mais sustentáveis.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#1A2B5F] py-20">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/prometeon-banner-people.png" 
            alt="Sobre a Prometeon" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
            <p className="text-xl mb-8">
              A Prometeon Tyre Group é o único fabricante de pneus especializado em transporte de mercadorias e pessoas, 
              também atuante no campo de pneus agrícolas e fora de estrada.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <SectionTitle 
                title="Nossa História" 
                subtitle="Conheça a trajetória da Prometeon"
                alignment="left"
              />
              
              <p className="text-gray-600 mb-6">
                Oficialmente estabelecida em 2017 como um spin-off da divisão industrial da PIRELLI Tyre, 
                a Prometeon inicia sua jornada produzindo e vendendo pneus da marca PIRELLI.
              </p>
              <p className="text-gray-600 mb-6">
                Atualmente, a empresa está progressivamente desenvolvendo uma abordagem multimarca e multiproduto, 
                ampliando sua expertise tecnológica.
              </p>
              <p className="text-gray-600 mb-6">
                Cada pneu é resultado da Tecnologia Prometeon, um trabalho de engenharia focado em inovação 
                com o objetivo de oferecer a solução certa para nossos clientes.
              </p>
              
              <Button href="/sobre-nos/historia" variant="primary">
                Conheça Nossa Trajetória Completa
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-96">
                <Image 
                  src="/images/prometeon-globe.png" 
                  alt="Presença Global Prometeon" 
                  fill
                  className="object-contain animate-spin-slow"
                  style={{ animationDuration: '30s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Trajetória" 
            subtitle="Principais marcos na história da Prometeon"
          />
          
          <div className="mt-12 relative">
            {/* Linha vertical */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1A2B5F]"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-1'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-[#E63946] font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#E63946] border-4 border-white absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Valores" 
            subtitle="Princípios que guiam nossas ações e decisões"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1A2B5F] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Comprometimento com a excelência em todos os nossos produtos e serviços, 
                garantindo a máxima satisfação dos nossos clientes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E63946] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Inovação</h3>
              <p className="text-gray-600">
                Busca constante por novas tecnologias e soluções que melhorem o desempenho 
                e a eficiência dos nossos produtos.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2A9D8F] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Sustentabilidade</h3>
              <p className="text-gray-600">
                Compromisso com práticas sustentáveis que minimizem o impacto ambiental 
                e contribuam para um futuro melhor.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#457B9D] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Pessoas</h3>
              <p className="text-gray-600">
                Valorização das pessoas, promovendo um ambiente de trabalho inclusivo, 
                diverso e que incentiva o desenvolvimento profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presença Global */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <SectionTitle 
                title="Presença Global" 
                subtitle="Atuação em mais de 160 países"
                alignment="left"
              />
              
              <p className="text-gray-600 mb-6">
                A Prometeon opera em todo o mundo e é impulsionada por princípios de 
                internacionalismo e multiculturalismo. 53% de nossos colaboradores são millennials, 
                de mais de 32 países diferentes, e a idade média é de 38 anos.
              </p>
              <p className="text-gray-600 mb-6">
                Trabalhamos juntos, abraçando esta diversidade e promovendo a inclusão 
                em todas as nossas operações.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-[#1A2B5F]">8000+</div>
                  <div className="text-gray-600">Colaboradores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1A2B5F]">160+</div>
                  <div className="text-gray-600">Países</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1A2B5F]">4</div>
                  <div className="text-gray-600">Fábricas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1A2B5F]">4</div>
                  <div className="text-gray-600">Centros de P&D</div>
                </div>
              </div>
              
              <Button href="/sobre-nos/presenca-global" variant="primary">
                Conheça Nossas Operações
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/images/prometeon-globe.png" 
                alt="Presença Global Prometeon" 
                width={600} 
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Liderança" 
            subtitle="Conheça os executivos que lideram a Prometeon"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-1">Roberto Righi</h3>
                <p className="text-[#E63946] font-medium mb-4">CEO</p>
                <p className="text-gray-600 mb-4">
                  Liderando a Prometeon com visão estratégica e foco em inovação e crescimento sustentável.
                </p>
                <Link href="/sobre-nos/lideranca" className="text-[#1A2B5F] font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-1">Francesco Annunziata</h3>
                <p className="text-[#E63946] font-medium mb-4">Chief Technical Officer</p>
                <p className="text-gray-600 mb-4">
                  Responsável pela inovação tecnológica e desenvolvimento de produtos de alta performance.
                </p>
                <Link href="/sobre-nos/lideranca" className="text-[#1A2B5F] font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-1">Alexandre Bregantim</h3>
                <p className="text-[#E63946] font-medium mb-4">Diretor América Latina</p>
                <p className="text-gray-600 mb-4">
                  Liderando as operações na América Latina com foco em crescimento e excelência operacional.
                </p>
                <Link href="/sobre-nos/lideranca" className="text-[#1A2B5F] font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/sobre-nos/lideranca" variant="outline">
              Conheça Toda Nossa Equipe
            </Button>
          </div>
        </div>
      </section>

      {/* Carreiras */}
      <section className="py-16 bg-[#1A2B5F] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6">Junte-se à Nossa Equipe</h2>
              <p className="text-lg mb-6">
                Queremos pessoas que deixam sua marca. Estamos procurando por pessoas com mente aberta, 
                forte disposição para aprender, crescer e continuamente elevar o nível.
              </p>
              <p className="text-lg mb-8">
                Se você está pronto para seu futuro, junte-se a nós!
              </p>
              <Button href="/carreiras" variant="secondary" size="lg">
                Ver Oportunidades
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/images/prometeon-banner-people.png" 
                alt="Carreiras Prometeon" 
                width={600} 
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
