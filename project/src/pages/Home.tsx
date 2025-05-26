import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TechInnovate - IT Solutions & Services</title>
        <meta name="description" content="TechInnovate provides innovative IT solutions including consulting, cybersecurity, cloud services, and software development to help businesses grow." />
      </Helmet>
      
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;