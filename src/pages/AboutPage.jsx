import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Camera, Smile, Clock, Instagram, Facebook, Linkedin, ArrowRight, MessageCircle, Calendar, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import SharkIcon from '../components/SharkIcon';

export default function AboutPage({ lang, t }) {
  const a = t.about;

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '85vh', padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Main Bio Grid with Eva's photo eva5.jpg */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5.5rem'
        }}>
          {/* Photographer Photo (eva5.jpg) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              position: 'relative',
              maxWidth: '460px',
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              border: '3px solid var(--accent-lilac-soft)',
              background: '#FFFFFF'
            }}>
              <img
                src="/assets/branding/eva5.jpg"
                alt="Eva Santos - Apoplanesia Photo"
                draggable={false}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />

              <div style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                textAlign: 'center',
                background: '#FFFFFF'
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Eva Santos
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--accent-lilac-dark)', fontWeight: 500 }}>
                  Apoplanesia Photo • Porto, Portugal
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div>
            <span className="pill-badge" style={{ marginBottom: '1rem' }}>
              <Heart size={13} />
              <span>{a.badge}</span>
            </span>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
              {a.title}
            </h1>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--accent-lilac)', fontWeight: 600, marginBottom: '2rem' }}>
              {a.subtitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.75 }}>
              <p>{a.bioP1}</p>
              <p>{a.bioP2}</p>
              <p>{a.bioP3}</p>
            </div>

            {/* Quotation */}
            <blockquote style={{
              margin: '2rem 0',
              padding: '1.5rem 1.75rem',
              background: 'var(--bg-lilac-subtle)',
              borderLeft: '4px solid var(--accent-lilac)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontStyle: 'italic',
              color: 'var(--text-main)',
              lineHeight: 1.4
            }}>
              "{a.bioQuote}"
            </blockquote>

            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-lilac-dark)', marginBottom: '2rem' }}>
              {a.bioCta}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
                <Calendar size={18} />
                <span>{lang === 'pt' ? "Vamos Colaborar!" : "Let's Collaborate!"}</span>
              </Link>
              <a
                href="https://wa.me/351960234062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Why Me? Section ("Porquê eu?") */}
        <section style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2.5rem, 5vw, 4.5rem)',
          border: '1.5px solid var(--border-card)',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '5rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
            <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>
              <SharkIcon size={16} />
              <span>Diferenciação</span>
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              {a.whyMeTitle}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {a.whyMeSubtitle}
            </p>
          </div>

          <div className="why-me-grid">
            {a.whyMe.map((item, idx) => {
              const id = item.id || '';
              const title = (item.title || '').toLowerCase();
              const isDiferenciacao = id === 'diferenciacao' || title.includes('diferencia') || title.includes('differentiation');
              const isRapidez = id === 'rapidez' || title.includes('7 dia') || title.includes('7-day');

              // Select specific icon matching the section
              let sectionIcon;
              if (isDiferenciacao) {
                sectionIcon = <SharkIcon size={25} color="var(--accent-lilac)" />;
              } else if (id === 'emocional' || title.includes('emocional') || title.includes('emotional')) {
                sectionIcon = <Heart size={23} color="var(--accent-lilac)" fill="rgba(142, 114, 158, 0.2)" />;
              } else if (id === 'profissional' || title.includes('profissional') || title.includes('professional')) {
                sectionIcon = <Camera size={23} color="var(--accent-lilac)" />;
              } else if (id === 'pessoas' || title.includes('pessoas') || title.includes('people')) {
                sectionIcon = <Smile size={23} color="var(--accent-lilac)" />;
              } else if (isRapidez) {
                sectionIcon = <Clock size={23} color="var(--accent-lilac)" />;
              } else {
                sectionIcon = <Sparkles size={23} color="var(--accent-lilac)" />;
              }

              return (
                <div
                  key={item.id || idx}
                  className="why-me-card"
                  style={{
                    background: isRapidez ? 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)' : '#FFFFFF',
                    border: isRapidez ? '1.5px solid var(--accent-lilac-soft)' : '1px solid var(--border-card)'
                  }}
                >
                  {/* Top card bar with icon and index number */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: isDiferenciacao ? 'rgba(142, 114, 158, 0.18)' : 'var(--bg-lilac-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-subtle)'
                    }}>
                      {sectionIcon}
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-lilac-soft)',
                      lineHeight: 1
                    }}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title and special badge */}
                  <div style={{ marginBottom: '0.65rem' }}>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    {isRapidez && (
                      <span className="pill-badge" style={{ fontSize: '0.72rem', padding: '0.2rem 0.65rem', marginTop: '0.4rem', border: '1px solid var(--accent-lilac-soft)' }}>
                        <Zap size={11} fill="var(--accent-lilac)" color="var(--accent-lilac)" />
                        <span>{lang === 'pt' ? '7 Dias Garantidos' : '7 Days Guaranteed'}</span>
                      </span>
                    )}
                  </div>

                  <p style={{ color: 'var(--text-body)', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Social Connection Buttons Section */}
        <section style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '4rem 2rem',
          border: '1.5px solid var(--border-card)'
        }}>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
            {a.socialButtonsTitle}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            {lang === 'pt'
              ? "Acompanha os bastidores, novos ensaios e partilhas do dia a dia nas minhas redes sociais."
              : "Follow along for behind the scenes, recent shoots, and daily inspiration on my social channels."}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Instagram Photo */}
            <a
              href="https://www.instagram.com/apoplanesia.photo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action"
              style={{ minWidth: '240px' }}
            >
              <div className="btn-contact-icon">
                <Instagram size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Instagram Profissional</div>
                <div style={{ fontWeight: 600 }}>@apoplanesia.photo</div>
              </div>
            </a>

            {/* Instagram Hobbie */}
            <a
              href="https://www.instagram.com/apoplanesia.hobbie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action"
              style={{ minWidth: '240px' }}
            >
              <div className="btn-contact-icon">
                <Instagram size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Instagram Pessoal & Hobbie</div>
                <div style={{ fontWeight: 600 }}>@apoplanesia.hobbie</div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/apoplanesia.photo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action"
              style={{ minWidth: '240px' }}
            >
              <div className="btn-contact-icon">
                <Facebook size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Facebook Oficial</div>
                <div style={{ fontWeight: 600 }}>Apoplanesia Photo</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/eva-santos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action"
              style={{ minWidth: '240px' }}
            >
              <div className="btn-contact-icon">
                <Linkedin size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>LinkedIn</div>
                <div style={{ fontWeight: 600 }}>Eva Santos</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
