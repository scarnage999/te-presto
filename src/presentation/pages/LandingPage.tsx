import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Download } from '../components/Download';
import { Footer } from '../components/Footer';
import { MockAppDataService } from '../../infrastructure/services/MockAppDataService';

export const LandingPage: React.FC = () => {
  const appDataService = new MockAppDataService();
  const appInfo = appDataService.getAppInfo();
  const features = appDataService.getFeatures();
  const testimonials = appDataService.getTestimonials();

  return (
    <div className="min-h-screen bg-white">
      <Header appName={appInfo.name} />
      
      <Hero
        title={appInfo.name}
        tagline={appInfo.tagline}
        description={appInfo.description}
        downloadUrl={appInfo.downloadUrl}
      />
      
      <Features features={features} />
      
      <Testimonials testimonials={testimonials} />
      
      <Download
        appName={appInfo.name}
        downloadUrl={appInfo.downloadUrl}
        version={appInfo.version}
      />
      
      <Footer appName={appInfo.name} />
    </div>
  );
};