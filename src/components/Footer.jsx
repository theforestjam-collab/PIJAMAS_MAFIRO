import React from 'react';
import { STORE_NAME, WHATSAPP_PHONE } from '../lib/supabase';
import { MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenAdmin }) {
  const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, '');
  const generalWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`¡Hola ${STORE_NAME}! Quisiera consultar sobre sus pijamas, tallas y envíos.`)}`;

  return (
    <footer style={{
      background: 'var(--brand-dark)',
      color: 'var(--brand-cream-soft)',
      borderTop: '2px solid rgba(255, 107, 151, 0.3)',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Columna Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img
                src="./logo-mafiro.png"
                alt="Pijamas MAFIRO"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--brand-pink)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-cream-soft)', display: 'block', lineHeight: 1.1 }}>
                  Pijamas MAFIRO
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--brand-pink-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  ❤ Y MUCHO MÁS ❤
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#D4C5C8', lineHeight: 1.6, maxWidth: '340px' }}>
              Comodidad, estilo y ternura para cada momento. Confeccionamos y seleccionamos pijamas suaves y prendas acogedoras para consentirte a ti y a los tuyos.
            </p>
          </div>

          {/* Columna Atención al Cliente */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-pink-light)', marginBottom: '1.1rem', fontFamily: 'var(--font-serif)' }}>
              Atención Directa
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#E8DCDF' }}>
              <div>
                📱 WhatsApp: <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-yellow)', fontWeight: 700, textDecoration: 'none' }}>+{cleanPhone}</a>
              </div>
              <div>⏰ Horario: Lunes a Sábado de 09:00 a 19:30</div>
              <div>🚚 Envíos coordinados a domicilio en toda Bolivia</div>
            </div>
          </div>

          {/* Columna Enlaces & Redes */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-pink-light)', marginBottom: '1.1rem', fontFamily: 'var(--font-serif)' }}>
              Conecta con Nosotros
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--brand-cream-soft)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                <MessageCircle size={19} color="var(--whatsapp-color)" />
                <span>Escríbenos por WhatsApp</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--brand-cream-soft)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FF6B97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>Síguenos en Instagram</span>
              </a>

              <button
                onClick={onOpenAdmin}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#C7B6BA',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  textAlign: 'left',
                  padding: 0,
                  marginTop: '0.35rem'
                }}
              >
                <ShieldCheck size={16} color="var(--brand-yellow)" />
                <span>Acceso Administrador</span>
              </button>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#B8A5AA'
        }}>
          <div>
            © 2026 {STORE_NAME}. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Hecho con amor y ternura</span>
            <Heart size={14} color="var(--brand-pink-light)" fill="var(--brand-pink-light)" />
          </div>
        </div>

      </div>
    </footer>
  );
}
