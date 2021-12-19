import React from 'react';
import NavBar from "./NavBar"
import Footer from './footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects'
function App() {
  return (
    <>
    <div className="content-container" >
      <NavBar />
      <div id="myNavbar"></div>
      <About />
      <Projects />
      
      <Skills />
      
      </div>
    <Footer />
    </>
  );
}

export default App;
