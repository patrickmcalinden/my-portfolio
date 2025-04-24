// Server Component - No 'use client'
import React from 'react';
import { profile } from '@/data/portfolioData'; // Import data needed

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footerSocialLinks">
                {profile.contact.github && (<a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>)}
                {profile.contact.linkedin && (<a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LI</a>)}
            </div>
            <p className="footerCopyright">
                &copy; {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="footerCredit">
                Built with Next.js & React
            </p>
        </footer>
    );
}