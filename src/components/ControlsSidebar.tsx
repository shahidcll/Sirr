import React, { useContext, useState } from 'react';
import { AnimationContext } from '../contexts/AnimationContext';
import { Settings, Play, Pause, RotateCcw } from 'lucide-react';

const ControlsSidebar: React.FC = () => {
  const { controls, updateControls, resetControls } = useContext(AnimationContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePlayPause = () => {
    console.log('Play/Pause clicked, current running:', controls.running);
    updateControls({ running: !controls.running });
  };

  const handleDensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    console.log('Density changed to:', value);
    updateControls({ density: value });
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    console.log('Speed changed to:', value);
    updateControls({ speedFactor: value });
  };

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    console.log('Brightness changed to:', value);
    updateControls({ brightness: value });
  };

  const handlePaletteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Palette changed to:', e.target.value);
    updateControls({ palette: e.target.value });
  };

  const handleReset = () => {
    console.log('Reset clicked');
    resetControls();
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed top-20 right-4 z-50 p-3 bg-slate-900/90 backdrop-blur-lg rounded-xl border border-white/10 text-white hover:bg-slate-800/90 transition-colors shadow-lg"
        aria-label="Toggle animation controls"
      >
        <Settings size={20} />
      </button>

      <div
        className={`fixed top-32 right-4 w-80 p-6 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h3 className="text-cyan-400 font-bold text-lg mb-6 flex items-center gap-2">
          <Settings size={20} />
          Animation Controls
        </h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-white font-semibold">Play / Pause</label>
            <button
              onClick={handlePlayPause}
              className="btn-secondary flex items-center gap-2 px-4 py-2 rounded-xl"
            >
              {controls.running ? <Pause size={16} /> : <Play size={16} />}
              {controls.running ? 'Pause' : 'Play'}
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-semibold">Density</label>
              <span className="text-cyan-400 text-sm font-mono bg-slate-800/50 px-2 py-1 rounded-lg">{controls.density}</span>
            </div>
            <input
              type="range"
              min="4"
              max="120"
              step="1"
              value={controls.density}
              onChange={handleDensityChange}
              className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-semibold">Speed</label>
              <span className="text-cyan-400 text-sm font-mono bg-slate-800/50 px-2 py-1 rounded-lg">{controls.speedFactor.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="4"
              step="0.1"
              value={controls.speedFactor}
              onChange={handleSpeedChange}
              className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-semibold">Brightness</label>
              <span className="text-cyan-400 text-sm font-mono bg-slate-800/50 px-2 py-1 rounded-lg">{controls.brightness}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={controls.brightness}
              onChange={handleBrightnessChange}
              className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-semibold">Color Palette</label>
              <button
                onClick={handleReset}
                className="btn-secondary flex items-center gap-2 px-3 py-1 text-sm rounded-xl"
              >
                <RotateCcw size={14} />
                Reset
              </button>
            </div>
            <select
              value={controls.palette}
              onChange={handlePaletteChange}
              className="w-full p-3 bg-slate-800/80 border border-cyan-400/20 rounded-xl text-white form-input cursor-pointer hover:border-cyan-400/40 transition-colors"
            >
              <option value="cyan">Cyan Fiber</option>
              <option value="purple">Purple Fiber</option>
              <option value="green">Green Fiber</option>
              <option value="yellow">Yellow Fiber</option>
              <option value="red">Red Fiber</option>
              <option value="rainbow">Rainbow Spectrum</option>
              <option value="industrial">Industrial Blue</option>
            </select>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-800/50 rounded-xl text-xs text-white/70 border border-white/5">
          <p className="mb-2">
            <strong className="text-cyan-400">Keyboard Shortcuts:</strong>
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>Space = Play/Pause</div>
            <div>+/- = Density</div>
            <div>B = Brightness</div>
            <div>F = Speed</div>
          </div>
          <p className="mt-2">
            <strong className="text-cyan-400">Mouse:</strong> Drag canvas to shift fibers
          </p>
        </div>

        <div className="mt-4 p-3 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
          <p className="text-xs text-cyan-300">
            <strong>Current State:</strong> {controls.running ? 'Running' : 'Paused'} | 
            Density: {controls.density} | 
            Speed: {controls.speedFactor}x | 
            Brightness: {controls.brightness}% | 
            Palette: {controls.palette}
          </p>
        </div>
      </div>
    </>
  );
};

export default ControlsSidebar;