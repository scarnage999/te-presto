import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Feature } from '../../domain/models/Feature';

interface FeaturesProps {
  features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8 text-sky-600" /> : null;
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas para controlar tus finanzas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una solución completa para gestionar préstamos, deudas y recordatorios de manera inteligente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white border border-transparent hover:border-sky-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-lg mb-6">
                {getIcon(feature.icon)}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};