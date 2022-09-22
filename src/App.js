import React from 'react'
import './App.scss';
import About from './components/About';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Benefits2 from './components/Benefits2';
import Features from './components/Features';
import Header from './components/Header';
import Provide from './components/Provide';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Banner />
      <Features />
      <About />
      <Services />
      <Benefits2 />
      <Provide />
    </div>
  );
}

export default App;
