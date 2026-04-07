import React from 'react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Pengalaman</h2>
          <div className="line"></div>
        </div>
        <div className="timeline">
          {experience.map((e, idx) => (
            <div key={idx} className="card exp reveal">
              <strong>{e.role} · {e.company}</strong>
              <div className="subtext">{e.period}</div>
              <p style={{marginTop: 6}}>{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
