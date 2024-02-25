import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Copy from "./components/Copy";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tools />
      <Projects />
      <Copy />
    </>
  );
}

export default App;
