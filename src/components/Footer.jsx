import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Portofolio — Dibuat dengan React</p>
        <div className="socials">
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <a className="btn to-top" href="#home" aria-label="Kembali ke atas">↑</a>
    </footer>
  );
}
