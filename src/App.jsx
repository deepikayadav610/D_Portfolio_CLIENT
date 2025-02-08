import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return ( 
  <>
  <Router>
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
  </Router>
  </>
  )
}

export default App