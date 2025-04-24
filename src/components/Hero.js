// Server Component - No 'use client'
import React from 'react';

export default function Hero({ profile }) { // Receive profile data
  return (
    <section id="hero" className="contentSection hero">
       <h1 className="heroTitle">
         Hey, I'm {profile.full_name}! 👋
       </h1>
       <p className="heroSubtitle">
         I uncover hidden patterns and opportunities within your <span className="heroTitleHighlight">data</span>.
       </p>
       <div className="heroBadges">
          <span>📊 Data-Driven Insights</span>
          <span>🧮 SQL</span>
          <span>🐍 Python</span>
          <span>⚡ Spark</span>
          <span>📈 Tableau</span>
       </div>
    </section>
  );
}