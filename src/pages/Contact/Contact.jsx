import React from 'react';
import Intro from '../../components/Intro/Intro';
import NavBar from '../../components/NavBar/NavBar';
import ContactForm from '../../components/ContactForm/ContactForm';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <>
      <NavBar />
      <Intro />
      <ContactForm />
      <Banner />
      <Footer />
    </>
  );
}

export default Contact;
