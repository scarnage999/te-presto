import ReactGA from 'react-ga4';

const GA_ID = import.meta.env.VITE_GA_ID ?? '';

const isLocalhost = () => window.location.hostname === 'localhost';
const isConsentGiven = () => document.cookie.includes('analytics_consent=true');

const canTrack = (): boolean => {
  // Permitir tracking si hay un GA_ID válido y hay consentimiento.
  return GA_ID !== '' && isConsentGiven() && !isLocalhost();
};

export const GoogleAnalyticsService = {
  init: () => {
    if (!canTrack()) {
      console.debug('[GA] Tracking desactivado');
      return;
    }

    ReactGA.initialize(GA_ID, {
      gaOptions: {
        anonymize_ip: true,
      },
    });

    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

    console.debug('[GA] Inicializado con ID:', GA_ID);
  },
};
