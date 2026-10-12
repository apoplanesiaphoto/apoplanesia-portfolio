import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, MessageCircle, Send, Sparkles, Check, CheckCircle2, Camera } from 'lucide-react';

export default function FaqPage({ lang, t }) {
  const f = t.faq;
  const [openIds, setOpenIds] = useState(new Set(['pousar']));
  const [searchQuery, setSearchQuery] = useState('');

  if (!f) return null;

  const toggleQuestion = (id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(f.questions.map(q => q.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const filteredQuestions = f.questions.filter(item => {
    if (!searchQuery.trim()) return true;
    const qText = (item.q || '').toLowerCase();
    const aText = (item.a || '').toLowerCase();
    const term = searchQuery.toLowerCase().trim();
    return qText.includes(term) || aText.includes(term);
  });

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '85vh', padding: '4rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} />
            <span>{f.badge}</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '1rem', color: 'var(--text-main)', fontWeight: 600 }}>
            {f.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            {f.subtitle}
          </p>
        </div>

        {/* Search & Actions Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2rem',
          background: '#FFFFFF',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--border-card)',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          {/* Search Input */}
          <div style={{ flex: '1 1 240px', minWidth: '220px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'pt' ? "Pesquisar dúvida (ex: roupa, pet, fotos)..." : "Search question (e.g. outfits, pets, photos)..."}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-body)',
                color: 'var(--text-main)',
                background: 'transparent'
              }}
            />
          </div>

          {/* Expand / Collapse All Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={expandAll}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.35rem 0.75rem',
                fontSize: '0.82rem',
                color: 'var(--text-body)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent-lilac)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              {lang === 'pt' ? "Abrir todas" : "Expand all"}
            </button>
            <button
              onClick={collapseAll}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.35rem 0.75rem',
                fontSize: '0.82rem',
                color: 'var(--text-body)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent-lilac)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              {lang === 'pt' ? "Fechar todas" : "Collapse all"}
            </button>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4.5rem' }}>
          {filteredQuestions.length === 0 ? (
            <div style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '3rem 2rem',
              textAlign: 'center',
              border: '1px dashed var(--border-card)'
            }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>
                {lang === 'pt'
                  ? `Nenhuma resposta encontrada para "${searchQuery}". Podes tentar outro termo ou falar comigo!`
                  : `No results found for "${searchQuery}". Feel free to try another keyword or contact me!`}
              </p>
            </div>
          ) : (
            filteredQuestions.map((item, idx) => {
              const isOpen = openIds.has(item.id);
              return (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: `1.5px solid ${isOpen ? 'var(--accent-lilac)' : 'var(--border-card)'}`,
                    boxShadow: isOpen ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                    transition: 'all 0.25s ease',
                    overflow: 'hidden'
                  }}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    style={{
                      width: '100%',
                      background: isOpen ? 'var(--bg-lilac-subtle)' : '#FFFFFF',
                      border: 'none',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.2s ease'
                    }}
                    aria-expanded={isOpen}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isOpen ? 'var(--accent-lilac)' : 'var(--bg-lilac-subtle)',
                        color: isOpen ? '#FFFFFF' : 'var(--accent-lilac-dark)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        flexShrink: 0
                      }}>
                        {idx + 1}
                      </span>
                      <span style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        lineHeight: 1.35
                      }}>
                        {item.q}
                      </span>
                    </div>

                    <div style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--accent-lilac-dark)' : 'var(--text-light)',
                      flexShrink: 0
                    }}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Answer Body */}
                  {isOpen && (
                    <div style={{
                      padding: '1.5rem 1.75rem',
                      borderTop: '1px solid var(--border-subtle)',
                      background: '#FFFFFF',
                      animation: 'fadeIn 0.2s ease'
                    }}>
                      <div style={{
                        color: 'var(--text-body)',
                        fontSize: '1.02rem',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line'
                      }}>
                        {item.a}
                      </div>

                      {/* Extra Photos Pricing Tier Table */}
                      {item.tiers && (
                        <div style={{
                          marginTop: '1.5rem',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                          gap: '1rem'
                        }}>
                          {item.tiers.map((tier, tIdx) => (
                            <div
                              key={tIdx}
                              style={{
                                background: tier.highlight ? 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)' : 'var(--bg-page)',
                                border: `1.5px solid ${tier.highlight ? 'var(--accent-lilac)' : 'var(--border-card)'}`,
                                borderRadius: 'var(--radius-sm)',
                                padding: '1rem 1.15rem',
                                textAlign: 'center',
                                boxShadow: tier.highlight ? 'var(--shadow-subtle)' : 'none'
                              }}
                            >
                              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                                {tier.count}
                              </div>
                              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                                {tier.price}
                              </div>
                              {tier.unit && (
                                <div style={{ fontSize: '0.8rem', color: 'var(--accent-lilac-dark)', fontWeight: 600 }}>
                                  ({tier.unit})
                                </div>
                              )}
                              {tier.note && (
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>
                                  {tier.note}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Support Callout Card */}
        <div style={{
          background: 'linear-gradient(135deg, #FAF6FC 0%, #FFFFFF 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid var(--accent-lilac-soft)',
          padding: '3rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--bg-lilac-subtle)',
            color: 'var(--accent-lilac)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}>
            <MessageCircle size={26} />
          </div>

          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
            {f.cta.title}
          </h3>

          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto 2rem auto' }}>
            {f.cta.subtitle}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link
              to="/contact?service=duvida"
              className="btn-primary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              <Send size={18} />
              <span>{f.cta.btnContact}</span>
            </Link>

            <a
              href={`https://wa.me/351960234062?text=${encodeURIComponent(f.cta.whatsappMsg || 'Olá Eva!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              <MessageCircle size={18} />
              <span>{f.cta.btnWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
