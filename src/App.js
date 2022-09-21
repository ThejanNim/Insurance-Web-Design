import React from 'react'
import './App.scss';
import About from './components/About';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Header from './components/Header';
import Provide from './components/Provide';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <About />
      <Services />
      <Benefits />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Provide />
      <br/>
      <br/>
    </div>
  );
}

export default App;
