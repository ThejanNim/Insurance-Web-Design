import React from 'react'
import './App.scss';
import About from './components/About';
import Banner from './components/Banner';
import Features from './components/Features';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <About />
    </div>
  );
}

export default App;
