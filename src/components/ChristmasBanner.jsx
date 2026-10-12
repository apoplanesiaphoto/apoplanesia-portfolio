import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import ChristmasHatIcon from './ChristmasHatIcon';

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
          background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF3EA 45%, #F5E8D8 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid rgba(220, 180, 140, 0.45)',
          boxShadow: '0 20px 48px -10px rgba(146, 64, 14, 0.08), 0 4px 20px rgba(0, 0, 0, 0.03)',
          overflow: 'hidden',
          position: 'relative',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
          textAlign: 'center'
        }}>
          {/* Subtle Decorative Golden Warm Glows */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto' }}>
            {/* Christmas Hat Hero Emblem */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              boxShadow: '0 8px 24px rgba(217, 119, 6, 0.18)',
              marginBottom: '1.25rem',
              transition: 'transform 0.3s ease'
            }}>
              <ChristmasHatIcon size={46} />
            </div>

            {/* Festive Pill Badge with Hat & Sparkles */}
            <div style={{ marginBottom: '1.2rem' }}>
              <span 
                className="pill-badge" 
                style={{
                  background: 'rgba(254, 243, 199, 0.92)',
                  color: '#92400E',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.88rem',
                  boxShadow: '0 2px 10px rgba(217, 119, 6, 0.08)'
                }}
              >
                <ChristmasHatIcon size={16} />
                <span style={{ fontWeight: 600 }}>{b.badge}</span>
                <Sparkles size={14} color="#D97706" />
              </span>
            </div>

            {/* Main Headline */}
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
              lineHeight: 1.18,
              color: 'var(--text-main)',
              margin: '0 auto 1rem auto',
              fontWeight: 600
            }}>
              {b.title}
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.22rem)',
              lineHeight: 1.65,
              color: 'var(--text-body)',
              margin: '0 auto 2rem auto',
              maxWidth: '680px'
            }}>
              {b.subtitle}
            </p>

            {/* Special Promotion Highlight Card (20€ Discount) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.85) 0%, rgba(254, 235, 200, 0.7) 100%)',
              border: '1.5px dashed #D97706',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.75rem',
              maxWidth: '620px',
              margin: '0 auto 2.25rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.15rem',
              boxShadow: '0 6px 20px rgba(217, 119, 6, 0.08)',
              textAlign: 'left'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)'
              }}>
                <Gift size={24} />
              </div>
              <div>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  color: '#B45309',
                  marginBottom: '0.2rem'
                }}>
                  {b.discountBadge}
                </div>
                <div style={{
                  fontSize: '1.08rem',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.75rem 1.25rem',
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
              textAlign: 'left'
            }}>
              {b.features?.map((feat, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-body)',
                    fontWeight: 500,
                    background: 'rgba(255, 255, 255, 0.7)',
                    padding: '0.6rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(220, 180, 140, 0.3)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <CheckCircle2 size={17} color="#D97706" style={{ flexShrink: 0 }} />
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
              gap: '1rem'
            }}>
              <Link
                to="/contact?service=natal"
                className="btn-primary"
                style={{
                  padding: '0.9rem 2.2rem',
                  fontSize: '1.02rem',
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
                  padding: '0.9rem 2.2rem',
                  fontSize: '1.02rem'
                }}
              >
                <MessageCircle size={18} />
                <span>{b.btnWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
