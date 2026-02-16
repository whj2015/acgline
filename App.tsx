import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import PrivacyConsentModal from './components/PrivacyConsentModal';

const PRIVACY_CONSENT_KEY = 'acgline_privacy_consent';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>
        <Timeline />
      </main>
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(PRIVACY_CONSENT_KEY);
    if (!consent) {
      setShowConsentModal(true);
    }
    setIsInitialized(true);
  }, []);

  const handleAcceptConsent = () => {
    localStorage.setItem(PRIVACY_CONSENT_KEY, 'accepted');
    setShowConsentModal(false);
  };

  const handleDeclineConsent = () => {
    localStorage.setItem(PRIVACY_CONSENT_KEY, 'declined');
    setShowConsentModal(false);
  };

  if (!isInitialized) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-violet-500/30">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

        {showConsentModal && (
          <PrivacyConsentModal
            onAccept={handleAcceptConsent}
            onDecline={handleDeclineConsent}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
