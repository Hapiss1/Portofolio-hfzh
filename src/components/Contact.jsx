import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Terima kasih, ${name}! Pesanmu sudah terkirim (dummy).`);
    e.currentTarget.reset();
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Kontak</h2>
          <div className="line"></div>
        </div>
        <div className="grid grid-2">
          <div className="card reveal">
            <h3>Siap berkolaborasi?</h3>
            <p className="subtext">Cerita singkat mengenai kebutuhanmu, timeline, dan tujuan proyek akan sangat membantu.</p>
            <ul>
              <li>Email: kamu@example.com</li>
              <li>Lokasi: Indonesia</li>
              <li>Freelance: Tersedia</li>
            </ul>
          </div>
          <div className="card reveal">
            <form onSubmit={onSubmit}>
              <input name="name" placeholder="Nama" required />
              <input name="email" placeholder="Email" type="email" required />
              <textarea name="message" placeholder="Pesan" required />
              <div style={{display:'flex', gap:12, justifyContent:'flex-end'}}>
                <button type="reset" className="btn ghost">Reset</button>
                <button type="submit" className="btn">Kirim</button>
              </div>
              {status && <p className="subtext" aria-live="polite" style={{marginTop:10}}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
