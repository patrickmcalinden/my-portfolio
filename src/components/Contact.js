// Server Component - No 'use client'
import React from 'react';

export default function Contact({ contactInfo }) { // Receive contact data
  return (
    <section id="contact" className="contentSection contact">
      <h2>Get In Touch</h2>
      <p className="contactIntro">
         Interested in discussing data insights or potential opportunities? Feel free to reach out!
      </p>
      <div className="contactDetails">
         <a href={`mailto:${contactInfo.email}`} className="contactEmailLink">
            {contactInfo.email}
         </a>
         <div className="contactSocialLinks">
            {contactInfo.github && (
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {contactInfo.linkedin && (
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
         </div>
      </div>
    </section>
  );
}