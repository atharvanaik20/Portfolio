import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import ResumeDL from '../components/ResumeDL';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text=" I am a Full Stack Developer."/>
      <ResumeDL />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About;