import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Smile, Clock, Camera, MessageCircle, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HomePage({ lang, t }) {
  const categories = portfolioData.categories;
  const casaisCat = categories.find(c => c.id === 'casais') || categories[0];
  const retratoCat = categories.find(c => c.id === 'retrato') || categories[1];
  const maternidadeCat = categories.find(c => c.id === 'maternidade') || categories[2];
  const boudoirCat = categories.find(c => c.id === 'boudoir') || categories[3];
  const eventosCat = categories.find(c => c.id === 'eventos') || categories[4];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section with Stefania & Amar Photo in Background */}
      <section style={{
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '6rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        minHeight: '620px'
      }}>
        {/* Background Image: Apoplanesia Photo_Casal_Stefania&Amar_2026 (46) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/branding/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.95)'
        }} />

        {/* Fine-Art Editorial Glass Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(250, 248, 245, 0.88) 0%, rgba(250, 248, 245, 0.78) 50%, rgba(250, 248, 245, 0.96) 100%)',
          backdropFilter: 'blur(3px)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            {/* Round Brand Emblem */}
            <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, #FFFFFF 100%)',
                boxShadow: 'var(--shadow-card)',
                backdropFilter: 'blur(8px)'
              }}>
                <img
                  src="/assets/branding/logo-roxo.png"
                  alt="Apoplanesia"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
            </div>

            {/* Pill Badge with Heart Icon */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="pill-badge" style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(6px)', border: '1px solid var(--border-subtle)' }}>
                <Heart size={14} fill="var(--accent-lilac)" color="var(--accent-lilac)" />
                <span>{t.hero.badge}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              color: 'var(--text-main)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              fontWeight: 600,
              textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)'
            }}>
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-body)',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto'
            }}>
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/portfolio" className="btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>{t.hero.btnPortfolio}</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/precos" className="btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(6px)' }}>
                <span>{t.hero.btnPricing}</span>
              </Link>

              <a
                href="https://wa.me/351960234062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AESTHETIC EDITORIAL PORTFOLIO SECTION */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>
              <Camera size={13} />
              <span>{t.nav.portfolio}</span>
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--text-main)' }}>
              {t.hub.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {t.hub.subtitle}
            </p>
          </div>

          {/* Aesthetic Asymmetrical Editorial Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Top Row: Large Featured Spotlight (Casais) + Sleek Portrait Card (Retrato) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}>
              {/* Casais - Featured Wide Card */}
              {casaisCat && (
                <Link
                  to={`/portfolio/${casaisCat.id}`}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    minHeight: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    boxShadow: 'var(--shadow-card)',
                    border: '1.5px solid var(--border-card)',
                    transition: 'all 0.4s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                    e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                    e.currentTarget.style.borderColor = 'var(--border-card)';
                  }}
                >
                  <img
                    src={casaisCat.bannerImage}
                    alt={lang === 'pt' ? casaisCat.titlePt : casaisCat.titleEn}
                    draggable={false}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(28, 18, 32, 0.9) 0%, rgba(28, 18, 32, 0.2) 60%, transparent 100%)'
                  }} />

                  <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem 2rem', color: '#FFFFFF' }}>
                    <h3 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 600 }}>
                      {lang === 'pt' ? casaisCat.titlePt : casaisCat.titleEn}
                    </h3>
                    <p style={{ fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '520px', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                      {lang === 'pt' ? casaisCat.subtitlePt : casaisCat.subtitleEn}
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.22)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      color: '#FFFFFF',
                      padding: '0.5rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                      fontSize: '0.88rem'
                    }}>
                      <span>{t.hub.viewCategory}</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              )}

              {/* Retrato - Editorial Card */}
              {retratoCat && (
                <Link
                  to={`/portfolio/${retratoCat.id}`}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    minHeight: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    boxShadow: 'var(--shadow-card)',
                    border: '1.5px solid var(--border-card)',
                    transition: 'all 0.4s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                    e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                    e.currentTarget.style.borderColor = 'var(--border-card)';
                  }}
                >
                  <img
                    src={retratoCat.bannerImage}
                    alt={lang === 'pt' ? retratoCat.titlePt : retratoCat.titleEn}
                    draggable={false}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(28, 18, 32, 0.9) 0%, rgba(28, 18, 32, 0.2) 60%, transparent 100%)'
                  }} />

                  <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem 2rem', color: '#FFFFFF' }}>
                    <h3 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 600 }}>
                      {lang === 'pt' ? retratoCat.titlePt : retratoCat.titleEn}
                    </h3>
                    <p style={{ fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '420px', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                      {lang === 'pt' ? retratoCat.subtitlePt : retratoCat.subtitleEn}
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.22)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      color: '#FFFFFF',
                      padding: '0.5rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                      fontSize: '0.88rem'
                    }}>
                      <span>{t.hub.viewCategory}</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Bottom Row: 3 Equal Editorial Cards (Maternidade, Boudoir, Eventos) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {[maternidadeCat, boudoirCat, eventosCat].filter(Boolean).map((cat) => {
                const catTitle = lang === 'pt' ? cat.titlePt : cat.titleEn;
                const catSubtitle = lang === 'pt' ? cat.subtitlePt : cat.subtitleEn;

                return (
                  <Link
                    key={cat.id}
                    to={`/portfolio/${cat.id}`}
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      height: '360px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      boxShadow: 'var(--shadow-card)',
                      border: '1.5px solid var(--border-card)',
                      transition: 'all 0.4s ease',
                      textDecoration: 'none'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                      e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                      e.currentTarget.style.borderColor = 'var(--border-card)';
                    }}
                  >
                    <img
                      src={cat.bannerImage}
                      alt={catTitle}
                      draggable={false}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(28, 18, 32, 0.88) 0%, rgba(28, 18, 32, 0.15) 60%, transparent 100%)'
                    }} />

                    <div style={{ position: 'relative', zIndex: 2, padding: '1.75rem 1.5rem', color: '#FFFFFF' }}>
                      <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.35rem', fontWeight: 600 }}>
                        {catTitle}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.45, marginBottom: '1.25rem' }}>
                        {catSubtitle}
                      </p>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(255, 255, 255, 0.22)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        padding: '0.45rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 600,
                        fontSize: '0.82rem'
                      }}>
                        <span>{t.hub.viewCategory}</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Portfolio Section Bottom Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginTop: '3.5rem'
            }}>
              <Link
                to="/portfolio"
                className="btn-primary"
                style={{ padding: '0.85rem 2rem', fontSize: '0.98rem' }}
              >
                <Camera size={16} />
                <span>{lang === 'pt' ? 'Ver Portfólio Completo' : 'View Full Portfolio'}</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/precos"
                className="btn-secondary"
                style={{ padding: '0.85rem 2rem', fontSize: '0.98rem' }}
              >
                <span>{t.hero.btnPricing}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section: "Com o que podes contar" */}
      <section style={{
        padding: '5rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
            <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={13} />
              <span>{t.pricing.badge}</span>
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
              {t.pricing.guaranteesTitle}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              {lang === 'pt'
                ? "Cada sessão é planeada com dedicação e transparência do primeiro contacto à entrega final."
                : "Every shoot is tailored with care and complete transparency from our first chat to delivery."}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {t.pricing.guarantees.map((item, idx) => {
              const icons = [<ShieldCheck size={28} />, <Smile size={28} />, <Clock size={28} />];
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-page)',
                    border: '1.5px solid var(--border-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
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
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--bg-lilac-subtle)',
                    color: 'var(--accent-lilac)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}>
                    {icons[idx]}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
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
      </section>

      {/* Clean Pricing Teaser */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)',
            border: '1.5px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-card)'
          }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--text-main)' }}>
              {lang === 'pt' ? "Sessões à tua medida a partir de 70€" : "Tailored photo sessions starting at €70"}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
              {t.pricing.noteStudioText}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/precos" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
                <span>{lang === 'pt' ? "Ver Tabela Completa de Preços" : "Explore Full Price List"}</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/351960234062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.85rem 2rem' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section: "Olá, Eu sou a Eva" with eva5.jpg */}
      <section style={{
        padding: '5.5rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Photographer Portrait (eva5.jpg) */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                maxWidth: '420px',
                margin: '0 auto',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '3px solid var(--accent-lilac-soft)',
                position: 'relative'
              }}>
                <img
                  src="/assets/branding/eva5.jpg"
                  alt="Eva Santos - Fotógrafa Apoplanesia"
                  draggable={false}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div>
              <span className="pill-badge" style={{ marginBottom: '1rem' }}>
                <Heart size={13} fill="var(--accent-lilac)" color="var(--accent-lilac)" />
                <span>{t.about.badge}</span>
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                {t.about.title}
              </h2>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-lilac)', fontWeight: 600, marginBottom: '1.5rem' }}>
                {t.about.subtitle}
              </h4>
              <p style={{ color: 'var(--text-body)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {t.about.bioP1}
              </p>
              <blockquote style={{
                fontStyle: 'italic',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                color: 'var(--accent-lilac-dark)',
                borderLeft: '3px solid var(--accent-lilac)',
                paddingLeft: '1.25rem',
                margin: '1.5rem 0'
              }}>
                "{t.about.bioQuote}"
              </blockquote>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
                <Link to="/about" className="btn-primary">
                  <span>{lang === 'pt' ? "Conhecer a Minha História" : "Read My Full Story"}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  <span>{t.hero.btnContact}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #FAF6FC 0%, #F1EAF5 100%)',
        borderTop: '1px solid var(--border-subtle)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.2rem', color: 'var(--text-main)' }}>
            {t.pricing.ctaQuestion}
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            {lang === 'pt'
              ? "Clica abaixo para escolher a forma de contacto mais conveniente para ti. Sem complicações e com resposta rápida!"
              : "Click below to reach out through your preferred channel. Hassle-free with quick replies!"}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
            <a
              href="https://wa.me/351960234062"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              <Calendar size={18} />
              <span>{t.nav.bookSession}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
