// src/components/Experience/Experience.js
// Server Component - No 'use client'
import React from 'react';

// Define Item component here or import if separated
function ExperienceItem({ experience }) {
  return (
    <div className="timelineItem">
       <div className="timelineHeader">
            <h3 className="expRole">{experience.role}</h3>
            <span className="expCompany">@ {experience.company}</span>
            <span className="expPeriod"> {experience.period}</span>
       </div>
      <p className="expDescription">{experience.description}</p>
    </div>
  );
}

export default function Experience({ experiences }) { // Receive experiences data
  return (
    <section id="experience" className="contentSection experience">
      <h2>Experiences</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}