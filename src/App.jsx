import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;