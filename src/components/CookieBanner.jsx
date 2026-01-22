import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800 border-t border-dark-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm text-center sm:text-left flex-1">
            By using this site, you consent to cookies for personalizing your experience and stopping fraud.
          </p>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <a
              href="#cookie-policy"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Learn more…
            </a>
            <button
              onClick={handleAccept}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
