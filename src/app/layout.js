// src/app/layout.js
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import Navigation from '@/components/Navigation/Navigation'; // Import Navigation

export const metadata = {
  title: 'Patrick McAlinden - Data Professional Portfolio',
  description: 'Portfolio showcasing work of Patrick McAlinden ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          <main className="contentArea">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}