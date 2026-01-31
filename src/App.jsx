import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CustomeCursor from './components/CustomeCursor';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import ProgressBar from './components/ProgressBar';

const App = () => {

useEffect(()=>{
  //Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  //Refresh ScrollTrigger when the page is fully loaded
  ScrollTrigger.refresh()

  //Clean up ScrollTrigge on component unmount

  return()=>{
    ScrollTrigger.getAll().forEach((trigger)=> trigger.kill())
  }
},[])


  return (
    <div className='h-screen w-full'>
<Header/>
<HeroSection/>
<CustomeCursor/>
<AboutSection/>
<ProjectSection/>
<ContactSection/>
<Footer/>
<ProgressBar/>
      </div>
  );
};

export default App;