import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, FileText, ExternalLink, Camera, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SitemapPage({ lang, t }) {
  const isPt = lang === 'pt';
  const categories = portfolioData.categories;

  const mainPages = [
    { path: '/', title: isPt ? 'Página Inicial' : 'Home', desc: isPt ? 'Apresentação, galerias em destaque e filosofia' : 'Overview, featured galleries, and creative vision' },
    { path: '/portfolio', title: isPt ? 'Portfólio Completo' : 'Portfolio Hub', desc: isPt ? 'Todas as 5 especialidades e 287 momentos captados' : 'All 5 specialties and 287 captured memories' },
    { path: '/precos', title: isPt ? 'Preços & Pacotes' : 'Pricing & Investment', desc: isPt ? 'Pacotes transparentes a partir de 70€ em local à tua escolha' : 'Clear photography packages starting at 70€ at your choice of location' },
    { path: '/about', title: isPt ? 'Sobre a Eva' : 'About Eva', desc: isPt ? 'História, percurso, filosofia e ligação' : 'Background, philosophy, and personal connection' },
    { path: '/contact', title: isPt ? 'Contacto & Agendamento' : 'Contact & Booking', desc: isPt ? 'Mensagem direta e WhatsApp para agendar sessões' : 'Direct inquiry and WhatsApp to book sessions' }
  ];

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '85vh', padding: '4rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Map size={14} />
            <span>{isPt ? 'Estrutura do Site' : 'Site Structure'}</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: 'var(--text-main)', marginBottom: '1rem' }}>
            {isPt ? 'MAPA DO SITE' : 'SITEMAP'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            {isPt
              ? 'Índice estruturado de todas as páginas e galerias fotográficas da Apoplanesia Photo, pronto para indexação em motores de busca e navegação rápida.'
              : 'Structured index of all pages and photography galleries across Apoplanesia Photo, ready for search engine submission and fast discovery.'}
          </p>

          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.88rem',
              padding: '0.55rem 1.25rem'
            }}
          >
            <FileText size={15} />
            <span>{isPt ? 'Ver XML Sitemap (Google / Bing)' : 'View XML Sitemap (Google / Bing)'}</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Main Pages Section */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid var(--border-card)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '2.5rem'
        }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            {isPt ? 'Páginas Principais' : 'Main Pages'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mainPages.map((page, idx) => (
              <Link
                key={idx}
                to={page.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                    {page.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {page.desc}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-lilac)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <code>{page.path}</code>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Galleries Section */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid var(--border-card)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '2.5rem'
        }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            {isPt ? 'Galerias do Portfólio' : 'Portfolio Galleries'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {categories.map((cat) => {
              const catTitle = isPt ? cat.titlePt : cat.titleEn;
              const catSub = isPt ? cat.subtitlePt : cat.subtitleEn;
              return (
                <Link
                  key={cat.id}
                  to={`/portfolio/${cat.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-lilac)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                      {catTitle} ({cat.count} {isPt ? 'fotografias' : 'photos'})
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {catSub}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-lilac)', fontSize: '0.85rem', fontWeight: 600 }}>
                    <code>/portfolio/{cat.id}</code>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Verification & Submission Note */}
        <div style={{
          background: 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-card)',
          padding: '1.5rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.88rem',
          lineHeight: 1.6
        }}>
          💡 <strong>{isPt ? 'Para submissão em motores de busca (Google Search Console):' : 'For search engine submission (Google Search Console):'}</strong>{' '}
          {isPt
            ? 'Submeta o endereço completo do sitemap: '
            : 'Submit the full URL to the sitemap: '}
          <code style={{ background: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', color: 'var(--accent-lilac-dark)' }}>
            https://apoplanesiaphoto.com/sitemap.xml
          </code>
        </div>
      </div>
    </div>
  );
}
