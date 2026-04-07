import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>Tentang Saya</h2>
          <div className="line"></div>
        </div>
        <div className="grid grid-2">
          <div className="card reveal">
            <h3>Siapa saya?</h3>
            <p className="subtext">Seorang pengembang frontend yang senang merancang antarmuka bersih, aksesibel, dan mudah digunakan. Terbiasa bekerja dengan React, Vite, Git, dan REST API.</p>
          </div>
          <div className="card reveal">
            <h3>Nilai kerja</h3>
            <ul>
              <li><strong>Kolaboratif</strong> — nyaman bekerja dalam tim lintas fungsi.</li>
              <li><strong>Detail-oriented</strong> — perhatian pada mikro-interaksi dan konsistensi.</li>
              <li><strong>Delivery</strong> — fokus pada hasil yang terukur & on-time.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
