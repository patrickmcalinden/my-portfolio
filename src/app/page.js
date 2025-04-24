// src/app/page.js
// SERVER COMPONENT - No 'use client' here!

import React from 'react';

// Import Data
import { profile, experiences, projects } from '@/data/portfolioData';

// Import Components (Adjust paths if necessary)
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Optional: Page-specific Metadata
export const metadata = {
  title: `${profile.full_name} - Portfolio`,
  description: `Explore the portfolio of ${profile.full_name}, a ${profile.title} specializing in data analysis, visualization, and pipeline development.`,
};

export default function HomePage() {
  return (
    <> {/* Fragment might not be needed if portfolioLayout is the only root element */}
      <div className="portfolioLayout">

        <Navigation /> {/* Theme handled by context */}

        <main className="contentArea">
          {/* Render Sections, passing data as props */}
          <Hero profile={profile} />

          {/* Wrap sections in divs with IDs for navigation scrolling */}
          <div id="about">
             <About profile={profile} />
          </div>

          <div id="experience">
             <Experience experiences={experiences} />
          </div>

          <div id="projects">
             <Projects projects={projects} />
          </div>

          <div id="contact">
              <Contact contactInfo={profile.contact} />
          </div>

          <Footer />
        </main>
      </div>
      {/* No <style jsx> block here anymore! Styles are in globals.css */}
    </>
  );
}