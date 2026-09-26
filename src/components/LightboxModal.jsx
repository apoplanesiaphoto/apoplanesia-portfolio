import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function LightboxModal({ item, items, onClose, onNavigate, lang, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNavigate]);

  if (!item) return null;

  const title = lang === 'pt' ? item.titlePt : item.titleEn;
  const currentIndex = items.findIndex(i => i.id === item.id);
  const totalCount = items.length;

  return (
    <div 
      className="lightbox-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Top Controls */}
      <div className="lightbox-controls">
        <button
          onClick={onClose}
          className="lightbox-nav-btn"
          aria-label={t.gallery.close}
          title={t.gallery.close}
        >
          <X size={22} />
        </button>
      </div>

      {/* Prev / Next Arrows */}
      {totalCount > 1 && (
        <>
          <button
            onClick={() => onNavigate(-1)}
            className="lightbox-nav-btn"
            style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1010 }}
            aria-label={t.gallery.prev}
            title={t.gallery.prev}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => onNavigate(1)}
            className="lightbox-nav-btn"
            style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1010 }}
            aria-label={t.gallery.next}
            title={t.gallery.next}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Main Image Container with Protective Shield against Save Photo As */}
      <div
        className="lightbox-content"
        onClick={e => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={item.image}
            alt={title}
            className="lightbox-img"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* Invisible shield over image so right click never hits the img element */}
          <div
            className="photo-protection-shield"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Clean Caption Bar without tags or technical description */}
        <div style={{
          marginTop: '1rem',
          maxWidth: '750px',
          width: '100%',
          background: 'rgba(30, 22, 34, 0.88)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 'var(--radius-md)',
          padding: '0.9rem 1.4rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-lilac-soft)', fontWeight: 600 }}>
              {currentIndex + 1} / {totalCount}
            </span>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 600 }}>
              {title}
            </h3>
          </div>

          <Link
            to={`/contact?service=${item.category}`}
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            <Calendar size={14} />
            <span>{t.gallery.bookSimilar}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
