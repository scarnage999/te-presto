import { useEffect, useState } from 'react';
import { GoogleAnalyticsService } from '../../infrastructure/services/GoogleAnalyticsService';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.includes('analytics_consent=true');
    if (!hasConsent) {
      setShowBanner(true);
    } else {
      GoogleAnalyticsService.init();
    }
  }, []);

  const acceptConsent = () => {
    document.cookie = 'analytics_consent=true; path=/; max-age=31536000'; // 1 año
    GoogleAnalyticsService.init();
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', background: '#222', color: '#fff', padding: 12, textAlign: 'center', zIndex: 9999 }}>
      <span>We use cookies to improve your experience.</span>
      <button onClick={acceptConsent} style={{ marginLeft: 8, padding: '6px 12px' }}>
        Accept
      </button>
    </div>
  );
};
