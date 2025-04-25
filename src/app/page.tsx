import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prometeon - Especialista em Pneus para Caminhões, Ônibus e Agro',
  description: 'Prometeon Tyre Group é o único fabricante de pneus especializado em transporte de mercadorias e pessoas, também atuante no campo de pneus agrícolas e fora de estrada.',
};

export default function Home() {
  const heroSlides = [
    {
      image: '/images/prometeon-banner-sustainability.png',
      title: 'Sustentabilidade',
      subtitle: 'Desenvolvimento que garante as necessidades do presente e as habilidades das gerações futuras',
      buttonText: 'Saiba Mais',
      buttonLink: '/sustentabilidade',
    },
    {
      image: '/images/prometeon-banner-innovation.jpeg',
      title: 'Inovação',
      subtitle: 'Impulsionando o futuro com tecnologia de ponta e soluções inovadoras',
      buttonText: 'Conheça Nossa Tecnologia',
      buttonLink: '/inovacao',
    },
    {
      image: '/images/prometeon-banner-people.png',
      title: 'Pessoas',
      subtitle: 'Queremos pessoas que deixam sua marca. Junte-se à família Prometeon',
      buttonText: 'Carreiras',
      buttonLink: '/pessoas',
    },
    {
      image: '/images/prometeon-banner-our-world.png',
      title: 'Nosso Mundo',
      subtitle: 'Paixão por dirigir em todos os lugares',
      buttonText: 'Explore',
      buttonLink: '/nosso-mundo',
    },
  ];

  const featuredProducts = [
    {
      image: '/images/prometeon-truck-red.jpeg',
      name: 'Série R01',
      category: 'Caminhões e Ônibus',
      description: 'Pneus de alta performance para transporte de longa distância, oferecendo excelente quilometragem e baixo consumo de combustível.',
      features: ['Alta quilometragem', 'Baixo consumo de combustível', 'Excelente tração em piso molhado'],
      slug: 'truck/r01',
    },
    {
      image: '/images/prometeon-tractor.png',
      name: 'Série PHD',
      category: 'Agrícola',
      description: 'Desenvolvidos especialmente para tratores e máquinas agrícolas, oferecendo excelente tração e durabilidade em terrenos difíceis.',
      features: ['Alta resistência a cortes', 'Excelente tração em terrenos difíceis', 'Maior vida útil'],
      slug: 'agro/phd',
    },
    {
      image: '/images/prometeon-truck-white.jpeg',
      name: 'Série MC',
      category: 'Caminhões e Ônibus',
      description: 'Ideal para uso misto (estrada/fora de estrada), oferecendo excelente desempenho em diferentes tipos de terreno.',
      features: ['Uso misto', 'Alta resistência a impactos', 'Excelente tração em terrenos irregulares'],
      slug: 'truck/mc',
    },
  ];

  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Encontre seu Pneu */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h2 className="text-3xl font-bold text-[#1A2B5F] mb-4">Encontre o Pneu Ideal para sua Necessidade</h2>
                <p className="text-gray-600 mb-6">
                  Utilize nossa ferramenta de busca avançada para encontrar o pneu perfeito para seu veículo, 
                  seja para caminhões, ônibus ou aplicações agrícolas.
                </p>
                <Button href="/produtos/encontre-seu-pneu" variant="secondary" size="lg">
                  Buscar Pneus
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image 
                  src="/images/prometeon-fleet-management.jpeg" 
                  alt="Encontre seu pneu" 
                  width={400} 
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Produtos em Destaque" 
            subtitle="Conheça nossa linha de pneus de alta performance para diferentes aplicações"
            withButton={{
              text: "Ver Todos os Produtos",
              link: "/produtos"
            }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 bg-[#1A2B5F] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
              <p className="text-lg mb-6">
                A Prometeon Tyre Group é o único fabricante de pneus especializado em transporte de mercadorias e pessoas, 
                também atuante no campo de pneus agrícolas e fora de estrada.
              </p>
              <p className="text-lg mb-6">
                Nossos produtos e serviços são resultado de paixão e compromisso com qualidade, segurança, 
                sustentabilidade e inovação. O investimento contínuo em P&D está no coração da Tecnologia Prometeon.
              </p>
              <Button href="/sobre-nos" variant="outline" size="lg">
                Conheça Nossa História
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80">
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">8000+</div>
              <div className="text-gray-300">Colaboradores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Pesquisadores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-gray-300">Fábricas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-gray-300">Centros de P&D</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Oferecemos soluções completas para maximizar o desempenho dos seus pneus"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[#1A2B5F] flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Assistência Técnica</h3>
                <p className="text-gray-600 mb-4">
                  Nossa equipe de especialistas oferece suporte técnico para garantir o melhor desempenho dos seus pneus.
                </p>
                <Link href="/servicos/assistencia-tecnica" className="text-[#E63946] font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[#E63946] flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Garantia</h3>
                <p className="text-gray-600 mb-4">
                  Oferecemos garantia de qualidade para todos os nossos produtos, assegurando sua tranquilidade.
                </p>
                <Link href="/servicos/garantia" className="text-[#E63946] font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[#2A9D8F] flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Consultoria para Frotas</h3>
                <p className="text-gray-600 mb-4">
                  Serviços especializados para gestão de pneus em frotas, otimizando custos e aumentando a eficiência.
                </p>
                <Link href="/servicos/consultoria-frotas" className="text-[#E63946] font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localizador de Revendas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-[#1A2B5F] mb-4">Encontre uma Revenda</h2>
              <p className="text-gray-600 mb-6">
                Localize a revenda Prometeon mais próxima de você. Nossa rede de revendedores está pronta para oferecer 
                o melhor atendimento e os produtos ideais para sua necessidade.
              </p>
              <Button href="/revendas/localizador" variant="primary" size="lg">
                Buscar Revendas
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[#E63946]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">Inscreva-se em nossa Newsletter</h2>
              <p className="text-white opacity-90">
                Receba novidades, lançamentos e conteúdos exclusivos.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-4 py-3 rounded-l-md w-full sm:w-64 focus:outline-none"
                />
                <button className="mt-2 sm:mt-0 bg-[#1A2B5F] text-white px-6 py-3 rounded-r-md hover:bg-[#0f1a3a] transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
