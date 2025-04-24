'use client'; // Needs to import and render the client ThemeToggle

import React from 'react';
import { profile, sections } from '@/data/portfolioData'; // Import data needed
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'; // Import the toggle component

export default function Navigation() {
  // No need for theme/toggleTheme props anymore, ThemeToggle handles it via context

  return (
    // This is now just rendering the structure
    // Theme state is managed globally by ThemeProvider/ThemeToggle
    <nav className="navigationArea"> {/* Changed div to nav */}

      <div className="navTopRow">
        <div className="navHeader">
           <h1>{profile.name}</h1>
           <p>{profile.title}</p>
        </div>
        {/* Render the ThemeToggle component */}
        <ThemeToggle />
      </div>

      <ul className="navList">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="navLink">
              {section.title}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}