import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import DealerLocator from '@/components/revendas/DealerLocator';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Localizador de Revendas | Prometeon - Especialista em Pneus para Caminhões, Ônibus e Agro',
  description: 'Encontre a revenda Prometeon mais próxima de você. Nossa rede de revendedores está pronta para oferecer o melhor atendimento e os produtos ideais para sua necessidade.',
};

export default function DealerLocatorPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#1A2B5F] py-20">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/prometeon-banner-our-world.png" 
            alt="Localizador de Revendas Prometeon" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Localizador de Revendas</h1>
            <p className="text-xl mb-8">
              Encontre a revenda Prometeon mais próxima de você. Nossa rede de revendedores está pronta 
              para oferecer o melhor atendimento e os produtos ideais para sua necessidade.
            </p>
          </div>
        </div>
      </section>

      <DealerLocator />

      {/* Torne-se um Revendedor */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold text-[#1A2B5F] mb-4">Torne-se um Revendedor Prometeon</h2>
              <p className="text-gray-600 mb-4">
                Junte-se à nossa rede de revendedores e ofereça aos seus clientes produtos de alta qualidade 
                e tecnologia avançada.
              </p>
              <p className="text-gray-600 mb-6">
                Como revendedor Prometeon, você terá acesso a:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E63946] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Produtos de alta qualidade e tecnologia avançada</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E63946] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Suporte técnico especializado</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E63946] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Treinamentos e capacitações</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E63946] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Material de marketing e divulgação</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#E63946] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Participação em programas de incentivo</span>
                </li>
              </ul>
              <a 
                href="/revendas/seja-revendedor" 
                className="inline-block bg-[#E63946] hover:bg-[#d32836] text-white py-3 px-6 rounded-md transition-colors"
              >
                Quero ser Revendedor
              </a>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/images/prometeon-banner-people.png" 
                alt="Seja um Revendedor Prometeon" 
                width={600} 
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A2B5F] mb-2">Perguntas Frequentes</h2>
            <p className="text-gray-600">Tire suas dúvidas sobre nossas revendas</p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Como encontrar a revenda mais próxima?</h3>
                <p className="text-gray-600">
                  Utilize nosso localizador de revendas acima, digitando seu CEP ou selecionando seu estado e cidade. 
                  Você também pode filtrar por serviços específicos que esteja buscando.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Quais serviços as revendas Prometeon oferecem?</h3>
                <p className="text-gray-600">
                  Nossas revendas oferecem diversos serviços, como venda de pneus, alinhamento, 
                  balanceamento, recapagem, assistência 24h, entre outros. Os serviços podem 
                  variar de acordo com cada revenda.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">Como me tornar um revendedor Prometeon?</h3>
                <p className="text-gray-600">
                  Para se tornar um revendedor Prometeon, preencha o formulário na seção "Quero ser Revendedor" 
                  ou entre em contato com nosso departamento comercial. Nossa equipe entrará em contato para 
                  fornecer todas as informações necessárias.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-3">As revendas oferecem garantia nos produtos?</h3>
                <p className="text-gray-600">
                  Sim, todas as revendas oficiais Prometeon oferecem garantia nos produtos, seguindo 
                  a política de garantia da Prometeon. Consulte a revenda para mais detalhes sobre 
                  a garantia específica de cada produto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
