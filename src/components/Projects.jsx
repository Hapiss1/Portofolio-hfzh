import React from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Proyek Pilihan</h2>
          <div className="line"></div>
        </div>
        <div className="grid grid-3">
          {projects.map(p => (
            <article key={p.title} className="card project-card reveal">
              <div className="project-thumb">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:12}}>
                <h3 style={{margin:'8px 0'}}>{p.title}</h3>
                <a className="btn ghost" href={p.link} target="_blank" rel="noreferrer">Demo</a>
              </div>
              <p className="subtext">{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
