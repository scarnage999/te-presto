import React from 'react';
import { Download, Play } from 'lucide-react';
import appScreeshot from '../../assets/te-presto-screenshot.png';

interface HeroProps {
  title: string;
  tagline: string;
  description: string;
  downloadUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ title, tagline, description, downloadUrl }) => {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-blue-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-sky-600">{title}</span>
              <br />
              <span className="text-gray-700 text-3xl sm:text-4xl lg:text-5xl">
                {tagline}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href={downloadUrl}
                className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center space-x-2 shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span>Descargar APK</span>
              </a>
              
              <button className="flex items-center space-x-2 text-sky-600 font-medium hover:text-sky-700 transition-colors">
                <Play className="h-5 w-5" />
                <span>Ver demo</span>
              </button>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-between px-6 text-black text-sm font-medium z-10">
                    <span>6:37</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <div className="w-6 h-3 bg-black rounded-sm"></div>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20"></div>

                  {/* App Screenshot */}
                  <div className="pt-12 h-full">
                    <img 
                      src={appScreeshot} // Replace with your app screenshot URL
                      alt="Te Presto App Screenshot"
                      className="w-full h-full object-cover"
                      style={{
                        background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800"><rect width="400" height="800" fill="%23f8fafc"/><text x="200" y="100" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="%23334155">My Balance</text><rect x="50" y="150" width="300" height="80" rx="12" fill="%236b7280"/><text x="200" y="175" text-anchor="middle" font-family="Arial" font-size="14" fill="white">All</text><rect x="50" y="250" width="300" height="100" rx="12" fill="%23dcfce7"/><text x="70" y="280" font-family="Arial" font-size="14" fill="%2316a34a">Balance</text><text x="70" y="310" font-family="Arial" font-size="28" font-weight="bold" fill="%2316a34a">+$30.000</text><text x="70" y="330" font-family="Arial" font-size="12" fill="%2316a34a">In your favor</text><rect x="50" y="370" width="140" height="80" rx="12" fill="%23dbeafe"/><text x="70" y="395" font-family="Arial" font-size="12" fill="%232563eb">Owe Me</text><text x="70" y="420" font-family="Arial" font-size="20" font-weight="bold" fill="%232563eb">$30.000</text><rect x="210" y="370" width="140" height="80" rx="12" fill="%23fecaca"/><text x="230" y="395" font-family="Arial" font-size="12" fill="%23dc2626">I Owe</text><text x="230" y="420" font-family="Arial" font-size="20" font-weight="bold" fill="%23dc2626">$0</text><rect x="50" y="470" width="300" height="60" rx="12" fill="%23fef3c7"/><text x="70" y="495" font-family="Arial" font-size="14" fill="%23d97706">1 Deuda Vence Pronto</text><text x="70" y="515" font-family="Arial" font-size="12" fill="%23d97706">John Appleseed - Vence en 2 días</text></svg>') center/cover`
                      }}
                    />
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 flex items-center justify-around px-4">
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-sky-600 rounded"></div>
                      <span className="text-xs text-sky-600 font-medium">Balance</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <span className="text-xs text-gray-400">Add</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <span className="text-xs text-gray-400">Mi Cuenta</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <span className="text-xs text-gray-400">History</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <span className="text-xs text-gray-400">Settings</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sky-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};