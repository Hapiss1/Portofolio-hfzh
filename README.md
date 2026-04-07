# React Portfolio (JS)

Portofolio profesional berbasis **React + Vite** (JavaScript). Desain modern, responsif, aksesibel, dan mudah dikustom.

## Fitur
- Landing yang kuat: hero, call-to-action, dan avatar.
- Dark/Light mode dengan persist (localStorage).
- Navigasi dengan scrollspy (menyorot menu aktif).
- Animasi reveal ringan menggunakan IntersectionObserver + CSS.
- Komponen reusable & data-driven (skills, projects, experience).
- Desain glassmorphism + gradient, siap produksi.

## Struktur
```
react-portfolio-js/
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles/index.css
    ├── data/{projects,skills,experience}.js
    ├── assets/{hero.jpg,project-*.jpg}
    └── components/*.jsx
```

## Cara Menjalankan
1. **Install dependency**
   ```bash
   npm install
   ```
2. **Jalankan dev**
   ```bash
   npm run dev
   ```
   Buka URL yang ditampilkan (biasanya http://localhost:5173).
3. **Build untuk produksi**
   ```bash
   npm run build
   npm run preview
   ```

## Kustomisasi Cepat
- Ubah data proyek/skill/pengalaman di `src/data/*.js`.
- Ganti avatar di `src/assets/hero.jpg` dan thumbnail project.
- Ganti warna & gaya di `src/styles/index.css` (`:root` & `[data-theme="light"]`).
- Edit link sosmed di `Footer.jsx`.
- Edit nama brand/section di `Navbar.jsx`.

## Lisensi
MIT — Silakan gunakan, modifikasi, dan terbitkan.
