import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { BrandIcon } from './Logo';

interface FooterProps {
  appName: string;
}

export const Footer: React.FC<FooterProps> = ({ appName }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center relative">
                  <BrandIcon width='w-6' height='h-5'/>
                </div>
              
              <span className="text-xl font-bold">{appName}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              La aplicación más confiable para gestionar tus préstamos y deudas. 
              Mantén el control total de tus finanzas personales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Características</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Registro de Préstamos</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Recordatorios</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Historial de Pagos</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Reportes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {appName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};