"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import MapComponent from '@/components/revendas/MapComponent';

interface Dealer {
  name: string;
  address: string;
  city: string;
  state: string;
  cep: string;
  phone: string;
  services: string[];
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const DealerLocator: React.FC = () => {
  const [cep, setCep] = useState<string>('');
  const [searchResults, setSearchResults] = useState<boolean>(false);
  
  const featuredDealers: Dealer[] = [
    {
      name: 'Auto Pneus Centro',
      address: 'Av. Brasil, 1500 - Centro',
      city: 'São Paulo',
      state: 'SP',
      cep: '01310-100',
      phone: '(11) 3333-4444',
      services: ['Venda de Pneus', 'Alinhamento', 'Balanceamento', 'Recapagem'],
      image: '/images/prometeon-truck-red.jpeg',
      coordinates: { lat: -23.550520, lng: -46.633308 },
    },
    {
      name: 'Pneus & Cia',
      address: 'Rodovia BR-101, Km 235',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '20271-110',
      phone: '(21) 2222-3333',
      services: ['Venda de Pneus', 'Alinhamento', 'Balanceamento', 'Assistência 24h'],
      image: '/images/prometeon-truck-white.jpeg',
      coordinates: { lat: -22.906847, lng: -43.172897 },
    },
    {
      name: 'Agro Pneus',
      address: 'Av. das Indústrias, 750 - Distrito Industrial',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '30610-970',
      phone: '(31) 4444-5555',
      services: ['Venda de Pneus', 'Alinhamento', 'Balanceamento', 'Consultoria Agrícola'],
      image: '/images/prometeon-tractor.png',
      coordinates: { lat: -19.917299, lng: -43.934108 },
    },
    {
      name: 'Prometeon Sul',
      address: 'Av. Assis Brasil, 1200 - Passo d\'Areia',
      city: 'Porto Alegre',
      state: 'RS',
      cep: '91010-000',
      phone: '(51) 3333-7777',
      services: ['Venda de Pneus', 'Alinhamento', 'Balanceamento', 'Recapagem'],
      image: '/images/prometeon-truck-red.jpeg',
      coordinates: { lat: -30.027704, lng: -51.228735 },
    },
    {
      name: 'Nordeste Pneus',
      address: 'Av. Recife, 2500 - Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '51111-000',
      phone: '(81) 3232-8888',
      services: ['Venda de Pneus', 'Alinhamento', 'Balanceamento', 'Assistência 24h'],
      image: '/images/prometeon-truck-white.jpeg',
      coordinates: { lat: -8.047468, lng: -34.877060 },
    },
  ];

  const states: string[] = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 
    'São Paulo', 'Sergipe', 'Tocantins'
  ];

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');
    
    // Formata o CEP: 12345-678
    if (value.length > 5) {
      value = value.substring(0, 5) + '-' + value.substring(5);
    }
    
    // Limita a 9 caracteres (incluindo o hífen)
    if (value.length > 9) {
      value = value.substring(0, 9);
    }
    
    setCep(value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulando uma busca - em um cenário real, isso seria uma chamada de API
    setSearchResults(true);
  };

  return (
    <div>
      {/* Localizador de Revendas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1A2B5F] mb-2">Busque uma Revenda</h2>
              <p className="text-gray-600">Utilize os filtros abaixo para encontrar a revenda mais próxima de você</p>
            </div>
            
            <form onSubmit={handleSearch} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">CEP</label>
                  <input 
                    type="text" 
                    placeholder="Digite seu CEP (ex: 01310-100)" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={9}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Não sabe seu CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer" className="text-[#E63946] hover:underline">Consulte aqui</a>
                  </p>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Estado</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]">
                    <option value="">Selecione um estado</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Cidade</label>
                  <input 
                    type="text" 
                    placeholder="Digite sua cidade" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Serviços</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]">
                    <option value="">Todos os serviços</option>
                    <option value="venda">Venda de Pneus</option>
                    <option value="alinhamento">Alinhamento</option>
                    <option value="balanceamento">Balanceamento</option>
                    <option value="recapagem">Recapagem</option>
                    <option value="assistencia">Assistência 24h</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Raio de Busca</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]">
                    <option value="10">10 km</option>
                    <option value="25">25 km</option>
                    <option value="50">50 km</option>
                    <option value="100">100 km</option>
                    <option value="200">200 km</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button 
                    type="submit" 
                    className="w-full bg-[#1A2B5F] hover:bg-[#0f1a3a] text-white py-3 px-6 rounded-md transition-colors"
                  >
                    Buscar Revendas
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Mapa e Resultados */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lista de Resultados */}
              <div className={`lg:col-span-1 ${searchResults ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-xl font-bold text-[#1A2B5F] mb-4">Resultados da Busca</h3>
                  
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {featuredDealers.map((dealer, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="text-lg font-bold text-[#1A2B5F]">{dealer.name}</h4>
                        <p className="text-gray-600 text-sm mb-1">{dealer.address}</p>
                        <p className="text-gray-600 text-sm mb-1">{dealer.city}, {dealer.state} - CEP: {dealer.cep}</p>
                        <p className="text-gray-600 text-sm mb-2">{dealer.phone}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {dealer.services.map((service, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                              {service}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <button 
                            type="button"
                            className="text-sm text-[#1A2B5F] hover:underline flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Ver no mapa
                          </button>
                          <button 
                            type="button"
                            className="text-sm text-[#E63946] hover:underline flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                            Como chegar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div className={`${searchResults ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <MapComponent 
                    searchResults={searchResults} 
                    dealers={featuredDealers}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Revendas em Destaque */}
          <div className={searchResults ? 'hidden' : 'block'}>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#1A2B5F] mb-2">Revendas em Destaque</h2>
              <p className="text-gray-600">Conheça algumas de nossas principais revendas</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredDealers.slice(0, 3).map((dealer, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative h-48">
                    <img 
                      src={dealer.image} 
                      alt={dealer.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{dealer.name}</h3>
                      <p className="text-white/80">{dealer.city}, {dealer.state}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      <strong>Endereço:</strong> {dealer.address}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Telefone:</strong> {dealer.phone}
                    </p>
                    <div className="mb-4">
                      <strong className="text-gray-700 block mb-2">Serviços:</strong>
                      <div className="flex flex-wrap gap-2">
                        {dealer.services.map((service, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      type="button"
                      className="w-full bg-[#1A2B5F] hover:bg-[#0f1a3a] text-white py-3 px-6 rounded-md transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerLocator;
