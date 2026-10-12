import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import ChristmasHatIcon from './ChristmasHatIcon';

export default function ChristmasBanner({ lang, t }) {
  const b = t.christmasBanner;
  if (!b) return null;

  return (
    <section 
      className="christmas-banner-section"
      style={{
        padding: '1.75rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #0F2D1E 0%, #16432C 50%, #0D2619 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 16px 38px -8px rgba(10, 35, 20, 0.28), 0 4px 18px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          position: 'relative',
          padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1.2rem, 3.5vw, 2.25rem)',
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto'
        }}>
          {/* Subtle Holiday Ambient Glows */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.16) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Top Festive Badge with Santa Hat */}
            <div style={{ marginBottom: '0.75rem' }}>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#FDE68A',
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
                }}
              >
                <ChristmasHatIcon size={18} />
                <span>{b.badge}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.65rem, 3.2vw, 2.35rem)',
              lineHeight: 1.2,
              color: '#FFFDF7',
              margin: '0 auto 0.5rem auto',
              fontWeight: 600,
              letterSpacing: '-0.01em'
            }}>
              {b.title}
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '0.98rem',
              lineHeight: 1.55,
              color: '#E2E8F0',
              margin: '0 auto 1.15rem auto',
              maxWidth: '620px'
            }}>
              {b.subtitle}
            </p>

            {/* Special Promotion Highlight Card (20€ Discount) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.92) 0%, rgba(153, 27, 27, 0.95) 100%)',
              border: '1.5px dashed rgba(253, 230, 138, 0.75)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1.25rem',
              maxWidth: '560px',
              margin: '0 auto 1.15rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              textAlign: 'left'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(253, 230, 138, 0.5)',
                color: '#FDE68A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Gift size={20} />
              </div>
              <div>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#FDE68A',
                  marginBottom: '0.1rem'
                }}>
                  {b.discountBadge}
                </div>
                <div style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3
                }}>
                  {b.discountText}
                </div>
              </div>
            </div>

            {/* Feature Highlights (Compact Inline Badges) */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.45rem 0.85rem',
              maxWidth: '660px',
              margin: '0 auto 1.35rem auto'
            }}>
              {b.features?.map((feat, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.85rem',
                    color: '#F1F5F9',
                    fontWeight: 500,
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  <CheckCircle2 size={14} color="#34D399" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem'
            }}>
              <Link
                to="/contact?service=natal"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 18px rgba(220, 38, 38, 0.35)',
                  padding: '0.75rem 1.6rem',
                  fontSize: '0.94rem'
                }}
              >
                <Calendar size={16} />
                <span>{b.btnBook}</span>
              </Link>

              <a
                href={`https://wa.me/351960234062?text=${encodeURIComponent(b.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: '0.75rem 1.6rem',
                  fontSize: '0.94rem'
                }}
              >
                <MessageCircle size={16} />
                <span>{b.btnWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
