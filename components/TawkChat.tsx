'use client';

import Script from 'next/script';

const TawkChat = () => {
  return (
    <>
      {/* Tawk.to API Configuration */}
      <Script id="tawk-config" strategy="lazyOnload">
        {`
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();
          
          // Applying Project Primary Color Aesthetics
          Tawk_API.customStyle = {
            visibility: {
              desktop: { position: 'br', xOffset: '25px', yOffset: '25px' },
              mobile: { position: 'br', xOffset: '15px', yOffset: '15px' }
            }
          };
        `}
      </Script>

      {/* Main Tawk.to Script */}
      <Script
        id="tawk-chat"
        strategy="lazyOnload"
        src="https://embed.tawk.to/6993fa602d51971c44f82fd4/1jhl0k30t"
        charSet="UTF-8"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default TawkChat;
