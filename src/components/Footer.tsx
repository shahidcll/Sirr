import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-white/55 text-sm relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © 2025 Sir Corporation Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <div className="logo-glow w-8 h-8 relative">
              <img 
                src="/logo.jpeg" 
                alt="SIR Corporation Logo" 
                className="w-full h-full rounded-lg object-contain bg-white/10 p-0.5"
              />
              <div className="fiber-animation">
                <div className="fiber-line"></div>
                <div className="fiber-line"></div>
              </div>
            </div>
            <span className="text-cyan-300">SIR Corporation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;