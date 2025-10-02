import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimationControls {
  running: boolean;
  density: number;
  speedFactor: number;
  brightness: number;
  palette: string;
}

interface AnimationContextType {
  controls: AnimationControls;
  updateControls: (updates: Partial<AnimationControls>) => void;
  resetControls: () => void;
}

const defaultControls: AnimationControls = {
  running: true,
  density: 20,
  speedFactor: 1.0,
  brightness: 65,
  palette: 'cyan'
};

export const AnimationContext = createContext<AnimationContextType>({
  controls: defaultControls,
  updateControls: () => {},
  resetControls: () => {}
});

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within AnimationProvider');
  }
  return context;
};

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [controls, setControls] = useState<AnimationControls>(defaultControls);

  const updateControls = (updates: Partial<AnimationControls>) => {
    console.log('Updating controls with:', updates);
    setControls(prev => {
      const newControls = { ...prev, ...updates };
      console.log('New controls state:', newControls);
      return newControls;
    });
  };

  const resetControls = () => {
    console.log('Resetting controls to defaults');
    setControls(defaultControls);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      console.log('Key pressed:', ev.code, ev.key);
      switch (ev.code) {
        case 'Space':
          ev.preventDefault();
          console.log('Space pressed, toggling running state');
          updateControls({ running: !controls.running });
          break;
        case 'Equal':
        case 'NumpadAdd':
          ev.preventDefault();
          console.log('Plus pressed, increasing density');
          updateControls({ density: Math.min(120, controls.density + 4) });
          break;
        case 'Minus':
        case 'NumpadSubtract':
          ev.preventDefault();
          console.log('Minus pressed, decreasing density');
          updateControls({ density: Math.max(4, controls.density - 4) });
          break;
      }

      switch (ev.key.toLowerCase()) {
        case 'b':
          ev.preventDefault();
          console.log('B pressed, toggling brightness');
          updateControls({ brightness: controls.brightness > 60 ? 35 : 85 });
          break;
        case 'f':
          ev.preventDefault();
          console.log('F pressed, toggling speed');
          updateControls({ speedFactor: controls.speedFactor > 1.2 ? 1.0 : 2.0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [controls]);

  return (
    <AnimationContext.Provider value={{ controls, updateControls, resetControls }}>
      {children}
    </AnimationContext.Provider>
  );
};