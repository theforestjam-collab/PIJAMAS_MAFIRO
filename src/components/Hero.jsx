import React from 'react';
import { STORE_NAME, WHATSAPP_PHONE } from '../lib/supabase';
import { ArrowDown, MessageCircle, Moon, Star, Heart, Sparkles, Truck } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`¡Hola ${STORE_NAME}! Quisiera conocer más sobre las pijamas disponibles en su catálogo.`)}`;

  return (
    <section className="hero-luxury" style={{ padding: '3.5rem 0 3.75rem', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Logo Central Destacado */}
          <div style={{
            display: 'inline-block',
            position: 'relative',
            marginBottom: '1.25rem'
          }}>
            <div style={{
              position: 'relative',
              width: '128px',
              height: '128px',
              margin: '0 auto',
              borderRadius: '50%',
              padding: '6px',
              background: 'linear-gradient(135deg, #FF6B97 0%, #7E57C2 50%, #FFD54F 100%)',
              boxShadow: '0 12px 30px rgba(255, 107, 151, 0.3)'
            }}>
              <img
                src="./logo-mafiro.png"
                alt="Pijamas MAFIRO - Y Mucho Más"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  backgroundColor: '#FFFFFF',
                  display: 'block'
                }}
              />
            </div>

            {/* Sticker decorativo flotante luna */}
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '-10px',
              background: '#FFF9E6',
              border: '2px solid #FFD54F',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(255, 213, 79, 0.4)',
              transform: 'rotate(12deg)'
            }}
            title="Ternura y descanso"
            >
              <Moon size={18} color="#F59E0B" fill="#FFD54F" />
            </div>

            {/* Sticker decorativo flotante corazón */}
            <div style={{
              position: 'absolute',
              bottom: '2px',
              left: '-10px',
              background: '#FFF0F4',
              border: '2px solid #FF6B97',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(255, 107, 151, 0.35)',
              transform: 'rotate(-10deg)'
            }}>
              <Heart size={16} color="#E0527D" fill="#FF6B97" />
            </div>
          </div>

          {/* Eyebrow badge */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(255, 107, 151, 0.12)',
              border: '1.5px solid rgba(255, 107, 151, 0.35)',
              color: 'var(--brand-pink-deep)',
              padding: '0.4rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <Sparkles size={15} color="var(--brand-pink)" />
              <span>Pijamas MAFIRO • Colección Exclusiva</span>
              <Star size={13} color="#F59E0B" fill="#FFD54F" />
            </div>
          </div>

          {/* Slogan Oficial Principal */}
          <h1 style={{
            fontSize: 'clamp(2.1rem, 4.8vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--brand-dark)',
            lineHeight: 1.18,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-serif)'
          }}>
            Comodidad, estilo y ternura <span style={{ 
              background: 'linear-gradient(135deg, #FF6B97 0%, #7E57C2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>para cada momento</span>.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--brand-muted)',
            maxWidth: '650px',
            margin: '0 auto 2rem',
            lineHeight: 1.65,
            fontWeight: 500
          }}>
            En <strong>{STORE_NAME}</strong> diseñamos y seleccionamos pijamas suaves, frescas y acogedoras. Explora nuestro catálogo y pide tu prenda favorita directamente por WhatsApp con asesoría inmediata.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onExploreClick}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <span>Ver Catálogo de Pijamas</span>
              <ArrowDown size={18} />
            </button>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.98rem' }}
            >
              <MessageCircle size={19} />
              <span>Consultas WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Feature Highlights Pills */}
        <div style={{
          marginTop: '3.25rem',
          paddingTop: '2.25rem',
          borderTop: '1.5px dashed rgba(255, 107, 151, 0.22)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--brand-pink-soft)',
              border: '1.5px solid var(--brand-pink-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(255, 107, 151, 0.15)'
            }}>
              <Heart size={20} color="var(--brand-pink)" fill="var(--brand-pink-soft)" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-dark)' }}>Telas Suaves & Cómodas</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-muted)' }}>Satén, algodón pima y polar térmico</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--brand-purple-soft)',
              border: '1.5px solid var(--brand-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(126, 87, 194, 0.15)'
            }}>
              <MessageCircle size={20} color="var(--brand-purple)" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-dark)' }}>Atención Amorosa</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-muted)' }}>Asesoría directa por WhatsApp</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--brand-yellow-soft)',
              border: '1.5px solid var(--brand-yellow-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(255, 213, 79, 0.2)'
            }}>
              <Truck size={20} color="#D97706" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-dark)' }}>Envíos Coordinados</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-muted)' }}>Entregas directas a domicilio</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
