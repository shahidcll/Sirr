import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ControlsSidebar from './components/ControlsSidebar';
import { AnimationProvider } from './contexts/AnimationContext';

function App() {
  return (
    <AnimationProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Overview />
        <About />
        <Services />
        <Contact />
        <Footer />
        <ControlsSidebar />
      </div>
    </AnimationProvider>
  );
}

export default App;