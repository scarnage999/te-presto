import React from 'react';
import { Download as DownloadIcon, Smartphone, Shield, Zap } from 'lucide-react';
import { BrandIcon } from './shared/BrandIcon';

interface DownloadProps {
  appName: string;
  downloadUrl: string;
  version: string;
}

export const Download: React.FC<DownloadProps> = ({ appName, downloadUrl, version }) => {
  return (
    <section id="download" className="py-16 sm:py-24 bg-sky-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Descarga {appName} ahora
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
            Comienza a tomar control de tus finanzas hoy mismo. Descarga gratuita, sin suscripciones.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center relative">
                <BrandIcon width='w-10' height='h-8'/>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{appName}</h3>
            <p className="text-gray-600 mb-6">Versión {version}</p>
            
            <a
              href={downloadUrl}
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg w-full"
            >
              <DownloadIcon className="h-5 w-5" />
              <span>Descargar APK</span>
            </a>
            
            <p className="text-sm text-gray-500 mt-4">
              Compatible con Android 7.0 o superior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-sky-500 bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Fácil de usar</h4>
              <p className="text-sky-100">Interfaz intuitiva diseñada para todos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sky-500 bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">100% Seguro</h4>
              <p className="text-sky-100">Tus datos están protegidos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sky-500 bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Rápido</h4>
              <p className="text-sky-100">Optimizado para máximo rendimiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};