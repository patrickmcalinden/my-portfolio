// src/components/Navigation/Navigation.js
'use client'; // Still needed as it renders ThemeToggle

import React from 'react';
import { profile, sections } from '@/data/portfolioData';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'; // Ensure correct import path

export default function Navigation() {
  return (
    // Use header tag, apply class for sticky styling
    <header className="stickyNavbar">
      {/* Inner wrapper for max-width and padding */}
      <div className="navContentWrapper">

        {/* Left Side: Name */}
        <div className="navHeader">
           <a href="#hero" className="navHomeLink">
              <h1>{profile.name} </h1>
              {/* Title removed for simplicity in horizontal nav */}
           </a>
        </div>

        {/* Center/Right Side: Nav Links */}
        <nav className="navListWrapper">
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

         {/* Right Side: Theme Toggle */}
         <div className="navActionItems"> {/* Wrapper for toggle or future items */}
            <ThemeToggle />
         </div>

      </div>
    </header>
  );
}