import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, Send, MessageCircle, CheckCircle2, Inbox, QrCode, Loader2, AlertCircle } from 'lucide-react';

export default function ContactPage({ lang, t }) {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'casal',
    date: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const c = t.contact;

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const serviceLabel = c.form.services[formData.service] || formData.service;

    try {
      const response = await fetch('https://formsubmit.co/ajax/apoplanesia.photo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Novo Contacto - Apoplanesia Photo: ${formData.name} (${serviceLabel})`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
          Nome: formData.name,
          Email: formData.email,
          Telefone: formData.phone,
          'Tipo de Sessão / Contacto': serviceLabel,
          'Localidade': formData.location || 'Não especificado',
          'Mensagem': formData.message || 'Sem mensagem adicional'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || (result.message && result.message.toLowerCase().includes('activation')))) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Falha no envio da mensagem');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(c.form.error || (lang === 'pt' 
        ? 'Ocorreu um erro no envio. Por favor tenta de novo ou contacta diretamente via WhatsApp ou email.' 
        : 'An error occurred while sending. Please try again or reach out directly via WhatsApp or email.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '85vh', padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem' }}>
            <Inbox size={14} />
            <span>{c.badge}</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {c.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            {c.subtitle}
          </p>
        </div>

        {/* PRIMARY SECTION: "EVERYTHING INSIDE BUTTONS" */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1.5px solid var(--border-card)',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '4.5rem'
        }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-main)' }}>
            {c.buttonsHeading}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* WhatsApp Button - WITHOUT visible number on button text */}
            <a
              href="https://wa.me/351960234062"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action"
              style={{ background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, #FFFFFF 100%)', borderColor: 'rgba(37, 211, 102, 0.3)' }}
            >
              <div className="btn-contact-icon" style={{ background: '#25D366', color: '#FFFFFF' }}>
                <MessageCircle size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mensagem Direta</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>WhatsApp</div>
              </div>
            </a>

            {/* Phone Call Button */}
            <a
              href="tel:+351960234062"
              className="btn-contact-action"
            >
              <div className="btn-contact-icon">
                <Phone size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Chamada Telefónica</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>960 234 062</div>
              </div>
            </a>

            {/* Email Button */}
            <a
              href="mailto:apoplanesia.photo@gmail.com"
              className="btn-contact-action"
            >
              <div className="btn-contact-icon">
                <Mail size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Correio Eletrónico</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', wordBreak: 'break-all' }}>apoplanesia.photo@gmail.com</div>
              </div>
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/apoplanesia.photo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-action"
              style={{ background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.08) 0%, #FFFFFF 100%)', borderColor: 'rgba(225, 48, 108, 0.3)' }}
            >
              <div className="btn-contact-icon" style={{ background: '#E1306C', color: '#FFFFFF' }}>
                <Instagram size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Instagram Oficial</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>@apoplanesia.photo</div>
              </div>
            </a>

            {/* Location Button */}
            <div
              className="btn-contact-action"
              style={{ background: 'var(--bg-lilac-subtle)', borderColor: 'var(--accent-lilac-soft)', cursor: 'default' }}
            >
              <div className="btn-contact-icon" style={{ background: 'var(--accent-lilac)', color: '#FFFFFF' }}>
                <MapPin size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-lilac-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sede & Área de Atuação</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>Porto • Disponível em todo o país</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Section: Instagram QR Code & Booking Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Instagram QR Code Card */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-card)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--bg-lilac-subtle)',
              color: 'var(--accent-lilac)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <QrCode size={24} />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              {c.qrTitle}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              {c.qrSubtitle}
            </p>

            <div style={{
              maxWidth: '240px',
              margin: '0 auto 2rem auto',
              padding: '1rem',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '2px dashed var(--accent-lilac-soft)',
              boxShadow: 'var(--shadow-subtle)'
            }}>
              <img
                src="/assets/branding/qr-instagram.png"
                alt="QR Code Instagram @apoplanesia.photo"
                draggable={false}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <a
              href="https://www.instagram.com/apoplanesia.photo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <Instagram size={17} />
              <span>Abrir @apoplanesia.photo</span>
            </a>
          </div>

          {/* Interactive Booking Form */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 3.5vw, 3rem)',
            boxShadow: 'var(--shadow-card)'
          }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1.75rem' }}>
              {c.formTitle}
            </h3>

            {submitted ? (
              <div style={{
                background: 'var(--bg-lilac-subtle)',
                border: '1.5px solid var(--accent-lilac)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--accent-lilac)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {lang === 'pt' ? "Mensagem Enviada com Sucesso!" : "Message Sent Successfully!"}
                </h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {c.form.success}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: initialService || 'casal',
                        date: '',
                        location: '',
                        message: ''
                      });
                    }}
                    className="btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {lang === 'pt' ? "Enviar Outra Mensagem" : "Send Another Message"}
                  </button>
                  <a
                    href="https://wa.me/351960234062"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    {c.form.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={c.form.namePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-card)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      background: 'var(--bg-page)',
                      outline: 'none',
                      transition: 'border 0.2s ease'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-lilac)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-card)'}
                  />
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {c.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={c.form.emailPlaceholder}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-card)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        background: 'var(--bg-page)',
                        outline: 'none'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-lilac)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-card)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {c.form.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={c.form.phonePlaceholder}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-card)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        background: 'var(--bg-page)',
                        outline: 'none'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-lilac)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-card)'}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    {c.form.service} *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-card)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      background: 'var(--bg-page)',
                      outline: 'none',
                      color: 'var(--text-main)'
                    }}
                  >
                    <option value="casal">{c.form.services.casal}</option>
                    <option value="retrato">{c.form.services.retrato}</option>
                    <option value="gravida">{c.form.services.gravida}</option>
                    <option value="pet">{c.form.services.pet}</option>
                    <option value="familia">{c.form.services.familia}</option>
                    <option value="eventos">{c.form.services.eventos}</option>
                    <option value="boudoir">{c.form.services.boudoir}</option>
                    <option value="duvida">{c.form.services.duvida}</option>
                    <option value="outro">{c.form.services.outro}</option>
                  </select>
                </div>

                {/* Location / City */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    {c.form.location}
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={c.form.locationPlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-card)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      background: 'var(--bg-page)',
                      outline: 'none'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-lilac)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-card)'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-card)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      background: 'var(--bg-page)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-lilac)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-card)'}
                  />
                </div>

                {errorMessage && (
                  <div style={{
                    background: '#FEF2F2',
                    border: '1px solid #FCA5A5',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    color: '#B91C1C',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>{errorMessage}</div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin" />
                      <span>{c.form.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{c.form.submit}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
