import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Keahlian</h2>
          <div className="line"></div>
        </div>
        <div className="grid grid-2">
          {skills.map(s => (
            <div key={s.name} className="skill reveal">
              <strong>{s.name}</strong>
              <div className="bar" aria-hidden><span style={{width: s.level + '%'}} /></div>
              <span>{s.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
