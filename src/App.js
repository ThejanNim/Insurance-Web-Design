import React from 'react'
import './App.scss';
import About from './components/About';
import Banner from './components/Banner';
import Features from './components/Features';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <About />
      <Services />
    </div>
  );
}

export default App;
