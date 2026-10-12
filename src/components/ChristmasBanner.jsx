import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Calendar, MessageCircle, CheckCircle2, MapPin } from 'lucide-react';

export default function ChristmasBanner({ lang, t }) {
  const b = t.christmasBanner;
  if (!b) return null;

  return (
    <section 
      className="christmas-banner-section"
      style={{
        padding: '3rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #FFFDF9 0%, #FAF4EB 45%, #F5EAE0 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid rgba(217, 185, 155, 0.45)',
          boxShadow: '0 16px 40px -8px rgba(100, 70, 50, 0.08), 0 4px 18px rgba(217, 119, 6, 0.06)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Subtle Decorative Golden Glow Top-Right */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            padding: 'clamp(2rem, 4.5vw, 3.5rem)'
          }}>
            {/* Left Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Festive Badge */}
              <div>
                <span 
                  className="pill-badge" 
                  style={{
                    background: 'rgba(254, 243, 199, 0.85)',
                    color: '#92400E',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    padding: '0.4rem 0.95rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <Sparkles size={14} color="#D97706" />
                  <span>{b.badge}</span>
                </span>
              </div>

              {/* Main Headline */}
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.1rem, 4.2vw, 3.3rem)',
                lineHeight: 1.15,
                color: 'var(--text-main)',
                margin: 0,
                fontWeight: 600
              }}>
                {b.title}
              </h2>

              {/* Subtitle */}
              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'var(--text-body)',
                margin: 0
              }}>
                {b.subtitle}
              </p>

              {/* Special Promotion Highlight Card (20€ Discount) */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.75) 0%, rgba(254, 235, 200, 0.6) 100%)',
                border: '1.5px dashed #D97706',
                borderRadius: 'var(--radius-md)',
                padding: '1.15rem 1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 4px 15px rgba(217, 119, 6, 0.08)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)'
                }}>
                  <Gift size={24} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#B45309',
                    marginBottom: '0.2rem'
                  }}>
                    {b.discountBadge}
                  </div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#78350F',
                    lineHeight: 1.35
                  }}>
                    {b.discountText}
                  </div>
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '0.65rem',
                margin: '0.25rem 0'
              }}>
                {b.features?.map((feat, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-body)',
                      fontWeight: 500
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--accent-lilac)" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '0.5rem'
              }}>
                <Link
                  to="/contact?service=natal"
                  className="btn-primary"
                  style={{
                    padding: '0.85rem 1.8rem',
                    fontSize: '1rem',
                    boxShadow: '0 6px 20px rgba(142, 114, 158, 0.35)'
                  }}
                >
                  <Calendar size={18} />
                  <span>{b.btnBook}</span>
                </Link>

                <a
                  href={`https://wa.me/351960234062?text=${encodeURIComponent(b.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{
                    padding: '0.85rem 1.8rem',
                    fontSize: '1rem'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>{b.btnWhatsapp}</span>
                </a>
              </div>
            </div>

            {/* Right Photo Collage Showcase */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative'
            }}>
              {/* Main Wide Photo */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '2px solid rgba(255, 255, 255, 0.85)'
              }}>
                <img
                  src="/assets/christmas/natal-studio-1.jpg"
                  alt="Cenário de Natal em Estúdio Apoplanesia Photo"
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Floating Studio Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}>
                  <MapPin size={13} color="var(--accent-lilac)" />
                  <span>{lang === 'pt' ? 'Estúdio no Porto • Cenário Real' : 'Porto Studio • Real Scenery'}</span>
                </div>
              </div>

              {/* Bottom Row: 2 Complementary Detail Photos */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}>
                {/* Detail 1: Christmas Tree and Gifts */}
                <div style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '2px solid rgba(255, 255, 255, 0.85)'
                }}>
                  <img
                    src="/assets/christmas/natal-studio-2.jpg"
                    alt="Decoração de Natal - Detalhes da árvore e presentes"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    background: 'rgba(36, 26, 40, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}>
                    {lang === 'pt' ? 'Detalhes Natalícios' : 'Holiday Details'}
                  </div>
                </div>

                {/* Detail 2: Cozy Armchair and Lantern */}
                <div style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '2px solid rgba(255, 255, 255, 0.85)'
                }}>
                  <img
                    src="/assets/christmas/natal-studio-3.jpg"
                    alt="Canto acolhedor com coroa e iluminação mágica"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    background: 'rgba(36, 26, 40, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}>
                    {lang === 'pt' ? 'Ambiente Acolhedor' : 'Cozy Ambiance'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
