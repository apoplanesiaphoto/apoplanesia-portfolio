import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Calendar, MessageCircle, ChevronRight } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = useRef(null);
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

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent underlying content from moving or overlapping
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Measure header height for pixel-perfect drawer positioning
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [mobileMenuOpen]);

  const navItems = [
    { to: '/', label: t.nav.home, active: isHomeActive },
    { to: '/portfolio', label: t.nav.portfolio, active: isPortfolioActive },
    { to: '/precos', label: t.nav.pricing, active: isPricingActive },
    { to: '/about', label: t.nav.about, active: isAboutActive },
    { to: '/contact', label: t.nav.contact, active: isContactActive }
  ];

  return (
    <header 
      ref={headerRef}
      className={`header-glass ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}
      style={mobileMenuOpen ? {
        background: '#FAF8F5',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderBottom: '1px solid var(--border-subtle)',
        zIndex: 1000
      } : {}}
    >
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
              background: mobileMenuOpen ? 'var(--accent-lilac)' : 'var(--bg-lilac-subtle)',
              border: `1.5px solid ${mobileMenuOpen ? 'var(--accent-lilac)' : 'var(--border-subtle)'}`,
              color: mobileMenuOpen ? '#FFFFFF' : 'var(--accent-lilac-dark)',
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Completely Opaque & Non-overlapping */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: `${headerHeight}px`,
            left: 0,
            right: 0,
            bottom: 0,
            height: `calc(100dvh - ${headerHeight}px)`,
            background: '#FAF8F5',
            zIndex: 1000,
            padding: '1.25rem 1.25rem 2.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            boxShadow: '0 20px 40px rgba(36, 26, 40, 0.15)'
          }}
        >
          {/* Navigation Links formatted as clean, solid touch cards */}
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.95rem 1.15rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1.1rem',
                fontWeight: item.active ? 700 : 500,
                color: item.active ? 'var(--accent-lilac-dark)' : 'var(--text-main)',
                background: item.active ? 'var(--bg-lilac-subtle)' : '#FFFFFF',
                border: `1.5px solid ${item.active ? 'var(--accent-lilac-soft)' : 'var(--border-card)'}`,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <span>{item.label}</span>
              <ChevronRight
                size={18}
                style={{
                  color: item.active ? 'var(--accent-lilac)' : 'var(--text-light)',
                  transform: item.active ? 'translateX(2px)' : 'none'
                }}
              />
            </Link>
          ))}

          {/* Action CTAs: Book session & WhatsApp */}
          <div style={{ 
            marginTop: '0.75rem', 
            paddingTop: '1.25rem', 
            borderTop: '1.5px solid var(--border-card)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.85rem' 
          }}>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '1rem' }}
            >
              <Calendar size={18} />
              <span>{t.nav.bookSession}</span>
            </Link>

            <a
              href="https://wa.me/351960234062"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '1rem' }}
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
