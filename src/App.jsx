import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

import HomePage from './pages/HomePage';
import PortfolioHub from './pages/PortfolioHub';
import CategoryGalleryPage from './pages/CategoryGalleryPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';

import { translations } from './data/translations';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState('pt'); // 'pt' default or 'en'
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxList, setLightboxList] = useState([]);

  const t = translations[lang] || translations.pt;

  const handleOpenLightbox = (item, list) => {
    setLightboxItem(item);
    setLightboxList(list || []);
  };

  const handleNavigateLightbox = (direction) => {
    if (!lightboxItem || lightboxList.length === 0) return;
    const currentIndex = lightboxList.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex === -1) return;
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = lightboxList.length - 1;
    if (nextIndex >= lightboxList.length) nextIndex = 0;
    setLightboxItem(lightboxList[nextIndex]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-page)' }}>
      <ScrollToTop />

      {/* Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* Main Page Area with Route Switcher */}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage lang={lang} t={t} />} />

          {/* Portfolio Hub Route */}
          <Route path="/portfolio" element={<PortfolioHub lang={lang} t={t} />} />

          {/* Category Gallery Routes */}
          <Route
            path="/portfolio/:category"
            element={
              <CategoryGalleryPage
                onSelectPhoto={handleOpenLightbox}
                lang={lang}
                t={t}
              />
            }
          />

          {/* Pricing & Packages Route */}
          <Route path="/precos" element={<PricingPage lang={lang} t={t} />} />
          <Route path="/pricing" element={<Navigate to="/precos" replace />} />
          <Route path="/proposta" element={<Navigate to="/precos" replace />} />

          {/* About Route */}
          <Route path="/about" element={<AboutPage lang={lang} t={t} />} />
          <Route path="/sobre" element={<Navigate to="/about" replace />} />

          {/* Contact Route */}
          <Route path="/contact" element={<ContactPage lang={lang} t={t} />} />
          <Route path="/contacto" element={<Navigate to="/contact" replace />} />

          {/* Sitemap Route */}
          <Route path="/sitemap" element={<SitemapPage lang={lang} t={t} />} />
          <Route path="/mapa-do-site" element={<Navigate to="/sitemap" replace />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          items={lightboxList}
          onClose={() => setLightboxItem(null)}
          onNavigate={handleNavigateLightbox}
          lang={lang}
          t={t}
        />
      )}

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}
