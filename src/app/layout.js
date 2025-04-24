// src/app/layout.js
import './globals.css'; // Import the global styles
import { ThemeProvider } from '@/context/ThemeProvider'; // Import the provider

// Define Metadata
export const metadata = {
  title: {
    default: 'Patrick McAlinden - Data Professional',
    template: '%s | Patrick McAlinden',
  },
  description: 'Portfolio showcasing Business Intelligence analysis, data projects, and professional experience by Patrick McAlinden.',
};

export default function RootLayout({ children }) {
  return (
    // Ensure NO spaces/newlines/comments between <html...> and <body>
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
    // Ensure NO spaces/newlines/comments after </html> either
  );
}