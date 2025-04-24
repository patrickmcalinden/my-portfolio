// Server Component - No 'use client'
import React from 'react';
import { profile } from '@/data/portfolioData'; // Import data needed

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footerCopyright">
                &copy; {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="footerCredit">
                Built with Next.js & React
            </p>
        </footer>
    );
}