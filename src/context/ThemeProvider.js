'use client'; // This component uses hooks and manipulates DOM/localStorage

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'dark', // Default value
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  // Effect to load theme from localStorage on initial client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    // Apply initial class (avoids flash on reload if theme was light)
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array runs once on mount

  // Effect to update localStorage and HTML class when theme state changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]); // Runs whenever theme changes

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to easily consume the theme context
export const useTheme = () => useContext(ThemeContext);