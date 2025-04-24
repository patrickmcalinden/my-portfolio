'use client'; // Needs context and interaction

import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '@/context/ThemeProvider'; // Use the custom hook

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Get theme state and toggle function
  const isDarkMode = theme === 'dark';

  // Render null or a placeholder during server rendering / initial hydration
  // Or handle potential mismatch if needed, but usually provider handles initial state
  // if (!theme) return null; // Could prevent rendering until theme is loaded client-side

  return (
    <div className="themeToggleWrapper">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleTheme}
        size={24} // Default/Desktop size
        // Mobile size adjustments will be handled by CSS media query on the wrapper/button
      />
    </div>
  );
}