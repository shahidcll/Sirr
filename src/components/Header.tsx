import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between backdrop-blur-lg">
      <div className="brand flex items-center gap-3 text-white font-bold text-lg">
        <div className="logo-glow w-14 h-14 relative">
          <img 
            src="/logo.jpeg" 
            alt="SIR Corporation Logo" 
            className="w-full h-full rounded-lg shadow-xl object-contain bg-white/10 p-1"
          />
          <div className="fiber-animation">
            <div className="fiber-line"></div>
            <div className="fiber-line"></div>
            <div className="fiber-line"></div>
            <div className="fiber-line"></div>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">SIR Corporation</div>
          <div className="text-sm text-cyan-300 font-bold">Private Limited</div>
        </div>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-4 list-none m-0 p-0 items-center">
          <li><button onClick={() => scrollToSection('home')} className="text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Home</button></li>
          <li><button onClick={() => scrollToSection('overview')} className="text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Overview</button></li>
          <li><button onClick={() => scrollToSection('about')} className="text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">About</button></li>
          <li><button onClick={() => scrollToSection('services')} className="text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Services</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Contact</button></li>
        </ul>
      </nav>

      <button 
        className="md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 md:hidden">
          <ul className="flex flex-col p-4 gap-2">
            <li><button onClick={() => scrollToSection('home')} className="w-full text-left text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Home</button></li>
            <li><button onClick={() => scrollToSection('overview')} className="w-full text-left text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Overview</button></li>
            <li><button onClick={() => scrollToSection('about')} className="w-full text-left text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="w-full text-left text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Services</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="w-full text-left text-white/95 hover:text-cyan-400 px-3 py-2 rounded-lg font-semibold transition-colors">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;