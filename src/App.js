import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tools/>
      <Projects/>
      </>

  );
}

export default App;