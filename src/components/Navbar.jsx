import React, { useState } from 'react';
import { WHATSAPP_PHONE } from '../lib/supabase';
import { MessageCircle, ShieldCheck, Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, adminUser, onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, '');
  const generalWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`¡Hola Pijamas MAFIRO! Me gustaría consultar sobre su catálogo de pijamas y disponibilidad.`)}`;

  return (
    <nav className="navbar-glass">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        
        {/* Brand Logo Circular */}
        <div 
          onClick={() => handleNavClick('catalog')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', userSelect: 'none' }}
        >
          <img
            src="./logo-mafiro.png"
            alt="Pijamas MAFIRO"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--brand-pink)',
              boxShadow: '0 4px 14px var(--brand-pink-glow)',
              backgroundColor: '#FFFFFF',
              flexShrink: 0
            }}
          />
          <div>
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.38rem', 
              fontWeight: 800, 
              color: 'var(--brand-dark)',
              letterSpacing: '-0.02em',
              display: 'block',
              lineHeight: 1.15
            }}>
              Pijamas <span style={{ color: 'var(--brand-purple)' }}>MAFIRO</span>
            </span>
            <span style={{ 
              fontSize: '0.68rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em', 
              color: 'var(--brand-pink-deep)', 
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <span>❤</span> Y MUCHO MÁS <span>❤</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('catalog')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: currentView === 'catalog' ? 700 : 600,
              color: currentView === 'catalog' ? 'var(--brand-pink-deep)' : 'var(--brand-dark)',
              padding: '0.4rem 0.6rem',
              position: 'relative'
            }}
          >
            Catálogo de Pijamas
            {currentView === 'catalog' && (
              <span style={{
                position: 'absolute',
                bottom: -2,
                left: '10%',
                right: '10%',
                height: '2.5px',
                background: 'var(--brand-pink)',
                borderRadius: '3px'
              }} />
            )}
          </button>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.86rem' }}
          >
            <MessageCircle size={18} />
            <span>Consultas WhatsApp</span>
          </a>

          <button
            onClick={onOpenAdmin}
            className="btn btn-dark"
            style={{ 
              padding: '0.55rem 1.1rem', 
              fontSize: '0.84rem',
              background: adminUser ? 'var(--brand-purple)' : 'transparent',
              color: adminUser ? 'white' : 'var(--brand-muted)',
              borderColor: adminUser ? 'var(--brand-purple-dark)' : 'var(--brand-border)'
            }}
            title="Acceso al Panel de Administración"
          >
            <ShieldCheck size={16} color={adminUser ? 'white' : 'currentColor'} />
            <span>{adminUser ? 'Admin Activo' : 'Panel Admin'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-toggle">
          <button
            onClick={onOpenAdmin}
            style={{
              background: adminUser ? 'var(--brand-purple-soft)' : 'transparent',
              border: '1.5px solid',
              borderColor: adminUser ? 'var(--brand-purple)' : 'var(--brand-border)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              color: adminUser ? 'var(--brand-purple)' : 'var(--brand-dark)',
              cursor: 'pointer'
            }}
            title="Panel Admin"
          >
            <ShieldCheck size={18} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1.5px solid var(--brand-border)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--brand-dark)',
              cursor: 'pointer'
            }}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--brand-cream-soft)',
          borderBottom: '1.5px solid var(--brand-border)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <button
            onClick={() => handleNavClick('catalog')}
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'flex-start' }}
          >
            <ShoppingBag size={18} color="var(--brand-pink)" />
            <span>Ver Catálogo de Pijamas</span>
          </button>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle size={18} />
            <span>Escribir por WhatsApp ({cleanPhone})</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdmin();
            }}
            className="btn btn-dark"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <ShieldCheck size={18} color="var(--brand-yellow)" />
            <span>{adminUser ? 'Gestionar Productos (Admin)' : 'Ingresar a Panel Admin'}</span>
          </button>
        </div>
      )}

      {/* Media queries inline for desktop/mobile toggle */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
