import React from 'react';

import Contact from '../components/Contact';
import Header from '../layouts/Header';

const ContactUs = () => {
  return (
    <>
      <Header/>
        <title>Contact Us | Glowshere</title>
        <meta name="description" content="Contact Glowshere for any inquiries or support" />
      
      <main>
        <Contact />
      </main>
    </>
  );
};

export default ContactUs;
