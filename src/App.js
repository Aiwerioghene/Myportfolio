import React from 'react';
import Navbar from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Navbar/Navbar.jsx';
import Home from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Home/Home.jsx';
import About from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/About/About.jsx';
import Projects from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Projects/Projects.jsx';
import Contact from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Contact/Contact.jsx';
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'></div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;