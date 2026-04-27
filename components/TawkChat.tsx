'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

const TawkChat = () => {
  useEffect(() => {
    // Safely initialize Tawk_API only on the client side after hydration
    if (typeof window !== 'undefined') {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      window.Tawk_API.customStyle = {
        visibility: {
          desktop: { position: 'br', xOffset: '25px', yOffset: '25px' },
          mobile: { position: 'br', xOffset: '15px', yOffset: '15px' }
        },
        widgetStyle: {
          mobile: {
            color: '#07a447'
          },
          desktop: {
            color: '#07a447'
          }
        }
      };
    }
  }, []);

  return (
    <Script
      id="tawk-chat"
      strategy="lazyOnload"
      src="https://embed.tawk.to/6993fa602d51971c44f82fd4/1jhl0k30t"
      charSet="UTF-8"
      crossOrigin="anonymous"
    />
  );
};

export default TawkChat;
