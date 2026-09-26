import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Calendar, MessageCircle } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  const isHomeActive = pathname === '/' || pathname === '';
  const isPortfolioActive = pathname.startsWith('/portfolio');
  const isPricingActive = pathname.startsWith('/precos');
  const isAboutActive = pathname.startsWith('/about');
  const isContactActive = pathname.startsWith('/contact');

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header-glass">
      <div className="nav-container">
        {/* Brand Logo - Enlarged for enhanced presence */}
        <Link 
          to="/" 
          className="logo-brand"
          onClick={closeMobileMenu}
          title="Apoplanesia Photo"
        >
          <img 
            src="/assets/branding/logo-lettering-preto.png" 
            alt="Apoplanesia Photo by Eva Santos" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.4rem' }} className="desktop-nav">
          <Link
            to="/"
            style={{
              color: isHomeActive ? 'var(--accent-lilac-dark)' : 'var(--text-body)',
              fontWeight: isHomeActive ? 700 : 500,
              fontSize: '0.98rem',
              transition: 'all 0.2s ease',
              borderBottom: isHomeActive ? '2px solid var(--accent-lilac)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.home}
          </Link>

          <Link
            to="/portfolio"
            style={{
              color: isPortfolioActive ? 'var(--accent-lilac-dark)' : 'var(--text-body)',
              fontWeight: isPortfolioActive ? 700 : 500,
              fontSize: '0.98rem',
              transition: 'all 0.2s ease',
              borderBottom: isPortfolioActive ? '2px solid var(--accent-lilac)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.portfolio}
          </Link>

          <Link
            to="/precos"
            style={{
              color: isPricingActive ? 'var(--accent-lilac-dark)' : 'var(--text-body)',
              fontWeight: isPricingActive ? 700 : 500,
              fontSize: '0.98rem',
              transition: 'all 0.2s ease',
              borderBottom: isPricingActive ? '2px solid var(--accent-lilac)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.pricing}
          </Link>

          <Link
            to="/about"
            style={{
              color: isAboutActive ? 'var(--accent-lilac-dark)' : 'var(--text-body)',
              fontWeight: isAboutActive ? 700 : 500,
              fontSize: '0.98rem',
              transition: 'all 0.2s ease',
              borderBottom: isAboutActive ? '2px solid var(--accent-lilac)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.about}
          </Link>

          <Link
            to="/contact"
            style={{
              color: isContactActive ? 'var(--accent-lilac-dark)' : 'var(--text-body)',
              fontWeight: isContactActive ? 700 : 500,
              fontSize: '0.98rem',
              transition: 'all 0.2s ease',
              borderBottom: isContactActive ? '2px solid var(--accent-lilac)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Action Controls & Language Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            title={lang === 'pt' ? "Switch to English" : "Mudar para Português"}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--bg-lilac-subtle)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--accent-lilac-dark)',
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Globe size={15} />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Book Shoot CTA Button (Desktop) */}
          <Link
            to="/contact"
            className="btn-primary desktop-nav"
            style={{ padding: '0.6rem 1.35rem', fontSize: '0.9rem' }}
          >
            <Calendar size={15} />
            <span>{t.nav.bookSession}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--bg-lilac-subtle)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--accent-lilac-dark)',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(250, 248, 245, 0.98)',
          backdropFilter: 'blur(16px)',
          zIndex: 99,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <Link
            to="/"
            onClick={closeMobileMenu}
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isHomeActive ? 'var(--accent-lilac)' : 'var(--text-main)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.8rem'
            }}
          >
            {t.nav.home}
          </Link>

          <Link
            to="/portfolio"
            onClick={closeMobileMenu}
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isPortfolioActive ? 'var(--accent-lilac)' : 'var(--text-main)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.8rem'
            }}
          >
            {t.nav.portfolio}
          </Link>

          <Link
            to="/precos"
            onClick={closeMobileMenu}
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isPricingActive ? 'var(--accent-lilac)' : 'var(--text-main)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.8rem'
            }}
          >
            {t.nav.pricing}
          </Link>

          <Link
            to="/about"
            onClick={closeMobileMenu}
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isAboutActive ? 'var(--accent-lilac)' : 'var(--text-main)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.8rem'
            }}
          >
            {t.nav.about}
          </Link>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isContactActive ? 'var(--accent-lilac)' : 'var(--text-main)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.8rem'
            }}
          >
            {t.nav.contact}
          </Link>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Calendar size={18} />
              <span>{t.nav.bookSession}</span>
            </Link>

            <a
              href="https://wa.me/351960234062"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
