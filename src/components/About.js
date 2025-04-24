// Server Component - No 'use client'
import React from 'react';

export default function About({ profile }) { // Receive profile data
  return (
    <section id="about" className="contentSection about">
      <h2>About Me</h2>
      {profile.bio.split('\n').map((paragraph, index) => (
         <p key={index} className="bioParagraph">{paragraph.trim()}</p>
      ))}
    </section>
  );
}