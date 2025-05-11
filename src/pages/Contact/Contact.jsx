import React from 'react';
import './Contact.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/Footer';
import ContactContent from '../../components/ContactContent/ContactContent';

const Contact = () => {
  return (
<div className='contact-box'>
  <Header/>
  <ContactContent/>
  <Footer/>
</div>
  )
}

export default Contact