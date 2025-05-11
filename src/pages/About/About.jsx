import React from 'react';
import  './About.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/Footer';
import AboutContent from '../../components/AboutContent/AboutContent';

const About = () => {
  return (
    <div className='about-container'>
      <Header/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About