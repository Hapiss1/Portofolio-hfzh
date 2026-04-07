import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#projects', label: 'Proyek' },
  { href: '#experience', label: 'Pengalaman' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '#home';
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = '#' + sec.id;
      });
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2l8 4.5v9L12 20.5 4 15.5v-9L12 2z" stroke="currentColor" opacity=".6"/>
            <path d="M12 6l4 2.2v4.4L12 15l-4-2.4V8.2L12 6z" fill="currentColor"/>
          </svg>
          <span>MyPortofolio</span>
        </div>
        <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {links.map(l => (
            <a 
              key={l.href} 
              href={l.href} 
              className={active === l.href ? 'active' : ''} 
              onClick={() => setMobileOpen(false)}
            >{l.label}</a>
          ))}
          <button
            aria-label="Toggle theme"
            className="btn ghost theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {isMobile && (
          <button 
            className="hamburger" 
            aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
        >
            <span></span><span></span><span></span>
          </button>
        )}
      </div>
    </nav>
  );
}
