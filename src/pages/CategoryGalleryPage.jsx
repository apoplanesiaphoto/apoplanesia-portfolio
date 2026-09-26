import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Calendar, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CategoryGalleryPage({ categoryId, onSelectPhoto, lang, t }) {
  const params = useParams();
  const currentCatId = categoryId || params.category || 'casais';

  const categoryMeta = portfolioData.categories.find(c => c.id === currentCatId) || portfolioData.categories[0];
  const title = lang === 'pt' ? categoryMeta.titlePt : categoryMeta.titleEn;
  const subtitle = lang === 'pt' ? categoryMeta.subtitlePt : categoryMeta.subtitleEn;

  // Filter and randomize photo order in this gallery
  const categoryItems = React.useMemo(() => {
    const items = portfolioData.items.filter(item => item.category === currentCatId);
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [currentCatId]);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '85vh', paddingBottom: '6rem' }}>
      {/* Category Banner Hero */}
      <section style={{
        position: 'relative',
        height: '380px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${categoryMeta.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: 'brightness(0.55)'
        }} />

        {/* Gradient Overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(28, 18, 32, 0.92) 0%, rgba(28, 18, 32, 0.4) 60%, transparent 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '3rem', width: '100%' }}>
          <Link
            to="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent-lilac-soft)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1rem',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={16} />
            <span>{t.gallery.backToHub}</span>
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 600 }}>
                {title}
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '650px', lineHeight: 1.5 }}>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area without any subfilter tags */}
      <div className="container" style={{ paddingTop: '3rem' }}>
        {/* Subtle notice bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            {t.gallery.openLightbox}
          </span>
        </div>

        {/* Photos Grid with Protection against Save Photo As */}
        <div className="gallery-grid">
          {categoryItems.map((item, idx) => {
            const photoTitle = lang === 'pt' ? item.titlePt : item.titleEn;

            return (
              <div
                key={item.id}
                className="gallery-photo-item"
                onClick={() => onSelectPhoto(item, categoryItems)}
                onContextMenu={(e) => e.preventDefault()}
                title={photoTitle}
              >
                <img
                  src={item.image}
                  alt={photoTitle}
                  className="gallery-photo-img"
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div
                  className="photo-protection-shield"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="gallery-photo-overlay">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-lilac-soft)', fontWeight: 600 }}>
                      #{idx + 1}
                    </span>
                    <span style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem' }}>
                      <Eye size={12} style={{ display: 'inline', marginRight: '3px' }} />
                      Ver
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.25 }}>
                    {photoTitle}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom Booking Callout */}
        <div style={{
          marginTop: '5rem',
          background: 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)',
          border: '1.5px solid var(--border-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card)'
        }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
            {lang === 'pt' ? `Gostarias de uma sessão de ${title}?` : `Interested in a ${title} session?`}
          </h3>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            {lang === 'pt'
              ? "Entra em contacto para conversarmos sobre ideias, locais e datas. Estou no Porto e disponível para todo o país!"
              : "Let's connect to discuss dates, scenic spots, and ideas. Based in Porto and available nationwide!"}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link
              to={`/contact?service=${currentCatId}`}
              className="btn-primary"
              style={{ padding: '0.8rem 1.8rem' }}
            >
              <Calendar size={17} />
              <span>{t.nav.bookSession}</span>
            </Link>

            <a
              href={`https://wa.me/351960234062?text=${encodeURIComponent(`Olá Eva! Vi a galeria de ${title} no teu site e gostaria de saber mais informações sobre sessões.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '0.8rem 1.8rem' }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
