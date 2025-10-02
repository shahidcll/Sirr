import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';
import { Pickaxe, Link, Scissors, TestTube, Wrench, Search, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12 overflow-hidden">
      <AnimatedCanvas />
      
      <div className="relative z-10 max-w-6xl w-full glass-card rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Strengthening India's{' '}
              <span className="text-cyan-400">Digital Backbone</span>
            </h1>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              Experts in underground fiber optic cable installation since 2013. We design, install and maintain robust underground networks—precision, safety, and timely delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="logo-glow w-32 h-32 mx-auto mb-4 relative">
                <img 
                  src="/logo.jpeg" 
                  alt="SIR Corporation Logo" 
                  className="w-full h-full rounded-xl shadow-2xl object-contain bg-white/5 p-2"
                />
                <div className="fiber-animation">
                  <div className="fiber-line"></div>
                  <div className="fiber-line"></div>
                  <div className="fiber-line"></div>
                  <div className="fiber-line"></div>
                </div>
              </div>
              <div className="text-lg font-bold text-cyan-400">SIR Corporation</div>
              <div className="text-sm text-cyan-300 mb-2">Private Limited</div>
              <div className="text-sm text-white/70">Underground Fiber Optic Specialists</div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                <Zap size={20} />
                <span className="font-bold">Field Operations</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <Pickaxe size={16} />
                  <span className="font-bold">Trenching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link size={16} />
                  <span className="font-bold">Jointing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scissors size={16} />
                  <span className="font-bold">Splicing</span>
                </div>
                <div className="flex items-center gap-2">
                  <TestTube size={16} />
                  <span className="font-bold">Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench size={16} />
                  <span className="font-bold">Troubleshooting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Search size={16} />
                  <span className="font-bold">Inspections</span>
                </div>
              </div>
              
              {/* Underground Fiber Installation Animation */}
              <div className="underground-installation mt-4">
                <div className="installation-title">Underground Fiber Installation Process</div>
                <div className="installation-container">
                  <div className="ground-layer"></div>
                  <div className="pipe-system">
                    <div className="protective-pipe"></div>
                    <div className="cable-jacket"></div>
                    <div className="fiber-bundle"></div>
                  </div>
                  <div className="installation-labels">
                    <div className="label-item">
                      <div className="label-dot ground"></div>
                      <span>Ground Level</span>
                    </div>
                    <div className="label-item">
                      <div className="label-dot pipe"></div>
                      <span>Protective Conduit</span>
                    </div>
                    <div className="label-item">
                      <div className="label-dot fiber"></div>
                      <span>Fiber Optic Core</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic Field Operations Animation */}
          <div className="field-operations-animation">
            <div className="operation-title">Live Field Operations</div>
            <div className="operations-container">
              <div className="operation-stage">
                <div className="excavator-arm"></div>
                <div className="trench-line"></div>
                <div className="cable-laying"></div>
                <div className="splice-point"></div>
                <div className="testing-signal"></div>
              </div>
              <div className="operation-labels">
                <div className="op-label">
                  <div className="op-dot trenching"></div>
                  <span>Trenching</span>
                </div>
                <div className="op-label">
                  <div className="op-dot laying"></div>
                  <span>Cable Laying</span>
                </div>
                <div className="op-label">
                  <div className="op-dot testing"></div>
                  <span>Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fiber Network Background */}
      <div className="fiber-network">
        <div className="network-node" style={{top: '20%', left: '10%'}}></div>
        <div className="network-node" style={{top: '60%', left: '30%'}}></div>
        <div className="network-node" style={{top: '40%', left: '70%'}}></div>
        <div className="network-node" style={{top: '80%', left: '90%'}}></div>
        <div className="network-line" style={{top: '20%', left: '10%', width: '200px', transform: 'rotate(25deg)'}}></div>
        <div className="network-line" style={{top: '60%', left: '30%', width: '300px', transform: 'rotate(-15deg)'}}></div>
        <div className="network-line" style={{top: '40%', left: '70%', width: '150px', transform: 'rotate(45deg)'}}></div>
      </div>
    </section>
  );
};

export default Hero;