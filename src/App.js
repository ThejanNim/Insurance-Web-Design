import React from 'react'
import './App.scss';
import About from './components/About';
import Banner from './components/Banner';
import Benefits2 from './components/Benefits2';
import Features from './components/Features';
import Provide from './components/Provide';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Banner />
      <Features />
      <About />
      <Services />
      <Benefits2 />
      <Provide />
      <Testimonials />
    </div>
  );
}

export default App;
