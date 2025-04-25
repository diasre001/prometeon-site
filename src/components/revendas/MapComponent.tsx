"use client";

import React from 'react';

interface MapComponentProps {
  searchResults: boolean;
  dealers?: Array<{
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  }>;
}

const MapComponent: React.FC<MapComponentProps> = ({ searchResults, dealers = [] }) => {
  // Em um ambiente de produção, este componente utilizaria a API do Google Maps
  // ou outra biblioteca de mapas para exibir um mapa interativo com marcadores
  
  return (
    <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center relative">
      {/* Placeholder para o mapa */}
      <div className="absolute inset-0 bg-gray-200 rounded-lg">
        <div className="w-full h-full" id="map-container" style={{ position: 'relative' }}>
          {/* Aqui seria renderizado o mapa do Google Maps */}
          <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
          
          {/* Simulação de marcadores no mapa */}
          {searchResults && dealers.map((dealer, index) => (
            <div 
              key={index}
              className="absolute w-6 h-6 bg-[#E63946] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
              style={{ 
                left: `${(dealer.coordinates.lng + 180) / 360 * 100}%`, 
                top: `${(90 - dealer.coordinates.lat) / 180 * 100}%`,
                zIndex: 10
              }}
              title={dealer.name}
            >
              <span className="text-white text-xs font-bold">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Conteúdo sobreposto */}
      <div className="relative z-10 text-center p-6 bg-white/80 rounded-lg max-w-md">
        <svg className="w-16 h-16 text-[#1A2B5F] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        
        {searchResults ? (
          <div>
            <h3 className="text-xl font-bold text-[#1A2B5F] mb-2">Revendedores Encontrados</h3>
            <p className="text-gray-700">
              Foram encontrados {dealers.length} revendedores Prometeon próximos ao CEP informado.
              Clique em um revendedor na lista para ver mais detalhes.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-[#1A2B5F] mb-2">Mapa de Revendas</h3>
            <p className="text-gray-700">
              Digite seu CEP ou selecione os filtros acima para visualizar as revendas Prometeon mais próximas de você.
            </p>
          </div>
        )}
        
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Em um ambiente de produção, este mapa seria integrado com a API do Google Maps ou similar, 
            exibindo a localização real das revendas Prometeon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
