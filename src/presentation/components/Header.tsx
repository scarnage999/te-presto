import React from 'react';
import { BrandIcon } from './shared/BrandIcon';

interface HeaderProps {
  appName: string;
}

export const Header: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
             <div className="flex items-center space-x-3">
                {/* Logo using the provided design */}
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center relative">  
                    <BrandIcon width='w-8' height='h-6'/>
                </div>
                <span className="text-xl font-bold text-gray-900">{appName}</span>
              </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-sky-600 transition-colors">
              Características
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-sky-600 transition-colors">
              Testimonios
            </a>
            <a href="#download" className="text-gray-600 hover:text-sky-600 transition-colors">
              Descargar
            </a>
          </nav>
          
          <a
            href="#download"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors font-medium"
          >
            Descargar APK
          </a>
        </div>
      </div>
    </header>
  );
};