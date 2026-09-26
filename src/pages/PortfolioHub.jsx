import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Sparkles, Heart, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioHub({ lang, t }) {
  const categories = portfolioData.categories;

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '80vh', padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Camera size={13} />
            <span>{t.nav.portfolio}</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '1.2rem', color: 'var(--text-main)' }}>
            {t.hub.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            {t.hub.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {categories.map((cat) => {
            const title = lang === 'pt' ? cat.titlePt : cat.titleEn;
            const subtitle = lang === 'pt' ? cat.subtitlePt : cat.subtitleEn;
            const desc = lang === 'pt' ? cat.descPt : cat.descEn;

            return (
              <div
                key={cat.id}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--border-card)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-card)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
              >
                <Link to={`/portfolio/${cat.id}`} style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                  <img
                    src={cat.bannerImage}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.target.style.transform = 'scale(1)'}
                  />
                </Link>

                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      {title}
                    </h3>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-lilac)', fontWeight: 600, marginBottom: '0.85rem' }}>
                      {subtitle}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {desc}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    flexWrap: 'wrap'
                  }}>
                    <Link
                      to={`/portfolio/${cat.id}`}
                      className="btn-primary"
                      style={{
                        flex: '1 1 140px',
                        textAlign: 'center',
                        padding: '0.65rem 1.1rem',
                        fontSize: '0.88rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span>{t.hub.viewCategory}</span>
                      <ArrowRight size={15} />
                    </Link>

                    <Link
                      to={`/contact?service=${cat.id}`}
                      className="btn-secondary"
                      style={{
                        flex: '1 1 140px',
                        textAlign: 'center',
                        padding: '0.65rem 1.1rem',
                        fontSize: '0.88rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Calendar size={15} />
                      <span>{t.gallery.bookSimilar}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
