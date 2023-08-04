import React from 'react';
import Navbar from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Navbar/Navbar.jsx';
import Home from '//Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Home/Home.jsx';
import About from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/About/About.jsx';
import Projects from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Projects/Projects.jsx';
import Contacts from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/components/Contacts/Contacts.jsx';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      
    </div>
  );
}

export default App;