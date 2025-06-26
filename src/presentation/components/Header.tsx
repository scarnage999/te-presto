import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  appName: string;
}

export const Header: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo appName={appName} />
          
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