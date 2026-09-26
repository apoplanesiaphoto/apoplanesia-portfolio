import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Heart, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ display: 'inline-block' }}>
              <img
                src="/assets/branding/logo-lettering-preto.png"
                alt="Apoplanesia Photo"
                style={{ height: '56px', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '340px' }}>
              {t.footer.tagline}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-lilac-dark)', fontSize: '0.9rem', fontWeight: 500 }}>
              <MapPin size={16} />
              <span>{t.footer.basedIn}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: 'var(--text-main)', letterSpacing: '0.02em' }}>
              {t.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-lilac)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-lilac)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/precos" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-lilac)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-lilac)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-lilac)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Buttons */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: 'var(--text-main)', letterSpacing: '0.02em' }}>
              {t.footer.contact}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* WhatsApp button - NO visible phone number */}
              <a
                href="https://wa.me/351960234062"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.color = '#25D366'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-body)'}
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.12)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={16} />
                </div>
                <span>WhatsApp</span>
              </a>

              {/* Call button */}
              <a
                href="tel:+351960234062"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--accent-lilac)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-body)'}
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--bg-lilac-subtle)', color: 'var(--accent-lilac)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={16} />
                </div>
                <span>960 234 062</span>
              </a>

              {/* Email */}
              <a
                href="mailto:apoplanesia.photo@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--accent-lilac)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-body)'}
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--bg-lilac-subtle)', color: 'var(--accent-lilac)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={16} />
                </div>
                <span>apoplanesia.photo@gmail.com</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/apoplanesia.photo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.color = '#E1306C'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-body)'}
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(225, 48, 108, 0.12)', color: '#E1306C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Instagram size={16} />
                </div>
                <span>@apoplanesia.photo</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/apoplanesia.photo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.color = '#1877F2'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-body)'}
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(24, 119, 242, 0.12)', color: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Facebook size={16} />
                </div>
                <span>Facebook Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          color: 'var(--text-light)',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} Apoplanesia Photo by Eva Santos. {t.footer.rights}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>{t.footer.designedWithLove}</span>
            <Heart size={14} color="var(--accent-lilac)" fill="var(--accent-lilac)" />
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              background: 'var(--bg-lilac-subtle)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--accent-lilac-dark)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/351960234062"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}
