import React from 'react';

import './App.scss';
import Header from './components/header/Header';
import HeroBanner from './components/hero-banner/HeroBanner';
import AboutUs from './components/about-us/AboutUs';
import FocusAreas from './components/focus-areas/FocusAreas';
import Future from './components/future/Future';
import OurWork from './components/our-work/OurWork';
import Services from './components/services-comp/Services';
import Carousel from './components/carousel/Carousel';

function App() {

  return (
    <div className="App">
      <Header/>
      <HeroBanner/>
      <AboutUs/>
      <FocusAreas/>
      <Future/>
      <OurWork/>
      <Services/>
      
    </div>
  );
}


export default App;
