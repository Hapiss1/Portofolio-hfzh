import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: .2 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header id="home" className="container hero">
      <div className="reveal">
        <p className="kicker">Frontend Developer</p>
        <h1 className="headline">Bangun produk web yang <span style={{background:'linear-gradient(90deg,var(--brand),var(--brand-2))', WebkitBackgroundClip:'text', color:'transparent'}}>cepat</span>, <span style={{background:'linear-gradient(90deg,var(--brand-2),var(--brand))', WebkitBackgroundClip:'text', color:'transparent'}}>indah</span>, dan <em>menarik</em>.</h1>
        <p className="subtext">Saya fokus pada pengalaman pengguna, performa, dan clean code. Portofolio ini dibuat dengan React + Vite dan desain modern.</p>
        <div className="hero-cta">
          <a href="#projects" className="btn">Lihat Proyek</a>
          <a href="#contact" className="btn ghost">Hubungi Saya</a>
        </div>
      </div>
      <div className="hero-avatar reveal">
        <img src="/src/assets/Hapis.jpg" alt="Hero" />
      </div>
    </header>
  );
}
