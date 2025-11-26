import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-violet-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />

        {/* Removed Projects Section as per user request */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        <Timeline />
      </main>

      <Contact />
    </div>
  );
};

export default App;