import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Camera, MessageCircle, Calendar, Smile, Clock, FileText, MapPin } from 'lucide-react';

export default function PricingPage({ lang, t }) {
  const p = t.pricing;

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '85vh', padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Camera size={14} />
            <span>{p.badge}</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {p.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
            {p.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {p.packages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`pricing-card ${pkg.highlight ? 'featured' : ''}`}
              >
                {pkg.badge && (
                  <span className="pricing-card-badge">{pkg.badge}</span>
                )}

                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      {pkg.name}
                    </h3>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.5rem', minHeight: '44px' }}>
                    {pkg.desc}
                  </p>

                  {/* Price Block */}
                  <div style={{
                    padding: '1.25rem',
                    background: pkg.highlight ? 'rgba(142, 114, 158, 0.08)' : 'var(--bg-page)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.75rem',
                    border: '1px solid var(--border-card)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--accent-lilac)' }}>
                        {pkg.price}
                      </span>
                      {pkg.extra && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                          {pkg.extra}
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-body)' }}>
                      <span>⏱ {pkg.duration}</span>
                      <span>📷 {pkg.photos}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'var(--bg-lilac-subtle)',
                          color: 'var(--accent-lilac)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <Link
                  to={`/contact?service=${pkg.id}`}
                  className={pkg.highlight ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Calendar size={16} />
                  <span>{p.btnBookNow}</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Studio Note Callout Box */}
        <div style={{
          background: 'linear-gradient(135deg, #F8F4FA 0%, #FFFFFF 100%)',
          border: '1.5px solid var(--accent-lilac-soft)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          marginBottom: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'var(--bg-lilac-subtle)',
            color: 'var(--accent-lilac)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <MapPin size={24} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
            {p.noteStudioTitle}
          </h3>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '750px' }}>
            {p.noteStudioText}
          </p>
        </div>

        {/* "Com o que podes contar" Guarantee Cards */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              {p.guaranteesTitle}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {p.guarantees.map((item, idx) => {
              const icons = [<FileText size={26} />, <Smile size={26} />, <Clock size={26} />];
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = 'var(--border-card)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--bg-lilac-subtle)',
                    color: 'var(--accent-lilac)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}>
                    {icons[idx]}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA with clean WhatsApp button */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FAF6FC 0%, #F1EAF5 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '4rem 2rem',
          border: '1.5px solid var(--border-card)'
        }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
            {p.ctaQuestion}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
              <Calendar size={18} />
              <span>{p.btnBookNow}</span>
            </Link>

            <a
              href="https://wa.me/351960234062?text=Ol%C3%A1%20Eva!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20sess%C3%B5es%20e%20pre%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
